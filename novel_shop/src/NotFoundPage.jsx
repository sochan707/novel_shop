export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f9f9f9] text-[#2b2b2b]">
      <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h1 className="text-[120px] font-bold leading-none text-[#b88e2f]">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-black sm:text-4xl">
          Page Not Found
        </h2>

        <p className="mt-4 max-w-md text-sm text-[#8d8d8d]">
          The page you are looking for does not exist or has been moved.
          Maybe you typed the wrong URL or the page is gone.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/"
            className="rounded-md bg-[#b88e2f] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Go Home
          </a>

          <button
            onClick={() => window.history.back()}
            className="rounded-md border border-[#2b2b2b] px-6 py-3 text-sm font-medium text-[#2b2b2b] transition hover:bg-[#2b2b2b] hover:text-white"
          >
            Go Back
          </button>
        </div>
      </main>

      <footer className="bg-[#faf3ea]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          <Feature icon="🏆" title="High Quality" text="crafted from top materials" />
          <Feature icon="🛡️" title="Warranty Protection" text="Over 2 years" />
          <Feature icon="🚚" title="Free Shipping" text="Order over 150 $" />
          <Feature icon="🎧" title="24 / 7 Support" text="Dedicated support" />
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2b2b2b] text-2xl">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-[#242424]">{title}</h4>
        <p className="text-sm text-[#777]">{text}</p>
      </div>
    </div>
  );
}
