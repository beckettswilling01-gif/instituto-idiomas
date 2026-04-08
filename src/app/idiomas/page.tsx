import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Idiomas | Instituto Diplomático de Idiomas",
  description:
    "Preparación especializada en siete idiomas para oposiciones al servicio público en España. Inglés, francés, alemán, italiano, portugués, árabe y chino con metodología adaptada a cada convocatoria.",
};

const languages = [
  {
    code: "EN",
    name: "Inglés",
    nativeName: "English",
    slug: "ingles",
    description:
      "El idioma más demandado en oposiciones del Estado. Preparación integral para pruebas de comprensión, expresión escrita y oral en convocatorias de la Carrera Diplomática, Técnicos Comerciales y más.",
    exams: ["Carrera Diplomática", "Técnicos Comerciales", "Organismos Internacionales"],
  },
  {
    code: "FR",
    name: "Francés",
    nativeName: "Français",
    slug: "frances",
    description:
      "Esencial para la Carrera Diplomática y cuerpos europeos. Formación centrada en el registro formal y diplomático exigido en las pruebas de acceso al servicio exterior.",
    exams: ["Carrera Diplomática", "Instituciones Europeas", "Organismos Internacionales"],
  },
  {
    code: "DE",
    name: "Alemán",
    nativeName: "Deutsch",
    slug: "aleman",
    description:
      "Diferenciación lingüística para candidatos ambiciosos. Dominar el alemán como segunda o tercera lengua ofrece una ventaja competitiva notable en procesos selectivos de alto nivel.",
    exams: ["Carrera Diplomática", "Instituciones Europeas"],
  },
  {
    code: "IT",
    name: "Italiano",
    nativeName: "Italiano",
    slug: "italiano",
    description:
      "Preparación específica para pruebas de nivel avanzado. El italiano complementa perfiles orientados al ámbito diplomático y cultural con una sólida formación en comprensión y expresión.",
    exams: ["Carrera Diplomática", "Organismos Internacionales"],
  },
  {
    code: "PT",
    name: "Portugués",
    nativeName: "Português",
    slug: "portugues",
    description:
      "Competencia lingüística para relaciones iberoamericanas. El portugués es una lengua estratégica para posiciones vinculadas a la cooperación con Brasil, Portugal y la CPLP.",
    exams: ["Carrera Diplomática", "Técnicos Comerciales"],
  },
  {
    code: "AR",
    name: "Árabe",
    nativeName: "العربية",
    slug: "arabe",
    description:
      "Formación especializada para el servicio exterior. El árabe abre puertas a destinos diplomáticos clave y aporta un perfil diferencial altamente valorado en los procesos de selección.",
    exams: ["Carrera Diplomática", "Servicio Exterior"],
  },
  {
    code: "ZH",
    name: "Chino",
    nativeName: "中文",
    slug: "chino",
    description:
      "Preparación estratégica en el idioma del futuro. El mandarín es cada vez más relevante en el ámbito diplomático y comercial, ofreciendo una ventaja competitiva excepcional.",
    exams: ["Carrera Diplomática", "Técnicos Comerciales"],
  },
];

export default function IdiomasPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold font-[family-name:var(--font-body)]">
              IDIOMAS
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)]">
              Siete idiomas, un solo objetivo: tu plaza
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 font-[family-name:var(--font-body)]">
              Preparación lingüística de excelencia adaptada a las exigencias
              reales de cada convocatoria. Cada idioma, cada nivel, cada prueba:
              cubiertos por un equipo de especialistas.
            </p>
          </div>
        </section>

        {/* Languages Grid */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {languages.map((lang) => (
                <Link
                  key={lang.slug}
                  href={`/idiomas/${lang.slug}`}
                  className="group rounded-lg border border-light-gray bg-white p-8 transition-all duration-300 hover:shadow-lg hover:border-gold/30"
                >
                  {/* Header row */}
                  <div className="flex items-center gap-4 mb-5">
                    {/* Language code circle */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy">
                      <span className="text-lg font-bold tracking-wide text-gold font-[family-name:var(--font-heading)]">
                        {lang.code}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-navy font-[family-name:var(--font-heading)]">
                        {lang.name}
                      </h2>
                      <p className="text-sm text-slate-blue/50 font-[family-name:var(--font-body)]">
                        {lang.nativeName}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-blue/70 font-[family-name:var(--font-body)]">
                    {lang.description}
                  </p>

                  {/* Relevant exams */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {lang.exams.map((exam) => (
                      <span
                        key={exam}
                        className="inline-block rounded-sm bg-light-gray px-3 py-1 text-xs font-medium text-slate-blue/70 font-[family-name:var(--font-body)]"
                      >
                        {exam}
                      </span>
                    ))}
                  </div>

                  {/* CTA arrow */}
                  <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-gold group-hover:text-gold-hover transition-colors font-[family-name:var(--font-body)]">
                    Ver programa completo
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
