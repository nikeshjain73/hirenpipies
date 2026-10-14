import fs from "fs";
import path from "path";

// 1. All valid known site paths from sitemap
const KNOWN_PATHS = [
  "/",
  "/clients",
  "/products",
  "/products/pipes-tubes",
  "/products/flanges",
  "/products/pipe-fittings",
  "/products/valves",
  "/products/fasteners",
  "/products/gaskets",
  "/products/grooved-fittings",
  "/products/hdgi-gratings",
  "/products/structural-steel",
  "/about",
  "/quality",
  "/contact"
];

const GENERIC_ANCHOR_PATTERNS = [
  /^learn more$/i,
  /^view details$/i,
  /^full specifications$/i,
  /^email enquiry$/i,
  /^click here$/i,
  /^read more$/i
];

type CrawlRecord = {
  sourceUrl: string;
  targetUrl: string;
  anchorText: string;
  isGeneric: boolean;
  isNonWww: boolean;
  isBroken: boolean;
  isRedirect: boolean;
  notes: string;
};

const records: CrawlRecord[] = [];

// Helper to audit a link
function auditLink(sourceUrl: string, target: string, anchor: string) {
  const cleanTarget = target.trim();
  const cleanAnchor = anchor.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

  let isNonWww = false;
  let isRedirect = false;
  let isBroken = false;
  let notes = "";

  if (cleanTarget.startsWith("https://hirenpipes.in") || cleanTarget.startsWith("http://hirenpipes.in")) {
    isNonWww = true;
    notes += "Non-WWW URL. ";
  }

  // Check if internal relative or internal absolute
  let pathname = "";
  if (cleanTarget.startsWith("https://www.hirenpipes.in")) {
    pathname = cleanTarget.replace("https://www.hirenpipes.in", "");
  } else if (cleanTarget.startsWith("/")) {
    pathname = cleanTarget;
  }

  if (pathname) {
    const purePath = pathname.split("#")[0].split("?")[0] || "/";
    // Check known paths
    if (purePath !== "/" && purePath.endsWith("/")) {
      isRedirect = true;
      notes += "Trailing slash redirect. ";
    }
    const normalized = purePath === "/" ? "/" : purePath.replace(/\/$/, "");
    if (!KNOWN_PATHS.includes(normalized) && !purePath.startsWith("/hiren-shah-catalogue.pdf") && !purePath.startsWith("/logo.png") && !purePath.startsWith("/favicon.png")) {
      isBroken = true;
      notes += `Path ${purePath} not in known routes. `;
    }
  }

  const isGeneric = GENERIC_ANCHOR_PATTERNS.some((p) => p.test(cleanAnchor));
  if (isGeneric) {
    notes += "Generic anchor text. ";
  }

  records.push({
    sourceUrl,
    targetUrl: cleanTarget,
    anchorText: cleanAnchor,
    isGeneric,
    isNonWww,
    isBroken,
    isRedirect,
    notes: notes.trim()
  });
}

// Traverse routes and layout
const srcDir = path.resolve("./src");

function scanFile(filePath: string, routeUrl: string) {
  const content = fs.readFileSync(filePath, "utf-8");

  // Scan <Link to="..." ...>...</Link>
  // and <a href="..." ...>...</a>
  const linkRegex = /<(?:Link\s+[^>]*?to=["']([^"']+)["']|a\s+[^>]*?href=["']([^"']+)["'])[^>]*?>([\s\S]*?)<\/(?:Link|a)>/gi;
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const target = match[1] || match[2];
    const rawAnchor = match[3];
    // skip non-internal and anchor hashes if internal anchor
    if (target && !target.startsWith("tel:") && !target.startsWith("mailto:") && !target.startsWith("javascript:")) {
      auditLink(routeUrl, target, rawAnchor);
    }
  }
}

// 1. SiteLayout links (appear on every page)
// We scan routes
const routeMap: Record<string, string> = {
  "src/routes/index.tsx": "/",
  "src/routes/about.tsx": "/about",
  "src/routes/quality.tsx": "/quality",
  "src/routes/clients.tsx": "/clients",
  "src/routes/contact.tsx": "/contact",
  "src/routes/products/index.tsx": "/products",
  "src/routes/products/pipes-tubes.tsx": "/products/pipes-tubes",
  "src/routes/products/flanges.tsx": "/products/flanges",
  "src/routes/products/pipe-fittings.tsx": "/products/pipe-fittings",
  "src/routes/products/valves.tsx": "/products/valves",
  "src/routes/products/fasteners.tsx": "/products/fasteners",
  "src/routes/products/gaskets.tsx": "/products/gaskets",
  "src/routes/products/grooved-fittings.tsx": "/products/grooved-fittings",
  "src/routes/products/hdgi-gratings.tsx": "/products/hdgi-gratings",
  "src/routes/products/structural-steel.tsx": "/products/structural-steel",
};

for (const [fileRel, url] of Object.entries(routeMap)) {
  scanFile(path.resolve(fileRel), url);
}
// Also scan layout for global nav & footer
scanFile(path.resolve("src/components/SiteLayout.tsx"), "(Global: Header/Footer)");

// 2. Build graph to test orphan pages and click depth from homepage "/"
const graph: Record<string, Set<string>> = {};
for (const p of KNOWN_PATHS) {
  graph[p] = new Set<string>();
}

// Add layout links (header, footer, dropdowns)
const layoutContent = fs.readFileSync(path.resolve("src/components/SiteLayout.tsx"), "utf-8");
const layoutLinks = new Set<string>();

// 1. Literal <Link to="..."
const layoutRegex = /<Link\s+[^>]*?to=["']([^"']+)["']/gi;
let m;
while ((m = layoutRegex.exec(layoutContent)) !== null) {
  const t = m[1].split("#")[0].split("?")[0];
  if (KNOWN_PATHS.includes(t)) {
    layoutLinks.add(t);
  }
}

// 2. Data arrays mapped in layout: footerProductLinks, footerCompanyLinks, navLinks
const hrefRegex = /href:\s*["']([^"']+)["']/g;
while ((m = hrefRegex.exec(layoutContent)) !== null) {
  const t = m[1].split("#")[0].split("?")[0];
  if (KNOWN_PATHS.includes(t)) {
    layoutLinks.add(t);
  }
}

for (const p of KNOWN_PATHS) {
  for (const l of layoutLinks) {
    graph[p].add(l);
  }
}

for (const [fileRel, url] of Object.entries(routeMap)) {
  const c = fs.readFileSync(path.resolve(fileRel), "utf-8");
  while ((m = layoutRegex.exec(c)) !== null) {
    const t = m[1].split("#")[0].split("?")[0];
    if (KNOWN_PATHS.includes(t)) {
      graph[url].add(t);
    }
  }
}

// Compute BFS distance from "/"
const distance: Record<string, number> = {};
const queue: string[] = ["/"];
distance["/"] = 0;

while (queue.length > 0) {
  const curr = queue.shift()!;
  const neighbors = graph[curr] || new Set();
  for (const n of neighbors) {
    if (distance[n] === undefined) {
      distance[n] = distance[curr] + 1;
      queue.push(n);
    }
  }
}

console.log("\n=== CLICK DEPTH AUDIT (from /) ===");
let allReachableWithin3 = true;
for (const p of KNOWN_PATHS) {
  const d = distance[p];
  console.log(`${p}: ${d !== undefined ? `${d} click(s)` : "ORPHAN (unreachable)"}`);
  if (d === undefined || d > 3) {
    allReachableWithin3 = false;
  }
}

// Write CSV
const csvHeader = "source_url,target_url,anchor_text,is_generic,is_non_www,is_broken,is_redirect,notes\n";
const csvRows = records.map((r) => {
  const escape = (val: string | boolean) => `"${String(val).replace(/"/g, '""')}"`;
  return [
    escape(r.sourceUrl),
    escape(r.targetUrl),
    escape(r.anchorText),
    escape(r.isGeneric),
    escape(r.isNonWww),
    escape(r.isBroken),
    escape(r.isRedirect),
    escape(r.notes)
  ].join(",");
});

const csvOutput = csvHeader + csvRows.join("\n");
fs.writeFileSync("./internal-links-audit.csv", csvOutput, "utf-8");

console.log("\n=== AUDIT SUMMARY ===");
console.log(`Total links audited: ${records.length}`);
console.log(`Generic anchors found: ${records.filter(r => r.isGeneric).length}`);
console.log(`Non-www links found: ${records.filter(r => r.isNonWww).length}`);
console.log(`Broken links found: ${records.filter(r => r.isBroken).length}`);
console.log(`Redirect links found: ${records.filter(r => r.isRedirect).length}`);
console.log(`All pages within 3 clicks of home: ${allReachableWithin3 ? "YES" : "NO"}`);
console.log("CSV written to ./internal-links-audit.csv\n");
