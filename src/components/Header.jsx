const navItems = ["Products", "Solutions", "Resources", "Pricing"];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-brand/95 text-white">
      <div className="page-container flex h-20 items-center justify-between gap-8">
        <a
          href="#top"
          className="flex items-center gap-2 text-xl font-bold tracking-tight"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent text-brand">
            W
          </span>
          whitepace
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/80 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition hover:text-accent"
            >
              {item} <span className="ml-1 text-[10px]">v</span>
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <button className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-brand transition hover:bg-yellow-300">
            Login
          </button>
          <button className="rounded-lg bg-sky px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400">
            Try Whitepace free
          </button>
        </div>
        <button
          aria-label="Open menu"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-xl lg:hidden"
        >
          =
        </button>
      </div>
    </header>
  );
}
