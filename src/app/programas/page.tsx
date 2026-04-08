import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Programas | Instituto Diplomático de Idiomas",
  description:
    "Programas de preparación lingüística para oposiciones: intensivo, continuo, individualizado y simulación de examen. Formatos adaptados a cada fase de tu preparación.",
};

const programs = [
  {
    name: "Programa Intensivo",
    idealFor: "Convocatoria próxima (3-6 meses)",
    description:
      "Maximiza el rendimiento por hora invertida con sesiones diarias y un ritmo exigente pero sostenible.",
    price: null as string | null, // TBD
    period: "/mes",
    features: [
      "Sesiones diarias de 1,5 - 2 horas",
      "Simulacros completos cada dos semanas",
      "Corrección detallada e inmediata",
      "Material de convocatoria actualizado",
      "Tutoría semanal de seguimiento",
    ],
    highlighted: true,
  },
  {
    name: "Preparación Continua",
    idealFor: "Planificación a medio plazo (6-18 meses)",
    description:
      "Construye una base sólida con ritmo sostenible, compatible con trabajo y otras obligaciones.",
    price: null as string | null, // TBD
    period: "/mes",
    features: [
      "2-3 sesiones semanales progresivas",
      "Informes mensuales de progreso",
      "Simulacros trimestrales completos",
      "Material adaptado a tu evolución",
      "Flexibilidad para ajustar intensidad",
    ],
    highlighted: false,
  },
  {
    name: "Plan Individualizado",
    idealFor: "Necesidades específicas o calendario atípico",
    description:
      "Programa diseñado íntegramente a tu medida. Tutor personal, horario flexible, enfoque en tus destrezas más débiles.",
    price: null as string | null, // TBD
    period: "/mes",
    features: [
      "Programa 100% a medida",
      "Tutor personal asignado",
      "Horario completamente flexible",
      "Presencial, online o combinado",
      "Coaching de estrategia de examen",
    ],
    highlighted: false,
  },
  {
    name: "Simulación de Examen",
    idealFor: "Evaluar tu nivel real antes de la prueba",
    description:
      "Prueba completa en condiciones idénticas al examen oficial. Informe detallado con puntuación estimada y plan de mejora.",
    price: null as string | null, // TBD
    period: "",
    features: [
      "Prueba completa en condiciones reales",
      "Corrección por especialistas en tu oposición",
      "Informe por destrezas con puntuación estimada",
      "Plan de mejora personalizado",
      "Sesión de devolución con formador",
    ],
    highlighted: false,
  },
];

export default function ProgramasPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Programas
            </p>

            <h1 className="mt-5 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Formatos diseñados para cada fase de tu preparación
            </h1>

            <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-white/80 md:text-lg">
              Cada opositor tiene un punto de partida, un calendario y unas
              circunstancias distintas. Ofrecemos programas que se adaptan a tu
              realidad, no al revés.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {programs.map((program) => (
                <div
                  key={program.name}
                  className={`relative flex flex-col rounded-xl p-8 transition-shadow duration-300 hover:shadow-lg ${
                    program.highlighted
                      ? "border-2 border-gold bg-white shadow-md"
                      : "border border-light-gray bg-white"
                  }`}
                >
                  {program.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 font-[family-name:var(--font-body)] text-xs font-bold uppercase tracking-wider text-navy">
                      Más popular
                    </span>
                  )}

                  <h3 className="font-[family-name:var(--font-heading)] text-xl text-navy">
                    {program.name}
                  </h3>

                  <p className="mt-1 font-[family-name:var(--font-body)] text-xs font-medium text-gold">
                    {program.idealFor}
                  </p>

                  {/* Price */}
                  <div className="mt-6">
                    {program.price ? (
                      <div className="flex items-baseline gap-1">
                        <span
                          className="text-4xl font-bold text-navy"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {program.price}€
                        </span>
                        {program.period && (
                          <span className="font-[family-name:var(--font-body)] text-sm text-slate-blue/60">
                            {program.period}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div>
                        <span
                          className="text-2xl font-bold text-navy"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          Solicitar precio
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-blue/70">
                    {program.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-light-gray" />

                  {/* Features */}
                  <ul className="mt-6 flex-1 space-y-3">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="font-[family-name:var(--font-body)] text-sm leading-snug text-slate-blue">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href="/contacto"
                      className={`block w-full rounded-lg py-3 text-center font-[family-name:var(--font-body)] text-sm font-semibold transition-colors ${
                        program.highlighted
                          ? "bg-gold text-navy hover:bg-gold-hover"
                          : "bg-navy text-white hover:bg-navy/90"
                      }`}
                    >
                      {program.price ? "Empezar ahora" : "Solicitar información"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing note */}
            <p className="mx-auto mt-10 max-w-2xl text-center font-[family-name:var(--font-body)] text-sm text-slate-blue/50">
              Todos los programas incluyen diagnóstico inicial gratuito.
              Los precios se ajustan a la oposición, el idioma y la duración del programa.
              Contacta con nosotros para un presupuesto personalizado.
            </p>
          </div>
        </section>

        {/* Guidance CTA */}
        <section className="bg-light-gray py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold font-[family-name:var(--font-body)]">
              Orientación personalizada
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl font-[family-name:var(--font-heading)]">
              ¿No sabes qué programa elegir?
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-blue/70 font-[family-name:var(--font-body)] md:text-lg">
              Es normal. Cada oposición, cada nivel de partida y cada calendario
              requieren un enfoque diferente. Por eso ofrecemos una sesión de
              diagnóstico gratuita en la que evaluamos tu situación concreta y te
              recomendamos el programa que mejor se ajusta a tus necesidades. Sin
              compromiso.
            </p>

            <div className="mt-10">
              <Link
                href="/contacto"
                className="inline-flex items-center rounded-lg bg-gold px-8 py-3.5 font-[family-name:var(--font-body)] text-sm font-semibold text-navy transition-colors hover:bg-gold-hover"
              >
                Reserva tu diagnóstico gratuito
              </Link>
            </div>

            <p className="mt-4 font-[family-name:var(--font-body)] text-xs tracking-wide text-slate-blue/50">
              Presencial u online · 30 minutos · Sin compromiso
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
