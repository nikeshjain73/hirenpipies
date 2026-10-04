import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Phone, Mail, ArrowRight } from "lucide-react";

import office1 from "../assets/Office_image/WhatsApp Image 2026-09-29 at 10.22.44 PM.jpeg";
import office2 from "../assets/Office_image/WhatsApp Image 2026-09-29 at 10.22.44 PM (1).jpeg";
import office3 from "../assets/Office_image/WhatsApp Image 2026-09-29 at 10.22.45 PM (2).jpeg";
import office4 from "../assets/Office_image/WhatsApp Image 2026-09-29 at 10.22.46 PM.jpeg";
import office5 from "../assets/Office_image/WhatsApp Image 2026-09-29 at 10.22.45 PM (3).jpeg";
import directorImg from "../assets/hiren-shah.jpg";

import { useState } from "react";

const SITE_URL = "https://hirenpipes.in";
const title = "About Hiren Pipes & Fittings | Industrial Piping Supplier Since 1990 | Ankleshwar";
const description =
  "Hiren Pipes & Fittings — Total Piping Solution Company. Built on the legacy of Hiren Metal & Tools founded in 1990 by Shri Ramesh V. Shah. Led by Mr. Hiren R. Shah. 36+ years experience. Manufacturer, exporter, stockist. GIDC Ankleshwar, Gujarat.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SITE_URL}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          mainEntity: {
            "@type": "Organization",
            name: "Hiren Pipes & Fittings",
            alternateName: "Hiren Metal & Tools",
            founder: {
              "@type": "Person",
              name: "Ramesh V. Shah"
            },
            employee: {
              "@type": "Person",
              name: "Hiren R. Shah",
              jobTitle: "Director"
            },
            foundingDate: "1990",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-95869-11478",
              contactType: "sales"
            }
          }
        }),
      },
    ],
  }),
  component: AboutPage,
});

const whyUs = [
  { t: "36+ Years Experience", d: "Trusted since 1990 — quality, reliability and deep industry expertise across piping & allied products." },
  { t: "Quality & Innovation", d: "TPI through LLOYDS, EIL, TUV, Bureau Veritas. Documented QA manual covering manufacturing, sales & service." },
  { t: "Timely / Earliest Deliveries", d: "Strategic GIDC, Ankleshwar location enables fastest dispatches across Gujarat and all of India." },
  { t: "Competitive Prices", d: "Direct stockist pricing with no compromise on material traceability or authenticity." },
  { t: "Single Point Solution", d: "Pipes, fittings, flanges, valves, fasteners, gaskets and structural steel — one vendor, one invoice." },
  { t: "Excellent Customer Responsiveness", d: "Rapid BOM quotes, MTC support and dedicated account management for every project." },
  { t: "Customization", d: "Customized flanges, fittings, gratings and fabricated products manufactured to exact project specifications." },
  { t: "Global Reach", d: "Domestic & overseas supply. International clients across multiple countries and industries." },
];

const officeImages = [
  { src: office1, alt: "Hiren Pipes & Fittings office — executive cabin, Ankleshwar Gujarat" },
  { src: office2, alt: "Hiren Pipes & Fittings office — director's cabin" },
  { src: office3, alt: "Hiren Pipes & Fittings office — meeting room" },
  { src: office4, alt: "Hiren Pipes & Fittings office — operations room, Ankleshwar GIDC" },
  { src: office5, alt: "Hiren Pipes & Fittings office — prayer area and entrance" },
];

function AboutPage() {
  const [activeImg, setActiveImg] = useState(0);
  return (
    <>
      {/* Page header */}
      <div className="bg-brand-deep py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="mb-4 text-xs text-primary-foreground/50" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span>About Us</span>
          </nav>
          <h1 className="text-4xl font-extrabold sm:text-5xl">About Hiren Pipes & Fittings</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            A new name. The same legacy. A stronger future. Total Piping Solution Company since 1990.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-3 text-xs font-bold uppercase text-brand-light">Our legacy</p>
            <h2 className="text-3xl font-extrabold text-brand-deep sm:text-4xl">
              "A New Name. The Same Legacy. A Stronger Future."
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-steel">
              <p>
                <strong className="text-ink">Hiren Pipes & Fittings</strong> is the new identity built on the strong legacy of <strong className="text-ink">Hiren Metal & Tools</strong>, a name trusted in the piping industry since <strong className="text-ink">1990</strong>. Founded by the visionary <strong className="text-ink">Shri Ramesh V. Shah</strong>, Hiren Metal & Tools earned a reputation for quality, reliability, and excellence in manufacturing, stocking, trading, and supplying piping and piping-related products across India.
              </p>
              <p>
                Carrying forward this legacy, <strong className="text-ink">Mr. Hiren R. Shah</strong> established Hiren Pipes & Fittings with a renewed vision to serve industries with modern solutions, faster deliveries, and an expanded product portfolio — while preserving the values of trust, integrity and customer commitment inherited from Hiren Metal & Tools.
              </p>
              <p>
                With over <strong className="text-ink">36 years of industry experience</strong>, we provide <strong className="text-ink">Total Piping Solutions</strong> under one roof — supplying MS, SS, CS, GI and Alloy Steel Pipes, Pipe Fittings, Flanges, Valves, Fasteners, Structural Steel, Plates, Gratings and Industrial Accessories to projects across India and overseas.
              </p>
              <blockquote className="border-l-4 border-brand-light pl-5 italic text-ink">
                "We do it for passion, not for competition."
              </blockquote>
            </div>
            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[["1990", "Founded"], ["36+", "Years exp."], ["10+", "Product groups"]].map(([v, l]) => (
                <div key={l}>
                  <strong className="block font-heading text-3xl text-brand-deep">{v}</strong>
                  <span className="text-xs font-bold uppercase text-steel">{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Office gallery */}
          <div className="space-y-3">
            <div className="relative overflow-hidden">
              <img
                src={officeImages[activeImg]!.src}
                alt={officeImages[activeImg]!.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
                width="900" height="675"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-brand-deep/80 px-4 py-2">
                <span className="text-[10px] font-bold uppercase text-primary-foreground/70">
                  Hiren Pipes & Fittings — Office, Ankleshwar GIDC, Gujarat
                </span>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {officeImages.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={`overflow-hidden border-2 transition-colors ${activeImg === i ? "border-brand-light" : "border-transparent"}`}
                  aria-label={`View office image ${i + 1}`}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" className="aspect-square w-full object-cover" width="150" height="150" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-10 md:grid-cols-5 items-center rounded-2xl border border-black/5 bg-white/70 shadow-xl backdrop-blur-lg overflow-hidden">
            <div className="md:col-span-2 h-full">
              <img src={directorImg} alt="Mr. Hiren R. Shah - Director" className="h-full w-full object-cover aspect-square md:aspect-auto" />
            </div>
            <div className="md:col-span-3 p-8 md:p-12">
              <p className="text-xs font-bold uppercase text-brand-light">Leadership</p>
              <h2 className="mt-2 text-3xl font-extrabold text-brand-deep">Mr. Hiren R. Shah</h2>
              <p className="mt-1 text-sm font-semibold text-steel uppercase tracking-wider">Director</p>
              
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-steel">
                <p>
                  Leading Hiren Pipes & Fittings into the future, Mr. Hiren R. Shah brings dynamic vision and deep industry expertise to the piping sector. Under his leadership, the company has expanded its portfolio and strengthened its commitment to providing comprehensive Total Piping Solutions to a global clientele.
                </p>
                <p>
                  With a focus on innovation, timely delivery, and unwavering quality standards, he continues to build upon a three-decade legacy, ensuring that Hiren Pipes & Fittings remains a trusted partner for critical industrial and infrastructure projects.
                </p>
              </div>
              
              <a href="https://www.linkedin.com/in/hiren-r-shah-4792521b" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0A66C2] hover:text-brand-deep transition-colors">
                Connect on LinkedIn <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-steel-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-bold uppercase text-brand-light">Why choose Hiren Pipes</p>
          <h2 className="mb-10 text-3xl font-extrabold text-brand-deep sm:text-4xl">Our competitive advantages</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map(({ t, d }) => (
              <div key={t} className="flex gap-3">
                <span className="mt-1 grid size-5 shrink-0 place-items-center bg-brand-light text-primary-foreground">
                  <Check size={12} />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-deep">{t}</p>
                  <p className="mt-1 text-xs leading-relaxed text-steel">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="mb-8 text-2xl font-extrabold text-brand-deep">Industries We Serve</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {[
            "Oil & Gas", "Power Plants", "Chemicals", "Refineries", "Mining",
            "Distilleries", "Petrochemicals", "Pharmaceuticals", "Pulp & Paper", "Fertilizers",
            "Nuclear Plants", "Food Processing", "Water Treatment", "EPC Contractors", "Process Equipment",
          ].map((ind) => (
            <div key={ind} className="border border-border px-3 py-3 text-xs font-semibold text-brand-deep">{ind}</div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-brand py-12 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-extrabold">Ready to work with us?</h2>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-brand-light px-7 py-4 text-sm font-bold uppercase hover:bg-brand-deep">
              Contact us <ArrowRight size={16} />
            </Link>
            <Link to="/products" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 px-7 py-4 text-sm font-bold uppercase hover:bg-primary-foreground/10">
              View products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

