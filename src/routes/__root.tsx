import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteLayout } from "../components/SiteLayout";

function NotFoundComponent() {
  return (
    <SiteLayout>
      <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-brand-deep">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-brand-deep">Page not found</h2>
          <p className="mt-2 text-sm text-steel">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-brand-deep px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand"
            >
              Go home
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-md border border-brand-deep bg-background px-4 py-2 text-sm font-medium text-brand-deep transition-colors hover:bg-steel-light"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://hirenpipes.in";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Hiren Pipes & Fittings" },
      // Indexing
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      // Keywords (broad set; helps some crawlers)
      { name: "keywords", content: "industrial pipes, pipe fittings, flanges, valves, fasteners, carbon steel pipes, stainless steel pipes, buttweld fittings, forged flanges, pipe supplier India, Ankleshwar, Gujarat" },
      // Local / Geo SEO
      { name: "geo.region", content: "IN-GJ" },
      { name: "geo.placename", content: "Ankleshwar, Gujarat, India" },
      { name: "geo.position", content: "21.6318;73.0019" },
      { name: "ICBM", content: "21.6318, 73.0019" },
      // Open Graph — site-level defaults (routes can override)
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Hiren Pipes & Fittings" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Hiren Pipes & Fittings — Industrial Pipes, Flanges & Fittings Supplier, Ankleshwar, Gujarat" },
      { property: "og:locale", content: "en_IN" },
      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@hirenpipes" },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "Hiren Pipes & Fittings — Industrial Pipes, Flanges & Fittings Supplier" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      // Preload LCP hero image to improve Core Web Vitals
      { rel: "preload", href: "/og-image.jpg", as: "image" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </SiteLayout>
    </QueryClientProvider>
  );
}
