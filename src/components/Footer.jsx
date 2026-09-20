const footerLinks = ["Product", "Resources", "Company", "Try It Today"];

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="page-container py-20">
        <div className="grid gap-12 border-b border-white/15 pb-16 md:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <a
              href="#top"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <span className="grid h-7 w-7 place-items-center rounded-md bg-accent text-brand">
                W
              </span>
              whitepace
            </a>
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
              Whitepace was created for teams that want to work better together.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group}>
              <h3 className="font-semibold text-accent">{group}</h3>
              <div className="mt-5 space-y-3 text-sm text-white/65">
                <a href="#top" className="block hover:text-white">
                  Overview
                </a>
                <a href="#pricing" className="block hover:text-white">
                  Pricing
                </a>
                <a href="#top" className="block hover:text-white">
                  Contact us
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between gap-5 pt-8 text-xs text-white/50 md:flex-row">
          <span>© 2024 Whitepace LLC.</span>
          <span>Terms · Privacy · Security</span>
          <span className="text-accent">Follow us: f in t</span>
        </div>
      </div>
    </footer>
  );
}
