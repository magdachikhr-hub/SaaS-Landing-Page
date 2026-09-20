function HeroMockup() {
  return (
    <div className="relative aspect-[1.18] w-full max-w-[600px] overflow-hidden rounded-sm bg-[#c4ddfb] shadow-[0_24px_80px_rgba(4,56,115,.18)]">
      <div className="absolute inset-5 rounded-md bg-white/70 p-4 shadow-sm sm:inset-8 sm:p-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="h-3 w-28 rounded bg-slate-300" />
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-sky" />
            <span className="h-3 w-3 rounded-full bg-yellow-300" />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-[1.1fr_.9fr] gap-4">
          <div className="space-y-3">
            <div className="h-6 w-3/4 rounded bg-brand/80" />
            <div className="h-3 w-full rounded bg-slate-200" />
            <div className="h-3 w-5/6 rounded bg-slate-200" />
            <div className="mt-8 h-24 rounded bg-sky/30" />
          </div>
          <div className="rounded bg-white p-3">
            <div className="mb-3 h-3 w-2/3 rounded bg-slate-300" />
            <div className="space-y-2">
              <div className="h-8 rounded bg-accent/60" />
              <div className="h-8 rounded bg-sky/50" />
              <div className="h-8 rounded bg-emerald-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand pt-32 text-white md:pt-40"
    >
      <div className="hero-lines" />
      <div className="page-container relative flex min-h-[680px] items-center py-20 lg:min-h-[760px]">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[.22em] text-accent">
              The simple way to work
            </p>
            <h1 className="display-title text-white">
              Get More Done with whitepace
            </h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-white/75 md:text-lg">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks.
            </p>
            <button className="mt-9 rounded-lg bg-sky px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-sky/20 transition hover:bg-blue-400">
              Try Whitepace free <span className="ml-2">-&gt;</span>
            </button>
          </div>
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
