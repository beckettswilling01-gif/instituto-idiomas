import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/sections/FinalCTA";
import { MetodologiaFAQ } from "@/components/sections/MetodologiaFAQ";

export const metadata: Metadata = {
  title: "Metodología | Instituto Diplomático de Idiomas",
  description:
    "Descubre nuestro sistema probado en cinco fases para la preparación lingüística de oposiciones. Metodología orientada a resultados con seguimiento personalizado.",
};

const steps = [
  {
    number: "01",
    title: "Diagnóstico inicial",
    description:
      "Todo comienza con una evaluación exhaustiva de tu punto de partida. No se trata únicamente de determinar tu nivel general de idioma, sino de analizar en profundidad cada destreza relevante para tu oposición concreta: comprensión lectora, expresión escrita, traducción directa e inversa, comprensión auditiva y expresión oral. Identificamos tus fortalezas, tus carencias específicas y las áreas que requieren mayor dedicación. Este diagnóstico nos permite establecer objetivos realistas y medibles, alineados con los requisitos exactos de tu convocatoria.",
  },
  {
    number: "02",
    title: "Plan personalizado",
    description:
      "Con los resultados del diagnóstico, diseñamos un itinerario de preparación completamente adaptado a tu situación. Tenemos en cuenta tu calendario (fecha de examen, horas disponibles por semana), tu prueba concreta (formato, destrezas evaluadas, criterios de corrección) y el nivel que necesitas alcanzar. El plan incluye hitos intermedios para que puedas medir tu avance de forma tangible, así como una distribución estratégica del tiempo entre las distintas destrezas. No seguimos un temario genérico: cada plan es un documento vivo que se ajusta a medida que avanzas.",
  },
  {
    number: "03",
    title: "Entrenamiento específico",
    description:
      "La fase central de la preparación se basa en materiales y ejercicios modelados directamente sobre los exámenes reales de tu oposición. Trabajamos con textos de la tipología exacta que encontrarás en la prueba, realizamos ejercicios de traducción con los registros y la terminología propios de cada convocatoria, y entrenamos la expresión oral y escrita con los formatos específicos que exige el tribunal. Cada sesión tiene un objetivo claro y se integra en la progresión general del plan. La práctica intensiva y repetida en condiciones similares a las del examen es lo que genera confianza y automatismo.",
  },
  {
    number: "04",
    title: "Simulaciones de examen",
    description:
      "Realizamos pruebas completas en condiciones idénticas a las del examen real: mismos tiempos, mismo formato, misma presión. Cada simulación es corregida de forma detallada por formadores especializados que conocen los criterios de evaluación de los tribunales. Recibes un informe pormenorizado con tu puntuación estimada, un análisis destreza por destreza y recomendaciones concretas de mejora. Las simulaciones no solo miden tu nivel, sino que te entrenan para gestionar el tiempo y la presión del día del examen, dos factores que a menudo determinan el resultado final.",
  },
  {
    number: "05",
    title: "Optimización final",
    description:
      "En las semanas previas al examen, el trabajo cambia de naturaleza. Dejamos de incorporar contenido nuevo y nos centramos en consolidar lo aprendido, afinar las áreas que aún presentan margen de mejora y preparar una estrategia clara para el día de la prueba. Revisamos las técnicas de gestión del tiempo, practicamos las transiciones entre secciones del examen y trabajamos la confianza del candidato. El objetivo es que llegues al examen sabiendo exactamente qué esperar, con un plan para cada parte de la prueba y la seguridad de haber cubierto cada aspecto relevante.",
  },
];

const principles = [
  {
    title: "Enfoque en el examen real",
    description:
      "Todo nuestro material, ejercicios y simulaciones están modelados sobre los exámenes oficiales. No preparamos un idioma genérico: preparamos la prueba concreta que vas a afrontar.",
  },
  {
    title: "Progresión medible",
    description:
      "Establecemos hitos claros y evaluaciones periódicas para que tanto tú como tu formador podáis cuantificar el avance y ajustar el plan con datos objetivos.",
  },
  {
    title: "Práctica intensiva",
    description:
      "El dominio de un idioma bajo presión de examen requiere automatismo, y el automatismo solo se consigue con repetición deliberada y práctica constante en condiciones realistas.",
  },
  {
    title: "Retroalimentación continua",
    description:
      "Cada ejercicio, cada traducción y cada simulación reciben corrección detallada. La retroalimentación inmediata y constructiva es el motor que acelera el aprendizaje.",
  },
  {
    title: "Personalización total",
    description:
      "No existen dos candidatos iguales. Adaptamos ritmo, contenido y metodología a tu perfil, tu oposición y tu calendario para maximizar la eficiencia de cada hora invertida.",
  },
  {
    title: "Gestión del tiempo",
    description:
      "Entrenamos la capacidad de ejecutar bajo presión temporal desde el primer día. Saber el idioma no basta si no puedes demostrar ese conocimiento dentro del tiempo asignado.",
  },
];

const faqs = [
  {
    question: "¿En qué se diferencia vuestra metodología de una academia de idiomas convencional?",
    answer:
      "Una academia convencional enseña un idioma de forma general. Nosotros preparamos una prueba específica. Eso implica diferencias profundas: nuestros materiales replican el formato exacto del examen, nuestros formadores conocen los criterios de los tribunales, y nuestro sistema de trabajo está diseñado para maximizar el rendimiento bajo las condiciones concretas de cada oposición. No enseñamos inglés o francés: enseñamos a aprobar la prueba de inglés o francés de tu convocatoria.",
  },
  {
    question: "¿Cuánto tiempo necesito para prepararme con este sistema?",
    answer:
      "Depende de tu nivel de partida, de la oposición concreta y de las horas semanales que puedas dedicar. En la sesión de diagnóstico inicial evaluamos todos estos factores y te damos una estimación realista. Como referencia general, los candidatos con un nivel intermedio-alto suelen necesitar entre 4 y 8 meses de preparación para alcanzar el nivel exigido en la mayoría de las oposiciones que cubrimos.",
  },
  {
    question: "¿Puedo incorporarme en cualquier momento o hay fechas de inicio fijas?",
    answer:
      "Dado que cada plan es individualizado, puedes incorporarte en cualquier momento del año. No dependemos de grupos cerrados ni de calendarios fijos. Tu preparación comienza cuando tú la necesitas y se adapta a tu ritmo y disponibilidad.",
  },
  {
    question: "¿Las simulaciones de examen son realmente como el examen oficial?",
    answer:
      "Sí. Nuestras simulaciones replican el formato, la duración, la tipología de ejercicios y el nivel de dificultad de los exámenes oficiales. Los formadores que las diseñan tienen experiencia directa con los tribunales y las convocatorias vigentes. Además, la corrección sigue los mismos criterios que aplican los evaluadores oficiales, para que tu puntuación en la simulación sea un indicador fiable de tu rendimiento real.",
  },
  {
    question: "¿Ofrecéis preparación online o solo presencial?",
    answer:
      "Ofrecemos ambas modalidades. Las sesiones presenciales se realizan en nuestro centro de Madrid, y las sesiones online se imparten por videoconferencia con las mismas garantías de calidad. Muchos candidatos combinan ambas modalidades según su disponibilidad. Las simulaciones de examen, cuando es posible, recomendamos realizarlas de forma presencial para replicar con mayor fidelidad las condiciones reales.",
  },
  {
    question: "¿Qué pasa si no alcanzo el nivel esperado en el plazo previsto?",
    answer:
      "Nuestro sistema de seguimiento está diseñado precisamente para detectar desviaciones a tiempo. Si en alguna evaluación intermedia detectamos que el ritmo de progreso no es el adecuado, ajustamos el plan de inmediato: modificamos la intensidad, redistribuimos el enfoque entre destrezas o incorporamos sesiones adicionales. El objetivo es que nunca llegues al examen sin haber alcanzado el nivel necesario.",
  },
];

export default function MetodologiaPage() {
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
              Metodología
            </p>

            <h1 className="mt-8 font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl">
              Un sistema probado, diseñado para resultados
            </h1>

            <p className="mx-auto mt-8 max-w-2xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-white/70 md:text-xl">
              Nuestra metodología ha sido perfeccionada durante años de
              experiencia preparando candidatos para las pruebas de idiomas más
              exigentes del panorama público español. Cada fase del proceso está
              orientada a un único objetivo: que apruebes.
            </p>
          </div>
        </section>

        {/* Five Steps - Expanded */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold font-[family-name:var(--font-body)]">
                Las cinco fases
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
                De tu punto de partida al día del examen
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-blue/70 font-[family-name:var(--font-body)]">
                Un proceso estructurado que transforma tu nivel actual en el
                rendimiento que necesitas, fase a fase, sin dejar nada al azar.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex gap-6 lg:gap-10">
                  <div className="flex flex-col items-center">
                    <span className="text-5xl font-bold text-gold/30 font-[family-name:var(--font-heading)] leading-none select-none">
                      {step.number}
                    </span>
                    {index < steps.length - 1 && (
                      <div className="mt-3 mb-0 w-px flex-1 bg-gold/30" />
                    )}
                  </div>

                  <div
                    className={`pb-14 ${index === steps.length - 1 ? "pb-0" : ""} pt-1`}
                  >
                    <h3 className="text-xl font-semibold text-navy font-[family-name:var(--font-heading)] lg:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-blue/70 font-[family-name:var(--font-body)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles Grid */}
        <section className="bg-light-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold font-[family-name:var(--font-body)]">
                Principios
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
                Principios de nuestra metodología
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-blue/70 font-[family-name:var(--font-body)]">
                Seis pilares que vertebran cada decisión pedagógica, desde el
                diseño de materiales hasta la estructura de las sesiones.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-lg border border-light-gray bg-white p-8 transition-shadow duration-300 hover:shadow-md"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-navy lg:text-xl">
                    {principle.title}
                  </h3>
                  <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-blue/70">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold font-[family-name:var(--font-body)]">
                Preguntas frecuentes
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
                Resolvemos tus dudas
              </h2>
            </div>

            <MetodologiaFAQ faqs={faqs} />
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
