import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail, CheckCircle } from "lucide-react";
import { SiteLayout } from "../../components/SiteLayout";
import groovedImage from "../../assets/grooved-fittings.jpg";

const SITE_URL = "https://hirenpipes.in";
const title = "Grooved Fittings Supplier India | Ductile Iron Fire Protection Fittings | Hiren Pipes";
const description =
  "Manufacturer, stockist & exporter of ductile iron grooved fittings — elbows, tees, couplings, reducers, crosses, mechanical tees & outlets, caps, flange adaptors. FM & UL approved. Epoxy coated. ASTM A536 Grade 65-45-12. 300 PSI. Fire protection systems. Ankleshwar, Gujarat.";

export const Route = createFileRoute("/products/grooved-fittings")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SITE_URL}/products/grooved-fittings` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/products/grooved-fittings` }],
  }),
  component: GroovedFittingsPage,
});

/* ─── Grooved Elbow Types ─── */
const elbowTypes = [
  { name: "90° Elbow", desc: "Standard grooved-end 90° elbow for directional change in fire protection and HVAC piping systems." },
  { name: "90° Reducing Elbow", desc: "Combines 90° directional change with pipe size reduction in a single fitting." },
  { name: "45° Elbow", desc: "Grooved-end 45° elbow for gentle directional changes, reducing friction loss in the system." },
  { name: "90° END-ALL Elbow", desc: "Specialized 90° elbow with end connection, designed for specific system configurations." },
];

/* ─── Grooved Tee Types ─── */
const teeTypes = [
  { name: "Tee", desc: "Standard grooved-end equal tee for branching piping runs at 90° angles." },
  { name: "Reducing Tee", desc: "Grooved tee with reduced branch outlet for connecting smaller branch lines to main runs." },
  { name: "Reducing Tee with Female Thread", desc: "Grooved reducing tee with a threaded female branch outlet for threaded connections." },
  { name: "Cross", desc: "Four-way grooved fitting for connecting four pipes at right angles in a single junction." },
];

/* ─── Grooved Coupling Types ─── */
const couplingTypes = [
  { name: "Rigid Coupling", desc: "Provides a rigid, non-flexible joint. Ideal where system rigidity and alignment are required. Prevents angular deflection." },
  { name: "Angle Pad Coupling", desc: "Designed for use on angled or tapered pipe sections where standard couplings cannot be applied." },
  { name: "Reducing Coupling", desc: "Connects two different pipe sizes in a rigid configuration without separate reducer fittings." },
  { name: "Flexible Coupling", desc: "Allows limited angular deflection, contraction, and expansion. Absorbs vibration and compensates for thermal movement." },
];

/* ─── Mechanical Tee & Outlet Types ─── */
const mechanicalTypes = [
  { name: "U-Bolt Mechanical Tee", desc: "Branch outlet fitting secured with U-bolts. Enables branch connections without cutting or welding the main pipe." },
  { name: "Mechanical Tee Grooved Outlet", desc: "Mechanical tee with grooved branch outlet for connecting grooved-end branch piping." },
  { name: "Mechanical Tee Threaded Outlet", desc: "Mechanical tee with threaded branch outlet for threaded branch connections." },
  { name: "Mechanical Cross Grooved Outlet", desc: "Mechanical cross fitting with grooved outlets for four-way branch connections." },
  { name: "Mechanical Cross Threaded Outlet", desc: "Mechanical cross with threaded branch outlets for threaded four-way connections." },
];

/* ─── Grooved Reducer Types ─── */
const reducerTypes = [
  { name: "Grooved Eccentric Reducer", desc: "Flat on one side for horizontal installations requiring proper drainage or air venting. Grooved ends." },
  { name: "Grooved Concentric Reducer", desc: "Both ends share the same centreline. Used where drainage is not a concern. Grooved-end connection." },
  { name: "Reducing Cross", desc: "Four-way grooved fitting with one or more reduced outlets for mixed-size branch connections." },
  { name: "Grooved Concentric Reducer with Female Thread", desc: "Concentric reducer with one grooved end and one female threaded end for hybrid connections." },
];

/* ─── Accessories ─── */
const accessories = [
  { name: "Cap", desc: "Grooved end cap for terminating pipe runs. Provides a sealed, pressure-tight closure at pipe ends." },
  { name: "Flange Adaptor", desc: "Converts a grooved-end pipe connection to a flanged connection for interfacing with flanged equipment." },
  { name: "Split Flange", desc: "Two-piece flange assembly for grooved piping. Allows easy installation and removal without moving pipe." },
];

/* ─── Key Features ─── */
const keyFeatures = [
  "Manufactured from High Quality Ductile Iron",
  "FM & UL Approved",
  "Epoxy coated or hot-dip galvanized for corrosion protection",
  "Pressure rating – 300 PSI ensuring safety and durability in demanding applications",
  "Quick & easy installation with grooved-end connections",
  "No welding or threading required — reduces installation time by up to 50%",
  "Suitable for fire protection, HVAC, mining, and industrial applications",
];

/* ─── Overview / Specifications ─── */
const specifications = [
  { label: "Material", value: "ASTM A536, Grade 65-45-12" },
  { label: "Threads", value: "ASME B1.20.1 / ISO228 / ISO 7-1" },
  { label: "Working Pressure", value: "300 PSI" },
  { label: "Surface Treatment", value: "Epoxy, Dacromet and Galvanised" },
  { label: "Zinc Coating", value: "70–80 μm" },
  { label: "Size Available", value: "1\" to 12\"" },
];

/* ─── Material Grades ─── */
const materials = [
  { cat: "Ductile Iron", spec: "ASTM A536 Grade 65-45-12 — primary material for all grooved fittings. High strength and ductility." },
  { cat: "Surface Coating", spec: "Epoxy coating (RAL 3000 Red / RAL 7040 Grey), Hot-dip galvanized, Dacromet finish for enhanced corrosion resistance." },
  { cat: "Gasket Material", spec: "EPDM (Grade E) for water & air systems, Nitrile (Grade T) for petroleum & oil, Silicone for high-temperature applications." },
  { cat: "Hardware", spec: "Bolts & nuts — Grade 8.8 / ASTM A183 standard. Zinc plated or Dacromet coated for corrosion protection." },
];

function ProductGrid({ title, items }: { title: string; items: { name: string; desc: string }[] }) {
  return (
    <section>
      <h2 className="mb-2 text-2xl font-extrabold text-brand-deep">{title}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <div key={t.name} className="border border-border p-4 transition-colors hover:border-brand-light hover:bg-brand-deep/[0.02]">
            <h3 className="text-sm font-extrabold text-brand-deep">{t.name}</h3>
            <p className="mt-2 text-xs leading-relaxed text-steel">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function GroovedFittingsPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <div className="relative bg-ink py-20 text-primary-foreground">
        <img
          src={groovedImage}
          alt="Ductile iron grooved fittings — elbows, tees, couplings, reducers — Hiren Pipes & Fittings"
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
            <span>Grooved Fittings</span>
          </nav>
          <p className="mb-3 text-xs font-bold uppercase text-brand-pale">Ductile Iron · FM & UL Approved · 300 PSI · Grooved End</p>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Grooved Fittings</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Complete range of ductile iron grooved fittings engineered for high performance and ease of installation in fire protection, HVAC, mining, and industrial piping systems. FM & UL approved, 300 PSI rated.
          </p>
        </div>
      </div>

      {/* Brief Introduction */}
      <div className="bg-white py-12 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-extrabold text-brand-deep">Brief Introduction</h2>
              <p className="text-sm leading-relaxed text-steel">
                Our range of Ductile Iron Grooved Fittings is engineered for high performance and ease of installation in fire protection systems. Designed as per International Standards and approved by FM and UL, our fittings ensure safety, strength and reliability under demanding conditions.
              </p>
              <div className="mt-6">
                <h3 className="mb-3 text-sm font-extrabold uppercase text-brand-deep">Key Features</h3>
                <ul className="space-y-2">
                  {keyFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-steel">
                      <CheckCircle size={16} className="mt-0.5 shrink-0 text-brand-light" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-extrabold uppercase text-brand-deep">Technical Overview</h3>
              <div className="overflow-hidden border border-border">
                <table className="w-full text-sm">
                  <tbody>
                    {specifications.map((s, i) => (
                      <tr key={s.label} className={i % 2 === 0 ? "bg-steel-light" : "bg-white"}>
                        <td className="border-b border-border px-4 py-3 font-bold text-brand-deep">{s.label}</td>
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
        {/* Elbows */}
        <ProductGrid title="Grooved Elbows" items={elbowTypes} />

        {/* Tees & Cross */}
        <ProductGrid title="Grooved Tees & Crosses" items={teeTypes} />

        {/* Couplings */}
        <ProductGrid title="Grooved Couplings" items={couplingTypes} />

        {/* Mechanical Tees & Outlets */}
        <ProductGrid title="Mechanical Tees & Outlets" items={mechanicalTypes} />

        {/* Reducers */}
        <ProductGrid title="Grooved Reducers" items={reducerTypes} />

        {/* Accessories */}
        <ProductGrid title="Caps, Flanges & Accessories" items={accessories} />

        {/* Materials */}
        <section>
          <h2 className="mb-6 text-2xl font-extrabold text-brand-deep">Material & Coating Specifications</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {materials.map((m) => (
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
              ["Pipes & Tubes", "/products/pipes-tubes"],
              ["Flanges", "/products/flanges"],
              ["Pipe Fittings", "/products/pipe-fittings"],
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

      {/* CTA */}
      <div className="bg-brand-deep py-12 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-extrabold">Request a quote for grooved fittings</h2>
          <p className="mt-2 text-sm text-primary-foreground/70">Specify type, size, pressure class and surface treatment — we'll quote within 24 hours.</p>
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
