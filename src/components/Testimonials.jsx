const quotes = [
  [
    "Whitepace has helped me stay organized and focused on my most important work.",
    "Oberon Shaw",
    "Head of Talent",
  ],
  [
    "A clear, flexible space for our whole team. We move faster because everyone knows what is next.",
    "Megan Saylor",
    "Product Manager",
  ],
  [
    "The simplest way we have found to keep ideas moving from a note into real work.",
    "James Carlson",
    "Founder",
  ],
];

export default function Testimonials() {
  return (
    <section className="page-section bg-sky/5">
      <div className="page-container">
        <div className="text-center">
          <p className="section-kicker">Testimonials</p>
          <h2 className="section-title mt-3">What Our Clients Says</h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {quotes.map(([quote, name, role], index) => (
            <article
              key={name}
              className={`rounded-lg p-8 ${index === 1 ? "bg-sky text-white" : "bg-white shadow-[0_8px_40px_rgba(4,56,115,.08)]"}`}
            >
              <div
                className={`text-5xl leading-none ${index === 1 ? "text-white" : "text-brand"}`}
              >
                &ldquo;
              </div>
              <p
                className={`mt-5 text-base leading-7 ${index === 1 ? "text-white" : "text-slate-600"}`}
              >
                {quote}
              </p>
              <div
                className={`mt-8 border-t pt-5 ${index === 1 ? "border-white/30" : "border-slate-200"}`}
              >
                <p className="font-semibold">{name}</p>
                <p
                  className={`mt-1 text-sm ${index === 1 ? "text-white/70" : "text-slate-400"}`}
                >
                  {role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
