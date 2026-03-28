import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer2 } from "@/components/footer2";
import { StructuredData } from "@/components/structured-data";
import { getAppUrl, getMarketingSiteUrl, SITE_NAME, SITE_TAGLINE } from "@/lib/site-config";

const siteUrl = getMarketingSiteUrl();
const appUrl = getAppUrl();

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SITE_NAME}—conversational rental search, map-based discovery, and listing tools aligned with the RentFit web app.`,
  keywords: [
    "RentFit about",
    "rental marketplace",
    "AI rental search",
  ],
  openGraph: {
    title: `About ${SITE_NAME}`,
    description: `Our mission is to make discovering and listing rentals clearer—with the same Ask RentFit experience you use in the product.`,
    url: `${siteUrl}/about`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `About ${SITE_NAME}`,
    description: `Natural-language search, maps, and chat for renters and owners.`,
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${SITE_NAME}`,
  description: `Learn about ${SITE_NAME} and the rental discovery experience.`,
  url: `${siteUrl}/about`,
  mainEntity: {
    "@type": "Organization",
    name: SITE_NAME,
    description:
      "Rental marketplace focused on conversational search, map-based listings, and owner tools.",
    url: siteUrl,
  },
};

const footerMenu = [
  {
    title: "Product",
    links: [
      { text: "Features", url: "/#features" },
      { text: "Pricing", url: "/#pricing" },
      { text: "FAQ", url: "/#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About", url: "/about" },
      { text: "Contact", url: "/#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Terms of Service", url: "/terms" },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <StructuredData data={aboutPageSchema} />
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About {SITE_NAME}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {SITE_TAGLINE} This marketing site exists to explain the product;
              the live experience is in the{" "}
              <Link href={appUrl} className="text-primary underline-offset-4 hover:underline">
                RentFit app
              </Link>
              .
            </p>
          </div>

          <div className="space-y-16">
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Mission
              </h2>
              <div className="space-y-4 text-base text-muted-foreground max-w-3xl">
                <p>
                  Renting should not mean filling out ten filters before you see
                  a map. {SITE_NAME} takes cues from the main app: you describe
                  what you need, land in a chat plus map workspace, and iterate
                  with an assistant while listings stay in context.
                </p>
                <p>
                  Owners belong in the same ecosystem—list properties with the
                  same backend and auth model as{" "}
                  <code className="rounded bg-muted px-1 py-0.5 text-sm">
                    rentfit-v1-web
                  </code>
                  , so marketing copy and product behavior stay aligned.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Values
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border-0 dark:border-0 bg-card space-y-2 shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgb(0,0,0,0.3),inset_0_1px_0_rgb(255,255,255,0.05)]">
                  <h3 className="text-lg font-semibold text-foreground">
                    Clarity
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Plain-language search, obvious next steps, and honest
                    messaging about what the assistant can and cannot do.
                  </p>
                </div>
                <div className="p-6 rounded-xl border-0 dark:border-0 bg-card space-y-2 shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgb(0,0,0,0.3),inset_0_1px_0_rgb(255,255,255,0.05)]">
                  <h3 className="text-lg font-semibold text-foreground">
                    Place on the map
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Rentals are spatial; the product keeps geography and
                    conversation side by side instead of hiding the map behind
                    forms.
                  </p>
                </div>
                <div className="p-6 rounded-xl border-0 dark:border-0 bg-card space-y-2 shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgb(0,0,0,0.3),inset_0_1px_0_rgb(255,255,255,0.05)]">
                  <h3 className="text-lg font-semibold text-foreground">
                    Pragmatic AI
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    The assistant is a guide—not a replacement for viewing
                    listings, verifying details, or doing your own diligence.
                  </p>
                </div>
                <div className="p-6 rounded-xl border-0 dark:border-0 bg-card space-y-2 shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgb(0,0,0,0.3),inset_0_1px_0_rgb(255,255,255,0.05)]">
                  <h3 className="text-lg font-semibold text-foreground">
                    India-first rentals
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Service areas and listing formats follow the RentFit backend
                    (for example Bangalore, Mumbai, and Kolkata) with room to
                    grow.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Try the app
              </h2>
              <div className="space-y-4 text-base text-muted-foreground max-w-3xl">
                <p>
                  Open the RentFit web app to start from{" "}
                  <strong>Ask RentFit</strong> on <code className="rounded bg-muted px-1 py-0.5 text-sm">/search</code>, then continue with map and chat—the flow this site is summarizing.
                </p>
                <p>
                  <Link
                    href={appUrl}
                    className="text-primary font-medium underline-offset-4 hover:underline"
                  >
                    Go to app →
                  </Link>
                  {" · "}
                  <a
                    href="mailto:supratik.deagle@gmail.com"
                    className="text-primary font-medium underline-offset-4 hover:underline"
                  >
                    supratik.deagle@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
        <Footer2
          logo={{
            url: "/",
            src: "/logo.png",
            alt: SITE_NAME,
            title: SITE_NAME,
          }}
          tagline={SITE_TAGLINE}
          menuItems={footerMenu}
          copyright={`© ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.`}
          bottomLinks={[
            { text: "Privacy Policy", url: "/privacy" },
            { text: "Terms of Service", url: "/terms" },
          ]}
        />
      </div>
    </>
  );
}
