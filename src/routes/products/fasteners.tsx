import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { SiteLayout } from "../../components/SiteLayout";
import fastenersImage from "../../assets/fasteners.avif";

const SITE_URL = "https://hirenpipes.in";
const title = "Fasteners & Studs Supplier India | ASTM A193 B7, SS Fasteners | Hiren Pipes";
const description =
  "Manufacturer, stockist & exporter of fasteners — ASTM A193 Grade B7/L7/B8/B8M stud bolts, A194 Grade 2H/7/8/8M nuts. Hex bolts, Allen cap, eye bolts, anchor bolts, U-bolts. Grades 4.6 to 12.9. SS 304/316/904L. PTFE, Zinc, HDG coatings. Ankleshwar, Gujarat.";

export const Route = createFileRoute("/products/fasteners")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SITE_URL}/products/fasteners` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/products/fasteners` }],
  }),
  component: FastenersPage,
});

const grades = [
  { grade: "ASTM A193 Grade B7", desc: "Chromium-molybdenum (AISI 4140) alloy steel stud bolts. Min. tensile 125 ksi, yield 105 ksi. Most common for carbon steel flanges. M6 to M180, 1/4\" to 7\"." },
  { grade: "ASTM A193 Grade L7", desc: "Low-alloy steel for low-temperature service. Used in cryogenic applications, LNG, cold-service pipelines." },
  { grade: "ASTM A193 Grade B8 / B8M", desc: "Stainless steel stud bolts — B8 (SS 304), B8M (SS 316). For corrosion-resistant applications." },
  { grade: "ASTM A194 Grade 2H", desc: "Heavy hex nuts for A193 B7 stud bolts. Standard nut pairing for carbon steel piping.", },
  { grade: "ASTM A194 Grade 7", desc: "Heavy hex nuts for A193 L7 stud bolts. Low-temperature service.", },
  { grade: "ASTM A194 Grade 8 / 8M", desc: "Stainless steel nuts for A193 B8/B8M studs — Gr. 8 (SS 304), Gr. 8M (SS 316).", },
  { grade: "Mild Steel Gr. 4.6 / 5.6", desc: "Hex head bolts, nuts & washers for general structural and low-pressure piping applications." },
  { grade: "High Tensile Gr. 8.8", desc: "Medium carbon steel, quenched and tempered. General engineering and structural use." },
  { grade: "High Tensile Gr. 10.9 / 12.9", desc: "Alloy steel, high tensile for structural steel connections, machinery and heavy equipment." },
  { grade: "SS 304 / 316 / 317 / 321 / 904L", desc: "Stainless steel hex bolts, nuts and washers for corrosion-resistant applications." },
];

const boltTypes = [
  "Hex Head Bolt", "Stud Bolt (Fully Threaded)", "Double End Stud",
  "Allen / Socket Head Cap Screw", "CSK (Countersunk) Bolt", "Grub Screw / Set Screw",
  "Eye Bolt", "U-Bolt / J-Bolt", "Foundation Bolt",
  "Anchor Fastener (Pin & Wedge)", "Shoe Clamp", "Heavy Hex Bolt",
  "Threaded Rod / All-Thread Rod", "Hex Nut / Heavy Hex Nut", "Spring Washer / Plain Washer",
];

const coatings = [
  { name: "PTFE / Xylan Coated", desc: "Superior corrosion resistance, low friction. Used in high-alloy applications." },
  { name: "Zinc Plated (Electroplated)", desc: "Cost-effective corrosion protection for mild steel fasteners." },
  { name: "Hot Dip Galvanized (HDG)", desc: "Thick zinc coating for outdoor, marine and structural applications." },
  { name: "Black Phosphate", desc: "Moderate corrosion resistance with lubricating properties. Common for high-tensile grades." },
  { name: "Cadmium Plated", desc: "Excellent corrosion resistance, often used in aerospace and marine industries." },
];

function FastenersPage() {
  return (
    <SiteLayout>
      <div className="relative bg-ink py-20 text-primary-foreground">
        <img
          src={fastenersImage}
          alt="Industrial fasteners — Stud bolts, Hex bolts, Nuts — Hiren Pipes & Fittings"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          width="1920"
          height="600"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="mb-4 text-xs text-primary-foreground/50" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-primary-foreground">Products</Link>
            <span className="mx-2">/</span>
            <span>Fasteners & Studs</span>
          </nav>
          <p className="mb-3 text-xs font-bold uppercase text-brand-pale">ASTM A193 / A194 · MS / HT / SS Grades</p>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Fasteners & Studs</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Complete range of bolts, studs, nuts and washers for industrial piping, pressure vessels, flanges and structural applications. ASTM A193 B7 stud bolts available M6 to M180 (1/4" to 7" diameter).
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 space-y-12">
        {/* Grades */}
        <section>
          <h2 className="mb-6 text-2xl font-extrabold text-brand-deep">Grades & Specifications</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {grades.map((g) => (
              <div key={g.grade} className="border-l-2 border-brand-light bg-steel-light p-4">
                <p className="text-sm font-bold text-brand-deep">{g.grade}</p>
                <p className="mt-1 text-xs leading-relaxed text-steel">{g.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Types */}
        <section>
          <h2 className="mb-6 text-2xl font-extrabold text-brand-deep">Fastener Types Available</h2>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {boltTypes.map((b) => (
              <div key={b} className="border border-border px-3 py-2 text-xs font-semibold text-brand-deep">{b}</div>
            ))}
          </div>
        </section>

        {/* Coatings */}
        <section>
          <h2 className="mb-6 text-2xl font-extrabold text-brand-deep">Surface Coatings</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coatings.map((c) => (
              <div key={c.name} className="border border-border p-4">
                <h3 className="text-sm font-bold text-brand-deep">{c.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-steel">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Related */}
      <div className="border-t border-border bg-steel-light py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-6 text-lg font-extrabold text-brand-deep">Related Products</h2>
          <div className="flex flex-wrap gap-3">
            {[
              ["Pipes & Tubes", "/products/pipes-tubes"],
              ["Flanges", "/products/flanges"],
              ["Valves", "/products/valves"],
              ["Gaskets & Sealing", "/products/gaskets"],
            ].map(([n, h]) => (
              <Link key={h} to={h as string} className="inline-flex items-center gap-2 border border-brand-deep px-4 py-2 text-xs font-bold uppercase text-brand-deep hover:bg-brand-deep hover:text-primary-foreground">
                {n} <ArrowRight size={12} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-brand-deep py-12 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-extrabold">Request fastener specifications & pricing</h2>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://wa.me/919586911478" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand-light px-6 py-3 text-xs font-bold uppercase hover:bg-brand">
              <Phone size={16} /> +91 95869 11478
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 px-6 py-3 text-xs font-bold uppercase hover:bg-primary-foreground/10">
              <Mail size={16} /> metal.hiren@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}


