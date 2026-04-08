import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiagnosticCTA from "@/components/sections/DiagnosticCTA";

export const metadata: Metadata = {
  title: "Oposiciones que Preparamos | Instituto Diplomático de Idiomas",
  description:
    "Preparación lingüística especializada para oposiciones: Carrera Diplomática, Técnico Comercial, Diplomado Comercial, Inspector del SOIVRE y más. Programas a medida en Madrid.",
};

interface Exam {
  slug: string;
  category: string;
  name: string;
  description: string;
  languages: string[];
}

const exams: Exam[] = [
  {
    slug: "carrera-diplomatica",
    category: "Cuerpo Superior",
    name: "Carrera Diplomática",
    description:
      "Preparación integral de inglés y francés para las pruebas escritas y orales del servicio exterior. Incluye traducción directa e inversa, resumen y conversación avanzada ante tribunal.",
    languages: ["Inglés", "Francés"],
  },
  {
    slug: "tecnico-comercial-economista-estado",
    category: "Cuerpo Superior",
    name: "Técnico Comercial y Economista del Estado",
    description:
      "Dominio avanzado de idiomas para uno de los cuerpos más exigentes de la administración económica. Pruebas de traducción, conversación y análisis de textos especializados en comercio internacional.",
    languages: ["Inglés", "Francés", "Alemán"],
  },
  {
    slug: "diplomado-comercial-estado",
    category: "Cuerpo de Gestión",
    name: "Diplomado Comercial del Estado",
    description:
      "Formación lingüística específica para las pruebas de acceso al cuerpo comercial del Estado. Traducción directa e inversa y conversación sobre temas económicos y comerciales.",
    languages: ["Inglés", "Francés"],
  },
  {
    slug: "inspector-soivre",
    category: "Cuerpo de Gestión",
    name: "Inspector del SOIVRE",
    description:
      "Preparación de idiomas orientada al comercio exterior y la inspección internacional. Vocabulario técnico de normalización, control de calidad y regulación aduanera.",
    languages: ["Inglés", "Francés"],
  },
  {
    slug: "ingeniero-tecnico-soivre",
    category: "Cuerpo Técnico",
    name: "Ingeniero Técnico del SOIVRE",
    description:
      "Competencia lingüística técnica para el cuerpo de ingenieros del servicio de inspección. Enfoque en terminología técnica, normativa internacional y documentación de comercio exterior.",
    languages: ["Inglés", "Francés"],
  },
  {
    slug: "ayudante-archivos-bibliotecas-museos",
    category: "Cuerpo de Gestión",
    name: "Ayudante de Archivos, Bibliotecas y Museos",
    description:
      "Preparación en idiomas para el acceso a instituciones culturales y patrimoniales del Estado. Traducción de textos académicos y culturales, comprensión lectora avanzada.",
    languages: ["Inglés", "Francés", "Alemán", "Italiano"],
  },
];

export default function OposicionesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Oposiciones
            </p>

            <h1 className="mt-5 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Preparación lingüística para las oposiciones más exigentes
            </h1>

            <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-white/70 md:text-lg">
              Cada convocatoria tiene requisitos lingüísticos propios. Nuestros
              programas se adaptan al formato exacto de cada prueba, con
              materiales actualizados y simulacros que replican las condiciones
              reales del examen.
            </p>
          </div>
        </section>

        {/* Exams Grid */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {exams.map((exam) => (
                <Link
                  key={exam.slug}
                  href={`/oposiciones/${exam.slug}`}
                  className="group flex flex-col rounded-lg border border-light-gray bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {exam.category}
                  </p>

                  <h2 className="mt-3 font-[family-name:var(--font-heading)] text-xl leading-snug text-navy">
                    {exam.name}
                  </h2>

                  <p className="mt-3 flex-1 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-blue">
                    {exam.description}
                  </p>

                  {/* Languages */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exam.languages.map((lang) => (
                      <span
                        key={lang}
                        className="rounded-sm bg-light-gray px-2.5 py-1 font-[family-name:var(--font-body)] text-xs font-medium text-navy"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>

                  <span className="mt-6 inline-block font-[family-name:var(--font-body)] text-sm font-semibold text-gold transition-colors duration-200 group-hover:text-gold-hover">
                    Ver programa&nbsp;&rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <DiagnosticCTA />
      </main>
      <Footer />
    </>
  );
}
