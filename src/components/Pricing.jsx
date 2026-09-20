const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Capture ideas and find them quickly",
    items: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
    ],
    featured: false,
  },
  {
    name: "Personal",
    price: "$11.99",
    description: "Keep home and family on track",
    items: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "Customize your dashboard",
      "Connect Google Calendar",
    ],
    featured: true,
  },
  {
    name: "Organization",
    price: "$49.99",
    description: "Capture ideas and find them quickly",
    items: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Access extra widgets",
    ],
    featured: false,
  },
];

export default function Pricing({ compact = false }) {
  return (
    <section
      id="pricing"
      className={`page-section ${compact ? "px-0 py-0" : "bg-white"}`}
    >
      {!compact && (
        <div className="page-container mb-14 text-center">
          <p className="section-kicker">Choose your plan</p>
          <h2 className="section-title mt-3">Choose Your Plan</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500">
            Whether you want to get organized, keep your personal life on track,
            or build a collaborative team, there is a plan for you.
          </p>
        </div>
      )}
      <div
        className={`page-container grid gap-6 lg:grid-cols-3 ${compact ? "" : "items-stretch"}`}
      >
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-xl border p-8 ${plan.featured ? "border-brand bg-brand py-12 text-white shadow-xl shadow-brand/20 lg:-my-5" : "border-accent bg-white text-ink"}`}
          >
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p
              className={`mt-6 text-4xl font-bold ${plan.featured ? "text-accent" : "text-brand"}`}
            >
              {plan.price}
            </p>
            <p
              className={`mt-4 text-sm ${plan.featured ? "text-white/75" : "text-slate-500"}`}
            >
              {plan.description}
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="font-semibold">
                {plan.name === "Free"
                  ? "For individuals"
                  : "Everything you need"}
              </li>
              {plan.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className={plan.featured ? "text-accent" : "text-brand"}
                  >
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              className={`mt-10 rounded-lg px-6 py-3 text-sm font-semibold ${plan.featured ? "bg-sky text-white" : "border border-accent text-ink"}`}
            >
              Get Started
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
