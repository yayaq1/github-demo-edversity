export function Hero() {
  return (
    <section id="about" className="bg-gradient-to-b from-white via-white to-brand-50/60">
      <div className="container flex flex-col-reverse gap-12 py-24 sm:flex-row sm:items-center">
        <div className="basis-2/3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">Energy Engineer</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Ahmad Hassan
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            I design and deliver reliable, efficient power systems with a focus on renewable integration and grid modernization.
            With hands-on experience across generation and transmission, I help organizations transition to a smarter energy future.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Start a conversation
            </a>
            <p className="text-sm text-slate-500">Based in Dubai · Available for collaborations</p>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-200 via-white to-brand-100 shadow-soft sm:h-60 sm:w-60">
            <span className="text-4xl font-semibold text-brand-700">AH</span>
          </div>
        </div>
      </div>
    </section>
  )
}

