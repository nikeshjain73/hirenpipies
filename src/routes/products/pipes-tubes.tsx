import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { SiteLayout } from "../../components/SiteLayout";
import pipesImage from "../../assets/carbon-steel-pipes.jpg";

const SITE_URL = "https://hirenpipes.in";
const title = "Industrial Pipes & Tubes Supplier India | Carbon Steel, API 5L, SS Pipes | Hiren Pipes";
const description =
  "Manufacturer, exporter & stockist of industrial pipes & tubes — Carbon Steel Seamless, Alloy Steel, Stainless Steel, Nickel Based, MS ERW, GI, Large Diameter Spiral, Square & Rectangular pipes. API 5L, IS:1239, IS:3589 from Ankleshwar, Gujarat.";

export const Route = createFileRoute("/products/pipes-tubes")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SITE_URL}/products/pipes-tubes` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/products/pipes-tubes` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Industrial Pipes & Tubes",
          description,
          brand: { "@type": "Brand", name: "Hiren Pipes & Fittings" },
          manufacturer: { "@type": "Organization", name: "Hiren Pipes & Fittings", url: SITE_URL },
          category: "Industrial Pipes",
          offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "INR" },
        }),
      },
    ],
  }),
  component: PipesTubesPage,
});

const pipeTypes = [
  {
    name: "Carbon Steel Seamless Pipes",
    standards: ["ASTM A106 Grade B / C", "ASTM A53 Grade A / B", "API 5L Grade B, X42, X46, X52, X56, X60, X65, X70, X79 — PSL1 & PSL2"],
    sizes: "1/2\" NB to 24\" NB (seamless)",
    schedule: "SCH 10, 20, 40, 80, 100, 120, 140, 160, STD, XS, XXS",
    material: "Carbon steel (AISI 1020 – 1045)",
    uses: "High-temperature and high-pressure applications, refineries, boilers, pipelines.",
  },
  {
    name: "Alloy Steel Pipes & Tubes",
    standards: ["ASTM A335 P1, P5, P9, P11, P22, P91", "ASME SA335 alloy grades", "IS:1978 alloy steel pipes"],
    sizes: "1/2\" NB to 24\" NB",
    schedule: "SCH 40 to XXS",
    material: "Chrome-Moly (Cr-Mo) alloy steel",
    uses: "High-temperature service in power plants, heat exchangers, refineries, petrochemical plants.",
  },
  {
    name: "Stainless Steel Pipes & Tubes",
    standards: ["ASTM A312 TP304 / 304L / 304H", "ASTM A312 TP316 / 316L / 317 / 317L", "ASTM A312 TP321 / 310S / 347 / 904L"],
    sizes: "1/2\" NB to 24\" NB",
    schedule: "SCH 10S, 40S, 80S, STD, XS",
    material: "Austenitic stainless steel, all grades",
    uses: "Corrosion-resistant applications, chemical processing, pharmaceuticals, food processing.",
  },
  {
    name: "Nickel Based Pipes & Tubes",
    standards: ["Nickel 200/201", "Monel 400 / K-500", "Inconel 600/625/825", "Incoloy 800/825", "Hastelloy C-276", "Titanium Gr. 1/2", "Duplex 2205", "Super Duplex 2507"],
    sizes: "1/2\" NB to 12\" NB",
    schedule: "SCH 40 to XS",
    material: "Nickel, Monel, Inconel, Incoloy, Hastelloy, Titanium, Duplex, Super-Duplex",
    uses: "Highly corrosive environments, offshore, marine, chemical and petrochemical plants.",
  },
  {
    name: "MS ERW Black Pipes",
    standards: ["IS:1239 Part-1 Light (A) / Medium (B) / Heavy (C)", "IS:3589 Grade FE.330 / FE.410", "BS:1387 Light/Medium/Heavy"],
    sizes: "15mm NB to 150mm NB (IS:1239); 168mm to 2032mm OD (IS:3589)",
    schedule: "Light, Medium, Heavy",
    material: "Mild steel",
    uses: "Water supply, plumbing, structural applications, scaffolding.",
  },
  {
    name: "Large Diameter Spiral Welded Pipes",
    standards: ["IS:3589 Grade FE.330 / FE.410", "API 5L Grade B, X42, X52, X60, X65, X70 LSAW/HSAW"],
    sizes: "168mm OD to 2032mm OD",
    schedule: "Various wall thicknesses",
    material: "Carbon steel, mild steel",
    uses: "Water transmission, piling, oil & gas pipelines, large-diameter industrial use.",
  },
  {
    name: "GI Pipes (Galvanized)",
    standards: ["IS:1239 Part-1 Light/Medium/Heavy (Galvanized)", "BS:1387 Galvanized"],
    sizes: "15mm NB to 150mm NB",
    schedule: "Light, Medium, Heavy",
    material: "Mild steel with hot-dip galvanizing",
    uses: "Water supply, agriculture, fire-fighting, water treatment plants.",
  },
  {
    name: "Square & Rectangular Pipes",
    standards: ["IS:4923 (hollow sections)", "EN 10219 / 10210"],
    sizes: "20×20mm to 200×200mm (square); 20×30mm to 150×200mm (rectangular)",
    schedule: "1.5mm to 12mm wall thickness",
    material: "Mild steel, carbon steel, stainless steel",
    uses: "Structural fabrication, gates, grills, furniture, handrails, support frames.",
  },
];

function PipesTubesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <div className="relative bg-ink py-20 text-primary-foreground">
        <img
          src={pipesImage}
          alt="Carbon steel seamless pipes stacked — Hiren Pipes & Fittings"
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
            <span>Pipes & Tubes</span>
          </nav>
          <p className="mb-3 text-xs font-bold uppercase text-brand-pale">ASTM / ASME / API / IS Standards</p>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Industrial Pipes & Tubes</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Complete range of carbon steel, alloy steel, stainless steel, nickel-based, ERW, GI and spiral-welded pipes from our Ankleshwar, Gujarat stockyard. Seamless pipes up to 24", ERW up to 48".
          </p>
        </div>
      </div>

      {/* Types */}
      <div className="relative bg-white py-16">
        <div className="absolute inset-0 z-0 bg-dot-pattern opacity-[0.15]"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-10 text-2xl font-extrabold text-brand-deep">Pipe Types & Specifications</h2>
        <div className="space-y-8">
          {pipeTypes.map((p) => (
            <article key={p.name} className="rounded-xl border border-black/5 bg-white/70 p-6 lg:p-8 shadow-sm backdrop-blur-lg transition-shadow hover:shadow-md">
              <h3 className="text-xl font-extrabold text-brand-deep">{p.name}</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-[10px] font-bold uppercase text-brand-light">Standards</p>
                  <ul className="mt-1 space-y-1">
                    {p.standards.map((s) => <li key={s} className="text-sm text-steel">• {s}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-brand-light">Size Range</p>
                  <p className="mt-1 text-sm text-steel">{p.sizes}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-brand-light">Schedule / Thickness</p>
                  <p className="mt-1 text-sm text-steel">{p.schedule}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-brand-light">Applications</p>
                  <p className="mt-1 text-sm text-steel">{p.uses}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      </div>

      {/* Related */}
      <div className="border-t border-border bg-steel-light py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-6 text-lg font-extrabold text-brand-deep">Related Products</h2>
          <div className="flex flex-wrap gap-3">
            {[
              ["Pipe Fittings", "/products/pipe-fittings"],
              ["Flanges", "/products/flanges"],
              ["Fasteners & Studs", "/products/fasteners"],
              ["Gaskets & Sealing", "/products/gaskets"],
            ].map(([n, h]) => (
              <Link key={h} to={h as string} className="inline-flex items-center gap-2 border border-brand-deep px-4 py-2 text-xs font-bold uppercase text-brand-deep hover:bg-brand-deep hover:text-primary-foreground">
                {n} <ArrowRight size={12} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-brand-deep py-12 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-extrabold">Get a quote for pipes & tubes</h2>
          <p className="mt-2 text-sm text-primary-foreground/70">Share grade, size, schedule and quantity — we'll respond within 24 hours.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://wa.me/919586911478" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand-light px-6 py-3 text-xs font-bold uppercase hover:bg-brand">
              <Phone size={16} /> WhatsApp +91 95869 11478
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

