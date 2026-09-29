import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";

const SITE_URL = "https://hirenpipes.in";
const title = "Our Esteemed Clients | Hiren Pipes & Fittings";
const description =
  "Hiren Pipes & Fittings is a trusted partner to numerous national and international organizations. Discover our clientele across various industrial sectors.";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SITE_URL}/clients` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/clients` }],
  }),
  component: ClientsPage,
});

const domesticClients = [
  { src: "/clients/Arysta-LifeScience-Logo_LR-2.jpg", alt: "Arysta LifeScience" },
  { src: "/clients/Gmmco.png", alt: "Gmmco" },
  { src: "/clients/Rallis-Logo.png", alt: "Rallis" },
  { src: "/clients/SRF_Limited.png", alt: "SRF Limited" },
  { src: "/clients/Thermax-Logo.wine.svg", alt: "Thermax" },
  { src: "/clients/UPL_official_logo.svg", alt: "UPL" },
  { src: "/clients/amns.png", alt: "AMNS" },
  { src: "/clients/beil_logo.png", alt: "BEIL" },
  { src: "/clients/covestro.jpg", alt: "Covestro" },
  { src: "/clients/cummins.jpg", alt: "Cummins" },
  { src: "/clients/deepak_chem_tech.png", alt: "Deepak Chem Tech" },
  { src: "/clients/firmenich.jpg", alt: "Firmenich" },
  { src: "/clients/gujarat-insecticides-logo.jpg", alt: "Gujarat Insecticides" },
  { src: "/clients/hindalco-Profile-2026a.png", alt: "Hindalco" },
  { src: "/clients/holtecasia.png", alt: "Holtec Asia" },
  { src: "/clients/insecticides.jpg", alt: "Insecticides" },
  { src: "/clients/jubilant_ingrevia.jpg", alt: "Jubilant Ingrevia" },
  { src: "/clients/shreeNarmada.png", alt: "Shree Narmada" },
  { src: "/clients/sse.png", alt: "SSE" },
  { src: "/clients/zentiva.jpg", alt: "Zentiva" },
];

const internationalClients = [
  { src: "/clients/internationl/OMPC_Logo.png", alt: "OMPC" },
  { src: "/clients/internationl/Orbital-Solutions-1.jpg", alt: "Orbital Solutions" },
  { src: "/clients/internationl/aldar.jpg", alt: "Aldar" },
  { src: "/clients/internationl/harris_pye.png", alt: "Harris Pye" },
];

function ClientsPage() {
  return (
    <SiteLayout>
      <div className="bg-brand-deep py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="mb-4 text-xs text-primary-foreground/50" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span>Clients</span>
          </nav>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Our Clients</h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            Trusted by industry leaders in India and around the globe to supply high-grade industrial piping and components.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-extrabold text-brand-deep border-b border-border pb-4">Domestic Clients</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {domesticClients.map((client, idx) => (
              <div key={idx} className="flex h-32 items-center justify-center rounded-lg border border-border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-2xl font-extrabold text-brand-deep border-b border-border pb-4">International Clients</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {internationalClients.map((client, idx) => (
              <div key={idx} className="flex h-32 items-center justify-center rounded-lg border border-border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-brand-deep py-12 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-extrabold">Join our growing list of satisfied clients</h2>
          <p className="mt-4 text-sm text-primary-foreground/80">
            Send us your requirement today to experience our quality and timely delivery firsthand.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-brand-light px-8 py-3 text-sm font-bold uppercase text-primary-foreground transition-colors hover:bg-brand">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
