import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer2 } from "@/components/footer2";
import { StructuredData } from "@/components/structured-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chessvine.com";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Chessvine - Our mission to help chess players improve their game through AI-powered analysis and personalized learning. Discover our values, mission, and commitment to chess improvement.",
  keywords: [
    "chessvine about",
    "chess platform mission",
    "chess improvement",
    "AI chess analysis",
    "chess training platform",
  ],
  openGraph: {
    title: "About Chessvine - Our Mission & Values",
    description:
      "Learn about Chessvine - Our mission to help chess players improve their game through AI-powered analysis and personalized learning. Discover our values, mission, and commitment to chess improvement.",
    url: `${siteUrl}/about`,
    siteName: "Chessvine",
    images: [
      {
        url: `${siteUrl}/app-logo.png`,
        width: 1200,
        height: 630,
        alt: "Chessvine - About Us",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Chessvine - Our Mission & Values",
    description:
      "Learn about Chessvine - Our mission to help chess players improve their game through AI-powered analysis and personalized learning.",
    images: [
      {
        url: `${siteUrl}/app-logo.png`,
        alt: "Chessvine - About Us",
      },
    ],
    creator: "@chessvine",
    site: "@chessvine",
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
  name: "About Chessvine",
  description:
    "Learn about Chessvine - Our mission to help chess players improve their game through AI-powered analysis and personalized learning.",
  url: `${siteUrl}/about`,
  mainEntity: {
    "@type": "Organization",
    name: "Chessvine",
    description:
      "AI-powered chess game analysis platform helping players improve their game through AI-driven insights and personalized learning.",
    url: siteUrl,
  },
};

export default function AboutPage() {
  return (
    <>
      <StructuredData data={aboutPageSchema} />
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Chessvine
            </h1>
            <p className="text-lg text-muted-foreground">
              Empowering chess players to reach their full potential through
              AI-powered analysis and personalized learning.
            </p>
          </div>

          <div className="space-y-16">
            <section className="space-y-6 container mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-base text-muted-foreground">
                <p>
                  At Chessvine, we believe that every chess player deserves
                  access to world-class analysis and training tools. Our mission
                  is to democratize chess improvement by leveraging cutting-edge
                  artificial intelligence to provide personalized insights,
                  customized training, and actionable feedback that helps
                  players of all levels elevate their game.
                </p>
                <p>
                  We&apos;re committed to making chess improvement accessible,
                  engaging, and effective. Whether you&apos;re a beginner
                  looking to learn the fundamentals or an experienced player
                  aiming for mastery, Chessvine provides the tools you need to
                  checkmate your limits.
                </p>
              </div>
            </section>

            <section className="space-y-6 container mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Values
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border-0 dark:border-0 bg-card space-y-2 shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgb(0,0,0,0.3),inset_0_1px_0_rgb(255,255,255,0.05)]">
                  <h3 className="text-lg font-semibold text-foreground">
                    Excellence
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We strive for excellence in everything we do, from the
                    quality of our AI analysis to the user experience of our
                    platform.
                  </p>
                </div>
                <div className="p-6 rounded-xl border-0 dark:border-0 bg-card space-y-2 shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgb(0,0,0,0.3),inset_0_1px_0_rgb(255,255,255,0.05)]">
                  <h3 className="text-lg font-semibold text-foreground">
                    Accessibility
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Chess improvement should be accessible to everyone,
                    regardless of skill level or financial resources. We&apos;re
                    committed to breaking down barriers.
                  </p>
                </div>
                <div className="p-6 rounded-xl border-0 dark:border-0 bg-card space-y-2 shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgb(0,0,0,0.3),inset_0_1px_0_rgb(255,255,255,0.05)]">
                  <h3 className="text-lg font-semibold text-foreground">
                    Innovation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We continuously push the boundaries of what&apos;s possible
                    with AI and chess analysis, always looking for new ways to
                    help players improve.
                  </p>
                </div>
                <div className="p-6 rounded-xl border-0 dark:border-0 bg-card space-y-2 shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgb(0,0,0,0.3),inset_0_1px_0_rgb(255,255,255,0.05)]">
                  <h3 className="text-lg font-semibold text-foreground">
                    Community Focus
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We&apos;re built by chess players, for chess players. Our
                    platform is designed with the chess community in mind, and
                    we&apos;re always listening to feedback to make Chessvine
                    better.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6 container mx-auto bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Join Our Journey
              </h2>
              <div className="space-y-4 text-base text-muted-foreground">
                <p>
                  Chessvine is more than just a platform—it&apos;s a community
                  of dedicated chess players committed to improvement. Whether
                  you&apos;re just starting your chess journey or looking to
                  take your game to the next level, we&apos;re here to support
                  you every step of the way.
                </p>
                <p>
                  Start your free preview today and experience the power of
                  AI-driven chess improvement. Upload your first game, explore
                  our analysis features, and discover how Chessvine can help you
                  checkmate your limits.
                </p>
                <p className="mt-6">
                  Start Free Preview or reach out to us at{" "}
                  <a
                    href="mailto:supratik.deagle@gmail.com"
                    className="text-primary hover:underline font-medium"
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
