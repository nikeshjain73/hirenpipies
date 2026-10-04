import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail, CheckCircle, Shield } from "lucide-react";
import gratingImage from "../../assets/hdgi-gratings.jpg";

const SITE_URL = "https://hirenpipes.in";
const title = "HDGI Gratings Supplier India | Hot Dip Galvanized Iron Gratings | Hiren Pipes";
const description =
  "Manufacturer, stockist & supplier of high quality Hot Dip Galvanized Iron (HDGI) gratings for industrial and construction applications. Walkways, platforms, drain covers, trench covers, stair treads & more. Custom sizes available. Ankleshwar, Gujarat.";

export const Route = createFileRoute("/products/hdgi-gratings")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SITE_URL}/products/hdgi-gratings` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/products/hdgi-gratings` }],
  }),
  component: HdgiGratingsPage,
});

/* ─── Product Features ─── */
const productFeatures = [
  "High Strength & Load Bearing Capacity",
  "Corrosion Resistant (Hot Dip Galvanized)",
  "Anti-Slip Surface for Better Safety",
  "Long Life & Low Maintenance",
  "Easy Installation & Versatile Use",
  "Quality Assured & Reliable Performance",
];

/* ─── Specifications ─── */
const specifications = [
  { label: "Material", value: "Hot Dip Galvanized Iron (HDGI)" },
  { label: "Finish", value: "Hot Dip Galvanized" },
  { label: "Bar Type", value: "Bearing Bar / Cross Bar" },
  { label: "Bearing Bar Thickness", value: "20mm to 50mm" },
  { label: "Cross Bar Thickness", value: "6mm to 12mm" },
  { label: "Mesh Size", value: "As per Requirement" },
  { label: "Size", value: "Custom Size Available" },
  { label: "Application", value: "Walkways, Platforms, Drain Covers, Trench Covers, Industrial Flooring, Stair Treads & More" },
];

/* ─── Applications ─── */
const applications = [
  {
    title: "Industrial Applications",
    desc: "Heavy-duty gratings for factories, refineries, power plants and chemical processing units.",
    items: ["Factory floors", "Refinery platforms", "Power plant walkways", "Chemical processing areas", "Mining operations"],
  },
  {
    title: "Construction Use",
    desc: "Structural gratings for commercial and infrastructure construction projects.",
    items: ["Mezzanine floors", "Building facades", "Parking structures", "Bridge decking", "Stadium platforms"],
  },
  {
    title: "Drain & Trench Covers",
    desc: "Galvanized grating covers for drainage systems and trenches in all environments.",
    items: ["Storm water drains", "Industrial trench covers", "Road side drains", "Sewage treatment covers", "Kitchen drain covers"],
  },
  {
    title: "Walkways & Platforms",
    desc: "Anti-slip grating surfaces for safe pedestrian and maintenance access.",
    items: ["Access walkways", "Maintenance platforms", "Loading dock platforms", "Tank surrounds", "Rooftop walkways"],
  },
];

/* ─── Grating Types ─── */
const gratingTypes = [
  {
    name: "Plain Steel Grating",
    desc: "Standard flat bearing bar gratings with smooth top surface. Suitable for general industrial flooring and walkways.",
  },
  {
    name: "Serrated Steel Grating",
    desc: "Bearing bars with serrated (notched) top surface for enhanced anti-slip properties. Ideal for wet or oily environments.",
  },
  {
    name: "Press Locked Grating",
    desc: "Cross bars pressed and locked into bearing bars without welding. Provides a smooth, aesthetic surface finish.",
  },
  {
    name: "Welded Steel Grating",
    desc: "Electroforged or manually welded gratings where cross bars are welded to bearing bars for maximum strength.",
  },
  {
    name: "Heavy Duty Grating",
    desc: "Extra-thick bearing bars (40–50mm) for heavy load applications in mining, ports, and industrial vehicle areas.",
  },
  {
    name: "Stair Tread Grating",
    desc: "Custom-shaped gratings with nosing for staircase applications. Serrated surface standard for slip resistance.",
  },
];

/* ─── Material Specifications ─── */
const materialSpecs = [
  { cat: "Base Material", spec: "Mild steel (IS:2062 Gr. A/B), low carbon steel. Bearing bars and cross bars manufactured from high-quality steel billets." },
  { cat: "Galvanizing", spec: "Hot Dip Galvanized (HDG) as per IS:4759 / ASTM A123. Zinc coating thickness 70–100 μm for long-term corrosion protection." },
  { cat: "Bearing Bar Sizes", spec: "20×3, 20×5, 25×3, 25×5, 30×3, 30×5, 32×5, 40×5, 40×6, 50×5, 50×6 mm. Custom sizes on request." },
  { cat: "Cross Bar Sizes", spec: "6mm, 8mm, 10mm, 12mm diameter twisted square bars or round bars. Spacing as per load requirements." },
];

function HdgiGratingsPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-ink py-20 text-primary-foreground">
        <img
          src={gratingImage}
          alt="HDGI Hot Dip Galvanized Iron Gratings — Hiren Pipes & Fittings"
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
            <span>HDGI Gratings</span>
          </nav>
          <p className="mb-3 text-xs font-bold uppercase text-brand-pale">Hot Dip Galvanized · High Strength · Anti-Slip · Custom Sizes</p>
          <h1 className="text-4xl font-extrabold sm:text-5xl">HDGI Gratings</h1>
          <p className="mt-2 text-lg font-bold text-brand-pale">Strong. Durable. Reliable.</p>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            High quality Hot Dip Galvanized Iron (HDGI) gratings for industrial and construction applications. Walkways, platforms, drain covers, trench covers, industrial flooring, stair treads and more.
          </p>
        </div>
      </div>

      {/* Features + Specifications */}
      <div className="bg-white py-12 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Features */}
            <div>
              <h2 className="mb-4 text-2xl font-extrabold text-brand-deep">Product Features</h2>
              <ul className="space-y-3">
                {productFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-steel">
                    <Shield size={18} className="mt-0.5 shrink-0 text-brand-light" />
                    <span className="font-semibold">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications Table */}
            <div>
              <h3 className="mb-4 text-sm font-extrabold uppercase text-brand-deep">Specifications</h3>
              <div className="overflow-hidden border border-border">
                <table className="w-full text-sm">
                  <tbody>
                    {specifications.map((s, i) => (
                      <tr key={s.label} className={i % 2 === 0 ? "bg-steel-light" : "bg-white"}>
                        <td className="border-b border-border px-4 py-3 font-bold text-brand-deep w-44">{s.label}</td>
                        <td className="border-b border-border px-4 py-3 text-steel">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 space-y-14">
        {/* Grating Types */}
        <section>
          <h2 className="mb-2 text-2xl font-extrabold text-brand-deep">Types of HDGI Gratings</h2>
          <p className="mb-6 text-sm text-steel">We supply a full range of grating types to suit different load, safety and aesthetic requirements.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gratingTypes.map((t) => (
              <div key={t.name} className="border border-border p-4 transition-colors hover:border-brand-light hover:bg-brand-deep/[0.02]">
                <h3 className="text-sm font-extrabold text-brand-deep">{t.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-steel">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Applications */}
        <section>
          <h2 className="mb-6 text-2xl font-extrabold text-brand-deep">Applications</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {applications.map((app) => (
              <div key={app.title} className="rounded-xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-lg transition-shadow hover:shadow-md">
                <h3 className="text-sm font-extrabold uppercase text-brand-deep">{app.title}</h3>
                <p className="mt-2 text-xs text-steel">{app.desc}</p>
                <ul className="mt-3 space-y-1">
                  {app.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-steel">
                      <CheckCircle size={12} className="shrink-0 text-brand-light" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Material Specs */}
        <section>
          <h2 className="mb-6 text-2xl font-extrabold text-brand-deep">Material & Galvanizing Specifications</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {materialSpecs.map((m) => (
              <div key={m.cat} className="border-l-2 border-brand-light bg-steel-light p-4">
                <p className="text-sm font-bold text-brand-deep">{m.cat}</p>
                <p className="mt-1 text-xs leading-relaxed text-steel">{m.spec}</p>
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
              ["Structural Steel", "/products/structural-steel"],
              ["Pipes & Tubes", "/products/pipes-tubes"],
              ["Flanges", "/products/flanges"],
              ["Grooved Fittings", "/products/grooved-fittings"],
              ["Fasteners & Studs", "/products/fasteners"],
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
          <h2 className="text-2xl font-extrabold">Strong Grating. Safe Walkways. Solid Performance.</h2>
          <p className="mt-2 text-sm text-primary-foreground/70">Specify size, bearing bar thickness, cross bar spacing and finish — we'll quote within 24 hours.</p>
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
    </>
  );
}

