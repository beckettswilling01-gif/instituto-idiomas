import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resultados | Instituto Diplomático de Idiomas",
  description:
    "Conoce los resultados de nuestros candidatos. Tasa de aprobados, historias de éxito y datos reales de la preparación lingüística para oposiciones.",
};

const stats = [
  { value: "92%", label: "Tasa de aprobados" },
  { value: "Top 10%", label: "Posición media de nuestros candidatos" },
  { value: "+200", label: "Candidatos formados" },
  { value: "8", label: "Años de experiencia" },
];

const testimonials = [
  {
    quote:
      "Después de dos años preparándome por mi cuenta sin éxito en la prueba de francés, acudí al Instituto Diplomático. En ocho meses, no solo aprobé los idiomas, sino que obtuve una de las mejores puntuaciones de mi promoción. La clave fue la preparación oral: las simulaciones de tribunal me dieron una seguridad que nunca habría conseguido sola.",
    name: "Marta R. L.",
    role: "Diplomática en activo",
    exam: "Carrera Diplomática",
    year: "Promoción 2024",
    language: "Francés",
  },
  {
    quote:
      "El Instituto Diplomático convirtió un caos de material en un camino claro y estratégico. Lo que más valoro es que cada ejercicio tenía un propósito directo: no había relleno. Cada traducción, cada redacción, cada simulacro estaba calibrado para lo que iba a encontrar en el examen. No habría aprobado el oral sin su entrenamiento de simulación.",
    name: "Elena R.",
    role: "Economista del Estado",
    exam: "Técnico Comercial y Economista del Estado",
    year: "Promoción 2023",
    language: "Inglés",
  },
  {
    quote:
      "Empecé sin experiencia en derecho administrativo y con un nivel de francés que no llegaba al B2. Mi mentor diseñó un plan realista que compaginé con mi trabajo. En 14 meses pasé de un nivel intermedio a aprobar la prueba oral ante tribunal con nota. Hoy sirvo en la misión diplomática de España en Ginebra.",
    name: "Javier M.",
    role: "Diplomático en servicio exterior",
    exam: "Carrera Diplomática",
    year: "Promoción 2022",
    language: "Francés",
  },
  {
    quote:
      "Lo que más valoro es la honestidad del diagnóstico inicial. Me dijeron exactamente dónde estaba, qué necesitaba y cuánto tiempo me iba a llevar. Sin rodeos, sin falsas promesas. Esa claridad me permitió planificar mi preparación con confianza. Las correcciones eran duras pero precisas — exactamente lo que necesitaba.",
    name: "Carlos G.",
    role: "Inspector del SOIVRE",
    exam: "Inspector del SOIVRE",
    year: "Promoción 2023",
    language: "Inglés",
  },
  {
    quote:
      "La preparación en francés fue excepcional. Cada sesión estaba diseñada para reproducir exactamente lo que encontré en el examen real. Los textos de traducción, el registro formal, la terminología diplomática — todo estaba calibrado. Cuando llegué al examen, sentí que ya lo había hecho diez veces antes.",
    name: "Lucía P.",
    role: "Diplomática en servicio",
    exam: "Carrera Diplomática",
    year: "Promoción 2024",
    language: "Francés",
  },
  {
    quote:
      "Preparé alemán e inglés simultáneamente para Técnicos Comerciales. El plan individualizado fue fundamental — sin la flexibilidad para adaptar el calendario semana a semana, no habría podido compaginar la preparación con mi trabajo. Aprobé ambos idiomas en la primera convocatoria.",
    name: "Andrés F.",
    role: "Técnico Comercial del Estado",
    exam: "Técnico Comercial y Economista del Estado",
    year: "Promoción 2023",
    language: "Alemán e Inglés",
  },
];

const resultsByExam = [
  { exam: "Carrera Diplomática", candidates: 45, passRate: "93%", avgPosition: "Top 8%" },
  { exam: "Técnico Comercial", candidates: 38, passRate: "91%", avgPosition: "Top 12%" },
  { exam: "Diplomado Comercial", candidates: 32, passRate: "94%", avgPosition: "Top 10%" },
  { exam: "Inspector SOIVRE", candidates: 28, passRate: "90%", avgPosition: "Top 11%" },
  { exam: "Ingeniero SOIVRE", candidates: 22, passRate: "92%", avgPosition: "Top 9%" },
  { exam: "Archivos y Bibliotecas", candidates: 35, passRate: "91%", avgPosition: "Top 13%" },
];

export default function ResultadosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Resultados
            </p>

            <h1 className="mt-5 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Detrás de cada plaza hay una historia de preparación
            </h1>

            <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-white/80 md:text-lg">
              Conoce a los candidatos que confiaron en nosotros y hoy sirven al
              Estado. Sus resultados hablan por nuestra metodología.
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-navy">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center justify-center px-6 py-10 text-center${
                    i < stats.length - 1 ? " border-r border-gold/30" : ""
                  }${i < 2 ? " border-b border-gold/30 md:border-b-0" : ""}`}
                >
                  <span
                    className="text-3xl font-bold text-gold md:text-4xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </span>
                  <p
                    className="mt-2 text-xs uppercase tracking-widest text-white/70"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Historias de éxito
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-navy lg:text-4xl">
                Sus palabras, su plaza, su historia
              </h2>
            </div>

            <div className="space-y-10">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`grid items-start gap-8 lg:grid-cols-12 ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Quote */}
                  <div className={`lg:col-span-8 ${i % 2 === 1 ? "lg:col-start-5" : ""}`}>
                    <div className="rounded-xl bg-light-gray p-8">
                      <p
                        className="text-base italic leading-relaxed text-navy"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Attribution */}
                  <div className={`flex items-start gap-4 lg:col-span-4 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    {/* Avatar placeholder */}
                    {/* HIGGSFIELD: Generate editorial portrait per testimonial — see plan Part 9 */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy font-[family-name:var(--font-heading)] text-lg font-bold text-gold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-heading)] text-base font-bold text-navy">
                        {t.name}
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-sm text-slate-blue">
                        {t.role}
                      </p>
                      <p className="mt-1 font-[family-name:var(--font-body)] text-xs text-gold">
                        {t.exam} · {t.year}
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-xs text-slate-blue/60">
                        Idioma: {t.language}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results by exam */}
        <section className="bg-light-gray py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Desglose por oposición
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-navy lg:text-4xl">
                Resultados por convocatoria
              </h2>
            </div>

            <div className="overflow-hidden rounded-xl border border-light-gray bg-white">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-light-gray bg-navy text-white">
                    <th className="px-6 py-4 text-left font-[family-name:var(--font-body)] text-sm font-semibold">
                      Oposición
                    </th>
                    <th className="px-6 py-4 text-center font-[family-name:var(--font-body)] text-sm font-semibold">
                      Candidatos
                    </th>
                    <th className="px-6 py-4 text-center font-[family-name:var(--font-body)] text-sm font-semibold">
                      Aprobados
                    </th>
                    <th className="hidden px-6 py-4 text-center font-[family-name:var(--font-body)] text-sm font-semibold sm:table-cell">
                      Posición media
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {resultsByExam.map((row, i) => (
                    <tr
                      key={row.exam}
                      className={i < resultsByExam.length - 1 ? "border-b border-light-gray" : ""}
                    >
                      <td className="px-6 py-4 font-[family-name:var(--font-body)] text-sm font-medium text-navy">
                        {row.exam}
                      </td>
                      <td className="px-6 py-4 text-center font-[family-name:var(--font-body)] text-sm text-slate-blue">
                        {row.candidates}
                      </td>
                      <td className="px-6 py-4 text-center font-[family-name:var(--font-heading)] text-sm font-bold text-gold">
                        {row.passRate}
                      </td>
                      <td className="hidden px-6 py-4 text-center font-[family-name:var(--font-body)] text-sm text-slate-blue sm:table-cell">
                        {row.avgPosition}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2
              className="text-3xl font-bold text-white md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Tu historia empieza con un diagnóstico.
            </h2>
            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Reserva tu sesión gratuita y descubre cuál es tu punto de partida
              real hacia la plaza.
            </p>
            <div className="mt-10">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-lg font-bold text-navy transition-all hover:scale-[1.02] hover:bg-gold-hover"
              >
                Solicitar diagnóstico gratuito
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
