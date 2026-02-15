"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    Object.fromEntries(data);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    form.reset();
  }

  return (
    <section id="contact" className="relative border-t border-gray-200 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-syntech-green">
            Free quote · No obligation · Response within 24 hours
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-syntech-black sm:text-4xl">
            Get your free quote
          </h2>
          <p className="mt-4 text-gray-600">
            Tell us about your project. We&apos;ll respond quickly with a no-obligation quote.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl">
          {submitted ? (
            <div className="rounded-2xl border border-syntech-green/40 bg-syntech-turf-light p-8 text-center">
              <p className="font-semibold text-syntech-green">Thanks for reaching out.</p>
              <p className="mt-2 text-sm text-gray-700">
                We&apos;ll get back to you soon. Need us now? Call{" "}
                <a href="tel:9544785131" className="text-syntech-green underline hover:no-underline">
                  (954) 478-5131
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-syntech-black placeholder-gray-400 focus:border-syntech-green focus:outline-none focus:ring-1 focus:ring-syntech-green"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-syntech-black placeholder-gray-400 focus:border-syntech-green focus:outline-none focus:ring-1 focus:ring-syntech-green"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-syntech-black placeholder-gray-400 focus:border-syntech-green focus:outline-none focus:ring-1 focus:ring-syntech-green"
                  placeholder="(954) 555-1234"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Project details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-syntech-black placeholder-gray-400 focus:border-syntech-green focus:outline-none focus:ring-1 focus:ring-syntech-green"
                  placeholder="Residential lawn, putting green, sports field, green wall, etc."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-syntech-green py-4 text-base font-semibold text-white transition hover:bg-syntech-green/90 disabled:opacity-70"
              >
                {loading ? "Sending…" : "Request free quote"}
              </button>
            </form>
          )}

          <div className="mt-12 flex flex-col items-center gap-4 border-t border-gray-200 pt-12 sm:flex-row sm:justify-center">
            <a
              href="tel:9544785131"
              className="font-semibold text-syntech-green hover:text-syntech-green/90"
            >
              (954) 478-5131
            </a>
            <span className="hidden text-gray-300 sm:inline">|</span>
            <p className="text-sm text-gray-600">
              21113 Johnson Street, #106<br />
              Pembroke Pines, FL 33029
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
