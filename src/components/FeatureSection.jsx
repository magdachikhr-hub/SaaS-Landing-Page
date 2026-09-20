function Visual({ type }) {
  if (type === "workspace")
    return (
      <div className="mockup-window">
        <div className="mockup-toolbar" />
        <div className="grid grid-cols-3 gap-3 p-5">
          <div className="col-span-2 space-y-3">
            <div className="h-5 w-2/3 rounded bg-brand" />
            <div className="h-3 w-full rounded bg-slate-200" />
            <div className="h-3 w-4/5 rounded bg-slate-200" />
            <div className="mt-5 h-28 rounded bg-sky/20" />
          </div>
          <div className="space-y-3">
            <div className="h-16 rounded bg-yellow-100" />
            <div className="h-20 rounded bg-blue-100" />
          </div>
        </div>
      </div>
    );
  if (type === "orbit")
    return (
      <div className="orbit-visual">
        <div className="orbit-ring orbit-ring-one" />
        <div className="orbit-ring orbit-ring-two" />
        <div className="orbit-core">W</div>
        <span className="orbit-dot dot-one" />
        <span className="orbit-dot dot-two" />
        <span className="orbit-dot dot-three" />
        <span className="orbit-dot dot-four" />
      </div>
    );
  if (type === "extension")
    return (
      <div className="browser-visual">
        <div className="browser-top">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-body">
          <div className="h-4 w-1/2 rounded bg-brand/70" />
          <div className="mt-4 h-3 w-full rounded bg-slate-200" />
          <div className="mt-2 h-3 w-4/5 rounded bg-slate-200" />
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="h-20 rounded bg-yellow-100" />
            <div className="h-20 rounded bg-blue-100" />
          </div>
        </div>
      </div>
    );
  return (
    <div className="security-visual">
      <div className="security-node node-a">+</div>
      <div className="security-node node-b">*</div>
      <div className="security-node node-c">#</div>
      <div className="security-shield">&#10003;</div>
      <div className="security-line line-a" />
      <div className="security-line line-b" />
      <div className="security-line line-c" />
    </div>
  );
}

export default function FeatureSection({
  eyebrow,
  title,
  description,
  action,
  visual,
  reverse,
  dark,
}) {
  return (
    <div
      className={`grid items-center gap-14 lg:grid-cols-2 lg:gap-24 ${dark ? "-mx-[50vw] bg-brand px-[50vw] py-20 text-white" : ""}`}
    >
      <div className={`max-w-xl ${reverse ? "lg:order-2" : ""}`}>
        <p className={`section-kicker ${dark ? "text-accent" : ""}`}>
          {eyebrow}
        </p>
        <h2 className={`section-title mt-3 ${dark ? "text-white" : ""}`}>
          {title}
        </h2>
        <p
          className={`mt-6 text-base leading-8 ${dark ? "text-white/70" : "text-slate-500"}`}
        >
          {description}
        </p>
        <button className="mt-8 rounded-lg bg-sky px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400">
          {action} <span className="ml-2">-&gt;</span>
        </button>
      </div>
      <div className={`${reverse ? "lg:order-1" : ""}`}>
        <Visual type={visual} />
      </div>
    </div>
  );
}
