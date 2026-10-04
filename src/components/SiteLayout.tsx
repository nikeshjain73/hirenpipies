import { Link, useLocation } from "@tanstack/react-router";
import { Mail, MapPin, Menu, Phone, X, Instagram, Facebook, Linkedin, ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";


const navLinks: { label: string; href: string }[] = [
  { label: "Products", href: "/products" },
  { label: "Quality", href: "/quality" },
  { label: "Clients", href: "/clients" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const footerProductLinks: { lbl: string; href: string }[] = [
  { lbl: "Pipes & Tubes", href: "/products/pipes-tubes" },
  { lbl: "Flanges", href: "/products/flanges" },
  { lbl: "Pipe Fittings", href: "/products/pipe-fittings" },
  { lbl: "Valves", href: "/products/valves" },
  { lbl: "Fasteners & Studs", href: "/products/fasteners" },
  { lbl: "Gaskets & Sealing", href: "/products/gaskets" },
  { lbl: "Grooved Fittings", href: "/products/grooved-fittings" },
  { lbl: "HDGI Gratings", href: "/products/hdgi-gratings" },
  { lbl: "Structural Steel", href: "/products/structural-steel" },
];

const footerCompanyLinks: { lbl: string; href: string }[] = [
  { lbl: "About Us", href: "/about" },
  { lbl: "Clients", href: "/clients" },
  { lbl: "Quality", href: "/quality" },
  { lbl: "Contact", href: "/contact" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-deep px-4 py-2 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 text-[11px] font-semibold sm:flex sm:justify-between">
          <span className="truncate">Manufacturer • Exporter • Stockist • Supplier</span>
          <span className="hidden sm:block">Serving India &amp; overseas since 1990</span>
          <a href="tel:+919586911478" className="shrink-0 lg:hidden">+91 95869 11478</a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-lg shadow-sm">
        <div className="mx-auto grid h-28 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Hiren Pipes and Fittings home">
            <img src="/logo.png" alt="Hiren Pipes &amp; Fittings" className="h-24 w-auto shrink-0 object-contain" />
            <div className="min-w-0 leading-none">

            </div>
          </Link>
          <div className="flex shrink-0 items-center gap-4">
            <nav className="hidden items-center gap-6 text-xs font-bold uppercase lg:flex" aria-label="Main navigation">
              {navLinks.map(({ label, href }) => {
                if (label === "Products") {
                  return (
                    <div key={href} className="group relative py-2">
                      <Link to={href as string} className="flex items-center gap-1 transition-colors hover:text-brand-light">
                        {label} <ChevronDown size={14} className="mt-0.5" />
                      </Link>
                      <div className="absolute left-0 top-full hidden w-56 flex-col bg-white border border-border shadow-lg group-hover:flex z-50">
                        {footerProductLinks.map((p) => (
                          <Link key={p.href} to={p.href} className="px-4 py-3 text-xs font-bold text-brand-deep hover:bg-steel-light hover:text-brand-light transition-colors border-b border-border last:border-0">
                            {p.lbl}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return href.startsWith("/#") ? (
                  <a key={href} href={href} className="transition-colors hover:text-brand-light">{label}</a>
                ) : (
                  <Link key={href} to={href as string} className="transition-colors hover:text-brand-light">{label}</Link>
                )
              })}
            </nav>
            <Link to="/contact" className="hidden bg-brand-light px-5 py-3 text-xs font-bold uppercase text-primary-foreground transition-colors hover:bg-brand sm:inline-flex">
              Request quote
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="grid size-11 place-items-center border border-border text-brand-deep lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-4 py-4 lg:hidden max-h-[70vh] overflow-y-auto" aria-label="Mobile navigation">
            {navLinks.map(({ label, href }) => {
              if (label === "Products") {
                return (
                  <div key={href} className="border-b border-border py-3">
                    <Link to={href as string} onClick={() => setMenuOpen(false)} className="flex items-center justify-between text-sm font-bold uppercase">
                      {label}
                    </Link>
                    <div className="mt-3 pl-4 flex flex-col gap-3 border-l-2 border-brand-light/20">
                      {footerProductLinks.map((p) => (
                        <Link key={p.href} to={p.href} onClick={() => setMenuOpen(false)} className="text-xs font-semibold text-steel uppercase transition-colors hover:text-brand-light">
                          {p.lbl}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return href.startsWith("/#") ? (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-border py-3 text-sm font-bold uppercase">{label}</a>
              ) : (
                <Link key={href} to={href as string} onClick={() => setMenuOpen(false)} className="block border-b border-border py-3 text-sm font-bold uppercase">{label}</Link>
              )
            })}
          </nav>
        )}
      </header>

      {/* Page content */}
      <main className="min-h-screen animate-fade-in-up">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-ink py-14 text-primary-foreground/65">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4">
          <div className="md:col-span-1">
            <img src="/logo.png" alt="Hiren Pipes &amp; Fittings logo" loading="lazy" className="h-14 w-auto bg-background object-contain p-1 rounded" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Total Piping Solution Company. Manufacturer, exporter, stockist and supplier since 1990.
            </p>
            <a href="/hiren-shah-catalogue.pdf" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-xs font-bold uppercase text-brand-pale hover:text-primary-foreground">
              Download 2026 Catalogue ↓
            </a>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase text-primary-foreground">Products</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {footerProductLinks.map(({ lbl, href }) => (
                <li key={href}>
                  <Link to={href} className="hover:text-primary-foreground">{lbl}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase text-primary-foreground">Company</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {footerCompanyLinks.map(({ lbl, href }) => (
                <li key={href}><Link to={href} className="hover:text-primary-foreground">{lbl}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase text-primary-foreground">Contact</h2>
            <a href="tel:+919586911478" className="mt-4 flex items-center gap-2 text-sm hover:text-primary-foreground"><Phone size={14} /> Mr. Hiren R. Shah: +91 95869 11478</a>
            <a href="tel:+919712932944" className="mt-3 flex items-center gap-2 text-sm hover:text-primary-foreground"><Phone size={14} /> Mr. Shailesh J. Patel: +91 97129 32944</a>
            <Link to="/contact" className="mt-3 flex items-center gap-2 text-sm hover:text-primary-foreground"><Mail size={14} /> metal.hiren@gmail.com</Link>
            <address className="mt-3 flex gap-2 text-xs not-italic leading-relaxed">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              Plot No. 709/P, Godown No. 1, GIDC, Ankleshwar, Gujarat 393002
            </address>
            <p className="mt-2 text-xs">GST: 24DEXPS6269K1ZD</p>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 px-4 pt-6 text-xs sm:px-6 md:flex-row">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4 order-last md:order-none text-primary-foreground/70">
            <div className="flex gap-4">
              <span>© {new Date().getFullYear()} Hiren Pipes &amp; Fittings. All rights reserved.</span>
              <span className="hidden sm:inline">|</span>
              <span>GSTIN: 24DEXPS6269K1ZD</span>
            </div>
            <span className="text-[10px] text-primary-foreground/50">
              Designed and Developed by CodeIgnity
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/in/hiren-r-shah-4792521b" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transform transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-[#0A66C2]">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/metal.hiren" target="_blank" rel="noreferrer" aria-label="Instagram" className="transform transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-[#E1306C]">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/hirenmetal.in" target="_blank" rel="noreferrer" aria-label="Facebook" className="transform transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-[#1877F2]">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
