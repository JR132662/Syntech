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
        <span key={i} className="text-syntech-turf" aria-hidden>
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
      className="relative bg-syntech-offwhite py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-syntech-turf">
            Testimonials
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-syntech-black sm:text-4xl">
            What our clients say
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-base text-gray-500">
            Real feedback from homeowners and businesses across South Florida.
          </p>
        </div>

        <div className="mt-14 lg:mt-16">
          <blockquote className="rounded-2xl border-l-4 border-syntech-turf bg-white p-8 shadow-sm sm:p-10 lg:p-12">
            <div className="pl-2 sm:pl-4">
              <StarRating />
              <p className="mt-4 text-lg leading-relaxed text-syntech-black sm:text-xl lg:text-2xl">
                {featured.quote}
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <span className="h-px w-12 bg-syntech-turf/40" />
                <cite className="not-italic font-semibold text-syntech-turf text-sm">
                  {featured.author}
                </cite>
              </footer>
            </div>
          </blockquote>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
          {rest.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:ring-syntech-turf/20 hover:shadow-md"
            >
              <p className="text-sm leading-relaxed text-gray-600">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 border-t border-gray-100 pt-4 text-sm font-semibold text-syntech-turf">
                — {t.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
