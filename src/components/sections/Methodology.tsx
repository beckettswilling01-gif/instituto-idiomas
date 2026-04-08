export default function Methodology() {
  const steps = [
    {
      number: "1",
      title: "Sesión de diagnóstico",
      description:
        "Evaluamos tu nivel académico, competencia lingüística y disponibilidad para determinar el camino óptimo hacia tu oposición.",
    },
    {
      number: "2",
      title: "Plan de estudio personalizado",
      description:
        "Un currículo a medida que descompone el extenso temario en hitos alcanzables y de alto rendimiento, adaptados a tu vida.",
    },
    {
      number: "3",
      title: "Tutorías semanales y simulación",
      description:
        "Sesiones intensivas centradas en perfeccionar tu escritura, expresión oral y conocimiento técnico mediante retroalimentación constante.",
    },
  ];

  return (
    <section className="bg-warm-white py-20 lg:py-28" id="methodology">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            className="text-3xl font-bold text-navy lg:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Nuestro método en 3 pasos.
          </h2>
          <p
            className="mt-4 text-slate-blue"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Una hoja de ruta precisa hacia tu futuro como funcionario del Estado.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-0 md:grid-cols-3">
          {/* Connector line (desktop) */}
          <div className="absolute left-0 top-12 hidden h-[2px] w-full bg-light-gray md:block" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative z-10 mb-12 px-6 md:mb-0"
            >
              <div
                className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-navy text-3xl font-bold text-gold shadow-[0_0_0_2px_#84CC16]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {step.number}
              </div>

              <h3
                className="mb-4 text-xl font-bold text-navy"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {step.title}
              </h3>

              <p
                className="leading-relaxed text-slate-blue"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
