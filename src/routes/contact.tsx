import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Loader2, Send, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "../components/SiteLayout";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";

const SITE_URL = "https://hirenpipes.in";
const title = "Contact Hiren Pipes & Fittings | Get a Quote | Ankleshwar, Gujarat";
const description =
  "Contact Hiren Pipes & Fittings for industrial piping enquiries. Mr. Hiren R. Shah: +91 95869 11478. Mr. Shailesh J. Patel: +91 97129 32944. Email: metal.hiren@gmail.com. Plot No. 709/P, GIDC, Ankleshwar, Gujarat 393002.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SITE_URL}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});

const sendEnquiryFn = createServerFn({ method: "POST" })
  .validator((data: { name: string; email: string; phone: string; company: string; message: string }) => data)
  .handler(async ({ data }) => {
    const nodemailer = await import("nodemailer");

    const transporter = nodemailer.createTransport({
      host: process.env["SMTP_HOST"],
      port: Number(process.env["SMTP_PORT"]) || 587,
      secure: process.env["SMTP_SECURE"] === "true",
      auth: {
        user: process.env["SMTP_USER"],
        pass: process.env["SMTP_PASS"],
      },
    });

    await transporter.sendMail({
      from: process.env["SMTP_FROM"] || process.env["SMTP_USER"],
      to: process.env["SMTP_TO"] || "metal.hiren@gmail.com",
      subject: `New Website Enquiry from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCompany: ${data.company}\n\nMessage:\n${data.message}`,
      html: `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Phone:</strong> ${data.phone}</p><p><strong>Company:</strong> ${data.company}</p><br/><p><strong>Message:</strong></p><p>${data.message.replace(/\n/g, "<br/>")}</p>`,
    });

    return { success: true };
  });

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    };
    try {
      await sendEnquiryFn({ data });
      setStatus("success");
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <SiteLayout>
      <div className="bg-brand-deep py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="mb-4 text-xs text-primary-foreground/50" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </nav>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            Share your requirement, bill of materials or enquiry — we'll respond with pricing and availability within 24 hours.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact details */}
          <div className="space-y-10">
            <div>
              <h2 className="mb-6 text-2xl font-extrabold text-brand-deep">Contact Details</h2>
              <div className="space-y-6">
                <div className="border border-border p-6">
                  <p className="text-xs font-bold uppercase text-brand-light">Director</p>
                  <p className="mt-1 text-lg font-bold text-brand-deep">Mr. Hiren R. Shah</p>
                  <a href="tel:+919586911478" className="mt-3 flex items-center gap-2 text-sm text-steel hover:text-brand-deep">
                    <Phone size={16} className="text-brand-light" /> +91 95869 11478
                  </a>
                  <a href="https://wa.me/919586911478" target="_blank" rel="noreferrer" className="mt-2 flex items-center gap-2 text-sm text-steel hover:text-brand-deep">
                    <Phone size={16} className="text-brand-light" /> WhatsApp: +91 95869 11478
                  </a>
                </div>
                <div className="border border-border p-6">
                  <p className="text-xs font-bold uppercase text-brand-light">Sales</p>
                  <p className="mt-1 text-lg font-bold text-brand-deep">Mr. Shailesh J. Patel</p>
                  <a href="tel:+919712932944" className="mt-3 flex items-center gap-2 text-sm text-steel hover:text-brand-deep">
                    <Phone size={16} className="text-brand-light" /> +91 97129 32944
                  </a>
                </div>
                <div className="border border-border p-6">
                  <p className="text-xs font-bold uppercase text-brand-light">Email</p>
                  <Link to="/contact" className="mt-3 flex items-center gap-2 text-sm text-steel hover:text-brand-deep">
                    <Mail size={18} className="text-brand-light" /> metal.hiren@gmail.com
                  </Link>
                  <Link to="/contact" className="mt-2 flex items-center gap-2 text-sm text-steel hover:text-brand-deep">
                    <Mail size={18} className="opacity-0" /> hiren_metal@yahoo.co.in
                  </Link>
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h2 className="mb-4 text-xl font-extrabold text-brand-deep">Registered Office & Works</h2>
              <div className="border border-border p-6">
                <address className="flex gap-3 text-sm not-italic leading-relaxed text-steel">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-brand-light" />
                  <div>
                    <p className="font-bold text-brand-deep">Hiren Pipes & Fittings</p>
                    <p>Plot No. 709/P, Godown No. 1,</p>
                    <p>Opp. GIL Company, Near Mukti Chokdi,</p>
                    <p>GIDC, Ankleshwar, Gujarat 393002</p>
                    <p className="mt-2 text-xs font-semibold">GST: 24DEXPS6269K1ZD</p>
                  </div>
                </address>
                {/* Map embed */}
                <div className="mt-5 overflow-hidden border border-border">
                  <iframe
                    title="Hiren Pipes & Fittings — Ankleshwar GIDC location on Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14836.8825023814!2d72.99928218715819!3d21.616324900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be023e690d70849%3A0x2d22a9a6d9cb7237!2sHiren%20Metal%20%26%20Tubes!5e0!3m2!1sen!2sin!4v1790704204357!5m2!1sen!2sin"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* What to include */}
          <div>
            <h2 className="mb-6 text-2xl font-extrabold text-brand-deep">Send an Enquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-4 relative">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-bold uppercase text-brand-deep">Name *</label>
                  <input type="text" id="name" name="name" required disabled={status === "submitting"} className="w-full border border-border p-3 text-sm focus:border-brand-light focus:outline-none disabled:opacity-50" placeholder="Your name" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold uppercase text-brand-deep">Email *</label>
                  <input type="email" id="email" name="email" required disabled={status === "submitting"} className="w-full border border-border p-3 text-sm focus:border-brand-light focus:outline-none disabled:opacity-50" placeholder="Your email address" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-xs font-bold uppercase text-brand-deep">Phone Number</label>
                  <input type="tel" id="phone" name="phone" disabled={status === "submitting"} className="w-full border border-border p-3 text-sm focus:border-brand-light focus:outline-none disabled:opacity-50" placeholder="Your phone number" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="company" className="text-xs font-bold uppercase text-brand-deep">Company</label>
                  <input type="text" id="company" name="company" disabled={status === "submitting"} className="w-full border border-border p-3 text-sm focus:border-brand-light focus:outline-none disabled:opacity-50" placeholder="Your company name" />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-bold uppercase text-brand-deep">Requirement Details *</label>
                <textarea id="message" name="message" required disabled={status === "submitting"} rows={5} className="w-full border border-border p-3 text-sm focus:border-brand-light focus:outline-none disabled:opacity-50" placeholder="Please specify product type, material grade, size, quantity, etc."></textarea>
              </div>
              
              {status === "error" && (
                <p className="text-sm font-bold text-red-600">Something went wrong. Please try again or use WhatsApp.</p>
              )}
              {status === "success" && (
                <div className="flex items-center gap-2 p-4 bg-green-50 text-green-700 border border-green-200">
                  <CheckCircle2 size={20} />
                  <p className="text-sm font-bold">Enquiry sent successfully! We will get back to you shortly.</p>
                </div>
              )}

              <button type="submit" disabled={status === "submitting" || status === "success"} className="flex w-full items-center justify-center gap-2 bg-brand-light py-4 text-sm font-bold uppercase text-primary-foreground hover:bg-brand transition-colors disabled:opacity-70">
                {status === "submitting" ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <><Send size={18} /> Submit Enquiry</>}
              </button>
            </form>

            <div className="mt-8 bg-steel-light p-6">
              <p className="text-xs font-bold uppercase text-brand-light">Business hours</p>
              <p className="mt-2 text-sm text-steel">Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
              <p className="mt-1 text-xs text-steel">Sunday: Closed (WhatsApp enquiries welcome)</p>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
