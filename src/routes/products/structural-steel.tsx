import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail, CheckCircle } from "lucide-react";
import { SiteLayout } from "../../components/SiteLayout";
import steelImage from "../../assets/structural-steel.jpg";

const SITE_URL = "https://hirenpipes.in";
const title = "Structural Steel & Steel Solutions Supplier India | Hiren Pipes & Fittings";
const description =
  "Complete range of structural steel products — MS Angle, Channel, I-Beam, H-Beam, Flat, Round, Square bars, Bright Bar, Wire Rod, GC Sheet, Profile Sheet, Deck Sheet, Scaffolding, Weld Mesh, Chainlink, Barbed Wire, Foundation Bolt, Crash Barrier, Thread Rods. Manufacturer, stockist, supplier from Ankleshwar, Gujarat.";

export const Route = createFileRoute("/products/structural-steel")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SITE_URL}/products/structural-steel` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/products/structural-steel` }],
  }),
  component: StructuralSteelPage,
});

/* ─── Structural Sections ─── */
const structuralSections = [
  { name: "MS Angle", tagline: "For Stronger Structures", desc: "Mild Steel angles in equal and unequal leg configurations. Used extensively in construction, fabrication, and industrial frameworks. Available in all standard IS sizes." },
  { name: "MS Channel", tagline: "Built for Stability", desc: "ISMC and ISSC channels for structural support, frames, brackets and general fabrication. Hot rolled, standard and custom lengths." },
  { name: "MS I-Beam", tagline: "High Load Capacity", desc: "ISMB standard I-beams for building construction, bridges, and heavy structural applications. Superior strength-to-weight ratio." },
  { name: "MS H-Beam", tagline: "Superior Strength", desc: "ISHB and wide flange H-beams for heavy-duty columns, pile foundations, and long-span structures. Built for the long run." },
  { name: "Gate Channel", tagline: "For Strong Structures", desc: "Specialized channel sections for gate frames, door frames, and window frames. Clean profile for architectural applications." },
  { name: "Z Angle", tagline: "Structural Support", desc: "Z-section purlins and girts for pre-engineered building roofing and wall cladding support. Lightweight yet strong." },
  { name: "T Angle", tagline: "Versatile & Strong", desc: "T-section structural steel for joints, connections, and support brackets in fabrication and construction." },
];

/* ─── Bars & Rods ─── */
const barsAndRods = [
  { name: "MS Square", tagline: "Precision & Strength", desc: "Mild Steel square bars in various sizes for grills, gates, frames, and general fabrication. Hot rolled and cold drawn available." },
  { name: "MS Round", tagline: "For Every Application", desc: "MS round bars for shafts, pins, rollers, and general engineering. Available in hot rolled and bright finish." },
  { name: "MS Flat", tagline: "Strong & Reliable", desc: "Flat bars in mild steel for fabrication, brackets, supports, and structural connections. Wide range of widths and thicknesses." },
  { name: "Bright Bar", tagline: "Smooth Finish · High Quality", desc: "Cold drawn bright steel bars with tight tolerances and superior surface finish. Used for precision components and machining." },
  { name: "MS Wire Rod", tagline: "Flexible & Strong", desc: "Wire rods in coil form for drawing into wire, nails, mesh, and other wire products. SAE 1008/1010 grades." },
  { name: "Thread Rods", tagline: "Strong Ties · Lasting Results", desc: "Fully threaded rods (studs) in MS and high tensile grades for anchoring, clamping, and structural connections." },
];

/* ─── Plates & Sheets ─── */
const platesAndSheets = [
  { name: "MS Plate", tagline: "Heavy Duty Performance", desc: "Mild Steel plates in various thicknesses for structural, fabrication, pressure vessel, and shipbuilding applications. IS:2062 / ASTM A36." },
  { name: "GC Sheet", tagline: "Weather Resistant", desc: "Galvanized Corrugated sheets for roofing and cladding. Corrosion resistant with zinc coating. Available in various profiles and gauges." },
  { name: "Deck Sheet", tagline: "Modern Building Solutions", desc: "Steel deck sheets / floor decking for composite slab construction. Trapezoidal profile for maximum strength. Galvanized finish." },
  { name: "Profile Sheet", tagline: "Durable & Aesthetic", desc: "Color coated and galvanized profile sheets for roofing, wall cladding, and partitions. Multiple rib patterns and color options available." },
  { name: "Cut Piece Plate", tagline: "As Per Your Requirement", desc: "Custom cut MS plates to exact size requirements. Gas cutting, plasma cutting, and shearing available for precise dimensions." },
];

/* ─── Wire Products ─── */
const wireProducts = [
  { name: "Binding Wire", tagline: "Secure Connections", desc: "Annealed mild steel binding wire for tying reinforcement bars in RCC construction. Available in 18, 20, 22 gauge." },
  { name: "Barbed Wire", tagline: "Protection Redefined", desc: "Galvanized barbed wire for fencing and perimeter security. Single and double strand available. Zinc coated for long life." },
  { name: "GI Wire", tagline: "Corrosion Resistant", desc: "Galvanized Iron wire for fencing, binding, stay wires, and general purpose use. Various gauges available." },
  { name: "HB Wire", tagline: "For Multiple Uses", desc: "High carbon hard bright wire for springs, mattress manufacturing, and industrial applications. Smooth surface finish." },
  { name: "Weld Mesh", tagline: "Stronger Together", desc: "Welded wire mesh panels for concrete reinforcement, fencing, partitions, and cages. Galvanized and plain options." },
  { name: "Chainlink", tagline: "Safety & Security", desc: "Galvanized and PVC coated chainlink fencing for boundary walls, sports grounds, gardens, and industrial perimeters." },
];

/* ─── Construction Accessories ─── */
const constructionAccessories = [
  { name: "Scaffolding", tagline: "Safety in Every Height", desc: "MS scaffolding pipes, couplers, base plates, and accessories for temporary construction structures. Cup-lock and H-frame systems." },
  { name: "Foundation Bolt", tagline: "Secure Your Base", desc: "Foundation bolts (J-bolts, L-bolts, straight anchor bolts) for securing structures, machinery, and equipment to concrete bases." },
  { name: "Crash Barrier", tagline: "Road Safety Solutions", desc: "W-beam and thrie-beam metal crash barriers for highway median and roadside safety. Hot dip galvanized for corrosion resistance." },
];

/* ─── Services ─── */
const services = [
  { name: "Galvanizing & Fabrication Works", tagline: "Customised Solutions", desc: "Hot dip galvanizing services for all steel products. Custom fabrication — cutting, bending, drilling, welding per your drawings and specifications." },
];

function ProductGrid({ title, subtitle, items }: { title: string; subtitle?: string; items: { name: string; tagline: string; desc: string }[] }) {
  return (
    <section>
      <h2 className="mb-1 text-2xl font-extrabold text-brand-deep">{title}</h2>
      {subtitle && <p className="mb-6 text-sm text-steel">{subtitle}</p>}
      {!subtitle && <div className="mb-6" />}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <div key={t.name} className="border border-border p-5 transition-colors hover:border-brand-light hover:bg-brand-deep/[0.02]">
            <h3 className="text-sm font-extrabold text-brand-deep">{t.name}</h3>
            <p className="mt-1 text-[11px] font-semibold uppercase text-brand-light">{t.tagline}</p>
            <p className="mt-2 text-xs leading-relaxed text-steel">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function StructuralSteelPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <div className="relative bg-ink py-20 text-primary-foreground">
        <img
          src={steelImage}
          alt="Structural steel stockyard — angles, channels, beams, bars, sheets — Hiren Pipes & Fittings"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          width="1920"
          height="600"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="mb-4 text-xs text-primary-foreground/50" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-primary-foreground">Products</Link>
            <span className="mx-2">/</span>
            <span>Structural Steel</span>
          </nav>
          <p className="mb-3 text-xs font-bold uppercase text-brand-pale">MS · CS · SS · Complete Steel Solutions</p>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Steel Solutions</h1>
          <p className="mt-2 text-lg font-bold text-brand-pale">A complete range for every construction & industrial requirement.</p>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Structural sections, bars, plates, sheets, wire products, scaffolding, fencing, and custom fabrication — a one-stop steel solution for construction, industrial, and infrastructure projects.
          </p>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="bg-white py-10 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["Superior Quality", "Sourced from reputed mills — Tata, SAIL, JSW, Jindal"],
              ["Wide Range", "30+ product types under one roof"],
              ["On-Time Supply", "Strategic location for fast India-wide dispatch"],
              ["Trusted Partner", "Serving construction & industrial clients since 1990"],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <CheckCircle size={18} className="mt-0.5 shrink-0 text-brand-light" />
                <div>
                  <p className="text-sm font-bold text-brand-deep">{t}</p>
                  <p className="mt-1 text-xs text-steel">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 space-y-14">
        {/* Structural Sections */}
        <ProductGrid
          title="Structural Sections"
          subtitle="Angles, Channels, Beams & Specialized Sections — IS:2062 / IS:808 / IS:1161 standards"
          items={structuralSections}
        />

        {/* Bars & Rods */}
        <ProductGrid
          title="Bars & Rods"
          subtitle="Round, Square, Flat, Bright, Wire Rod & Threaded — all grades and sizes available"
          items={barsAndRods}
        />

        {/* Plates & Sheets */}
        <ProductGrid
          title="Plates & Sheets"
          subtitle="MS Plates, GC Sheets, Deck Sheets, Profile Sheets & Cut-to-Size Plates"
          items={platesAndSheets}
        />

        {/* Wire Products */}
        <ProductGrid
          title="Wire Products & Fencing"
          subtitle="Binding Wire, Barbed Wire, GI Wire, Weld Mesh, Chainlink & Industrial Wire"
          items={wireProducts}
        />

        {/* Construction Accessories */}
        <ProductGrid
          title="Construction Accessories"
          subtitle="Scaffolding, Foundation Bolts & Safety Barriers"
          items={constructionAccessories}
        />

        {/* Services */}
        <ProductGrid
          title="Galvanizing & Fabrication Services"
          items={services}
        />
      </div>

      {/* Related */}
      <div className="border-t border-border bg-steel-light py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-6 text-lg font-extrabold text-brand-deep">Related Products</h2>
          <div className="flex flex-wrap gap-3">
            {[
              ["Pipes & Tubes", "/products/pipes-tubes"],
              ["Flanges", "/products/flanges"],
              ["Fasteners & Studs", "/products/fasteners"],
              ["HDGI Gratings", "/products/hdgi-gratings"],
              ["Grooved Fittings", "/products/grooved-fittings"],
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
          <h2 className="text-2xl font-extrabold">Stronger Infrastructure for a Brighter Tomorrow.</h2>
          <p className="mt-2 text-sm text-primary-foreground/70">Specify product, size, grade and quantity — we'll quote within 24 hours.</p>
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
