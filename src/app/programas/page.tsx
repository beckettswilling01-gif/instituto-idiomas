import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Programas | Instituto Diplomático de Idiomas",
  description:
    "Programas de preparación lingüística para oposiciones: intensivo, continuo, individualizado y simulación de examen. Formatos adaptados a cada fase de tu preparación.",
};

const programs = [
  {
    name: "Programa Intensivo",
    idealFor: "Candidatos con convocatoria próxima (3-6 meses)",
    description:
      "Diseñado para opositores que necesitan alcanzar el nivel requerido en un plazo ajustado. Maximiza el rendimiento por hora invertida con sesiones frecuentes y un ritmo exigente pero sostenible.",
    features: [
      "Sesiones diarias de preparación focalizada (1,5 - 2 horas)",
      "Simulaciones de examen completas cada dos semanas",
      "Corrección detallada y retroalimentación inmediata tras cada ejercicio",
      "Material específico de la convocatoria vigente, actualizado continuamente",
      "Entrenamiento intensivo de las destrezas con mayor peso en la prueba",
      "Sesiones adicionales de traducción directa e inversa",
      "Tutoría semanal de seguimiento con revisión de objetivos",
      "Acceso a banco de ejercicios y exámenes anteriores para práctica autónoma",
    ],
  },
  {
    name: "Preparación Continua",
    idealFor: "Opositores que planifican a medio-largo plazo (6-18 meses)",
    description:
      "El programa ideal para quienes preparan su oposición con tiempo suficiente y quieren construir una base sólida. Combina rigor y flexibilidad con un ritmo que permite compaginar la preparación con otras obligaciones.",
    features: [
      "Dos o tres sesiones semanales con ritmo progresivo y sostenible",
      "Seguimiento mensual de objetivos con informes escritos de progreso",
      "Material progresivo adaptado a tu evolución real, no a un calendario fijo",
      "Evaluaciones periódicas con diagnóstico detallado por destrezas",
      "Plan de trabajo autónomo guiado entre sesiones",
      "Simulaciones trimestrales para medir el avance global",
      "Incorporación gradual de ejercicios de mayor dificultad",
      "Flexibilidad para ajustar intensidad según la cercanía del examen",
    ],
  },
  {
    name: "Plan Individualizado",
    idealFor: "Candidatos con necesidades específicas o calendario atípico",
    description:
      "Un programa diseñado íntegramente a tu medida, sin estructuras predefinidas. Ideal para perfiles que necesitan un enfoque diferente: refuerzo en una destreza concreta, preparación de una segunda lengua, o compatibilización con otros procesos selectivos.",
    features: [
      "Programa diseñado íntegramente a medida tras diagnóstico exhaustivo",
      "Horario completamente flexible según tu disponibilidad real",
      "Tutor personal asignado durante toda la preparación",
      "Objetivos personalizados con revisión y ajuste constante",
      "Posibilidad de combinar modalidad presencial y online según conveniencia",
      "Enfoque específico en las destrezas que necesitas reforzar",
      "Incorporación de materiales propios del candidato cuando sea relevante",
      "Sesiones de coaching para gestión de estrés y estrategia de examen",
    ],
  },
  {
    name: "Simulación de Examen",
    idealFor: "Candidatos que quieren evaluar su nivel real antes de la prueba",
    description:
      "Un formato puntual pensado para quienes ya se están preparando y necesitan una medición objetiva de su nivel bajo condiciones reales. También útil como punto de partida antes de elegir un programa de preparación.",
    features: [
      "Prueba completa en condiciones idénticas a las del examen oficial",
      "Corrección detallada por formadores especializados en tu oposición",
      "Informe de nivel con análisis pormenorizado por cada destreza evaluada",
      "Puntuación estimada según los baremos oficiales del tribunal",
      "Plan de mejora personalizado con recomendaciones concretas",
      "Comparativa anónima con otros candidatos de la misma convocatoria",
      "Sesión individual de devolución de resultados con el formador",
      "Posibilidad de contratar simulaciones adicionales a lo largo de la preparación",
    ],
  },
];

export default function ProgramasPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 80%, rgba(44, 74, 107, 0.4) 0%, transparent 70%),
              radial-gradient(ellipse 60% 50% at 80% 20%, rgba(44, 74, 107, 0.3) 0%, transparent 60%),
              radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 80%),
              linear-gradient(135deg, #0B1F3B 0%, #1a3455 40%, #2C4A6B 100%)
            `,
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <div className="mx-auto mb-8 h-px w-20 bg-gold" />

            <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Programas
            </p>

            <h1 className="mt-8 font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl">
              Formatos diseñados para cada fase de tu preparación
            </h1>

            <p className="mx-auto mt-8 max-w-2xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-white/70 md:text-xl">
              Cada opositor tiene un punto de partida, un calendario y unas
              circunstancias distintas. Ofrecemos programas que se adaptan a tu
              realidad, no al revés.
            </p>
          </div>
        </section>

        {/* Program Cards */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {programs.map((program) => (
                <div
                  key={program.name}
                  className="group flex flex-col rounded-lg border border-light-gray bg-white p-8 transition-shadow duration-300 hover:shadow-md lg:p-10"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl text-navy lg:text-3xl">
                    {program.name}
                  </h3>

                  <p className="mt-2 font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Ideal para: {program.idealFor}
                  </p>

                  <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-blue/70">
                    {program.description}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span
                          className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                          aria-hidden="true"
                        />
                        <span className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-blue">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 h-px w-full bg-gradient-to-r from-gold/30 via-gold/10 to-transparent" />

                  <div className="mt-8">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center rounded-sm bg-gold px-6 py-3 font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:bg-gold-hover"
                    >
                      Solicitar información
                    </Link>
                  </div>
                </div>
              ))}
            </div>
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
                className="inline-flex items-center rounded-sm bg-gold px-8 py-3.5 font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:bg-gold-hover"
              >
                Reserva tu diagnóstico gratuito
              </Link>
            </div>

            <p className="mt-4 font-[family-name:var(--font-body)] text-xs tracking-wide text-slate-blue/50">
              Presencial u online · 30 minutos · Sin compromiso
            </p>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
