import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail } from "lucide-react";
import valvesImage from "../../assets/valves.avif";

const SITE_URL = "https://hirenpipes.in";
const title = "Industrial Valves Supplier India | Gate, Globe, Ball, Butterfly Valves | Hiren Pipes";
const description =
  "Stockist & supplier of industrial valves — Gate, Globe, Ball, Butterfly, Check, Needle, NRV, PRV, Sluice, Knife Gate, Safety, Pneumatic, Steam Trap (TDS), Strainers (Y & T), Sight Glass. Flanged, butt-weld, threaded ends. Ankleshwar, Gujarat.";

export const Route = createFileRoute("/products/valves")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SITE_URL}/products/valves` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/products/valves` }],
  }),
  component: ValvesPage,
});

const valveTypes = [
  { name: "Gate Valves", desc: "On/off service valves with minimal pressure drop. Rising or non-rising stem. Suitable for high-temperature, high-pressure applications.", ends: "Flanged / BW / SW / Screwed", class: "150# to 2500#" },
  { name: "Globe Valves", desc: "Used for throttling and flow regulation. S, T or Y pattern available. Good sealing with rising stem design.", ends: "Flanged / BW / SW", class: "150# to 2500#" },
  { name: "Ball Valves", desc: "Quarter-turn on/off valves with low torque. Full bore and reduced bore. Floating and trunnion-mounted designs.", ends: "Flanged / BW / SW / Screwed", class: "150# to 2500#" },
  { name: "Butterfly Valves", desc: "Compact quarter-turn valves for large diameter lines. Wafer, lug and flanged types. Gear operated for large sizes.", ends: "Wafer / Lug / Flanged", class: "150# to 600#" },
  { name: "Check Valves (NRV)", desc: "Non-return valves preventing backflow. Swing check, tilting disc, piston (lift) check, and dual plate designs.", ends: "Flanged / BW / SW / Screwed", class: "150# to 2500#" },
  { name: "Needle Valves", desc: "Fine flow control with a needle-shaped plunger. Used for instrument connections, sampling and gauge isolation.", ends: "SW / Screwed", class: "3000# to 6000#" },
  { name: "Knife Gate Valves", desc: "Used in slurry, wastewater and pulp applications. Thin gate cuts through media. Bidirectional sealing.", ends: "Wafer / Flanged", class: "150# to 300#" },
  { name: "Safety / Relief Valves (PRV)", desc: "Automatically relieve excess pressure to protect piping and equipment. Spring-loaded, pilot-operated types.", ends: "Flanged / Screwed", class: "Per ASME B16.34" },
  { name: "Sluice Valves", desc: "Used in water supply and irrigation systems. Similar to gate valves but designed for low-pressure water service.", ends: "Flanged", class: "PN 6 to PN 25" },
  { name: "Pneumatic / Actuator Valves", desc: "Automated valves with pneumatic, electric or hydraulic actuators. Fail-safe open or closed designs.", ends: "Flanged / BW", class: "150# to 900#" },
  { name: "Steam Trap (TDS)", desc: "Thermodynamic, thermostatic and float & thermostatic types. Removes condensate from steam lines efficiently.", ends: "Flanged / SW / Screwed", class: "150# to 600#" },
  { name: "Strainers (Y & T Type)", desc: "Removes debris from pipelines to protect downstream equipment. Y-type and T-type basket strainers.", ends: "Flanged / SW / Screwed", class: "150# to 2500#" },
  { name: "Sight Glasses", desc: "Visual flow indicators. Borosilicate glass, tubular or reflex types. Used in chemical, pharmaceutical and food industry.", ends: "Flanged / SW / Screwed", class: "150# to 600#" },
  { name: "Manifold Valves", desc: "2-valve, 3-valve and 5-valve manifolds for pressure transmitter isolation. Direct mount and remote mount types.", ends: "Flanged / SW / Screwed", class: "3000# to 6000#" },
];

function ValvesPage() {
  return (
    <>
      <div className="relative bg-ink py-20 text-primary-foreground">
        <img
          src={valvesImage}
          alt="Industrial valves — Gate, Globe, Ball, Butterfly — Hiren Pipes & Fittings"
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
            <span>Valves</span>
          </nav>
          <p className="mb-3 text-xs font-bold uppercase text-brand-pale">Gate · Globe · Ball · Butterfly · Check & more</p>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Industrial Valves</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Complete range of industrial valves for process piping, utilities, oil & gas, power and water treatment. All end connections, materials and pressure classes.
          </p>
        </div>
      </div>

      <div className="relative bg-white py-16">
        <div className="absolute inset-0 z-0 bg-dot-pattern opacity-[0.15]"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valveTypes.map((v) => (
            <article key={v.name} className="rounded-xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur-lg transition-shadow hover:shadow-md">
              <h2 className="text-base font-extrabold text-brand-deep">{v.name}</h2>
              <p className="mt-2 text-xs leading-relaxed text-steel">{v.desc}</p>
              <div className="mt-3 space-y-1 text-[10px]">
                <p><span className="font-bold uppercase text-brand-light">End connections: </span><span className="text-steel">{v.ends}</span></p>
                <p><span className="font-bold uppercase text-brand-light">Pressure class: </span><span className="text-steel">{v.class}</span></p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-10">
          <h2 className="mb-6 text-xl font-extrabold text-brand-deep">Valve End Connections & Operations</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="bg-steel-light p-5">
              <h3 className="text-sm font-bold uppercase text-brand-deep">End Connections</h3>
              <ul className="mt-3 space-y-1 text-xs text-steel">
                <li>• Flanged End (RF, FF, RTJ)</li>
                <li>• Butt Weld End (BW)</li>
                <li>• Socket Weld End (SW)</li>
                <li>• Threaded / Screwed End</li>
                <li>• Wafer / Lug Type</li>
              </ul>
            </div>
            <div className="bg-steel-light p-5">
              <h3 className="text-sm font-bold uppercase text-brand-deep">Operation Types</h3>
              <ul className="mt-3 space-y-1 text-xs text-steel">
                <li>• Hand Wheel Operated</li>
                <li>• Gear Operated (bevel gear)</li>
                <li>• Pneumatic Actuator</li>
                <li>• Electric Actuator (MOV)</li>
                <li>• Hydraulic Actuator</li>
              </ul>
            </div>
            <div className="bg-steel-light p-5">
              <h3 className="text-sm font-bold uppercase text-brand-deep">Materials Available</h3>
              <ul className="mt-3 space-y-1 text-xs text-steel">
                <li>• Carbon Steel (WCB, WCC)</li>
                <li>• Stainless Steel (CF8, CF8M)</li>
                <li>• Alloy Steel (WC9, WC6)</li>
                <li>• Duplex / Super Duplex</li>
                <li>• Bronze / Cast Iron / CI</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Brands */}
      <div className="border-t border-border bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-6 text-xl font-extrabold text-brand-deep">Brands We Stock</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "L&T Valves", "Audco", "Sant", "Leader Valves", "DRP",
              "Hawa Valves", "Zoloto", "Marck Valves", "Aira Valves"
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
              ["Pipe Fittings", "/products/pipe-fittings"],
              ["Fasteners & Studs", "/products/fasteners"],
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
          <h2 className="text-2xl font-extrabold">Get valve specifications & pricing</h2>
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

