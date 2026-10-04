import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail } from "lucide-react";
import fittingsImage from "../../assets/buttweld-fittings.jpg";

const SITE_URL = "https://hirenpipes.in";
const title = "Pipe Fittings Supplier India | Buttweld, Forged Fittings, Olets | Hiren Pipes";
const description =
  "Manufacturer, stockist & exporter of pipe fittings — Buttweld elbows (45°/90°/180°), tees, reducers, caps, stub ends. Forged socket weld & threaded fittings. Weldolet, Sockolet, Thredolet. Carbon steel, SS, alloy steel. ASME A234, A182, MSS SP-97. Ankleshwar, Gujarat.";

export const Route = createFileRoute("/products/pipe-fittings")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SITE_URL}/products/pipe-fittings` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/products/pipe-fittings` }],
  }),
  component: PipeFittingsPage,
});

const buttweldTypes = [
  { name: "45° Elbow (SR/LR)", desc: "Short Radius (1D) and Long Radius (1.5D) elbows. Available seamless and ERW. Degrees: 22.5°, 45°, 90°, 180°." },
  { name: "90° Elbow (SR/LR)", desc: "Most widely used fitting. Long radius preferred for general piping; short radius where space is limited." },
  { name: "180° Return Bend", desc: "U-bend used to reverse flow direction. Available in short and long radius configurations." },
  { name: "Equal Tee", desc: "All three outlets of same size. Used for branching flow in the same direction and 90° angle." },
  { name: "Reducing / Unequal Tee", desc: "Branch outlet smaller than run pipe. Replaces a combination of full-size tee and reducer." },
  { name: "Concentric Reducer", desc: "Both ends share the same centreline. Used for horizontal lines where drainage is not a concern." },
  { name: "Eccentric Reducer", desc: "Flat on one side. Used for horizontal lines where proper drainage or air venting is required." },
  { name: "End Cap", desc: "Caps the end of a pipe. Available with flat or rounded profile. Used to terminate pipe runs." },
  { name: "Short / Long Stub End", desc: "Used with lap joint flanges. Provides a rotating flange option. Available in short and long pattern." },
  { name: "Equal Cross", desc: "Four-way fitting for connecting four pipes at right angles. Less common but used in manifolds." },
];

const forgedTypes = [
  "SW / Threaded 90° Elbow",
  "SW / Threaded 45° Elbow",
  "SW / Threaded Tee",
  "SW / Threaded Cross",
  "SW / Threaded Street Elbow",
  "SW Half & Full Coupling",
  "SW / Threaded Pipe Cap",
  "SW / Threaded Union",
  "SW / Threaded Pipe Nipple",
  "Threaded Bushing",
  "Threaded Hex Nipple",
  "Threaded Hex Plug",
];

const oletTypes = [
  { name: "Weldolet", desc: "Branch connection welded to run pipe. For butt-weld branch connections. Available in 1/2\" to 24\"." },
  { name: "Sockolet", desc: "Socket weld branch connection. For smaller bore branches from large-diameter run pipes." },
  { name: "Thredolet", desc: "Threaded branch connection. For small bore threaded branches in low-pressure service." },
  { name: "Elbolet", desc: "Installed on a 90° elbow to provide a branch connection on the elbow body." },
  { name: "Nipolet", desc: "A nipple with an olet body. Provides a branch and a valve take-off point." },
  { name: "Latrolet", desc: "Provides a 45° branch connection from the main pipe run." },
];

const materials = [
  { cat: "Carbon Steel", spec: "ASME/ASTM A234 WPB/WPC · A694 F42/46/52/56/60/65/70 · A420 WPL6, WPL3 · A350 LF2/LF3" },
  { cat: "Stainless Steel", spec: "ASTM A403 WP304/304L/304H/316/316L/317/317L/321/310S/347/904L · A182 F304–F347" },
  { cat: "Alloy Steel", spec: "ASME/ASTM A234 WP1/WP91 · A182 F1/F5/F9/F11/F22/F91" },
  { cat: "High Yield (API)", spec: "ASTM A860 WPHY 42/46/52/56/60/65/70 for pipeline fittings" },
  { cat: "Duplex / Super Duplex", spec: "ASTM A815 WP-S31803 (2205), WP-S32750 (2507)" },
  { cat: "Nickel Alloys", spec: "Monel 400, Inconel 625, Incoloy 825, Hastelloy C-276, Titanium Gr.1/2" },
];

function PipeFittingsPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-ink py-20 text-primary-foreground">
        <img
          src={fittingsImage}
          alt="Buttweld pipe fittings — elbows, tees, reducers — Hiren Pipes & Fittings"
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
            <span>Pipe Fittings</span>
          </nav>
          <p className="mb-3 text-xs font-bold uppercase text-brand-pale">Buttweld · Forged · Olets · All Materials</p>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Pipe Fittings</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Full range of buttweld pipe fittings (seamless up to 24", ERW up to 48"), forged socket weld and threaded fittings (1/8" to 4"), and olet branch fittings. All materials and pressure classes.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 space-y-14">
        {/* Buttweld */}
        <section>
          <h2 className="mb-2 text-2xl font-extrabold text-brand-deep">Buttweld Pipe Fittings</h2>
          <p className="mb-6 text-sm text-steel">ASME B16.9 · Dimensions: ASME 16.11 · Size: Seamless up to 24", ERW up to 48" · Process: Seamless (SMLS), ERW, Fabricated</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {buttweldTypes.map((t) => (
              <div key={t.name} className="border border-border p-4">
                <h3 className="text-sm font-extrabold text-brand-deep">{t.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-steel">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Forged */}
        <section>
          <h2 className="mb-2 text-2xl font-extrabold text-brand-deep">Forged Pipe Fittings</h2>
          <p className="mb-6 text-sm text-steel">ASME B16.11 · MSS SP-79, SP-83, SP-95 · Size: 1/8" NB to 4" NB · Pressure: 3000 LBS / 6000 LBS / 9000 LBS</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {forgedTypes.map((t) => (
              <div key={t} className="border-l-2 border-brand-light pl-3 py-1 text-sm text-steel">{t}</div>
            ))}
          </div>
        </section>

        {/* Olets */}
        <section>
          <h2 className="mb-2 text-2xl font-extrabold text-brand-deep">Olet Fittings (Branch Connections)</h2>
          <p className="mb-6 text-sm text-steel">ASME B16.11 · MSS SP-97 · Size: 1/2" to 24" · Pressure: 3000 / 6000 / 9000 LBS</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {oletTypes.map((o) => (
              <div key={o.name} className="border border-border p-4">
                <h3 className="text-sm font-extrabold text-brand-deep">{o.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-steel">{o.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Materials */}
        <section>
          <h2 className="mb-6 text-2xl font-extrabold text-brand-deep">Material Grades Available</h2>
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

      {/* Brands */}
      <div className="border-t border-border bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-6 text-xl font-extrabold text-brand-deep">Brands We Stock</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Hiren Metal & Tools", "Metal Tube & Fittings", "Sankalp Engineers",
              "Alliance Engineering", "ACE Engineers", "CD Metal Industries",
              "Lal Metal Forge", "Hindon Forge", "United Forge Industries"
            ].map((brand) => (
              <span key={brand} className="bg-steel-light px-4 py-2 text-sm font-semibold text-brand-deep border border-border/50 shadow-sm">
                {brand}
              </span>
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
              ["Pipes & Tubes", "/products/pipes-tubes"],
              ["Flanges", "/products/flanges"],
              ["Valves", "/products/valves"],
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
          <h2 className="text-2xl font-extrabold">Request a quote for pipe fittings</h2>
          <p className="mt-2 text-sm text-primary-foreground/70">Specify type, material, size, schedule and end connection — we'll quote within 24 hours.</p>
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



