import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "El Instituto Diplomático convirtió un caos de material en un camino claro y estratégico. No habría aprobado el examen oral sin su entrenamiento de simulación.",
    name: "Elena R.",
    role: "Economista del Estado (Promoción 2023)",
  },
  {
    quote:
      "Empecé sin experiencia en derecho administrativo. Mi mentor me guió en cada obstáculo. Hoy sirvo en la misión diplomática de España.",
    name: "Javier M.",
    role: "Carrera Diplomática (Promoción 2022)",
  },
];

export default function Differentiation() {
  return (
    <section className="overflow-hidden bg-navy py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Left intro */}
          <div className="md:w-1/3">
            <h2
              className="mb-6 text-3xl font-extrabold text-gold md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Historias de éxito.
            </h2>
            <p
              className="text-lg opacity-80"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Nuestros candidatos se sitúan consistentemente en el 10% superior
              de sus respectivas convocatorias.
            </p>
          </div>

          {/* Testimonial cards */}
          <div className="grid gap-8 md:w-2/3 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-white/10 bg-navy/80 p-8"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <p
                  className="mb-6 text-lg font-light italic"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm opacity-60">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
