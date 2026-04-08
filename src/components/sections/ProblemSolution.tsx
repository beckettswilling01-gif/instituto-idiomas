import { AlertCircle, Ban, TrendingDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PainPoint {
  icon: LucideIcon;
  title: string;
  detail: string;
}

const painPoints: PainPoint[] = [
  {
    icon: AlertCircle,
    title: "Ciclos de estudio ineficientes",
    detail:
      "Centrarse en horas de estudio en lugar de simulaciones activas y preparación específica para el formato real del examen.",
  },
  {
    icon: Ban,
    title: "Sin dominio de la prueba oral",
    detail:
      "Un conocimiento escrito excepcional fracasa si no puedes defenderlo ante el Tribunal con fluidez y precisión.",
  },
  {
    icon: TrendingDown,
    title: "Aislamiento competitivo",
    detail:
      "Estudiar solo, sin retroalimentación profesional, genera puntos ciegos que no se detectan hasta el día del examen.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="relative bg-light-gray py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* Left — text */}
          <div className="order-2 md:order-1">
            <h2
              className="mb-6 text-3xl font-bold text-navy lg:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Por qué el 95% de los candidatos suspende.
            </h2>

            <p
              className="mb-8 text-lg leading-relaxed text-slate-blue"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Las oposiciones de élite no son solo conocimiento: son una prueba
              de resistencia psicológica y precisión estratégica. La mayoría
              suspende porque trata la preparación lingüística como una
              asignatura más, no como una competición profesional.
            </p>

            <div className="space-y-6">
              {painPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="flex items-start gap-4">
                    <Icon
                      className="mt-1 h-5 w-5 shrink-0 text-red-500"
                      strokeWidth={2}
                    />
                    <div>
                      <h4
                        className="font-bold text-navy"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {point.title}
                      </h4>
                      <p
                        className="text-slate-blue"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {point.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — 95% stat card */}
          <div className="relative order-1 overflow-hidden rounded-2xl bg-navy p-12 text-white shadow-xl md:order-2">
            <div className="pointer-events-none absolute right-0 top-0 p-4 opacity-10">
              <svg
                className="h-24 w-24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
            </div>

            <div
              className="mb-4 text-6xl font-extrabold text-gold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              95%
            </div>

            <p
              className="text-2xl font-light leading-tight opacity-90"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Tasa media de suspenso en candidatos que se presentan a oposiciones
              de élite sin preparación lingüística estructurada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
