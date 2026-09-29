import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { SiteLayout } from "../../components/SiteLayout";

const SITE_URL = "https://hirenpipes.in";
const title = "Structural Steel & Metal Gratings Supplier India | Hiren Pipes & Fittings";
const description =
  "Stockist & supplier of structural steel — plates, sheets, coils, round/flat/hex/square bars, angles, channels, beams, square & rectangular pipes. Electroforged & manual gratings, stair treads, walkways, handrails, ladders. MS, CS, SS, FRP. Ankleshwar, Gujarat.";

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

const steelProducts = [
  { cat: "Plates / Sheets / Coils", items: ["HR (Hot Rolled) Plates & Sheets", "CR (Cold Rolled) Sheets & Coils", "Chequered / Tear Drop Plates", "Stainless Steel Sheets (2B, BA, Mirror, Matt finish)", "Aluminium Sheets & Coils", "GI (Galvanized) Sheets & Coils"] },
  { cat: "Bars", items: ["Round Bars (MS, CS, SS, Alloy Steel)", "Flat Bars", "Hex Bars", "Square Bars", "TMT / CTD Bars", "Bright Bars"] },
  { cat: "Structural Sections", items: ["Angles (Equal & Unequal leg)", "Channels (ISMC, ISSC)", "Beams (ISMB, ISWB, ISHB)", "Joist Sections", "T-Sections", "Z-Sections"] },
  { cat: "Pipes (Structural)", items: ["Square Hollow Section (SHS)", "Rectangular Hollow Section (RHS)", "Circular Hollow Section (CHS)", "ERW Square & Rectangular Tubes", "Scaffolding Pipes"] },
];

const gratingSpecs = [
  { spec: "Type", val: "Electroforged (plain/serrated) and Manual" },
  { spec: "Bearing Bar Size", val: "25×3, 25×5, 25×6, 30×3, 30×5, 30×6, 40×5, 40×6, 50×6, 75×8, 75×10mm" },
  { spec: "Cross Bar", val: "6, 8, 10mm square twisted bar; 8, 10, 12mm TMT round; flat bar 12×3 to 40×6mm" },
  { spec: "Frame Bar", val: "25×5 to 75×10mm flat bars (same range as bearing bars)" },
  { spec: "Panel Size", val: "Standard: 1m × 1m (manual); 1m × 6m (electroforged); custom sizes available" },
  { spec: "Finish", val: "Hot Dip Galvanized (HDG), Red Oxide primed, Painted, Black (bare) condition" },
  { spec: "Materials", val: "Mild Steel (MS), Carbon Steel (CS), Stainless Steel (SS 304/316), FRP" },
];

const gratingApplications = [
  "Oil & Gas platforms", "Marine & Ship decks", "Power plant walkways", "Wastewater treatment plants",
  "Stair treads", "Bridge walkways", "Industrial flooring", "Tank landings",
  "Trench gratings", "Drain covers", "Access platforms", "Mezzanine floors",
];

const handralingItems = [
  "Handrail pipes (MS, GI, SS)", "Pipe fittings for handrailing (elbows, tees, flanges)",
  "Toe guard flat bars", "Kick plates / Flat guard",
  "Ladders & ladder rungs", "Safety cages for vertical ladders",
  "Access platforms", "Stair stringers",
];

const surfaceFinishes = [
  { finish: "2B (Mill finish)", mat: "Stainless steel sheets — smooth, cold-rolled" },
  { finish: "BA (Bright Annealed)", mat: "Mirror-like reflective finish for SS sheets" },
  { finish: "Matt / No.4 Brushed", mat: "Directional brushed finish for SS sheets" },
  { finish: "Mirror / Silver", mat: "Highly polished decorative SS finish" },
  { finish: "HR (Hot Rolled)", mat: "MS/CS plates and sections, scale surface" },
  { finish: "CR (Cold Rolled)", mat: "Smooth, tight-tolerance MS/CS sheets" },
  { finish: "Coloured / PVC coated", mat: "Pre-painted galvanized steel sheets" },
];

function StructuralSteelPage() {
  return (
    <SiteLayout>
      <div className="bg-brand-deep py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="mb-4 text-xs text-primary-foreground/50" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-primary-foreground">Products</Link>
            <span className="mx-2">/</span>
            <span>Structural Steel & Gratings</span>
          </nav>
          <p className="mb-3 text-xs font-bold uppercase text-brand-pale">MS · CS · SS · Non-Ferrous · FRP</p>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Structural Steel & Metal Gratings</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Complete range of structural steel — plates, bars, angles, channels, beams and hollow sections. Electroforged and manual gratings, handrails, platforms and access ladders in MS, CS, SS and FRP.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 space-y-14">
        {/* Steel products */}
        <section>
          <h2 className="mb-8 text-2xl font-extrabold text-brand-deep">Structural Steel Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steelProducts.map((s) => (
              <div key={s.cat} className="rounded-xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur-lg transition-shadow hover:shadow-md">
                <h3 className="text-sm font-extrabold uppercase text-brand-deep">{s.cat}</h3>
                <ul className="mt-3 space-y-1">
                  {s.items.map((item) => (
                    <li key={item} className="text-xs text-steel">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="mb-4 text-lg font-extrabold text-brand-deep">Surface Finishes Available</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {surfaceFinishes.map((f) => (
                <div key={f.finish} className="border-l-2 border-brand-light bg-steel-light p-3">
                  <p className="text-xs font-bold text-brand-deep">{f.finish}</p>
                  <p className="mt-0.5 text-[11px] text-steel">{f.mat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gratings */}
        <section>
          <h2 className="mb-3 text-2xl font-extrabold text-brand-deep">Metal Gratings</h2>
          <p className="mb-6 text-sm text-steel">Electroforged (welded) and manual (hand-assembled) gratings manufactured to standard and custom dimensions.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {gratingSpecs.map((s) => (
              <div key={s.spec} className="flex gap-4 border-b border-border pb-4">
                <span className="w-40 shrink-0 text-xs font-bold uppercase text-brand-deep">{s.spec}</span>
                <span className="text-xs text-steel">{s.val}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="mb-4 text-base font-bold uppercase text-brand-deep">Grating Applications</h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {gratingApplications.map((a) => (
                <div key={a} className="border border-border px-3 py-2 text-xs text-steel">• {a}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Handrailing */}
        <section>
          <h2 className="mb-6 text-2xl font-extrabold text-brand-deep">Handrailing, Ladders & Platforms</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {handralingItems.map((h) => (
              <div key={h} className="border-l-2 border-brand-light pl-3 py-1 text-xs text-steel">{h}</div>
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

      <div className="bg-brand-deep py-12 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-extrabold">Request structural steel & grating pricing</h2>
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


