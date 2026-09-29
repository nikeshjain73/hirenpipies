import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { SiteLayout } from "../../components/SiteLayout";
import gasketsImage from "../../assets/gaskets.avif";

const SITE_URL = "https://hirenpipes.in";
const title = "Gaskets & Sealing Supplier India | Spiral Wound, RTJ, MIJ Gaskets | Hiren Pipes";
const description =
  "Stockist & supplier of gaskets — Spiral Wound Gaskets, Ring Type Joint (RTJ), Kammprofile, Heat Exchanger, Double Jacketed, Insulating Kit Gaskets, Monolithic Insulation Joints (MIJ). PTFE, Graphite, Non-Asbestos, Ceramic. ANSI B16.20. Ankleshwar, Gujarat.";

export const Route = createFileRoute("/products/gaskets")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SITE_URL}/products/gaskets` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/products/gaskets` }],
  }),
  component: GasketsPage,
});

const gasketTypes = [
  {
    name: "Spiral Wound Gaskets",
    std: "ANSI B16.20 / ASME B16.20",
    desc: "Created by winding alternating strips of metal and filler material. Consists of a steel centering (outer) ring, a spiral wound sealing strip and an inner ring. Ideal for fluctuating temperature and pressure conditions.",
    fillers: "Graphite, PTFE, Non-Asbestos, Ceramic",
    faces: "RF (Raised Face), FF (Flat Face), RTJ (Ring Type Joint)",
    materials: "SS 304, SS 316, Monel, Inconel — winding; CS, SS — rings",
  },
  {
    name: "Ring Type Joint Gaskets (RTJ)",
    std: "ASME B16.20",
    desc: "Metallic ring gaskets that seat in grooves machined on the flange face. Provides superior sealing under high pressure and temperature. Types: Oval and Octagonal ring profiles.",
    fillers: "Solid metal (no filler)",
    faces: "RTJ groove only",
    materials: "Soft Iron, SS 304/316, Monel 400, Inconel 625",
  },
  {
    name: "Kammprofile Gaskets",
    std: "DIN 2697",
    desc: "Solid metal core with concentric grooves on both faces, with a soft sealing layer. Combines metal gasket durability with soft material sealing. Reusable in many applications.",
    fillers: "Graphite, PTFE layers bonded to grooved metal core",
    faces: "RF / FF / tongue & groove",
    materials: "CS, SS 304/316, Monel, Inconel core",
  },
  {
    name: "Heat Exchanger Gaskets",
    std: "As per HEI / TEMA",
    desc: "Designed for shell & tube heat exchangers and other heat transfer equipment. Available in full-face and inside-bolt-circle designs.",
    fillers: "Non-Asbestos, PTFE, Graphite, Rubber",
    faces: "Full Face / Inside Bolt Circle",
    materials: "Non-metallic and semi-metallic",
  },
  {
    name: "Double Jacketed Gaskets",
    std: "ASME B16.20",
    desc: "Two metal jackets with a soft filler core. Provides excellent temperature and pressure resistance. Good for heat exchangers and high-pressure vessels.",
    fillers: "Graphite, Asbestos, Non-Asbestos core",
    faces: "RF / FF",
    materials: "SS 304/316, CS, Monel metal jacket",
  },
  {
    name: "Insulating Kit Gaskets",
    std: "As per project spec",
    desc: "Prevents galvanic corrosion between dissimilar metals. Includes insulating gasket, bolt isolation sleeves and washers. Used at cathodic protection interfaces.",
    fillers: "G-10/G-11 fiberglass, PTFE, Phenolic",
    faces: "RF / FF",
    materials: "Fiberglass / Phenolic / PTFE",
  },
  {
    name: "Monolithic Insulation Joints (MIJ)",
    std: "As per project spec",
    desc: "Pre-fabricated, factory-tested dielectric isolation joints for pipelines. Used for cathodic protection isolation at buried pipeline transitions from above-ground to buried sections.",
    fillers: "Epoxy resin / polyurethane",
    faces: "Butt-weld ends",
    materials: "CS / SS body with insulating filler",
  },
];

const sheetMaterials = [
  { name: "Non-Asbestos Gasket Sheets", spec: "Available in various grades for different chemical compatibility. Blue, white and yellow grades." },
  { name: "PTFE / Teflon Sheets & Tapes", spec: "Chemical-resistant, food-grade. Full-face, inside bolt circle and custom shapes. Also PTFE rope/cord." },
  { name: "Graphite / Graphoil Sheets", spec: "Excellent for high-temperature steam, chemical and refinery service. Flexible graphite with SS tanged insert." },
  { name: "Asbestos Sheets", spec: "Available on request for specific legacy applications where still permissible." },
  { name: "Rubber Sheets (EPDM / Neoprene)", spec: "For low-pressure water, air and mild chemicals. Available in different hardness grades." },
  { name: "Ceramic / High-Temp Sheets", spec: "For extreme temperature service above 500°C. Used in furnaces, boilers and kilns." },
  { name: "Gland Packing Rope", spec: "Braided packing rope for valve glands and pump stuffing boxes. Graphite, PTFE, Kevlar options." },
];

function GasketsPage() {
  return (
    <SiteLayout>
      <div className="relative bg-ink py-20 text-primary-foreground">
        <img
          src={gasketsImage}
          alt="Industrial gaskets and sealing — Spiral wound, RTJ — Hiren Pipes & Fittings"
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
            <span>Gaskets & Sealing</span>
          </nav>
          <p className="mb-3 text-xs font-bold uppercase text-brand-pale">Spiral Wound · RTJ · Kammprofile · MIJ</p>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Gaskets & Sealing Products</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Full range of gaskets and sealing products for all flange face types, pressure ratings and temperature ranges. ANSI B16.20 standard spiral wound and RTJ gaskets in stock.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 space-y-14">
        {/* Gasket types */}
        <section>
          <h2 className="mb-8 text-2xl font-extrabold text-brand-deep">Gasket Types</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {gasketTypes.map((g) => (
              <article key={g.name} className="rounded-xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-lg transition-shadow hover:shadow-md">
                <h3 className="text-base font-extrabold text-brand-deep">{g.name}</h3>
                <p className="mt-1 text-[10px] font-bold uppercase text-brand-light">{g.std}</p>
                <p className="mt-3 text-sm leading-relaxed text-steel">{g.desc}</p>
                <div className="mt-4 space-y-1 text-xs">
                  <p><span className="font-bold text-brand-deep">Filler: </span><span className="text-steel">{g.fillers}</span></p>
                  <p><span className="font-bold text-brand-deep">Face types: </span><span className="text-steel">{g.faces}</span></p>
                  <p><span className="font-bold text-brand-deep">Materials: </span><span className="text-steel">{g.materials}</span></p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Sheet materials */}
        <section>
          <h2 className="mb-6 text-2xl font-extrabold text-brand-deep">Gasket Sheet Materials & Cut Gaskets</h2>
          <p className="mb-6 text-sm text-steel">Cut soft gaskets manufactured as per ANSI B16.20 covering RF & FF type flanges. Custom shapes and sizes available on request.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sheetMaterials.map((s) => (
              <div key={s.name} className="border-l-2 border-brand-light bg-steel-light p-4">
                <p className="text-sm font-bold text-brand-deep">{s.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-steel">{s.spec}</p>
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
              ["Flanges", "/products/flanges"],
              ["Valves", "/products/valves"],
              ["Fasteners & Studs", "/products/fasteners"],
              ["Structural Steel", "/products/structural-steel"],
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
          <h2 className="text-2xl font-extrabold">Get gasket specifications & pricing</h2>
          <p className="mt-2 text-sm text-primary-foreground/70">Share flange size, pressure class, material and face type — we'll respond promptly.</p>
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


