import Link from "next/link";

const INSTAGRAM_USER = "syntechturf";
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USER}/`;

export default function InstagramSection() {
  return (
    <section className="relative overflow-hidden border-t border-gray-200 bg-white py-16 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(45,125,74,0.05),transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-syntech-green">
            Instagram
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-syntech-black sm:text-4xl">
            Follow us <span className="text-syntech-green">@{INSTAGRAM_USER}</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-600 text-sm sm:text-base">
            See our latest turf and green wall projects, tips, and more.
          </p>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-syntech-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-syntech-green/90"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643.012 2.987.06 4.043.049 1.064.218 1.791.465 2.427a4.902 4.902 0 011.153 1.772 4.902 4.902 0 011.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06h.08c2.643 0 2.987.012 4.043.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.048 1.407-.06 4.123-.06h.08c2.643 0 2.987.012 4.043.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.12c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C10.266 2.013 10.621 2 12 2z" clipRule="evenodd" />
            </svg>
            View on Instagram
          </Link>
        </div>

        {/* Instagram profile embed - works when account allows embedding */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-syntech-neutral/50 shadow-sm">
          <iframe
            src={`https://www.instagram.com/${INSTAGRAM_USER}/embed`}
            title={`Syntech Turf on Instagram (@${INSTAGRAM_USER})`}
            className="h-[480px] w-full border-0 sm:h-[520px]"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
