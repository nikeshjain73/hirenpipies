import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Download, Phone, Mail } from "lucide-react";

import heroImage from "../assets/hiren-pipes-refinery-hero.jpg";
import pipesImage from "../assets/carbon-steel-pipes.jpg";
import flangesImage from "../assets/forged-flanges.jpg";
import fittingsImage from "../assets/buttweld-fittings.jpg";

const SITE_URL = "https://hirenpipes.in";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const title = "Pipes, Flanges & Fittings Supplier in Ankleshwar | Hiren Pipes";
const description =
  "Manufacturer, exporter & stockist of industrial pipes, flanges, fittings, valves, grooved fittings and HDGI gratings from Ankleshwar, Gujarat. 36+ years, TPI support.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}/#business`,
          name: "Hiren Pipes & Fittings",
          sameAs: [
            "https://www.linkedin.com/in/hiren-r-shah-4792521b",
            "https://www.instagram.com/metal.hiren",
            "https://www.facebook.com/hirenmetal.in"
          ],
          taxID: "24DEXPS6269K1ZD",
          alternateName: "Hiren Metal & Tools",
          foundingDate: "1990",
          email: ["metal.hiren@gmail.com", "hiren_metal@yahoo.co.in"],
          telephone: ["+91-95869-11478", "+91-97129-32944"],
          url: SITE_URL,
          logo: `${SITE_URL}/logo.png`,
          image: OG_IMAGE,
          description,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plot No. 709/P, Godown No. 1, Opp. GIL Company, Near Mukti Chokdi, GIDC",
            addressLocality: "Ankleshwar",
            addressRegion: "Gujarat",
            postalCode: "393002",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 21.6318, longitude: 73.0019 },
          areaServed: ["India", "Overseas"],
        }),
      },
    ],
  }),
  component: HomePage,
});

const productCards = [
  {
    title: "Pipes & Tubes",
    image: pipesImage,
    tag: "ASTM / API / IS",
    href: "/products/pipes-tubes",
    summary: "Carbon steel seamless, alloy, SS, GI, ERW and spiral-welded pipes across all grades.",
    standards: ["API 5L X42–X79", "IS:1239 / IS:3589", "SMLS / ERW / SAW"],
  },
  {
    title: "Forged Flanges",
    image: flangesImage,
    tag: "ASME B16.5 / ANSI B16.47",
    href: "/products/flanges",
    summary: "Weld neck, slip-on, blind, socket weld, lap joint, RTJ, DIN and BS 10 flanges.",
    standards: ["WNRF / SORF / BLRF", "SWRF / LJ / RTJ", "DIN / BS 10"],
  },
  {
    title: "Pipe Fittings",
    image: fittingsImage,
    tag: "Buttweld / Forged / Olets",
    href: "/products/pipe-fittings",
    summary: "Elbows, tees, reducers, caps, stubs, unions, couplings, weldolets and sockolets.",
    standards: ["ASME A234 WPB", "ASME A182 F304/316", "MSS SP-97 Olets"],
  },
];

const moreProducts = [
  { name: "Valves & Strainers", href: "/products/valves", desc: "Gate, Globe, Ball, Butterfly, Check, Steam Trap, Strainers, Sight Glass." },
  { name: "Fasteners & Studs", href: "/products/fasteners", desc: "ASTM A193 B7/B8, A194 2H, SS 304/316, all grades and surface coatings." },
  { name: "Gaskets & Sealing", href: "/products/gaskets", desc: "Spiral wound, RTJ, Kammprofile, MIJ, PTFE, Graphite, Non-Asbestos sheets." },
  { name: "Grooved Fittings", href: "/products/grooved-fittings", desc: "Ductile iron grooved elbows, tees, couplings, reducers. FM & UL approved, 300 PSI." },
  { name: "HDGI Gratings", href: "/products/hdgi-gratings", desc: "Hot Dip Galvanized Iron gratings for walkways, platforms, drain covers. Custom sizes." },
  { name: "Structural Steel", href: "/products/structural-steel", desc: "Plates, bars, angles, channels, electroforged gratings, handrails, ladders." },
];

const industries = [
  "Oil & Gas", "Power Plants", "Chemicals", "Refineries",
  "Mining", "Distilleries", "Petrochemicals", "Pharmaceuticals",
  "Pulp & Paper", "Fertilizers", "Nuclear Plants", "Food Processing",
  "Water Treatment", "EPC Contractors",
];

const brandCategories = [
  {
    name: "Pipes & Tubes",
    brands: [
      "Jindal", "MSL (Maharashtra Seamless)", "JSL (Jindal Saw Ltd)",
      "Apollo", "Asian", "Suryaprakash", "Tata Steel", "ISMT",
      "Kirloskar Ferrous", "Surya Roshni"
    ]
  },
  {
    name: "Fitting & Flange",
    brands: [
      "Hiren Metal & Tools", "Metal Tube & Fittings", "Sankalp Engineers",
      "Alliance Engineering", "ACE Engineers", "CD Metal Industries",
      "Lal Metal Forge", "Hindon Forge", "United Forge Industries"
    ]
  },
  {
    name: "Fasteners",
    brands: [
      "Unbrako", "Sundram Fasteners", "TVS Fasteners", 
      "Precision Fasteners", "Raj Fasteners"
    ]
  },
  {
    name: "Stainless Steel",
    brands: [
      "Jindal Stainless (JSL)", "Swastico Pipes & Tubes", 
      "Venus Pipes & Tubes", "Ratnamani Metals & Tubes"
    ]
  },
  {
    name: "Structural Steel & Plates",
    brands: [
      "SAIL", "Tata Steel", "JSW", "AM/NS India",
      "Jindal Steel & Power (JSPL)", "RINL", "VIZAG", "APL Apollo"
    ]
  },
  {
    name: "Valves & Industrial Products",
    brands: [
      "L&T Valves", "Audco", "Sant", "Leader Valves", "DRP",
      "Hawa Valves", "Zoloto", "Marck Valves", "Aira Valves"
    ]
  },
  {
    name: "Gaskets",
    brands: [
      "Champion", "Spitmaan", "Uniklinger", "Goodrich", "Teadit"
    ]
  }
];

const stats = [
  ["36+", "Years experience"],
  ["10+", "Product groups"],
  ["India +", "Overseas supply"],
  ["TPI", "Inspection support"],
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section id="top" className="relative min-h-[680px] bg-ink">
        <img
          src={heroImage}
          alt="Industrial refinery piping — Hiren Pipes & Fittings, Ankleshwar"
          className="absolute inset-0 h-full w-full object-cover"
          width="1920"
          height="800"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_0%,color-mix(in_oklab,var(--ink)_88%,transparent)_42%,color-mix(in_oklab,var(--ink)_18%,transparent)_100%)]" />
        <div className="relative mx-auto flex min-h-[570px] max-w-7xl items-center px-4 py-20 sm:px-6 md:py-28">
          <div className="max-w-3xl text-primary-foreground">
            <div className="mb-6 inline-flex items-center gap-2 border border-primary-foreground/30 px-3 py-1 text-xs font-bold uppercase">
              <span className="size-2 bg-brand-light" /> Total Piping Solution Company · Legacy since 1990
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-7xl">
              Industrial piping solutions built on trust.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-xl">
              Pipes, fittings, flanges, valves, fasteners, gaskets and structural steel for demanding industrial projects across India and overseas.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/hiren-shah-catalogue.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-background px-6 py-4 text-sm font-bold uppercase text-brand-deep transition-colors hover:bg-brand-pale"
              >
                <Download size={18} /> Download catalogue
              </a>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/50 px-6 py-4 text-sm font-bold uppercase text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Explore products <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        {/* Stats bar */}
        <div className="relative border-t border-primary-foreground/15 bg-ink/70 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 md:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="border-l border-primary-foreground/10 px-3 py-6 last:border-r">
                <strong className="block font-heading text-2xl text-primary-foreground sm:text-3xl">{value}</strong>
                <span className="text-[10px] font-bold uppercase text-primary-foreground/55 sm:text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product cards — top 3 */}
      <section className="relative bg-white py-20 md:py-28">
        <div className="absolute inset-0 z-0 bg-dot-pattern opacity-[0.15]"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase text-brand-light">Product portfolio</p>
            <h2 className="max-w-2xl text-3xl font-extrabold text-brand-deep sm:text-4xl">
              Complete industrial piping packages
            </h2>
          </div>
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold uppercase text-brand-light hover:text-brand">
            View all products <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {productCards.map((p) => (
            <article key={p.title} className="group">
              <Link to={p.href} className="block">
                <div className="relative aspect-square overflow-hidden bg-steel-light">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width="816"
                    height="816"
                  />
                  <span className="absolute bottom-0 left-0 bg-brand-deep px-4 py-2 text-[10px] font-bold uppercase text-primary-foreground">
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-brand-deep group-hover:text-brand-light transition-colors">{p.title}</h3>
              </Link>
              <p className="mt-2 text-sm leading-relaxed text-steel">{p.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.standards.map((s) => (
                  <li key={s} className="border border-border px-2 py-1 text-[10px] font-bold uppercase text-brand">{s}</li>
                ))}
              </ul>
              <Link to={p.href} className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-light hover:text-brand">
                View details <ArrowRight size={12} />
              </Link>
            </article>
          ))}
        </div>

        {/* More products grid */}
        <div className="mt-14 grid gap-4 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {moreProducts.map((p) => (
            <Link key={p.href} to={p.href} className="group border border-border p-5 transition-colors hover:border-brand-light">
              <h3 className="text-sm font-extrabold uppercase text-brand-deep group-hover:text-brand-light transition-colors">{p.name}</h3>
              <p className="mt-2 text-s leading-relaxed text-steel">{p.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase text-brand-light">
                Learn more <ArrowRight size={10} />
              </span>
            </Link>
          ))}
        </div>
        </div>
      </section>

      {/* Why us — compact */}
      <section className="bg-steel-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-bold uppercase text-brand-light">Why Hiren Pipes</p>
          <h2 className="mb-8 text-2xl font-extrabold text-brand-deep sm:text-3xl">We do it for passion, not for competition.</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "36+ Years Experience", d: "Trusted since 1990 — quality, reliability and industry expertise." },
              { t: "Third-Party Inspection", d: "TPI through LLOYDS, EIL, TUV, Bureau Veritas on every project." },
              { t: "Earliest Deliveries", d: "Strategic GIDC, Ankleshwar location for fast India-wide dispatch." },
              { t: "Single Point Solution", d: "Pipes, fittings, flanges, valves, fasteners & gratings — one vendor." },
            ].map(({ t, d }) => (
              <div key={t} className="flex gap-3">
                <span className="mt-1 grid size-5 shrink-0 place-items-center bg-brand-light text-primary-foreground"><Check size={12} /></span>
                <div>
                  <p className="text-sm font-bold text-brand-deep">{t}</p>
                  <p className="mt-1 text-xs leading-relaxed text-steel">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <Link to="/about" className="inline-flex items-center gap-2 bg-brand-deep px-5 py-3 text-xs font-bold uppercase text-primary-foreground hover:bg-brand">
              About us <ArrowRight size={14} />
            </Link>
            <Link to="/quality" className="inline-flex items-center gap-2 border border-brand-deep px-5 py-3 text-xs font-bold uppercase text-brand-deep hover:bg-brand-deep hover:text-primary-foreground">
              Quality assurance
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="bg-white py-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between border-b border-border pb-4 mb-8">
            <h2 className="text-2xl font-extrabold text-brand-deep sm:text-3xl">Our Esteemed Clients</h2>
            <Link to="/clients" className="hidden sm:inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-light hover:text-brand">
              View all clients <ArrowRight size={12} />
            </Link>
          </div>
        </div>
        
        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden flex">
          <div className="flex animate-marquee gap-6 whitespace-nowrap min-w-max hover:[animation-play-state:paused] px-3">
            {[
              { src: "/clients/Arysta-LifeScience-Logo_LR-2.jpg", alt: "Arysta LifeScience" },
              { src: "/clients/Gmmco.png", alt: "Gmmco" },
              { src: "/clients/Rallis-Logo.png", alt: "Rallis" },
              { src: "/clients/Thermax-Logo.wine.svg", alt: "Thermax" },
              { src: "/clients/UPL_official_logo.svg", alt: "UPL" },
              { src: "/clients/cummins.jpg", alt: "Cummins" },
              { src: "/clients/amns.png", alt: "AMNS" },
              { src: "/clients/hindalco-Profile-2026a.png", alt: "Hindalco" },
              // Duplicate the list so it scrolls seamlessly without gaps
              { src: "/clients/Arysta-LifeScience-Logo_LR-2.jpg", alt: "Arysta LifeScience 2" },
              { src: "/clients/Gmmco.png", alt: "Gmmco 2" },
              { src: "/clients/Rallis-Logo.png", alt: "Rallis 2" },
              { src: "/clients/Thermax-Logo.wine.svg", alt: "Thermax 2" },
              { src: "/clients/UPL_official_logo.svg", alt: "UPL 2" },
              { src: "/clients/cummins.jpg", alt: "Cummins 2" },
              { src: "/clients/amns.png", alt: "AMNS 2" },
              { src: "/clients/hindalco-Profile-2026a.png", alt: "Hindalco 2" },
            ].map((c) => (
              <div key={c.alt} className="flex h-24 w-48 shrink-0 items-center justify-center p-4 border border-border">
                <img src={c.src} alt={c.alt} className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mt-6 sm:hidden text-center">
            <Link to="/clients" className="inline-flex items-center gap-2 bg-steel-light px-4 py-2 text-xs font-bold uppercase text-brand-deep hover:bg-brand-deep hover:text-primary-foreground">
              View all clients <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* Brands We Deal In */}
      <section className="bg-steel-light py-16 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center md:text-left">
            <p className="mb-3 text-xs font-bold uppercase text-brand-light">Brands & Manufacturers</p>
            <h2 className="text-2xl font-extrabold text-brand-deep sm:text-3xl">Premium Brands We Stock & Supply</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brandCategories.map((category) => (
              <div key={category.name} className="bg-white p-6 border border-border transition-colors hover:border-brand-light">
                <h3 className="mb-4 text-sm font-extrabold uppercase text-brand-deep border-b border-border pb-3">{category.name}</h3>
                <ul className="flex flex-wrap gap-2">
                  {category.brands.map((brand) => (
                    <li key={brand} className="bg-steel-light px-3.5 py-2 text-sm font-semibold text-brand-deep shadow-sm">
                      {brand}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="relative py-24 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Refinery background" className="h-full w-full object-cover object-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-brand-deep/95 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center md:text-left">
            <p className="mb-3 text-xs font-bold uppercase text-brand-pale">Industries we serve</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Materials and expertise for complex projects.</h2>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-primary-foreground/10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {industries.map((item, i) => (
              <div key={item} className="group border-b border-r border-primary-foreground/10 p-5 bg-white/5 backdrop-blur-md transition-all hover:bg-white/10 cursor-default">
                <span className="block text-[10px] text-brand-light transition-colors group-hover:text-white">{String(i + 1).padStart(2, "0")}</span>
                <strong className="mt-3 block text-xs tracking-wide">{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-bold uppercase text-brand-pale">Project enquiry</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Send us your requirement or bill of materials.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/75">
            From a single component to a complete piping package — rapid quotes, TPI support and competitive pricing.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://wa.me/919586911478" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand-light px-7 py-4 text-sm font-bold uppercase text-primary-foreground hover:bg-brand-deep">
              <Phone size={18} /> WhatsApp enquiry
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 px-7 py-4 text-sm font-bold uppercase hover:bg-primary-foreground/10">
              <Mail size={18} /> Email requirement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
