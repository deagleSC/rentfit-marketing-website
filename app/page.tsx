import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero7 } from "@/components/hero7";
import { Feature1 } from "@/components/feature1";
import { Pricing4 } from "@/components/pricing4";
import { Faq1 } from "@/components/faq1";
import { ContactSection } from "@/components/contact-section";
import { Footer2 } from "@/components/footer2";
import { StructuredData } from "@/components/structured-data";
import {
  getAppUrl,
  getMarketingSiteUrl,
  SITE_DESCRIPTION,
  SITE_DESCRIPTION_LONG,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/site-config";

const siteUrl = getMarketingSiteUrl();
const appUrl = getAppUrl();

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_DESCRIPTION}`,
  description: SITE_DESCRIPTION_LONG,
  keywords: [
    "RentFit",
    "rental search",
    "rental listings map",
    "AI rental assistant",
    "list rental India",
  ],
  openGraph: {
    title: `${SITE_NAME} — ${SITE_DESCRIPTION}`,
    description: SITE_DESCRIPTION_LONG,
    url: siteUrl,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} — ${SITE_DESCRIPTION}`,
    description: SITE_DESCRIPTION_LONG,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: siteUrl,
  description: SITE_DESCRIPTION_LONG,
  sameAs: [] as string[],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: siteUrl,
  description: SITE_DESCRIPTION_LONG,
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description: SITE_DESCRIPTION_LONG,
  url: appUrl,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is RentFit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RentFit is a rental marketplace experience: you can search in natural language, see listings on a map, chat with an assistant to refine your search, and (as an owner) publish listings. It pairs the product flows from the RentFit web app with a simple marketing site.",
      },
    },
    {
      "@type": "Question",
      name: 'What does "Ask RentFit" mean?',
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the app, you describe what you are looking for in everyday language—similar to the Ask RentFit landing on /search. You then continue in a map plus chat workspace while the assistant helps you explore listings.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The RentFit app uses accounts so your session, chats, and profile preferences (such as default city) can be saved securely.",
      },
    },
    {
      "@type": "Question",
      name: "Is RentFit only for certain cities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The product is built around service areas such as Bangalore, Mumbai, and Kolkata; you can still ask about other places in chat depending on listings and data coverage.",
      },
    },
  ],
};

const footerLogo = {
  url: "/",
  src: "/logo.png",
  alt: SITE_NAME,
  title: SITE_NAME,
} as const;

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

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={softwareApplicationSchema} />
      <StructuredData data={faqSchema} />
      <div className="min-h-screen">
        <Navbar />
        <Hero7
          heading="Ask RentFit — find rentals with chat and a map"
          description={SITE_DESCRIPTION_LONG}
          button={{
            text: "Open app",
            url: appUrl,
          }}
          reviews={null}
        />

        <Feature1
          id="features"
          title="Natural-language search"
          description="Start from the same idea as the app’s search landing: describe budget, area, and lifestyle needs. RentFit is built to turn that into a session where you keep refining next to the map."
          imageSrcLight="/assets/search.png"
          imageSrcDark="/assets/search.png"
          imageAlt="RentFit search — describe what you want in plain language"
          imagePosition="right"
          variant="default"
        />

        <Feature1
          title="Map + chat workspace"
          description="Once you send your first prompt, you land on the map and chat view used in the product—so you can see where listings sit and iterate with the assistant."
          imageSrcLight="/assets/chat.png"
          imageSrcDark="/assets/chat.png"
          imageAlt="RentFit map and chat workspace"
          imagePosition="left"
          variant="muted"
        />

        <Feature1
          title="Listings that stay in the conversation"
          description="Matching homes appear as rich cards with photos, rent, and the details that matter—right next to your thread and the map, so you can compare options without tab-hopping."
          imageSrcLight="/assets/image.png"
          imageSrcDark="/assets/image.png"
          imageAlt="RentFit listing results alongside chat"
          imagePosition="right"
          variant="default"
        />

        <Pricing4
          id="pricing"
          title="Pricing"
          description="RentFit is in active development. The app is free to try while we validate search, listings, and owner workflows—paid tiers may arrive later."
          plans={[
            {
              name: "Pro",
              badge: "Coming later",
              monthlyPrice: "—",
              yearlyPrice: "—",
              features: [
                "Reserved for future paid features",
                "Same app experience until launch",
                "No charge while in preview",
              ],
              buttonText: "Notify me",
            },
            {
              name: "Preview",
              badge: "Current",
              monthlyPrice: "₹0",
              yearlyPrice: "₹0",
              features: [
                "Ask RentFit search and chat",
                "Map-based listing discovery",
                "Create an account and save preferences",
                "Owner listing flows (where enabled)",
              ],
              buttonText: "Open app",
            },
            {
              name: "Teams",
              badge: "Planned",
              monthlyPrice: "—",
              yearlyPrice: "—",
              features: [
                "For agencies and multi-property owners",
                "Details to be announced",
              ],
              buttonText: "Contact us",
            },
          ]}
        />

        <Faq1
          id="faq"
          heading="Frequently asked questions"
          items={[
            {
              id: "faq-1",
              question: "What is RentFit?",
              answer:
                "RentFit helps you discover rental properties using conversational search, a map, and an AI assistant—aligned with the `/search` experience in the RentFit web app. Owners can participate in the same ecosystem by listing homes.",
            },
            {
              id: "faq-2",
              question: 'What does "Ask RentFit" mean?',
              answer:
                "It is the product headline on the app’s search page: you type what you want in plain language, then continue in the map and chat workspace while the assistant responds.",
            },
            {
              id: "faq-3",
              question: "Where does the assistant get listings?",
              answer:
                "The live app uses your RentFit backend and listing data. Results depend on what is published in the service and the tools the assistant is configured to call.",
            },
            {
              id: "faq-4",
              question: "Which cities are supported?",
              answer:
                "The backend includes service areas such as Bangalore, Mumbai, and Kolkata. Your profile can store a default city; you can still ask about other locations in conversation.",
            },
            {
              id: "faq-5",
              question: "Do I need an account?",
              answer:
                "Yes for the full app: registration and login match the rentfit-v1-be API with secure session cookies, the same pattern described in the product README.",
            },
          ]}
        />

        <ContactSection
          title="Contact"
          description="Questions about RentFit or partnerships? Send a note—we read every message."
        />

        <Footer2
          logo={footerLogo}
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
