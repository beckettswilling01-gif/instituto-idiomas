import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/sections/FinalCTA";

/* ------------------------------------------------------------------ */
/*  Language data                                                      */
/* ------------------------------------------------------------------ */

const langData: Record<
  string,
  {
    name: string;
    nativeName: string;
    code: string;
    description: string[];
    relevantExams: string[];
    levels: string[];
    features: string[];
  }
> = {
  ingles: {
    name: "Inglés",
    nativeName: "English",
    code: "EN",
    description: [
      "El inglés es, sin discusión, el idioma más demandado en las oposiciones al servicio público español. Desde la Carrera Diplomática hasta los cuerpos de Técnicos Comerciales y Economistas del Estado, la acreditación de un nivel avanzado de inglés constituye un requisito imprescindible o un mérito decisivo en la puntuación final.",
      "Nuestro programa de preparación en inglés va mucho más allá de la formación genérica. Trabajamos con materiales extraídos de convocatorias reales, simulamos las pruebas de comprensión lectora, traducción directa e inversa y expresión oral que los tribunales exigen. Cada sesión está diseñada para que el opositor adquiera no solo fluidez, sino el registro formal, el vocabulario jurídico-institucional y la precisión gramatical que marcan la diferencia.",
      "Nuestros formadores, con experiencia directa en tribunales de oposición y organismos internacionales, conocen exactamente qué buscan los evaluadores. El resultado: una preparación quirúrgica que maximiza las probabilidades de éxito en la prueba de idioma.",
    ],
    relevantExams: [
      "Carrera Diplomática",
      "Técnicos Comerciales y Economistas del Estado",
      "Organismos Internacionales (ONU, OTAN, OSCE)",
      "Cuerpo Superior de Administradores Civiles del Estado",
      "Letrados del Consejo de Estado",
      "Inspectores de Hacienda",
    ],
    levels: ["B2", "C1", "C2"],
    features: [
      "Simulacros de examen con formato oficial de cada convocatoria",
      "Vocabulario jurídico-institucional y diplomático especializado",
      "Práctica intensiva de traducción directa e inversa",
      "Preparación de la prueba oral con tribunales simulados",
      "Corrección individualizada de redacciones y ensayos formales",
      "Materiales actualizados con temas de actualidad internacional",
    ],
  },
  frances: {
    name: "Francés",
    nativeName: "Français",
    code: "FR",
    description: [
      "El francés ocupa un lugar privilegiado en el panorama de las oposiciones españolas, especialmente en aquellas vinculadas al ámbito diplomático y europeo. La Carrera Diplomática exige tradicionalmente el dominio del francés como segunda lengua obligatoria, y su peso en la puntuación final puede resultar determinante para obtener la plaza.",
      "En el Instituto Diplomático de Idiomas preparamos el francés con un enfoque eminentemente práctico y orientado a resultados. El opositor trabaja desde el primer día con textos del Diario Oficial de la Unión Europea, comunicados del Quai d'Orsay y documentos de organismos francófonos, adquiriendo el registro lingüístico preciso que los tribunales valoran.",
      "Nuestro equipo de profesores nativos y bilingües, especializados en el francés diplomático e institucional, garantiza una formación que combina rigor gramatical, riqueza léxica y soltura comunicativa. Cada clase es un paso más hacia la excelencia lingüística que tu oposición exige.",
    ],
    relevantExams: [
      "Carrera Diplomática",
      "Instituciones Europeas (EPSO)",
      "Organismos Internacionales (ONU, UNESCO, OIF)",
      "Técnicos Comerciales y Economistas del Estado",
      "Cuerpo Superior de Administradores Civiles del Estado",
    ],
    levels: ["B2", "C1", "C2"],
    features: [
      "Preparación específica para la prueba de francés de la Carrera Diplomática",
      "Trabajo con documentos oficiales de instituciones europeas y francófonas",
      "Entrenamiento en traducción jurídica y diplomática francés-español",
      "Simulacros orales con dinámica de tribunal de oposición",
      "Refuerzo de gramática avanzada y estilística formal",
      "Inmersión en la actualidad geopolítica francófona",
    ],
  },
  aleman: {
    name: "Alemán",
    nativeName: "Deutsch",
    code: "DE",
    description: [
      "El alemán se ha consolidado como una lengua de alto valor estratégico en las oposiciones al servicio público español. En un contexto donde la Unión Europea ocupa un papel central en la acción exterior de España, el dominio del alemán —idioma de la primera economía europea— otorga al opositor una ventaja competitiva difícil de igualar.",
      "Nuestra preparación en alemán está diseñada para candidatos que buscan diferenciarse. Abordamos tanto la gramática rigurosa que exige esta lengua como el vocabulario especializado en relaciones internacionales, derecho comunitario y economía. Los materiales de trabajo incluyen textos del Bundestag, comunicados de la Cancillería Federal y documentos de instituciones europeas en lengua alemana.",
      "Sabemos que el alemán presenta desafíos estructurales únicos —la declinación, la sintaxis verbal, los compuestos nominales— y por ello nuestro método combina explicación sistemática con práctica constante. El objetivo es que el opositor alcance un dominio funcional y preciso, capaz de superar cualquier prueba de nivel.",
    ],
    relevantExams: [
      "Carrera Diplomática",
      "Instituciones Europeas (EPSO)",
      "Organismos Internacionales",
      "Técnicos Comerciales y Economistas del Estado",
    ],
    levels: ["B1", "B2", "C1"],
    features: [
      "Método progresivo adaptado a la complejidad gramatical del alemán",
      "Vocabulario técnico en derecho europeo, economía y relaciones internacionales",
      "Práctica de comprensión lectora con textos institucionales auténticos",
      "Entrenamiento oral enfocado en el registro formal y diplomático",
      "Preparación de pruebas escritas: redacción, resumen y traducción",
      "Seguimiento individualizado del progreso lingüístico",
    ],
  },
  italiano: {
    name: "Italiano",
    nativeName: "Italiano",
    code: "IT",
    description: [
      "El italiano, como lengua románica hermana del español, ofrece al opositor una curva de aprendizaje favorable que, bien aprovechada, puede traducirse en una puntuación sobresaliente en las pruebas de idioma. Sin embargo, esta aparente accesibilidad es también una trampa: los tribunales conocen la proximidad lingüística y elevan el nivel de exigencia en consecuencia.",
      "En el Instituto Diplomático de Idiomas preparamos el italiano con la profundidad que las oposiciones demandan. Trabajamos las diferencias sutiles entre ambas lenguas —los falsos amigos, las divergencias preposicionales, los matices del subjuntivo—, al tiempo que desarrollamos el vocabulario institucional y diplomático que los evaluadores esperan encontrar.",
      "Nuestro programa incluye inmersión en la actualidad política italiana, trabajo con documentos de la Farnesina y textos de organismos internacionales con sede en Roma (FAO, FIDA, PMA). El resultado es un dominio del italiano que trasciende lo conversacional y alcanza el nivel de precisión profesional que tu oposición requiere.",
    ],
    relevantExams: [
      "Carrera Diplomática",
      "Organismos Internacionales (FAO, FIDA, PMA)",
      "Técnicos Comerciales y Economistas del Estado",
      "Cuerpo Superior de Administradores Civiles del Estado",
    ],
    levels: ["B2", "C1", "C2"],
    features: [
      "Análisis contrastivo español-italiano para superar interferencias lingüísticas",
      "Vocabulario diplomático e institucional del ámbito italiano",
      "Práctica con documentos oficiales de organismos con sede en Italia",
      "Entrenamiento en traducción especializada y resumen de textos",
      "Simulacros de prueba oral con registro formal",
      "Inmersión en la actualidad política y cultural italiana",
    ],
  },
  portugues: {
    name: "Portugués",
    nativeName: "Português",
    code: "PT",
    description: [
      "El portugués es una lengua de importancia estratégica creciente en el contexto de las oposiciones al servicio público español. Con más de 260 millones de hablantes repartidos entre Europa, América del Sur y África, el dominio del portugués abre las puertas a destinos diplomáticos y comerciales de primera magnitud, desde Lisboa y Brasilia hasta Luanda y Maputo.",
      "Nuestra preparación abarca tanto el portugués europeo como las variantes brasileña y africana, con especial énfasis en el registro formal e institucional que exigen las pruebas de oposición. Trabajamos con documentos de la CPLP, textos legislativos del Diário da República y comunicados oficiales de Itamaraty, asegurando que el opositor maneje el vocabulario y las estructuras propias del ámbito diplomático y jurídico.",
      "La proximidad lingüística con el español, lejos de simplificar la preparación, exige un trabajo minucioso sobre las diferencias fonéticas, morfológicas y léxicas que los tribunales evalúan con especial atención. Nuestro equipo docente, formado por profesores nativos lusos y brasileños, garantiza una preparación integral y rigurosa.",
    ],
    relevantExams: [
      "Carrera Diplomática",
      "Técnicos Comerciales y Economistas del Estado",
      "Organismos Internacionales (CPLP, Mercosur)",
      "Cuerpo Superior de Administradores Civiles del Estado",
    ],
    levels: ["B2", "C1", "C2"],
    features: [
      "Formación en portugués europeo y brasileño según las necesidades del opositor",
      "Vocabulario jurídico-diplomático y de relaciones internacionales",
      "Trabajo contrastivo español-portugués para evitar interferencias",
      "Práctica de comprensión auditiva con acentos lusos y brasileños",
      "Traducción especializada de textos institucionales y legislativos",
      "Preparación de la prueba oral con simulacros de tribunal",
    ],
  },
  arabe: {
    name: "Árabe",
    nativeName: "العربية",
    code: "AR",
    description: [
      "El árabe es una de las lenguas más valoradas en el acceso a la Carrera Diplomática española y al servicio exterior. Con 22 países árabes como interlocutores de España en el Mediterráneo, Oriente Medio y el norte de África, el dominio de esta lengua constituye un activo profesional de primer orden y un elemento diferenciador excepcional en el proceso selectivo.",
      "En el Instituto Diplomático de Idiomas ofrecemos una preparación en árabe estándar moderno (fusha) orientada específicamente a las pruebas de oposición. Nuestro programa cubre la comprensión lectora de textos periodísticos e institucionales, la expresión escrita formal, la traducción directa e inversa y la comunicación oral en contextos diplomáticos. Trabajamos con materiales procedentes de la Liga Árabe, Al Jazeera y los principales medios de comunicación del mundo arabófono.",
      "Somos conscientes de que el árabe presenta un reto singular por su sistema de escritura, su morfología derivacional y su riqueza dialectal. Por ello, nuestro método está diseñado para construir una base sólida desde los fundamentos, avanzando de forma progresiva hasta el nivel de competencia que los tribunales exigen. Cada opositor recibe un seguimiento personalizado que garantiza un progreso constante y medible.",
    ],
    relevantExams: [
      "Carrera Diplomática",
      "Servicio Exterior del Estado",
      "Organismos Internacionales (Liga Árabe, ONU)",
      "Técnicos Comerciales y Economistas del Estado",
    ],
    levels: ["A2", "B1", "B2", "C1"],
    features: [
      "Enseñanza del árabe estándar moderno (fusha) con orientación diplomática",
      "Introducción progresiva al sistema de escritura y fonética árabe",
      "Vocabulario especializado en relaciones internacionales y geopolítica",
      "Comprensión lectora de prensa y documentos institucionales árabes",
      "Práctica de traducción directa e inversa con textos de actualidad",
      "Contextualización cultural y geopolítica del mundo árabe",
    ],
  },
  chino: {
    name: "Chino mandarín",
    nativeName: "中文",
    code: "ZH",
    description: [
      "El chino mandarín se ha convertido en la lengua con mayor proyección estratégica en el ámbito diplomático y comercial internacional. China es ya el primer socio comercial de la Unión Europea y un actor geopolítico ineludible; dominar su idioma otorga al funcionario español una capacidad de interlocución directa que muy pocos candidatos pueden ofrecer.",
      "Nuestro programa de chino mandarín para oposiciones combina la enseñanza del sistema de escritura (caracteres simplificados y pinyin), la gramática funcional y el vocabulario institucional con un enfoque práctico orientado a las pruebas de selección. Trabajamos con textos del Ministerio de Asuntos Exteriores de la República Popular China, comunicados de Xinhua y documentos de organismos internacionales en versión china.",
      "El aprendizaje del chino exige constancia y método. Nuestro equipo docente, formado por sinólogos y profesores nativos con experiencia en enseñanza a hispanohablantes, ha diseñado un itinerario que permite al opositor avanzar con solidez desde los caracteres básicos hasta la comprensión de textos institucionales de complejidad media-alta. Cada etapa está calibrada para producir resultados tangibles en el menor tiempo posible.",
    ],
    relevantExams: [
      "Carrera Diplomática",
      "Técnicos Comerciales y Economistas del Estado",
      "Organismos Internacionales (ONU, OMC)",
      "Servicio Exterior del Estado",
    ],
    levels: ["A2", "B1", "B2"],
    features: [
      "Enseñanza sistemática de caracteres simplificados y sistema pinyin",
      "Gramática funcional del mandarín con enfoque comunicativo",
      "Vocabulario diplomático, comercial y de relaciones internacionales",
      "Comprensión lectora de textos institucionales chinos",
      "Práctica de expresión oral con tonalidad y registro formal",
      "Aproximación a la cultura política y protocolo institucional chino",
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Static params & metadata                                           */
/* ------------------------------------------------------------------ */

export async function generateStaticParams() {
  return Object.keys(langData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lang = langData[slug];

  if (!lang) {
    return { title: "Idioma no encontrado | Instituto Diplomático de Idiomas" };
  }

  return {
    title: `${lang.name} para oposiciones | Instituto Diplomático de Idiomas`,
    description: `Preparación especializada en ${lang.name.toLowerCase()} para oposiciones al servicio público en España. Programa adaptado a las exigencias reales de cada convocatoria.`,
  };
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default async function LanguagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lang = langData[slug];

  if (!lang) notFound();

  return (
    <>
      <Header />
      <main>
        {/* ---- Hero ---- */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            {/* Language code badge */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/40">
              <span className="text-2xl font-bold tracking-wide text-gold font-[family-name:var(--font-heading)]">
                {lang.code}
              </span>
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold/80 font-[family-name:var(--font-body)]">
              {lang.nativeName}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)]">
              {lang.name} para oposiciones
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 font-[family-name:var(--font-body)]">
              Preparación de excelencia adaptada a las exigencias lingüísticas
              de cada convocatoria. Niveles{" "}
              {lang.levels.join(", ")}.
            </p>
          </div>
        </section>

        {/* ---- Preparación section ---- */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold font-[family-name:var(--font-body)]">
              PROGRAMA
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl font-[family-name:var(--font-heading)]">
              Preparación de {lang.name}
            </h2>

            <div className="mt-8 space-y-6">
              {lang.description.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-slate-blue/80 font-[family-name:var(--font-body)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Oposiciones relevantes ---- */}
        <section className="bg-light-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold font-[family-name:var(--font-body)]">
                CONVOCATORIAS
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl font-[family-name:var(--font-heading)]">
                Oposiciones relevantes
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-blue/70 font-[family-name:var(--font-body)]">
                El {lang.name.toLowerCase()} es un idioma valorado o exigido en
                los siguientes procesos selectivos:
              </p>
            </div>

            <div className="mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
              {lang.relevantExams.map((exam) => (
                <div
                  key={exam}
                  className="flex items-center gap-3 rounded-lg border border-light-gray bg-white p-5"
                >
                  {/* Check icon */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <svg
                      className="h-4 w-4 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-navy font-[family-name:var(--font-body)]">
                    {exam}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Características del programa ---- */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold font-[family-name:var(--font-body)]">
                METODOLOGÍA
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl font-[family-name:var(--font-heading)]">
                Características del programa
              </h2>
            </div>

            <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {lang.features.map((feature, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-light-gray bg-white p-6"
                >
                  {/* Number badge */}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-navy">
                    <span className="text-sm font-bold text-gold font-[family-name:var(--font-heading)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-blue/80 font-[family-name:var(--font-body)]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Back to languages link ---- */}
        <section className="bg-warm-white pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <Link
              href="/idiomas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-blue/70 hover:text-gold-hover transition-colors font-[family-name:var(--font-body)]"
            >
              <span className="transition-transform duration-200 hover:-translate-x-1">
                &larr;
              </span>
              Ver todos los idiomas
            </Link>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
