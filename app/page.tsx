import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero7 } from "@/components/hero7";
import { Feature1 } from "@/components/feature1";
import { Pricing4 } from "@/components/pricing4";
import { Faq1 } from "@/components/faq1";
import { ContactSection } from "@/components/contact-section";
import { Footer2 } from "@/components/footer2";
import { StructuredData } from "@/components/structured-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chessvine.com";

export const metadata: Metadata = {
  title: "Chessvine - Checkmate your limits | AI Chess Analysis Platform",
  description:
    "Transform your chess game with AI-driven analysis, customized puzzles, and personalized learning paths. Upload PGN files and get detailed insights to improve your chess skills.",
  keywords: [
    "chess analysis",
    "chess AI",
    "PGN analyzer",
    "chess game analysis",
    "chess training",
    "chess puzzles",
    "chess improvement",
    "chess insights",
    "chess strategy",
    "chess tactics",
    "online chess",
    "chess platform",
    "AI chess",
    "chess learning",
  ],
  openGraph: {
    title: "Chessvine - Checkmate your limits | AI Chess Analysis Platform",
    description:
      "Transform your chess game with AI-driven analysis, customized puzzles, and personalized learning paths. Upload PGN files and get detailed insights to improve your chess skills.",
    url: siteUrl,
    siteName: "Chessvine",
    images: [
      {
        url: `${siteUrl}/app-logo.png`,
        width: 1200,
        height: 630,
        alt: "Chessvine - AI Chess Analysis Platform",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chessvine - Checkmate your limits | AI Chess Analysis Platform",
    description:
      "Transform your chess game with AI-driven analysis, customized puzzles, and personalized learning paths.",
    images: [
      {
        url: `${siteUrl}/app-logo.png`,
        alt: "Chessvine - AI Chess Analysis Platform",
      },
    ],
    creator: "@chessvine",
    site: "@chessvine",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Chessvine",
  url: siteUrl,
  logo: `${siteUrl}/app-logo.png`,
  description:
    "AI-powered chess game analysis platform helping players improve their game through AI-driven insights and personalized learning.",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Chessvine",
  url: siteUrl,
  description:
    "AI-powered chess game analysis platform. Upload your PGN files, get detailed insights, practice puzzles, and improve your chess game.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Chessvine",
  applicationCategory: "Game",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "AI-powered chess game analysis platform. Upload your PGN files, get detailed insights, practice puzzles, and improve your chess game.",
  url: siteUrl,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Chessvine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chessvine is an AI-powered chess improvement platform that helps serious players analyze their games, practice with customized puzzles, and follow personalized learning paths. Upload your PGN files to get detailed AI-driven insights into your gameplay, mistakes, and strategic opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "How does the AI game analysis work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our advanced AI engine analyzes every move in your uploaded games, identifying critical moments, tactical mistakes, and strategic improvements. The analysis breaks down key positions, evaluates move quality, and provides actionable recommendations to help you understand where you can improve.",
      },
    },
    {
      "@type": "Question",
      name: "What file format do you support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chessvine supports PGN (Portable Game Notation) files, which is the standard format for chess games. You can upload PGN files from any chess platform, including Chess.com, Lichess, chess24, or games you've saved manually.",
      },
    },
    {
      "@type": "Question",
      name: "Is Chessvine really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Chessvine is currently in free preview, which means all features are available at no cost. This includes unlimited game analysis, AI-powered insights, customized puzzles, and personalized learning paths.",
      },
    },
  ],
};

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
          heading="Checkmate Your Limits with AI-Driven Chess Improvement"
          description="Transform your chess game with AI-driven analysis, customized puzzles, and personalized learning paths. Perfect for serious players committed to improvement."
          button={{
            text: "Start Free Preview",
            url: "https://chessvine-web-881017844394.asia-south1.run.app/",
          }}
          reviews={null}
        />

        {/* Feature 1: AI Game Analysis - Image on right, text on left */}
        <Feature1
          id="features"
          title="AI-Driven Game Analysis"
          description="Upload your PGN files and get detailed AI-driven insights into your games. Understand your mistakes, identify patterns, and discover opportunities for improvement. Our advanced analysis engine breaks down every move, highlighting critical moments and strategic decisions."
          imageSrcLight="/assets/analysis-light.jpeg"
          imageSrcDark="/assets/analysis-dark.jpeg"
          imageAlt="AI Game Analysis"
          imagePosition="right"
          variant="default"
        />

        {/* Feature 2: Customized Puzzles - Image on left, text on right */}
        <Feature1
          title="Customized Puzzles from Your Games"
          description="Practice with puzzles automatically generated from your actual game mistakes. Each puzzle is tailored to your playing style and weaknesses, helping you improve where it matters most. Difficulty levels adapt to your skill, ensuring continuous growth."
          imageSrcLight="/assets/puzzles-light.jpeg"
          imageSrcDark="/assets/puzzles-dark.jpeg"
          imageAlt="Customized Puzzles"
          imagePosition="left"
          variant="muted"
        />

        {/* Feature 3: Personalized Learning Path - Image on right, text on left */}
        <Feature1
          title="Personalized Learning Path"
          description="Get a customized learning path designed specifically for your chess journey. Our AI analyzes your game patterns, identifies your strengths and weaknesses, then automatically creates a structured improvement plan tailored to your skill level. Track your progress and see measurable results over time."
          imageSrcLight="/assets/dashboard-light.jpeg"
          imageSrcDark="/assets/dashboard-dark.jpeg"
          imageAlt="Personalized Learning Path"
          imagePosition="right"
          variant="default"
        />

        <Pricing4
          title="Pricing"
          description="Chessvine is currently in free preview. Pricing plans will be introduced in the future as we continue to enhance the platform."
          plans={[
            {
              name: "Pro",
              badge: "Pro",
              monthlyPrice: "$10",
              yearlyPrice: "$100",
              features: [
                "Unlimited games",
                "Advanced analysis",
                "Advanced puzzles",
              ],
              buttonText: "Get Started",
            },
            {
              name: "Free",
              badge: "Free Preview",
              monthlyPrice: "$0",
              yearlyPrice: "$0",
              features: [
                "Unlimited game analysis",
                "AI-powered insights",
                "Customized puzzles",
                "Personalized learning paths",
              ],
              buttonText: "Start Free Preview",
            },
            {
              name: "Elite",
              badge: "Elite",
              monthlyPrice: "$20",
              yearlyPrice: "$200",
              features: [
                "Unlimited games",
                "Advanced analysis",
                "Advanced puzzles",
              ],
              buttonText: "Get Started",
            },
          ]}
        />

        <Faq1
          heading="Frequently Asked Questions"
          items={[
            {
              id: "faq-1",
              question: "What is Chessvine?",
              answer:
                "Chessvine is an AI-powered chess improvement platform that helps serious players analyze their games, practice with customized puzzles, and follow personalized learning paths. Upload your PGN files to get detailed AI-driven insights into your gameplay, mistakes, and strategic opportunities.",
            },
            {
              id: "faq-2",
              question: "How does the AI game analysis work?",
              answer:
                "Our advanced AI engine analyzes every move in your uploaded games, identifying critical moments, tactical mistakes, and strategic improvements. The analysis breaks down key positions, evaluates move quality, and provides actionable recommendations to help you understand where you can improve.",
            },
            {
              id: "faq-3",
              question: "What file format do you support?",
              answer:
                "Chessvine supports PGN (Portable Game Notation) files, which is the standard format for chess games. You can upload PGN files from any chess platform, including Chess.com, Lichess, chess24, or games you've saved manually.",
            },
            {
              id: "faq-4",
              question: "How are the puzzles generated?",
              answer:
                "Puzzles are automatically generated from your actual game mistakes. Our AI identifies tactical opportunities and critical positions from your analyzed games, then creates customized puzzles tailored to your playing style and weaknesses. Each puzzle helps you practice the exact skills you need to improve.",
            },
            {
              id: "faq-5",
              question: "What is a personalized learning path?",
              answer:
                "A personalized learning path is an AI-generated improvement plan created specifically for you. Based on your game analyses, our AI identifies your strengths and weaknesses, then creates a structured learning plan with recommended focus areas, practice exercises, and skill development goals tailored to your current skill level.",
            },
            {
              id: "faq-6",
              question: "Is Chessvine really free?",
              answer:
                "Yes! Chessvine is currently in free preview, which means all features are available at no cost. This includes unlimited game analysis, AI-powered insights, customized puzzles, and personalized learning paths. We'll introduce pricing plans in the future as we continue to enhance the platform.",
            },
            {
              id: "faq-7",
              question: "Do I need to create an account?",
              answer:
                "Yes, creating a free account is required to use Chessvine. This allows us to save your game analyses, track your progress, generate personalized puzzles, and maintain your learning path. You can sign up quickly using email or Google OAuth.",
            },
            {
              id: "faq-8",
              question: "How accurate is the AI analysis?",
              answer:
                "Our AI analysis engine uses advanced chess algorithms and machine learning models trained on millions of games. It provides highly accurate evaluations of positions, move quality, and tactical opportunities. The analysis is designed to help you understand your games at a deeper level and identify areas for improvement.",
            },
          ]}
        />

        <ContactSection />

        <Footer2
          logo={{
            src: "/app-logo.png",
            alt: "Chessvine",
            title: "Chessvine",
            url: "/",
          }}
          tagline="Checkmate your limits with AI-driven chess improvement."
          menuItems={[
            {
              title: "Product",
              links: [
                { text: "Features", url: "#features" },
                { text: "Pricing", url: "#pricing" },
                { text: "FAQ", url: "#faq" },
              ],
            },
            {
              title: "Company",
              links: [
                { text: "About", url: "/about" },
                { text: "Contact", url: "#contact" },
              ],
            },
            {
              title: "Legal",
              links: [
                { text: "Privacy Policy", url: "/privacy" },
                { text: "Terms of Service", url: "/terms" },
              ],
            },
          ]}
          copyright={`© ${new Date().getFullYear()} Chessvine. All rights reserved.`}
          bottomLinks={[
            { text: "Privacy Policy", url: "/privacy" },
            { text: "Terms of Service", url: "/terms" },
          ]}
        />
      </div>
    </>
  );
}
