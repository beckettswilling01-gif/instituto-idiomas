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
    title: "Preparación lingüística genérica",
    detail:
      "Academias que enseñan un B2 estándar, no el C1 diplomático que exige tu tribunal.",
  },
  {
    icon: Ban,
    title: "Sin dominio de la prueba oral",
    detail:
      "Saber el idioma no basta si no puedes defenderlo con fluidez y registro ante un panel evaluador.",
  },
  {
    icon: TrendingDown,
    title: "Sin simulaciones reales",
    detail:
      "Estudiar sin reproducir las condiciones exactas del examen genera una confianza falsa que se desmorona el día de la prueba.",
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
              La mayoría no suspende por falta de nivel. Suspende por falta de método.
            </h2>

            <p
              className="mb-8 text-lg leading-relaxed text-slate-blue"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Las oposiciones de élite exigen más que un buen nivel de idiomas.
              Exigen vocabulario diplomático, registro formal, traducción
              cronometrada y fluidez ante tribunal. La preparación convencional
              no cubre nada de esto.
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

          {/* Right — image + stat */}
          <div className="relative order-1 overflow-hidden rounded-2xl md:order-2">
            {/* HIGGSFIELD PROMPT: A young professional sitting alone at a wooden desk in a dimly lit library, surrounded by stacks of open law books and scattered notes. Head resting on hand, looking slightly overwhelmed but determined. Warm, desaturated tones. Shot from slightly above, editorial portrait style. Soft natural light from a window. The mood is "before the breakthrough." */}
            <div className="flex aspect-[4/3] w-full items-center justify-center bg-light-gray text-center text-sm text-slate-blue/40">
              <span className="max-w-[200px]">Imagen: Candidato estudiando</span>
            </div>

            {/* Floating stat card */}
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-navy/95 p-6 text-white backdrop-blur-sm">
              <div
                className="mb-2 text-4xl font-extrabold text-gold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                95%
              </div>
              <p
                className="text-sm leading-snug opacity-80"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Tasa de suspenso sin preparación lingüística estructurada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
