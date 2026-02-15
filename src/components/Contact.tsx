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
    <section id="contact" className="border-t border-gray-200 bg-white py-16 sm:py-24 lg:py-28 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold tracking-tight text-syntech-black dark:text-white sm:text-3xl">
              Get your free quote
            </h2>
            <p className="mt-3 text-sm text-syntech-turf font-medium dark:text-syntech-green-light">
              No obligation · Response within 24 hours
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">Phone</p>
                <a href="tel:9544785131" className="mt-1 block font-semibold text-syntech-black hover:text-syntech-turf dark:text-gray-100 dark:hover:text-syntech-green-light">
                  (954) 478-5131
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">Address</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  21113 Johnson Street, #106<br />
                  Pembroke Pines, FL 33029
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-xl border-l-4 border-syntech-turf bg-syntech-offwhite p-8 dark:border-syntech-green-light dark:bg-gray-800">
                <p className="font-semibold text-syntech-turf dark:text-syntech-green-light">Thanks for reaching out.</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  We&apos;ll get back to you soon. Need us now? Call{" "}
                  <a href="tel:9544785131" className="font-medium text-syntech-turf hover:underline dark:text-syntech-green-light">
                    (954) 478-5131
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-syntech-black dark:text-gray-200">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-2 block w-full rounded-lg border border-gray-200 bg-syntech-offwhite px-4 py-3 text-syntech-black placeholder-gray-400 focus:border-syntech-turf focus:outline-none focus:ring-2 focus:ring-syntech-turf/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-syntech-green-light dark:focus:ring-syntech-green-light/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-syntech-black dark:text-gray-200">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 block w-full rounded-lg border border-gray-200 bg-syntech-offwhite px-4 py-3 text-syntech-black placeholder-gray-400 focus:border-syntech-turf focus:outline-none focus:ring-2 focus:ring-syntech-turf/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-syntech-green-light dark:focus:ring-syntech-green-light/20"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-syntech-black dark:text-gray-200">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-syntech-offwhite px-4 py-3 text-syntech-black placeholder-gray-400 focus:border-syntech-turf focus:outline-none focus:ring-2 focus:ring-syntech-turf/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-syntech-green-light dark:focus:ring-syntech-green-light/20"
                    placeholder="(954) 555-1234"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-syntech-black dark:text-gray-200">
                    Project details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-syntech-offwhite px-4 py-3 text-syntech-black placeholder-gray-400 focus:border-syntech-turf focus:outline-none focus:ring-2 focus:ring-syntech-turf/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-syntech-green-light dark:focus:ring-syntech-green-light/20"
                    placeholder="Residential lawn, putting green, sports field, green wall, etc."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-syntech-turf py-3.5 text-sm font-semibold text-white transition hover:bg-syntech-green focus:outline-none focus:ring-2 focus:ring-syntech-turf focus:ring-offset-2 disabled:opacity-70 dark:focus:ring-offset-gray-900 sm:w-auto sm:px-10"
                >
                  {loading ? "Sending…" : "Request free quote"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
