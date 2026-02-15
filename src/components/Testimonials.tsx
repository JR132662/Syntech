const testimonials = [
  {
    quote: "Great job. Very professional. Work was done in a few days. Looks amazing.",
    author: "Joe P",
  },
  {
    quote:
      "Absolute professionals! Quality work and knowledgeable field and a hands on owner. The work looks beautiful and it was done incredibly timely.",
    author: "Tellepsen",
  },
  {
    quote: "We love our new lawn and Syntech Turf staff was amazing!",
    author: "Jo C",
  },
  {
    quote:
      "Very professional and quick service. This company is very knowledgeable and easy to work with.",
    author: "Baker's Cay",
  },
  {
    quote:
      "The Syntech crew were professional, on time, and thorough. I will continue to use them for additional projects as they are excellent!",
    author: "Adam G",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="text-syntech-green" aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-gray-200 bg-syntech-neutral py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,125,74,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-syntech-green">
            Testimonials
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-syntech-black sm:text-4xl">
            What our clients say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Real feedback from homeowners and businesses across South Florida.
          </p>
        </div>

        <div className="mt-14 sm:mt-16">
          <blockquote className="relative rounded-2xl border border-syntech-green/20 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
            <span
              className="absolute left-6 top-6 text-6xl font-serif leading-none text-syntech-green/15 sm:left-8 sm:top-8 sm:text-7xl"
              aria-hidden
            >
              &ldquo;
            </span>
            <div className="relative pl-4 sm:pl-6">
              <StarRating />
              <p className="mt-4 text-lg leading-relaxed text-syntech-black sm:text-xl lg:text-2xl">
                {featured.quote}
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <span className="h-px flex-1 max-w-[60px] bg-syntech-green/50" />
                <cite className="not-italic font-semibold text-syntech-green">
                  {featured.author}
                </cite>
              </footer>
            </div>
          </blockquote>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((t) => (
            <blockquote
              key={t.author}
              className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-syntech-green/30 hover:shadow-md"
            >
              <span
                className="absolute left-4 top-4 text-3xl font-serif leading-none text-syntech-green/15 group-hover:text-syntech-green/25"
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="relative pl-6 text-sm leading-relaxed text-gray-700">
                {t.quote}
              </p>
              <footer className="mt-4 border-t border-gray-100 pt-4 text-sm font-semibold text-syntech-green">
                — {t.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
