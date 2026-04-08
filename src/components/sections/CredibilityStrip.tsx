const statements = [
  "6 oposiciones cubiertas",
  "7 idiomas especializados",
  "92% tasa de aprobados",
  "+200 candidatos formados",
];

export default function CredibilityStrip() {
  return (
    <section className="border-b border-light-gray border-t-2 border-t-gold/30 bg-warm-white">
      <div className="mx-auto max-w-6xl px-6 py-6">
        {/* Desktop: horizontal row with vertical dividers */}
        <div className="hidden md:grid md:grid-cols-4">
          {statements.map((statement, index) => (
            <div
              key={index}
              className={`flex items-center justify-center px-6 text-center${
                index < statements.length - 1
                  ? " border-r border-light-gray"
                  : ""
              }`}
            >
              <p className="font-[family-name:var(--font-body)] text-sm font-medium leading-snug text-slate-blue">
                {statement}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: stacked with horizontal dividers */}
        <div className="flex flex-col md:hidden">
          {statements.map((statement, index) => (
            <div
              key={index}
              className={`py-4 text-center${
                index < statements.length - 1
                  ? " border-b border-light-gray"
                  : ""
              }`}
            >
              <p className="font-[family-name:var(--font-body)] text-sm font-medium leading-snug text-slate-blue">
                {statement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
