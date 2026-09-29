import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "../../components/SiteLayout";
import pipesImage from "../../assets/carbon-steel-pipes.jpg";
import flangesImage from "../../assets/forged-flanges.jpg";
import fittingsImage from "../../assets/buttweld-fittings.jpg";
import valvesImage from "../../assets/valves.avif";
import fastenersImage from "../../assets/fasteners.avif";
import gasketsImage from "../../assets/gaskets.avif";

const SITE_URL = "https://hirenpipes.in";
const title = "Industrial Pipes, Flanges, Fittings & Valves Supplier | Hiren Pipes";
const description =
  "Complete product catalogue — industrial pipes & tubes, flanges, pipe fittings, valves, fasteners, gaskets and structural steel. ASTM / ASME / API / IS standards. Manufacturer, exporter, stockist from Ankleshwar, Gujarat.";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SITE_URL}/products` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/products` }],
  }),
  component: ProductsPage,
});

const allProducts = [
  {
    title: "Pipes & Tubes",
    image: pipesImage,
    href: "/products/pipes-tubes",
    tag: "ASTM / API / IS",
    desc: "Carbon steel seamless, alloy steel, stainless steel, nickel-based, MS ERW, GI, large-diameter spiral welded and square/rectangular pipes. API 5L, IS:1239, IS:3589.",
    standards: ["API 5L X42–X79 PSL1/PSL2", "IS:1239 Light/Medium/Heavy", "ASTM A106/A53, A335, A312"],
  },
  {
    title: "Flanges",
    image: flangesImage,
    href: "/products/flanges",
    tag: "ASME B16.5 / ANSI B16.47",
    desc: "Weld neck, slip-on, blind, socket weld, lap joint, plate, reducing, RTJ, tongue & groove, male & female, DIN and BS 10 flanges in all pressure classes.",
    standards: ["ANSI B16.47 / ASME B16.5", "150# to 2500# pressure class", "Carbon / Alloy / SS / Duplex"],
  },
  {
    title: "Pipe Fittings",
    image: fittingsImage,
    href: "/products/pipe-fittings",
    tag: "Buttweld / Forged / Olets",
    desc: "Elbows (45°/90°/180°), equal & reducing tees, concentric/eccentric reducers, end caps, stub ends, couplings, unions, bushings, plugs. Weldolet, Sockolet, Thredolet.",
    standards: ["ASME/ASTM A234 WPB/WPC", "ASME A182 F304/F316/F91", "MSS SP-97 Olets, ASME 16.11"],
  },
  {
    title: "Valves",
    image: valvesImage,
    href: "/products/valves",
    tag: "Gate / Globe / Ball / Butterfly",
    desc: "Gate, Globe, Ball, Butterfly, Check, Needle, Manifold, NRV, PRV, Sluice, Knife Gate, Safety, Pneumatic, Steam Trap (TDS), Strainers (Y & T), Actuator Valves, Sight Glass.",
    standards: ["Flanged / Butt-weld / Threaded", "Socket Weld / Forged ends", "Gear & Hand Wheel operated"],
  },
  {
    title: "Fasteners & Studs",
    image: fastenersImage,
    href: "/products/fasteners",
    tag: "ASTM A193 / A194",
    desc: "Hex head bolts, stud bolts, Allen cap, CSK, grub screws, eye bolts, nuts & washers, anchor fasteners, U-bolts, foundation bolts. All grades and surface coatings.",
    standards: ["ASTM A193 Gr. B7/L7/B8/B8M", "ASTM A194 Gr. 2H/7/8/8M", "Gr. 4.6 / 5.6 / 8.8 / 10.9 / 12.9"],
  },
  {
    title: "Gaskets & Sealing",
    image: gasketsImage,
    href: "/products/gaskets",
    tag: "Spiral Wound / RTJ / MIJ",
    desc: "Spiral wound gaskets, RTJ ring joint gaskets, Kammprofile, heat exchanger, double jacketed, insulating kit gaskets, monolithic insulation joints. All filler materials.",
    standards: ["ANSI B16.20 standard", "RF & FF type flanges", "PTFE / Graphite / Asbestos / Ceramic"],
  },
  // {
  //   title: "Structural Steel & Gratings",
  //   image: null,
  //   href: "/products/structural-steel",
  //   tag: "MS / CS / SS / FRP",
  //   desc: "Plates, sheets, coils, bars (round/flat/hex/square), angles, channels, beams. Electroforged & manual gratings, stair treads, walkway gratings, ladders, handrails.",
  //   standards: ["Mild Steel / Carbon Steel / SS", "Hot Rolled / Cold Rolled", "Hot Dip Galvanized finish available"],
  // },
];

function ProductCard({ p }: { p: typeof allProducts[0] }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-black/5 bg-white/70 backdrop-blur-lg shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
      {p.image && (
        <div className="relative aspect-video overflow-hidden bg-steel-light">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            width="600"
            height="338"
          />
          <span className="absolute bottom-0 left-0 bg-brand-deep px-3 py-1.5 text-[10px] font-bold uppercase text-primary-foreground">
            {p.tag}
          </span>
        </div>
      )}
      {!p.image && (
        <div className="flex aspect-video items-center justify-center bg-brand-deep/8 px-6">
          <span className="text-center text-xs font-bold uppercase text-brand-light">{p.tag}</span>
        </div>
      )}
      <div className="p-6">
        <h2 className="text-xl font-extrabold text-brand-deep">{p.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-steel">{p.desc}</p>
        <ul className="mt-4 space-y-1">
          {p.standards.map((s) => (
            <li key={s} className="text-xs text-brand font-semibold">• {s}</li>
          ))}
        </ul>
        <Link to={p.href} className="mt-5 inline-flex items-center gap-2 bg-brand-deep px-4 py-2.5 text-xs font-bold uppercase text-primary-foreground hover:bg-brand transition-colors">
          Full specifications <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}

function ProductsPage() {
  return (
    <SiteLayout>
      {/* Page header */}
      <div className="bg-brand-deep py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="mb-4 text-xs text-primary-foreground/50" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span>Products</span>
          </nav>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Product Portfolio</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            A total piping solution under one roof — pipes, fittings, flanges, valves, fasteners, gaskets and structural steel across all grades and standards.
          </p>
        </div>
      </div>

      {/* Products grid */}
      <section className="relative bg-white py-16">
        <div className="absolute inset-0 z-0 bg-dot-pattern opacity-[0.15]"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allProducts.map((p) => <ProductCard key={p.href} p={p} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="border-t border-border bg-steel-light py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-extrabold text-brand-deep">Need a specific grade or standard?</h2>
          <p className="mt-3 text-sm text-steel">Share your bill of materials — we'll respond with pricing and availability within 24 hours.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://wa.me/919586911478" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand-light px-6 py-3 text-xs font-bold uppercase text-primary-foreground hover:bg-brand">
              WhatsApp BOM
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-brand-deep px-6 py-3 text-xs font-bold uppercase text-brand-deep hover:bg-brand-deep hover:text-primary-foreground">
              Email enquiry
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
