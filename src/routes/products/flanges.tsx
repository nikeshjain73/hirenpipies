import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { SiteLayout } from "../../components/SiteLayout";
import flangesImage from "../../assets/forged-flanges.jpg";

const SITE_URL = "https://hirenpipes.in";
const title = "Forged Flanges Supplier India | ASME B16.5, ANSI B16.47 Flanges | Hiren Pipes";
const description =
  "Manufacturer, exporter & stockist of forged flanges — Weld Neck (WNRF), Slip-On (SORF), Blind (BLRF), Socket Weld (SWRF), Lap Joint, Plate, RTJ, Tongue & Groove, DIN, BS 10 flanges. ASME B16.5 / ANSI B16.47. Ankleshwar, Gujarat, India.";

export const Route = createFileRoute("/products/flanges")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SITE_URL}/products/flanges` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/products/flanges` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Forged Flanges",
          description,
          brand: { "@type": "Brand", name: "Hiren Pipes & Fittings" },
          manufacturer: { "@type": "Organization", name: "Hiren Pipes & Fittings", url: SITE_URL },
          category: "Flanges",
          offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "INR" },
        }),
      },
    ],
  }),
  component: FlangesPage,
});

const flangeTypes = [
  {
    name: "Weld Neck Flanges (WNRF)",
    std: "ASME B16.5 / ANSI B16.47",
    sizes: "1/2\" to 60\"",
    pressure: "150# to 2500# (ASME B16.5); Series A & B (ANSI B16.47)",
    desc: "Used for high-pressure and high-temperature applications in process piping. Designed for butt welding to pipe.",
    use: "Refineries, power plants, petrochemical pipelines.",
  },
  {
    name: "Slip-On Flanges (SORF)",
    std: "ASME B16.5",
    sizes: "1/2\" to 24\"",
    pressure: "150# to 1500#",
    desc: "Slipped over the pipe and fillet-welded inside and outside. Suitable for low-pressure and low-temperature applications.",
    use: "Water treatment, general piping systems.",
  },
  {
    name: "Blind Flanges (BLRF)",
    std: "ASME B16.5 / ANSI B16.47",
    sizes: "1/2\" to 60\"",
    pressure: "150# to 2500#",
    desc: "Used to seal the end of a pipe or to close a pressure vessel opening. Withstands high pressure loads.",
    use: "Pipeline isolation, pressure vessels, test points.",
  },
  {
    name: "Socket Weld Flanges (SWRF)",
    std: "ASME B16.5",
    sizes: "1/2\" to 3\"",
    pressure: "150# to 2500#",
    desc: "Suitable for small-bore piping requiring strength at lower pressure and temperature. Pipe is inserted into the socket and fillet-welded.",
    use: "Small bore process piping, instrumentation.",
  },
  {
    name: "Lap Joint Flanges",
    std: "ASME B16.5",
    sizes: "1/2\" to 24\"",
    pressure: "150# to 2500#",
    desc: "Used with stub ends. Free rotation of bolts makes alignment easier. Good for pipelines requiring frequent dismantling.",
    use: "Low-pressure applications, systems requiring regular inspection.",
  },
  {
    name: "Plate Flanges",
    std: "ASME B16.5 / IS:6392",
    sizes: "1/2\" to 24\"",
    pressure: "150# to 300#",
    desc: "Flat plate flanges welded to pipe. Cost-effective for low-pressure systems. Also called flat face flanges.",
    use: "Low-pressure services, general utilities.",
  },
  {
    name: "Ring Type Joint Flanges (RTJ)",
    std: "ASME B16.20",
    sizes: "1/2\" to 24\"",
    pressure: "150# to 2500#",
    desc: "Uses metal ring gaskets seated in grooves on flange face. Provides excellent seal for high-temperature, high-pressure services.",
    use: "Oil & gas, high-pressure process lines.",
  },
  {
    name: "Tongue & Groove Flanges",
    std: "ASME B16.5",
    sizes: "1/2\" to 24\"",
    pressure: "150# to 2500#",
    desc: "One flange has a raised ring (tongue) and the other has a matching groove. Provides self-centering for gaskets.",
    use: "Chemical process, high-pressure pumps.",
  },
  {
    name: "Male & Female Flanges",
    std: "ASME B16.5",
    sizes: "1/2\" to 24\"",
    pressure: "150# to 2500#",
    desc: "One flange has a raised face (male) and the other has a recessed face (female). Retains and centers the gasket.",
    use: "Pump and compressor connections.",
  },
  {
    name: "Long Weld Neck Flanges",
    std: "ASME B16.5",
    sizes: "1/2\" to 24\"",
    pressure: "150# to 2500#",
    desc: "Similar to weld neck flanges but with an extended neck. Used where bore matches the pipe or vessel nozzle.",
    use: "Pressure vessel nozzles, reactor connections.",
  },
  {
    name: "DIN Flanges",
    std: "DIN 2527 / 2573 / 2576 / 2631 – 2638",
    sizes: "DN 15 to DN 600",
    pressure: "PN 6 to PN 100",
    desc: "European standard flanges following DIN specifications. Available in all face types and pressure ratings.",
    use: "European projects, export orders.",
  },
  {
    name: "BS 10 Flanges",
    std: "BS:10 Table D, E, F, H",
    sizes: "1/2\" to 24\"",
    pressure: "Table D to Table H",
    desc: "British standard flanges used in UK and Commonwealth countries. Compatible with older piping systems.",
    use: "British standard projects, refurbishment work.",
  },
];

const materials = [
  { grade: "Carbon Steel", spec: "ASTM A105 / A105N, A181 Gr. 60/70, A694 F42–F70" },
  { grade: "Stainless Steel", spec: "ASTM A182 F304 / 304L / 304H / 316 / 316L / 317L / 321 / 310S / 347 / 904L" },
  { grade: "Alloy Steel", spec: "ASTM A182 F1 / F5 / F9 / F11 / F22 / F91" },
  { grade: "Duplex / Super Duplex", spec: "ASTM A182 F51 (2205), F53 (2507), F55" },
  { grade: "Nickel Alloys", spec: "Monel 400, Inconel 625, Incoloy 825, Hastelloy C-276" },
  { grade: "Low Temperature", spec: "ASTM A350 LF1 / LF2 / LF3, A420 WPL6" },
];

function FlangesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <div className="relative bg-ink py-20 text-primary-foreground">
        <img
          src={flangesImage}
          alt="Forged flanges — WNRF, SORF, BLRF — Hiren Pipes & Fittings"
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
            <span>Flanges</span>
          </nav>
          <p className="mb-3 text-xs font-bold uppercase text-brand-pale">ASME B16.5 / ANSI B16.47 / DIN / BS 10</p>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Flanges</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Complete range of forged flanges in carbon steel, stainless steel, alloy steel, duplex and nickel alloys. All types, sizes (1/2" to 60") and pressure ratings (150# to 2500#).
          </p>
        </div>
      </div>

      {/* Flange types */}
      <div className="relative bg-white py-16">
        <div className="absolute inset-0 z-0 bg-dot-pattern opacity-[0.15]"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-10 text-2xl font-extrabold text-brand-deep">Flange Types & Specifications</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {flangeTypes.map((f) => (
            <article key={f.name} className="rounded-xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur-lg transition-shadow hover:shadow-md">
              <h3 className="text-base font-extrabold text-brand-deep">{f.name}</h3>
              <div className="mt-3 space-y-2 text-xs text-steel">
                <p><span className="font-bold uppercase text-brand-light">Standard: </span>{f.std}</p>
                <p><span className="font-bold uppercase text-brand-light">Size: </span>{f.sizes}</p>
                <p><span className="font-bold uppercase text-brand-light">Pressure: </span>{f.pressure}</p>
                <p className="mt-3 leading-relaxed">{f.desc}</p>
                <p className="text-brand text-[10px] font-bold uppercase">Use: {f.use}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Materials */}
        <div className="mt-14">
          <h2 className="mb-6 text-2xl font-extrabold text-brand-deep">Material Grades Available</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {materials.map((m) => (
              <div key={m.grade} className="border-l-2 border-brand-light bg-steel-light p-4">
                <p className="text-sm font-bold text-brand-deep">{m.grade}</p>
                <p className="mt-1 text-xs leading-relaxed text-steel">{m.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Related */}
      <div className="border-t border-border bg-steel-light py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-6 text-lg font-extrabold text-brand-deep">Related Products</h2>
          <div className="flex flex-wrap gap-3">
            {[
              ["Pipes & Tubes", "/products/pipes-tubes"],
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
          <h2 className="text-2xl font-extrabold">Request a quote for flanges</h2>
          <p className="mt-2 text-sm text-primary-foreground/70">Specify type, standard, material grade, size and pressure rating — we'll quote promptly.</p>
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

