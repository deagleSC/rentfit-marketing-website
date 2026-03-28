import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer2 } from "@/components/footer2";
import { StructuredData } from "@/components/structured-data";
import {
  getMarketingSiteUrl,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/site-config";

const siteUrl = getMarketingSiteUrl();

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `${SITE_NAME} terms — rules for using this marketing site and the RentFit product.`,
  keywords: [
    "RentFit terms",
    "terms and conditions",
    "rental platform terms",
    "user agreement",
  ],
  openGraph: {
    title: `Terms of Service — ${SITE_NAME}`,
    description: `Terms for ${SITE_NAME} and related services.`,
    url: `${siteUrl}/terms`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Terms of Service — ${SITE_NAME}`,
    description: `Terms for ${SITE_NAME} and related services.`,
  },
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const termsPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service",
  description: `${SITE_NAME} terms of service.`,
  url: `${siteUrl}/terms`,
};

export default function TermsPage() {
  return (
    <>
      <StructuredData data={termsPageSchema} />
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-6 text-sm text-muted-foreground">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using {SITE_NAME} (this site or the product app),
                you agree to these Terms of Service. If you disagree with any
                part of these terms, you may not access the service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                2. Description of Service
              </h2>
              <p>
                {SITE_NAME} is a rental discovery and listing platform. Renters
                can search in natural language, view listings on a map, and chat
                with an assistant. Owners can publish listings subject to
                product availability and moderation. AI-generated responses are
                assistive and may be incomplete or inaccurate.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                3. User Accounts
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    Account Creation
                  </h3>
                  <p>
                    You are responsible for maintaining the confidentiality of
                    your account credentials and for all activities that occur
                    under your account.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    Account Security
                  </h3>
                  <p>
                    You must immediately notify us of any unauthorized use of
                    your account or any other breach of security.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                4. Acceptable Use
              </h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Upload malicious files or content</li>
                <li>Attempt to reverse engineer or hack the service</li>
                <li>Use the service for any illegal purpose</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt the service</li>
                <li>Upload copyrighted material without authorization</li>
                <li>Use automated systems to access the service excessively</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                5. Intellectual Property
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    Your Content
                  </h3>
                  <p>
                    You retain ownership of listings, photos, and descriptions you
                    submit. By uploading content, you grant {SITE_NAME} a license
                    to host, display, process, and distribute that content to
                    operate the marketplace and assistant features.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    Our Content
                  </h3>
                  <p>
                    All content, features, and functionality of {SITE_NAME},
                    excluding your submitted materials, are owned by {SITE_NAME}{" "}
                    or its licensors and protected by intellectual property laws.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                6. Service Availability
              </h2>
              <p>
                We strive to provide reliable service but do not guarantee
                uninterrupted or error-free operation. The service may be
                temporarily unavailable due to maintenance, updates, or
                unforeseen circumstances. We are not liable for any loss or
                damage resulting from service unavailability.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                7. AI-Generated Content
              </h2>
              <p>
                Assistant messages and summaries are generated with AI. They are
                not legal, financial, or property advice. Listings must be
                verified directly with owners or agents. {SITE_NAME} is not
                liable for decisions you make based on AI output or third-party
                listing content.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                8. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, {SITE_NAME} shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, or any loss of data, use,
                goodwill, or other intangible losses.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                9. Termination
              </h2>
              <p>
                We may terminate or suspend your account immediately, without
                prior notice, for conduct that we believe violates these Terms
                of Service or is harmful to other users, us, or third parties.
                You may delete your account at any time through your profile
                settings.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                10. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. We will
                notify users of any material changes by posting the updated
                terms on this page and updating the &quot;Last updated&quot;
                date. Your continued use of the service after changes
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                11. Governing Law
              </h2>
              <p>
                These Terms of Service shall be governed by and construed in
                accordance with applicable laws, without regard to conflict of
                law provisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                12. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:supratik.deagle@gmail.com"
                  className="text-primary hover:underline"
                >
                  supratik.deagle@gmail.com
                </a>
              </p>
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
