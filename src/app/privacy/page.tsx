import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Syntech Turf privacy policy. How we collect, use, and protect your information when you use our website or request a quote.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-syntech-offwhite pt-24 pb-20 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-syntech-black dark:text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-12 space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-syntech-black dark:text-white">
              Introduction
            </h2>
            <p className="mt-3">
              Syntech Turf (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This policy describes how we collect, use, and protect information when you visit our website or contact us for a quote or other services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-syntech-black dark:text-white">
              Information we collect
            </h2>
            <p className="mt-3 dark:text-gray-300">
              We may collect information you provide directly, such as when you fill out our contact or quote form. This may include your name, email address, phone number, and project details. We may also collect information automatically when you use our site, such as your IP address, browser type, and pages visited (e.g., through cookies or similar technologies).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-syntech-black dark:text-white">
              How we use your information
            </h2>
            <p className="mt-3 dark:text-gray-300">
              We use the information we collect to respond to your inquiries, provide quotes, improve our website and services, and communicate with you about your project. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-syntech-black dark:text-white">
              Sharing of information
            </h2>
            <p className="mt-3">
              We may share your information with service providers who assist us in operating our website or business (e.g., hosting, email). We may also disclose information if required by law or to protect our rights. We do not sell or rent your personal information.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-syntech-black dark:text-white">
              Cookies and tracking
            </h2>
            <p className="mt-3">
              Our website may use cookies or similar technologies to improve your experience and analyze site traffic. You can adjust your browser settings to refuse or limit cookies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-syntech-black dark:text-white">
              Security
            </h2>
            <p className="mt-3">
              We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-syntech-black dark:text-white">
              Your choices
            </h2>
            <p className="mt-3">
              You may contact us to request access to, correction of, or deletion of your personal information. You may also opt out of marketing communications at any time.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-syntech-black dark:text-white">
              Changes to this policy
            </h2>
            <p className="mt-3">
              We may update this privacy policy from time to time. The &quot;Last updated&quot; date at the top will reflect the most recent version. Continued use of our website after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-syntech-black dark:text-white">
              Contact us
            </h2>
            <p className="mt-3">
              If you have questions about this privacy policy or your personal information, please contact us at{" "}
              <a href="mailto:edgar@syntechturf.com" className="text-syntech-green dark:text-syntech-green-light underline hover:no-underline">
                edgar@syntechturf.com
              </a>
              {" "}or call{" "}
              <a href="tel:9544785131" className="text-syntech-green dark:text-syntech-green-light underline hover:no-underline">
                (954) 478-5131
              </a>
              . Our address is 21113 Johnson Street, #106, Pembroke Pines, FL 33029.
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <Link
            href="/"
            className="text-syntech-green dark:text-syntech-green-light font-semibold hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
