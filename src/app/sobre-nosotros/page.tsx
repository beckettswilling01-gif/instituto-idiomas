import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiagnosticCTA from "@/components/sections/DiagnosticCTA";

export const metadata: Metadata = {
  title:
    "Sobre Nosotros | Instituto Diplomático de Idiomas – Preparación Lingüística para Oposiciones",
  description:
    "Conozca al equipo del Instituto Diplomático de Idiomas en Madrid. Formadores especializados en pruebas lingüísticas oficiales, metodología inversa desde el examen y compromiso con la excelencia en la preparación para oposiciones del Estado.",
};

export default function SobreNosotros() {
  return (
    <>
      <Header />
      <main>
        {/* ── Page Hero ── */}
        <section
          className="relative w-full py-20 lg:py-28 overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 80%, rgba(44, 74, 107, 0.4) 0%, transparent 70%),
              radial-gradient(ellipse 60% 50% at 80% 20%, rgba(44, 74, 107, 0.3) 0%, transparent 60%),
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
              Sobre Nosotros
            </p>

            <h1 className="mt-8 font-[family-name:var(--font-heading)] text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Donde la excelencia lingüística se encuentra con la exigencia del
              Estado
            </h1>

            <p className="mx-auto mt-8 max-w-2xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-white/70 md:text-xl">
              Somos el centro de referencia en Madrid para quienes entienden que
              dominar un idioma no es un mérito opcional, sino el requisito que
              separa a los candidatos que aprueban de los que se quedan a las
              puertas.
            </p>
          </div>
        </section>

        {/* ── Mission Section ── */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
              {/* Left column */}
              <div>
                <div className="mb-6 h-px w-12 bg-gold" />
                <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold leading-snug text-navy sm:text-4xl">
                  Nuestra misión
                </h2>
                <p className="mt-6 font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue md:text-lg">
                  Existimos para salvar la distancia entre el nivel lingüístico
                  actual de cada candidato y lo que el Estado exige en sus
                  procesos selectivos. No enseñamos idiomas de forma genérica:
                  preparamos profesionales para superar pruebas concretas, con
                  formatos específicos y criterios de evaluación definidos.
                </p>
                <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue md:text-lg">
                  Cada programa que diseñamos parte de un análisis riguroso del
                  examen al que se enfrenta el opositor. Porque la diferencia
                  entre aprobar y suspender no es solo saber un idioma, sino
                  saber demostrarlo en el formato exacto que exige el tribunal.
                </p>
              </div>

              {/* Right column – values grid */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-navy">
                    Excelencia
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-blue">
                    Estándares de preparación equiparables a los que el propio
                    tribunal aplica en la evaluación. Nada menos.
                  </p>
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-navy">
                    Especialización
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-blue">
                    Nos dedicamos exclusivamente a la preparación lingüística
                    para oposiciones. Es lo único que hacemos y lo hacemos mejor
                    que nadie.
                  </p>
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-navy">
                    Compromiso
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-blue">
                    Acompañamos al candidato desde el diagnóstico inicial hasta
                    el día del examen. Su objetivo es nuestro objetivo.
                  </p>
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-navy">
                    Resultados
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-blue">
                    Medimos nuestro éxito con un único indicador: el porcentaje
                    de alumnos que supera la prueba de idiomas de su oposición.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Approach ── */}
        <section className="bg-light-gray py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="mx-auto mb-6 h-px w-12 bg-gold" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold leading-snug text-navy sm:text-4xl">
              Un enfoque diferente
            </h2>

            <p className="mt-8 font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue md:text-lg">
              No somos una academia de idiomas al uso. No ofrecemos cursos
              genéricos de inglés, francés o alemán con la esperanza de que
              &laquo;algo sirva&raquo; para la oposición. Nuestro modelo es
              radicalmente distinto: cada programa se construye desde el examen
              hacia atrás.
            </p>

            <p className="mt-6 font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue md:text-lg">
              Nos enfocamos exclusivamente en los requisitos lingüísticos de las
              oposiciones del Estado. Eso significa que conocemos en profundidad
              los formatos de examen, los criterios de corrección, las
              tipologías de texto que aparecen en las pruebas y el nivel de
              precisión que el tribunal espera de cada candidato.
            </p>

            <p className="mt-6 font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue md:text-lg">
              Nuestra metodología está diseñada por ingeniería inversa: partimos
              de las pruebas reales de convocatorias anteriores, identificamos
              los patrones recurrentes y las competencias críticas, y
              construimos un itinerario de preparación que maximiza las
              probabilidades de éxito. Cada ejercicio, cada simulacro, cada
              corrección tiene un propósito medible y directamente vinculado al
              examen.
            </p>
          </div>
        </section>

        {/* ── Team / Expertise ── */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mx-auto mb-6 h-px w-12 bg-gold lg:mx-0" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold leading-snug text-navy sm:text-4xl">
              Nuestro equipo
            </h2>

            <div className="mt-8 space-y-6">
              <p className="font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue md:text-lg">
                Detrás del Instituto Diplomático de Idiomas hay un equipo
                multidisciplinar que comparte una convicción: la preparación
                lingüística para oposiciones exige un nivel de especialización
                que la enseñanza convencional no puede ofrecer.
              </p>

              <p className="font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue md:text-lg">
                Nuestro claustro está compuesto por formadores con experiencia
                directa en pruebas oficiales del Estado, especialistas en
                evaluación lingüística que conocen de primera mano los criterios
                de los tribunales, y profesores nativos y bilingües con
                titulaciones superiores y amplia trayectoria en la enseñanza de
                lenguas para fines específicos.
              </p>

              <p className="font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue md:text-lg">
                Esta combinación de perfiles nos permite ofrecer algo que ninguna
                academia generalista puede igualar: una preparación que integra
                el dominio del idioma con el conocimiento profundo de lo que
                realmente se evalúa en cada convocatoria. Nuestros formadores no
                solo enseñan la lengua, sino que entrenan al candidato para
                demostrar su competencia exactamente como el tribunal espera
                verla.
              </p>
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <DiagnosticCTA />
      </main>
      <Footer />
    </>
  );
}
