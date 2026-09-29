import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { SiteLayout } from "../components/SiteLayout";
import inspectionImage from "../assets/quality-inspection.jpg";

const SITE_URL = "https://hirenpipes.in";
const title = "Quality Assurance | TPI LLOYDS, EIL, TUV, Bureau Veritas | Hiren Pipes";
const description =
  "Hiren Pipes & Fittings quality assurance programme — documented QA manual, third-party inspection (TPI) through LLOYDS, EIL, TUV and Bureau Veritas. Material traceability, Mill Test Certificates (MTC), dimensional checks and mechanical property verification.";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SITE_URL}/quality` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/quality` }],
  }),
  component: QualityPage,
});

const tpiAgencies = [
  { name: "LLOYDS Register", desc: "International classification society providing TPI and certification for oil & gas and process industries." },
  { name: "EIL (Engineers India Limited)", desc: "Government of India undertaking providing TPI for PSU projects, refineries and petrochemical plants." },
  { name: "TUV (TÜV Rheinland / SÜD)", desc: "German certification and testing body providing international quality assurance and certification." },
  { name: "Bureau Veritas (BV)", desc: "International TIC group providing third-party inspection for oil & gas, power and process industries." },
  { name: "SGS", desc: "World's leading inspection, verification, testing and certification company." },
  { name: "Intertek", desc: "Provides quality assurance and testing services for industrial piping products." },
];

const qaPoints = [
  "Approved Quality Assurance Manual covering manufacturing, sales and service procedures",
  "Strict dimensional verification as per ASME / ASTM / API / IS standards",
  "Mechanical property verification — tensile, hardness, yield and elongation testing",
  "Chemical composition analysis via spectrometer / PMI (Positive Material Identification)",
  "Material Test Certificates (MTC) from approved mills — 100% traceable",
  "Non-Destructive Testing (NDT): Radiography (RT), Ultrasonic Testing (UT), Dye Penetrant (DPT), Magnetic Particle (MPT)",
  "Hydrostatic pressure testing as per applicable standards",
  "Visual and surface finish inspection including coating thickness measurement",
  "Third-party pre-shipment inspection on request",
  "Packing, marking and dispatch as per purchase order specifications",
];

const materialRanges = [
  { cat: "Carbon Steel", grades: "Mild Steel (MS), Carbon Steel (CS), EN series, ASTM / ASME grades" },
  { cat: "Alloy Steel", grades: "Chrome-Moly (Cr-Mo) grades P5, P9, P11, P22, P91; F5, F9, F11, F22, F91" },
  { cat: "Stainless Steel", grades: "Austenitic SS 304/304L/304H/316/316L/317/321/310S/347/904L" },
  { cat: "Duplex & Super Duplex", grades: "UNS S31803 (2205), UNS S32750 (2507), UNS S32760" },
  { cat: "Nickel Alloys", grades: "Nickel 200/201, Monel 400/K500, Inconel 600/625/825, Hastelloy C-276/C-22" },
  { cat: "Titanium", grades: "Grade 1, Grade 2, Grade 4, Grade 7 (Pd alloy)" },
  { cat: "GI (Galvanized Iron)", grades: "Hot-dip galvanized and electrolytic galvanized finishes" },
  { cat: "Non-Ferrous", grades: "Copper, Brass, Bronze, Aluminium — pipes, fittings and flanges" },
];

function QualityPage() {
  return (
    <SiteLayout>
      <div className="bg-brand-deep py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="mb-4 text-xs text-primary-foreground/50" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span>Quality</span>
          </nav>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Quality Assurance</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            "The right product, at the right time, with complete customer satisfaction." — Our commitment since 1990.
          </p>
        </div>
      </div>

      {/* QA overview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-3 text-xs font-bold uppercase text-brand-light">Quality system</p>
            <h2 className="text-3xl font-extrabold text-brand-deep sm:text-4xl">
              Dependable supply for critical infrastructure
            </h2>
            <p className="mt-5 leading-relaxed text-steel">
              Our quality assurance programme is documented in an approved manual covering all manufacturing, sales and service procedures. We exercise stringent quality control for accurate dimensions and mechanical properties at every stage — from sourcing to dispatch.
            </p>
            <ul className="mt-8 space-y-3">
              {qaPoints.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center bg-brand-light text-primary-foreground">
                    <Check size={12} />
                  </span>
                  <p className="text-sm leading-relaxed text-steel">{pt}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src={inspectionImage}
              alt="Quality inspection of industrial pipe fittings — Hiren Pipes & Fittings"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
              width="900"
              height="1125"
            />
            <blockquote className="mt-4 bg-brand-deep p-6 text-primary-foreground">
              "The right product, at the right time, with complete customer satisfaction."
              <footer className="mt-3 text-xs font-bold uppercase text-brand-pale">
                — Hiren Pipes & Fittings commitment
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* TPI Agencies */}
      <section className="bg-steel-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-bold uppercase text-brand-light">Third-party inspection</p>
          <h2 className="mb-10 text-3xl font-extrabold text-brand-deep">Inspection through reputed TPI agencies</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tpiAgencies.map((a) => (
              <div key={a.name} className="border border-border bg-background p-6">
                <h3 className="text-base font-extrabold text-brand-deep">{a.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="mb-8 text-2xl font-extrabold text-brand-deep">Material Range</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {materialRanges.map((m) => (
            <div key={m.cat} className="border-l-2 border-brand-light bg-steel-light p-4">
              <p className="text-sm font-bold text-brand-deep">{m.cat}</p>
              <p className="mt-1 text-xs leading-relaxed text-steel">{m.grades}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/products" className="inline-flex items-center gap-2 bg-brand-deep px-5 py-3 text-xs font-bold uppercase text-primary-foreground hover:bg-brand">
            View products <ArrowRight size={14} />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 border border-brand-deep px-5 py-3 text-xs font-bold uppercase text-brand-deep hover:bg-brand-deep hover:text-primary-foreground">
            Request TPI quotation
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
