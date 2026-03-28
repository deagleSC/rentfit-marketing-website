import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer2 } from "@/components/footer2";
import { StructuredData } from "@/components/structured-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chessvine.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Chessvine Privacy Policy - Learn how we collect, use, and protect your data. Understand your privacy rights and how we handle your personal information.",
  keywords: [
    "chessvine privacy policy",
    "data protection",
    "privacy rights",
    "chess platform privacy",
  ],
  openGraph: {
    title: "Privacy Policy - Chessvine",
    description:
      "Chessvine Privacy Policy - Learn how we collect, use, and protect your data. Understand your privacy rights and how we handle your personal information.",
    url: `${siteUrl}/privacy`,
    siteName: "Chessvine",
    images: [
      {
        url: `${siteUrl}/app-logo.png`,
        width: 1200,
        height: 630,
        alt: "Chessvine - Privacy Policy",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Chessvine",
    description:
      "Chessvine Privacy Policy - Learn how we collect, use, and protect your data.",
    images: [
      {
        url: `${siteUrl}/app-logo.png`,
        alt: "Chessvine - Privacy Policy",
      },
    ],
    creator: "@chessvine",
    site: "@chessvine",
  },
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const privacyPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  description:
    "Chessvine Privacy Policy - Learn how we collect, use, and protect your data.",
  url: `${siteUrl}/privacy`,
};

export default function PrivacyPage() {
  return (
    <>
      <StructuredData data={privacyPageSchema} />
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-6 text-sm text-muted-foreground">
            <section className="space-y-4">
              <p>
                Your privacy is important to us. It is Chessvine&apos;s policy
                to respect your privacy and comply with any applicable law and
                regulation regarding any personal information we may collect
                about you, including across our website, chessvine.com, and
                other sites we own and operate.
              </p>
              <p>
                Personal information is any information about you which can be
                used to identify you. This includes information about you as a
                person (such as name, address, and date of birth), your devices,
                payment details, and even information about how you use a
                website or online service.
              </p>
              <p>
                In the event our site contains links to third-party sites and
                services, please be aware that those sites and services have
                their own privacy policies. After following a link to any
                third-party content, you should read their posted privacy policy
                information about how they collect and use personal information.
                This Privacy Policy does not apply to any of your activities
                after you leave our site.
              </p>
              <p>
                This policy is effective as of {new Date().toLocaleDateString()}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Information We Collect
              </h2>
              <p>
                Information we collect falls into one of two categories:
                &quot;voluntarily provided&quot; information and
                &quot;automatically collected&quot; information.
              </p>
              <p>
                &quot;Voluntarily provided&quot; information refers to any
                information you knowingly and actively provide us when using or
                participating in any of our services and promotions.
              </p>
              <p>
                &quot;Automatically collected&quot; information refers to any
                information automatically sent by your devices in the course of
                accessing our products and services.
              </p>

              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    Log Data
                  </h3>
                  <p>
                    When you visit our website, our servers may automatically
                    log the standard data provided by your web browser. It may
                    include your device&apos;s Internet Protocol (IP) address,
                    your browser type and version, the pages you visit, the time
                    and date of your visit, the time spent on each page, and
                    other details about your visit.
                  </p>
                  <p className="mt-2">
                    Additionally, if you encounter certain errors while using
                    the site, we may automatically collect data about the error
                    and the circumstances surrounding its occurrence. This data
                    may include technical details about your device, what you
                    were trying to do when the error happened, and other
                    technical information relating to the problem. You may or
                    may not receive notice of such errors, even in the moment
                    they occur, that they have occurred, or what the nature of
                    the error is.
                  </p>
                  <p className="mt-2">
                    Please be aware that while this information may not be
                    personally identifying by itself, it may be possible to
                    combine it with other data to personally identify individual
                    persons.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    Device Data
                  </h3>
                  <p>
                    When you visit our website or interact with our services, we
                    may automatically collect data about your device, such as:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Device type (e.g., mobile, tablet, desktop)</li>
                    <li>Operating system</li>
                    <li>Browser type and version</li>
                    <li>Screen resolution</li>
                    <li>Language preferences</li>
                  </ul>
                  <p className="mt-2">
                    Data we collect can depend on the individual settings of
                    your device and software. We recommend checking the policies
                    of your device manufacturer or software provider to learn
                    what information they make available to us.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    Personal Information
                  </h3>
                  <p>
                    We may ask for personal information when you create an
                    account, contact us, or use our services, which may include
                    one or more of the following:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Email address</li>
                    <li>Name</li>
                    <li>Profile picture (if provided)</li>
                    <li>Authentication provider (email or Google OAuth)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    Sensitive Information
                  </h3>
                  <p>
                    &quot;Sensitive information&quot; or &quot;special
                    categories of data&quot; is a subset of personal information
                    that is given a higher level of protection. Examples of
                    sensitive information include information relating to your
                    racial or ethnic origin, political opinions, religion, trade
                    union or other professional associations or memberships,
                    philosophical beliefs, sexual orientation, sexual practices
                    or sex life, criminal records, health information, or
                    biometric information.
                  </p>
                  <p className="mt-2">
                    We do not currently collect sensitive information about you.
                    We will not collect sensitive information about you without
                    first obtaining your consent, and we will only use or
                    disclose your sensitive information as permitted, required,
                    or authorized by law.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    Transaction Data
                  </h3>
                  <p>
                    Transaction data refers to data that accumulates over the
                    normal course of operation on our platform. This may
                    include:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>PGN (Portable Game Notation) files you upload</li>
                    <li>Chess game analysis results and insights</li>
                    <li>Generated puzzles based on your games</li>
                    <li>User profiles and preferences</li>
                    <li>Analytics data and usage metrics</li>
                    <li>Learning paths and progress tracking</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Legitimate Reasons for Processing Your Personal Information
              </h2>
              <p>
                We only collect and use your personal information when we have a
                legitimate reason for doing so. In which instance, we only
                collect personal information that is reasonably necessary to
                provide our services to you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Collection and Use of Information
              </h2>
              <p>
                We may collect personal information from you when you do any of
                the following on our website:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Register for an account or sign in</li>
                <li>Upload PGN files for analysis</li>
                <li>Use our AI-powered game analysis features</li>
                <li>Generate and practice with customized puzzles</li>
                <li>Access personalized learning paths</li>
                <li>Contact us via email or contact form</li>
                <li>Subscribe to our newsletter or updates</li>
              </ul>
              <p className="mt-2">
                We may combine voluntarily provided and automatically collected
                personal information with general information or research data
                we receive from other trusted sources. For example, if you
                provide us with your location, we may combine this with general
                information about currency and language to provide you with an
                enhanced experience of our site and service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Security of Your Personal Information
              </h2>
              <p>
                When we collect and process personal information, and while we
                retain this information, we will protect it within commercially
                acceptable means to prevent loss and theft, as well as
                unauthorized access, disclosure, copying, use or modification.
              </p>
              <p className="mt-2">
                Although we will do our best to protect the personal information
                you provide to us, we advise that no method of electronic
                transmission or storage is 100% secure and no one can guarantee
                absolute data security.
              </p>
              <p className="mt-2">
                You are responsible for selecting any password and its overall
                security strength, ensuring the security of your own information
                within the bounds of our services. For example, ensuring you do
                not make your personal information publicly available via our
                platform.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                How Long We Keep Your Personal Information
              </h2>
              <p>
                We keep your personal information only for as long as we need
                to. This time period may depend on what we are using your
                information for, in accordance with this privacy policy. For
                example, if you have provided us with personal information such
                as an email address when contacting us about a specific enquiry,
                we may retain this information for the duration of your enquiry
                remaining open as well as for our own records so we may
                effectively address similar enquiries in future. If your
                personal information is no longer required for this purpose, we
                will delete it or make it anonymous by removing all details that
                identify you.
              </p>
              <p className="mt-2">
                However, if necessary, we may retain your personal information
                for our compliance with a legal, accounting, or reporting
                obligation or for archiving purposes in the public interest,
                scientific, or historical research purposes or statistical
                purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Disclosure of Personal Information to Third Parties
              </h2>
              <p>We may disclose personal information to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>
                  Service providers who assist us in operating our platform
                </li>
                <li>Third-party analytics services</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="mt-4 font-semibold text-foreground">
                Third parties we currently use include:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>
                  <strong>Google OAuth:</strong> For user authentication.
                  Google&apos;s privacy policy applies to OAuth data.
                </li>
                <li>
                  <strong>Google Cloud Storage:</strong> For storing your PGN
                  files and analysis data securely.
                </li>
                <li>
                  <strong>Google Gemini AI:</strong> For analyzing your chess
                  games and generating AI-powered insights and recommendations.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Your Rights and Controlling Your Personal Information
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-foreground">Your choice:</p>
                  <p>
                    By providing personal information to us, you understand we
                    will collect, hold, use, and disclose your personal
                    information in accordance with this privacy policy. You do
                    not have to provide personal information to us, however, if
                    you do not, it may affect your use of our website or the
                    products and/or services offered on or through it.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Information from third parties:
                  </p>
                  <p>
                    If we receive personal information about you from a third
                    party, we will protect it as set out in this privacy policy.
                    If you are a third party providing personal information
                    about somebody else, you represent and warrant that you have
                    such person&apos;s consent to provide the personal
                    information to us.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Marketing permission:
                  </p>
                  <p>
                    If you have previously agreed to us using your personal
                    information for direct marketing purposes, you may change
                    your mind at any time by contacting us using the details
                    below.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Access:</p>
                  <p>
                    You may request details of the personal information that we
                    hold about you.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Correction:</p>
                  <p>
                    If you believe that any information we hold about you is
                    inaccurate, out of date, incomplete, irrelevant, or
                    misleading, please contact us using the details provided in
                    this privacy policy. We will take reasonable steps to
                    correct any information found to be inaccurate, incomplete,
                    misleading, or out of date.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Non-discrimination:
                  </p>
                  <p>
                    We will not discriminate against you for exercising any of
                    your rights over your personal information. Unless your
                    personal information is required to provide you with a
                    particular service or offer (for example processing
                    transaction data), we will not deny you goods or services
                    and/or charge you different prices or rates for goods or
                    services, including through granting discounts or other
                    benefits, or imposing penalties, or provide you with a
                    different level or quality of goods or services.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Notification of data breaches:
                  </p>
                  <p>
                    We will comply with laws applicable to us in respect of any
                    data breach.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Complaints:</p>
                  <p>
                    If you believe that we have breached a relevant data
                    protection law and wish to make a complaint, please contact
                    us using the details below and provide us with full details
                    of the alleged breach. We will promptly investigate your
                    complaint and respond to you, in writing, setting out the
                    outcome of our investigation and the steps we will take to
                    deal with your complaint. You also have the right to contact
                    a regulatory body or data protection authority in relation
                    to your complaint.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Unsubscribe:</p>
                  <p>
                    To unsubscribe from our email database or opt-out of
                    communications (including marketing communications), please
                    contact us using the details provided in this privacy
                    policy, or opt-out using the opt-out facilities provided in
                    the communication. We may need to request specific
                    information from you to help us confirm your identity.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Business Transfers
              </h2>
              <p>
                If we or our assets are acquired, or in the unlikely event that
                we go out of business or enter bankruptcy, we would include
                data, including your personal information, among the assets
                transferred to any parties who acquire us. You acknowledge that
                such transfers may occur, and that any parties who acquire us
                may, to the extent permitted by applicable law, continue to use
                your personal information according to this policy, which they
                will be required to assume as it is the basis for any ownership
                or use rights we have over such information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Limits of Our Policy
              </h2>
              <p>
                Our website may link to external sites that are not operated by
                us. Please be aware that we have no control over the content and
                policies of those sites, and cannot accept responsibility or
                liability for their respective privacy practices.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Changes to This Policy
              </h2>
              <p>
                At our discretion, we may change our privacy policy to reflect
                updates to our business processes, current acceptable practices,
                or legislative or regulatory changes. If we decide to change
                this privacy policy, we will post the changes here at the same
                link by which you are accessing this privacy policy.
              </p>
              <p className="mt-2">
                If required by law, we will get your permission or give you the
                opportunity to opt in to or opt out of, as applicable, any new
                uses of your personal information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Contact Us
              </h2>
              <p>
                For any questions or concerns regarding your privacy, you may
                contact us using the following details:
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
