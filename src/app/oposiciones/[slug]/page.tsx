import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExamFAQ } from "@/components/sections/ExamFAQ";
import WhyPrepareGrid from "@/components/sections/WhyPrepareGrid";
import ExamStructureAccordion from "@/components/sections/ExamStructureAccordion";
import MethodologyCards from "@/components/sections/MethodologyCards";

/* ------------------------------------------------------------------ */
/*  Data types                                                         */
/* ------------------------------------------------------------------ */

interface ExamData {
  title: string;
  fullName: string;
  category: string;
  heroSubtitle: string;
  heroImage: string;
  heroQuote: string;
  description: string[];
  languages: string[];
  examFormat: string[];
  requirements: string[];
  stats: { value: string; label: string }[];
  whyPrepare: { title: string; description: string }[];
  preparationFeatures: {
    title: string;
    description: string;
    stat: string;
    statLabel: string;
    capabilities: { text: string; detail: string }[];
  }[];
  faq: { question: string; answer: string }[];
  relatedExams: { title: string; slug: string }[];
  testimonial: { quote: string; name: string; detail: string };
  comparison: { aspect: string; generic: string; ours: string }[];
}

/* ------------------------------------------------------------------ */
/*  Language slug helper                                               */
/* ------------------------------------------------------------------ */

const languageSlugMap: Record<string, string> = {
  Inglés: "ingles",
  Francés: "frances",
  Alemán: "aleman",
  Italiano: "italiano",
};

/* ------------------------------------------------------------------ */
/*  Exam data — 6 exams with full content                              */
/* ------------------------------------------------------------------ */

const examData: Record<string, ExamData> = {
  "carrera-diplomatica": {
    title: "Carrera Diplomática",
    fullName: "Oposición a la Carrera Diplomática del Estado",
    category: "Cuerpo Superior",
    heroSubtitle:
      "La oposición más prestigiosa del Estado exige un dominio lingüístico excepcional. Prepárate con quienes conocen cada detalle del examen.",
    // HIGGSFIELD PROMPT: The ornate entrance hall of the Palacio de Santa Cruz in Madrid, seat of the Spanish Ministry of Foreign Affairs. Marble floors, high ceilings with chandeliers, diplomatic flags lining a corridor. Warm natural light streaming through tall windows. Grand, institutional, aspirational. Architectural photography, symmetrical composition.
    heroImage: "/images/exams/carrera-diplomatica.jpg",
    heroQuote: "La tutoría no se trata de enseñar datos; se trata de transferir la mirada del diplomático.",
    description: [
      "La Carrera Diplomática es, sin duda, una de las oposiciones más prestigiosas y exigentes del Estado español. El componente lingüístico ocupa un lugar central en el proceso selectivo: los aspirantes deben acreditar un dominio avanzado de al menos dos idiomas extranjeros, siendo obligatorios el inglés y el francés. La prueba de idiomas evalúa no solo la competencia gramatical, sino la capacidad de producir textos diplomáticos, traducir documentos oficiales y mantener una conversación fluida sobre asuntos internacionales.",
      "El examen de inglés incluye una traducción directa e inversa de textos de actualidad internacional, un resumen escrito en lengua inglesa y una conversación ante tribunal sobre temas de política exterior, derecho internacional y relaciones bilaterales. El francés sigue un formato análogo, con especial atención a la terminología propia de los organismos internacionales francófonos y la diplomacia multilateral.",
      "En el Instituto Diplomático de Idiomas preparamos a nuestros alumnos con materiales extraídos de fuentes diplomáticas reales: comunicados del Ministerio de Asuntos Exteriores, resoluciones de Naciones Unidas, tratados bilaterales y discursos ante foros internacionales. Los simulacros de tribunal replican fielmente las condiciones del examen oficial.",
    ],
    languages: ["Inglés", "Francés"],
    examFormat: [
      "Traducción directa de texto periodístico o institucional (inglés/francés → español)",
      "Traducción inversa de texto de actualidad (español → inglés/francés)",
      "Resumen escrito en el idioma extranjero de un texto propuesto",
      "Conversación oral ante tribunal sobre temas de actualidad internacional",
      "Valoración de la fluidez, corrección y registro diplomático",
    ],
    requirements: [
      "Nivel C1-C2 acreditado en inglés y francés",
      "Capacidad de traducción directa e inversa en contexto diplomático",
      "Dominio de terminología de relaciones internacionales",
      "Fluidez oral en registro formal ante tribunal",
    ],
    stats: [
      { value: "C1-C2", label: "Nivel requerido" },
      { value: "2", label: "Idiomas obligatorios" },
      { value: "5", label: "Pruebas lingüísticas" },
      { value: "92%", label: "Tasa de aprobados de nuestros alumnos" },
    ],
    whyPrepare: [
      {
        title: "Materiales diplomáticos reales",
        description:
          "Trabajamos con comunicados del MAEC, resoluciones de la ONU y tratados internacionales, no con textos genéricos de academias generalistas.",
      },
      {
        title: "Simulacros de tribunal",
        description:
          "Reproducimos las condiciones exactas de la prueba oral: panel evaluador, tiempos cronometrados y preguntas de actualidad internacional.",
      },
      {
        title: "Doble especialización inglés-francés",
        description:
          "Nuestros profesores dominan la terminología diplomática en ambos idiomas y conocen las diferencias de exigencia entre ambas pruebas.",
      },
      {
        title: "Corrección de nivel C2",
        description:
          "Cada traducción y resumen recibe retroalimentación detallada sobre precisión léxica, registro y estilo diplomático.",
      },
      {
        title: "Actualización permanente",
        description:
          "Incorporamos temas de actualidad que pueden aparecer en el examen: conflictos internacionales, tratados recientes y debates en el Consejo de Seguridad.",
      },
      {
        title: "Red de antiguos alumnos diplomáticos",
        description:
          "Nuestros exalumnos en activo en el servicio exterior comparten su experiencia y orientación sobre la prueba.",
      },
    ],
    preparationFeatures: [
      {
        title: "Traducción directa e inversa",
        stat: "2x",
        statLabel: "sesiones de traducción por semana",
        description: "Práctica intensiva de traducción en ambas direcciones con textos diplomáticos, prensa internacional y documentos del BOE bajo condiciones cronometradas reales del examen.",
        capabilities: [
          { text: "Textos de prensa internacional y comunicados oficiales", detail: "Trabajamos con fuentes reales: Le Monde Diplomatique, The Economist, resoluciones de la ONU y comunicados del MAEC." },
          { text: "Traducción cronometrada en condiciones de examen", detail: "Cada sesión replica los tiempos exactos de la prueba para desarrollar velocidad y precisión bajo presión." },
          { text: "Corrección detallada de cada traducción", detail: "Retroalimentación sobre léxico, registro, estilo diplomático y errores de transferencia lingüística." },
          { text: "Textos del BOE y tratados bilaterales", detail: "Práctica con el tipo exacto de textos jurídico-diplomáticos que aparecen en el examen." },
        ],
      },
      {
        title: "Preparación oral ante tribunal",
        stat: "15-20",
        statLabel: "minutos por idioma ante tribunal simulado",
        description: "Entrevistas simuladas sobre política exterior, derecho internacional y relaciones bilaterales con profesionales del sector diplomático que conocen los criterios del tribunal.",
        capabilities: [
          { text: "Simulacros con exdiplomáticos", detail: "Nuestros formadores de oral incluyen profesionales en activo y retirados del servicio exterior español." },
          { text: "Temas de actualidad internacional", detail: "Preparación sobre conflictos geopolíticos, cumbres diplomáticas, debates del Consejo de Seguridad y tratados recientes." },
          { text: "Evaluación de fluidez y registro", detail: "Se valora no solo la corrección gramatical sino el registro diplomático, la riqueza léxica y la capacidad argumentativa." },
          { text: "Grabación y análisis de cada sesión", detail: "Cada simulacro se graba para que puedas revisar tu desempeño y medir tu progreso objetivo." },
        ],
      },
      {
        title: "Resumen analítico",
        stat: "100%",
        statLabel: "formato oficial del tribunal",
        description: "Técnicas de síntesis y redacción de resúmenes estructurados en lengua extranjera, siguiendo los criterios exactos de evaluación del tribunal.",
        capabilities: [
          { text: "Técnicas de identificación de ideas clave", detail: "Métodos para extraer la estructura argumentativa de textos complejos en tiempo limitado." },
          { text: "Redacción en registro formal", detail: "Entrenamiento en el tono, estructura y convenciones del resumen académico-diplomático." },
          { text: "Criterios de evaluación del tribunal", detail: "Conocemos y enseñamos los baremos exactos que aplica el tribunal: coherencia, concisión, fidelidad al original." },
          { text: "Práctica con textos de convocatorias anteriores", detail: "Trabajamos con los textos reales que se han propuesto en años anteriores." },
        ],
      },
      {
        title: "Vocabulario diplomático",
        stat: "+2,000",
        statLabel: "términos especializados por idioma",
        description: "Glosarios temáticos de organizaciones internacionales, derecho de los tratados, protocolo y correspondencia diplomática en inglés y francés.",
        capabilities: [
          { text: "Glosario de derecho internacional", detail: "Terminología de tratados, convenciones, protocolos y mecanismos de resolución de controversias." },
          { text: "Vocabulario de organizaciones internacionales", detail: "Léxico específico de ONU, OTAN, OSCE, UE y organismos especializados." },
          { text: "Registro y protocolo diplomático", detail: "Fórmulas de cortesía, tratamientos, correspondencia oficial y lenguaje de negociación." },
          { text: "Actualización con cada convocatoria", detail: "Incorporamos terminología nueva según la agenda internacional del momento." },
        ],
      },
      {
        title: "Seguimiento individualizado",
        stat: "Semanal",
        statLabel: "evaluación y ajuste de tu plan",
        description: "Plan de trabajo personalizado con evaluación continua, informes de progreso y ajuste de objetivos alineados con tu fecha de examen.",
        capabilities: [
          { text: "Informes de progreso por destrezas", detail: "Cada semana recibes un informe con tu evolución en traducción, oral, comprensión y vocabulario." },
          { text: "Plan adaptado a tu calendario", detail: "Si trabajas, estudias otra oposición o tienes compromisos, el plan se ajusta sin perder efectividad." },
          { text: "Objetivos medibles por fase", detail: "Hitos claros (nivel B2 consolidado, primera simulación completa, etc.) para que veas tu avance real." },
          { text: "Acceso a banco de ejercicios", detail: "Material de práctica autónoma entre sesiones para mantener el ritmo." },
        ],
      },
    ],
    faq: [
      {
        question:
          "¿Qué nivel de idiomas necesito antes de empezar la preparación?",
        answer:
          "Recomendamos un nivel mínimo de B2 consolidado en inglés y francés para iniciar nuestro programa. Si tu nivel es inferior, ofrecemos un módulo previo de nivelación intensiva. El objetivo es alcanzar un C1-C2 operativo antes del examen.",
      },
      {
        question: "¿Cuánto tiempo necesito para preparar la prueba de idiomas?",
        answer:
          "Depende de tu nivel de partida. Con un B2 sólido, recomendamos entre 10 y 14 meses de preparación específica. Con nivel C1, entre 6 y 9 meses pueden ser suficientes para alcanzar la precisión terminológica y el registro que exige el tribunal.",
      },
      {
        question:
          "¿Los textos de traducción son de actualidad o de temas históricos?",
        answer:
          "El tribunal suele proponer textos de actualidad internacional reciente: conflictos geopolíticos, cumbres diplomáticas, comunicados de organizaciones internacionales. Ocasionalmente aparecen fragmentos de tratados o discursos históricos de relevancia.",
      },
      {
        question: "¿Cómo es la prueba oral exactamente?",
        answer:
          "La conversación ante tribunal dura aproximadamente 15-20 minutos por idioma. El tribunal plantea preguntas sobre actualidad internacional, política exterior española, derecho internacional público y relaciones bilaterales. Se valora la fluidez, la corrección gramatical, la riqueza léxica y el registro diplomático.",
      },
      {
        question: "¿Puedo preparar solo un idioma con vosotros?",
        answer:
          "Sí, aunque recomendamos preparar ambos idiomas de forma integrada. Muchos de nuestros alumnos tienen un nivel más fuerte en inglés y necesitan reforzar especialmente el francés, o viceversa. Adaptamos la intensidad horaria a tus necesidades.",
      },
      {
        question: "¿Ofrecéis preparación en modalidad online?",
        answer:
          "Sí, disponemos de modalidad presencial en Madrid, online en directo y un formato híbrido. Las sesiones online mantienen la misma metodología: grupos reducidos, simulacros de tribunal y corrección detallada de traducciones.",
      },
    ],
    relatedExams: [
      {
        title: "Técnico Comercial y Economista del Estado",
        slug: "tecnico-comercial-economista-estado",
      },
      {
        title: "Diplomado Comercial del Estado",
        slug: "diplomado-comercial-estado",
      },
    ],
    testimonial: {
      quote:
        "Después de dos años preparándome por mi cuenta sin éxito en la prueba de francés, acudí al Instituto Diplomático de Idiomas. En ocho meses, no solo aprobé los idiomas, sino que obtuve una de las mejores puntuaciones de mi promoción. Los simulacros de tribunal fueron decisivos.",
      name: "Marta R. L.",
      detail: "Diplomática en activo, promoción 2024",
    },
    comparison: [
      {
        aspect: "Materiales de trabajo",
        generic: "Textos genéricos de nivel C1",
        ours: "Comunicados del MAEC, resoluciones ONU, tratados reales",
      },
      {
        aspect: "Práctica oral",
        generic: "Conversación libre con profesor nativo",
        ours: "Simulacros de tribunal con exdiplomáticos",
      },
      {
        aspect: "Traducción",
        generic: "Ejercicios estándar de traducción",
        ours: "Traducciones cronometradas con textos de convocatorias anteriores",
      },
      {
        aspect: "Terminología",
        generic: "Vocabulario general avanzado",
        ours: "Glosarios de derecho internacional y protocolo diplomático",
      },
      {
        aspect: "Seguimiento",
        generic: "Clases grupales sin evaluación continua",
        ours: "Plan individualizado con informes de progreso mensuales",
      },
    ],
  },

  "tecnico-comercial-economista-estado": {
    title: "Técnico Comercial y Economista del Estado",
    fullName:
      "Oposición al Cuerpo de Técnicos Comerciales y Economistas del Estado",
    category: "Cuerpo Superior",
    heroSubtitle:
      "El dominio de idiomas económicos y comerciales es la clave diferencial de esta oposición de élite. Entrena con los mejores especialistas.",
    // HIGGSFIELD PROMPT: A modern Spanish government office interior with clean lines, a large conference table, and floor-to-ceiling windows overlooking a Madrid cityscape. Documents and economic reports neatly arranged. Professional, precise, contemporary. Warm tones, architectural interior photography.
    heroImage: "/images/exams/tecnico-comercial.jpg",
    heroQuote: "La intersección del rigor matemático y la finura diplomática.",
    description: [
      "El Cuerpo de Técnicos Comerciales y Economistas del Estado es uno de los cuerpos superiores más selectivos de la Administración General del Estado. Sus miembros desempeñan funciones clave en la promoción del comercio exterior español, la política económica internacional y la representación comercial de España en el mundo. El dominio de idiomas no es un complemento: es un requisito esencial para el ejercicio profesional diario.",
      "La prueba de idiomas exige competencia avanzada en al menos un idioma obligatorio (inglés) y valora positivamente un segundo idioma (francés o alemán). El examen incluye ejercicios de traducción de textos económicos y comerciales, análisis de documentación especializada y una prueba oral en la que el opositor debe demostrar su capacidad para argumentar y negociar en lengua extranjera sobre cuestiones de política comercial, macroeconomía y regulación del comercio internacional.",
      "Nuestro programa para Técnicos Comerciales incorpora textos de la OMC, informes del Banco Mundial, memorandos de la Secretaría de Estado de Comercio y artículos del Financial Times y The Economist. Trabajamos la precisión terminológica en ámbitos como balanza de pagos, aranceles, acuerdos de libre comercio, inversión extranjera directa y política monetaria.",
    ],
    languages: ["Inglés", "Francés", "Alemán"],
    examFormat: [
      "Traducción directa de texto económico-comercial (idioma → español)",
      "Traducción inversa de texto especializado (español → idioma)",
      "Análisis y resumen de documentación comercial en lengua extranjera",
      "Prueba oral: exposición y debate sobre temas de comercio internacional",
      "Evaluación de terminología económica y registro profesional",
    ],
    requirements: [
      "Nivel C1 mínimo en inglés",
      "Segundo idioma valorado: francés o alemán (nivel B2+)",
      "Vocabulario especializado en economía y comercio internacional",
      "Capacidad de argumentación oral en contextos profesionales",
    ],
    stats: [
      { value: "C1", label: "Nivel mínimo en inglés" },
      { value: "3", label: "Idiomas disponibles" },
      { value: "5", label: "Pruebas del examen" },
      { value: "88%", label: "Aprobados de nuestros alumnos" },
    ],
    whyPrepare: [
      {
        title: "Enfoque económico-comercial",
        description:
          "Toda la preparación gira en torno al vocabulario y los contextos reales del comercio exterior: aranceles, balanza comercial, inversión extranjera y negociaciones multilaterales.",
      },
      {
        title: "Textos del Financial Times y The Economist",
        description:
          "Trabajamos con las mismas fuentes que utiliza el tribunal: publicaciones económicas de referencia, informes de la OMC y documentos de la Secretaría de Estado.",
      },
      {
        title: "Simulacros de debate comercial",
        description:
          "Practicamos la exposición y defensa de argumentos en inglés y francés sobre política arancelaria, acuerdos comerciales y estrategias de internacionalización.",
      },
      {
        title: "Opción de tercer idioma (alemán)",
        description:
          "Para quienes desean sumar puntos con el alemán, ofrecemos un módulo específico centrado en terminología económica y comercial germana.",
      },
      {
        title: "Profesores con experiencia en Oficinas Comerciales",
        description:
          "Nuestro equipo incluye profesionales que han trabajado en Oficinas Económicas y Comerciales de España en el extranjero y conocen el día a día del Técnico Comercial.",
      },
    ],
    preparationFeatures: [
      {
        title: "Traducción económica especializada",
        stat: "2x",
        statLabel: "sesiones semanales de traducción",
        description: "Traducción directa e inversa con textos de comercio exterior, macroeconomía y política monetaria del BCE.",
        capabilities: [
          { text: "Textos de instituciones económicas internacionales", detail: "Informes del BCE, FMI, OMC y Comisión Europea en formato original." },
          { text: "Traducción cronometrada con baremos reales", detail: "Cada ejercicio replica los tiempos y criterios de corrección del tribunal." },
          { text: "Corrección de precisión terminológica", detail: "Retroalimentación centrada en léxico económico-financiero y registro institucional." },
          { text: "Textos de convocatorias anteriores", detail: "Práctica con los textos que realmente han aparecido en exámenes previos." },
        ],
      },
      {
        title: "Oratoria comercial",
        stat: "20 min",
        statLabel: "por simulacro de exposición oral",
        description: "Presentaciones orales sobre temas comerciales: defensa de posiciones arancelarias, análisis de mercados y propuestas de internacionalización.",
        capabilities: [
          { text: "Simulacros de exposición ante panel", detail: "Reproducciones del formato oral con evaluadores que conocen los criterios del tribunal." },
          { text: "Temas de comercio internacional actual", detail: "Preparación sobre guerra comercial, acuerdos de libre comercio, sanciones y política arancelaria." },
          { text: "Técnicas de argumentación económica", detail: "Cómo estructurar un argumento comercial con datos, contexto y propuesta en idioma extranjero." },
          { text: "Grabación y análisis de desempeño", detail: "Revisión de cada simulacro para identificar puntos de mejora concretos." },
        ],
      },
      {
        title: "Vocabulario de negociación",
        stat: "+1,500",
        statLabel: "términos comerciales especializados",
        description: "Léxico de negociaciones comerciales: Incoterms, cláusulas contractuales, mecanismos de resolución de controversias y tratados de libre comercio.",
        capabilities: [
          { text: "Glosario de comercio internacional", detail: "Incoterms, aranceles, dumping, contingentes, licencias de exportación." },
          { text: "Terminología de negociación multilateral", detail: "Rondas de la OMC, acuerdos preferenciales, cláusulas de salvaguardia." },
          { text: "Registro formal económico", detail: "Fórmulas y convenciones del lenguaje económico-institucional en inglés, francés y alemán." },
          { text: "Actualización según agenda comercial", detail: "Incorporamos términos nuevos según las negociaciones y acuerdos del momento." },
        ],
      },
      {
        title: "Simulacros y seguimiento",
        stat: "Quincenal",
        statLabel: "simulacros completos de examen",
        description: "Pruebas completas bajo condiciones reales y seguimiento individualizado con informes de progreso por destrezas.",
        capabilities: [
          { text: "Pruebas completas cronometradas", detail: "Traducción + comprensión + oral en una sola sesión, replicando el formato del examen." },
          { text: "Informe detallado por destrezas", detail: "Puntuación estimada, análisis de errores y plan de mejora tras cada simulacro." },
          { text: "Seguimiento semanal personalizado", detail: "Ajuste del plan según evolución, con hitos medibles hacia tu fecha de examen." },
          { text: "Módulo de segundo idioma", detail: "Preparación de francés o alemán comercial como segundo idioma obligatorio." },
        ],
      },
    ],
    faq: [
      {
        question:
          "¿Es imprescindible presentar un segundo idioma además del inglés?",
        answer:
          "No es obligatorio, pero sí altamente recomendable. El segundo idioma (francés o alemán) aporta puntuación adicional que puede ser decisiva en una oposición tan competitiva. Muchos opositores que aprueban presentan al menos dos idiomas.",
      },
      {
        question:
          "¿Qué tipo de textos aparecen en la traducción del examen?",
        answer:
          "Los textos suelen proceder de publicaciones económicas internacionales (Financial Times, The Economist, informes del FMI o la OMC) y tratan temas como política comercial, inversión extranjera, regulación financiera o acuerdos bilaterales.",
      },
      {
        question:
          "¿Necesito conocimientos de economía para preparar la prueba de idiomas?",
        answer:
          "No se requiere una formación económica formal, pero sí necesitas familiarizarte con la terminología económica y comercial en el idioma extranjero. Nuestro programa incluye módulos de vocabulario especializado que cubren esta necesidad.",
      },
      {
        question: "¿Cómo se estructura la prueba oral?",
        answer:
          "La prueba oral consiste en una exposición y posterior debate sobre un tema de comercio internacional o política económica. El tribunal valora la capacidad de argumentación, la fluidez, la corrección gramatical y el dominio del registro profesional.",
      },
      {
        question:
          "¿Cuánto tiempo antes de la oposición debo empezar a prepararme?",
        answer:
          "Recomendamos un mínimo de 12 meses si partes de un B2 en inglés. Si ya tienes un C1 y necesitas perfeccionar la terminología económica, 8-10 meses pueden ser suficientes. El segundo idioma requiere planificación adicional.",
      },
    ],
    relatedExams: [
      { title: "Carrera Diplomática", slug: "carrera-diplomatica" },
      {
        title: "Diplomado Comercial del Estado",
        slug: "diplomado-comercial-estado",
      },
      { title: "Inspector del SOIVRE", slug: "inspector-soivre" },
    ],
    testimonial: {
      quote:
        "La diferencia entre preparar el inglés por tu cuenta y hacerlo aquí es abismal. Cuando llegué al examen, los textos de The Economist me resultaban familiares, la terminología de la OMC la dominaba y en la oral pude argumentar con soltura sobre política arancelaria. Aprobé a la primera.",
      name: "Carlos M. G.",
      detail:
        "Técnico Comercial y Economista del Estado, promoción 2023",
    },
    comparison: [
      {
        aspect: "Textos de práctica",
        generic: "Artículos de prensa general",
        ours: "Informes de la OMC, FMI, BCE y Financial Times",
      },
      {
        aspect: "Vocabulario",
        generic: "Inglés de negocios genérico",
        ours: "Terminología de comercio exterior, aranceles e inversión",
      },
      {
        aspect: "Preparación oral",
        generic: "Conversación libre sobre temas variados",
        ours: "Debates estructurados sobre política comercial internacional",
      },
      {
        aspect: "Segundo idioma",
        generic: "No se ofrece o se trata como curso estándar",
        ours: "Módulo específico de francés o alemán comercial para la oposición",
      },
      {
        aspect: "Evaluación",
        generic: "Nota global sin desglose por competencias",
        ours: "Informe detallado por habilidad: traducción, comprensión, oral, léxico",
      },
    ],
  },

  "diplomado-comercial-estado": {
    title: "Diplomado Comercial del Estado",
    fullName: "Oposición al Cuerpo de Diplomados Comerciales del Estado",
    category: "Cuerpo de Gestión",
    heroSubtitle:
      "Accede al cuerpo de gestión del comercio exterior español con una preparación lingüística que marca la diferencia frente al tribunal.",
    // HIGGSFIELD PROMPT: An aerial view of a busy Mediterranean port with container ships and cranes, seen from a high office window in a Spanish trade ministry building. Documents and a laptop on the windowsill in the foreground. The intersection of commerce and diplomacy. Warm, golden hour light.
    heroImage: "/images/exams/diplomado-comercial.jpg",
    heroQuote: "Dominar el comercio internacional desde la precisión del idioma.",
    description: [
      "El Cuerpo de Diplomados Comerciales del Estado constituye el nivel de gestión dentro de la estructura del comercio exterior español. Sus integrantes trabajan en las Oficinas Económicas y Comerciales de España en el extranjero, en la Secretaría de Estado de Comercio y en organismos vinculados a la internacionalización de la empresa española. El manejo competente de idiomas es fundamental para la labor diaria de estos funcionarios.",
      "La prueba de idiomas del proceso selectivo incluye un ejercicio de traducción directa e inversa de textos relacionados con el comercio exterior, la economía internacional y la actividad empresarial. También se realiza una prueba oral en la que el aspirante debe demostrar fluidez conversacional y dominio de la terminología comercial en al menos un idioma extranjero (inglés obligatorio, francés recomendado).",
      "En nuestro programa específico para Diplomados Comerciales trabajamos con documentación real de las Oficinas Comerciales, informes ICEX, estadísticas de comercio exterior y correspondencia comercial institucional. Los simulacros siguen el formato exacto del examen, con corrección detallada y retroalimentación individualizada.",
    ],
    languages: ["Inglés", "Francés"],
    examFormat: [
      "Traducción directa de texto comercial o económico (idioma → español)",
      "Traducción inversa (español → idioma extranjero)",
      "Prueba oral sobre temas de comercio exterior y economía",
      "Comprensión de documentación comercial institucional",
      "Evaluación de corrección gramatical y adecuación de registro",
    ],
    requirements: [
      "Nivel B2-C1 en inglés (obligatorio)",
      "Francés recomendado como segundo idioma",
      "Vocabulario de comercio exterior e internacionalización",
      "Competencia en traducción de textos institucionales",
    ],
    stats: [
      { value: "B2-C1", label: "Nivel requerido en inglés" },
      { value: "2", label: "Idiomas de la prueba" },
      { value: "4", label: "Ejercicios del examen" },
      { value: "100%", label: "Enfoque personalizado" },
    ],
    whyPrepare: [
      {
        title: "Documentación de Oficinas Comerciales",
        description:
          "Nuestros materiales proceden directamente de las Oficinas Económicas y Comerciales de España: informes de mercado, notas sectoriales y correspondencia institucional.",
      },
      {
        title: "Formato exacto del examen",
        description:
          "Conocemos al detalle el formato de la prueba y replicamos sus condiciones en cada simulacro: tipo de texto, extensión, tiempo disponible y criterios de corrección.",
      },
      {
        title: "Preparación integrada inglés-francés",
        description:
          "Coordinamos la preparación de ambos idiomas para optimizar tu tiempo y asegurar un nivel homogéneo en las dos pruebas.",
      },
      {
        title: "Profesores con experiencia ICEX",
        description:
          "Nuestro equipo docente incluye profesionales familiarizados con la actividad de ICEX y la Secretaría de Estado de Comercio.",
      },
    ],
    preparationFeatures: [
      {
        title: "Traducción comercial ICEX",
        stat: "2x",
        statLabel: "sesiones semanales de traducción",
        description: "Práctica intensiva con informes de mercado, estudios sectoriales y documentación de internacionalización empresarial del ICEX.",
        capabilities: [
          { text: "Informes de mercado y estudios sectoriales", detail: "Textos reales de las Oficinas Comerciales sobre análisis de mercados exteriores." },
          { text: "Traducción cronometrada bidireccional", detail: "Directa e inversa con los tiempos exactos del examen." },
          { text: "Corrección de registro y terminología", detail: "Retroalimentación sobre léxico comercial, gramática y adecuación al contexto institucional." },
          { text: "Correspondencia comercial oficial", detail: "Dominio del formato de las comunicaciones de las Oficinas Comerciales en el exterior." },
        ],
      },
      {
        title: "Preparación oral comercial",
        stat: "15 min",
        statLabel: "por simulacro oral",
        description: "Conversación guiada sobre comercio exterior, estrategia de mercado y relaciones económicas bilaterales ante panel evaluador.",
        capabilities: [
          { text: "Temas de comercio exterior actual", detail: "Exportación, ferias internacionales, licitaciones públicas y estrategia de internacionalización." },
          { text: "Defensa de posiciones ante panel", detail: "Simulacros que replican el formato oral con evaluadores especializados." },
          { text: "Vocabulario de internacionalización", detail: "Glosarios de exportación, implantación en mercados y cooperación económica bilateral." },
          { text: "Grabación y análisis", detail: "Revisión detallada de cada simulacro oral para medir progreso." },
        ],
      },
      {
        title: "Simulacros y seguimiento",
        stat: "Mensual",
        statLabel: "evaluaciones completas de progreso",
        description: "Evaluaciones periódicas en condiciones de examen con informe detallado y ajuste continuo del plan de preparación.",
        capabilities: [
          { text: "Pruebas completas cronometradas", detail: "Simulacros que replican traducción + comprensión + oral en una sesión." },
          { text: "Informes de progreso por destrezas", detail: "Análisis desglosado de tu evolución en cada área evaluada." },
          { text: "Plan adaptado a tu calendario", detail: "Ajuste semanal según tu disponibilidad y proximidad del examen." },
          { text: "Material de práctica autónoma", detail: "Ejercicios complementarios para mantener el ritmo entre sesiones." },
        ],
      },
    ],
    faq: [
      {
        question:
          "¿Cuál es la diferencia entre esta oposición y la de Técnico Comercial?",
        answer:
          "El Diplomado Comercial pertenece al grupo A2 (gestión), mientras que el Técnico Comercial es grupo A1 (superior). La exigencia lingüística es menor en el Diplomado, requiriendo un nivel B2-C1 frente al C1 obligatorio del Técnico Comercial, pero los formatos de examen son similares.",
      },
      {
        question:
          "¿El francés es obligatorio o voluntario en esta oposición?",
        answer:
          "El inglés es obligatorio. El francés suele ser optativo pero puntúa positivamente. Dado que muchos opositores lo presentan, no prepararlo puede suponer una desventaja competitiva significativa.",
      },
      {
        question:
          "¿Puedo incorporarme al programa a mitad de curso?",
        answer:
          "Sí, nuestros programas tienen incorporación flexible. Realizamos una prueba de nivel inicial y diseñamos un itinerario adaptado a tu punto de partida y al tiempo disponible hasta la convocatoria.",
      },
      {
        question:
          "¿Qué porcentaje de la nota final corresponde a la prueba de idiomas?",
        answer:
          "El peso exacto depende de la convocatoria, pero la prueba de idiomas suele representar entre un 15% y un 20% de la puntuación total. Dado lo ajustado de las notas de corte, una buena puntuación en idiomas puede ser el factor decisivo.",
      },
      {
        question: "¿Ofrecéis clases los fines de semana?",
        answer:
          "Sí, disponemos de horarios de mañana, tarde y sábados por la mañana para adaptarnos a opositores que compaginan la preparación con trabajo u otros compromisos.",
      },
    ],
    relatedExams: [
      {
        title: "Técnico Comercial y Economista del Estado",
        slug: "tecnico-comercial-economista-estado",
      },
      { title: "Inspector del SOIVRE", slug: "inspector-soivre" },
    ],
    testimonial: {
      quote:
        "Lo que más valoro del Instituto es la precisión de los simulacros. Cuando abrí el examen de traducción, el formato me resultó completamente familiar. Había practicado decenas de textos similares. Eso me dio una confianza que se notó también en la prueba oral.",
      name: "Elena S. P.",
      detail: "Diplomada Comercial del Estado, promoción 2024",
    },
    comparison: [
      {
        aspect: "Tipo de textos",
        generic: "Artículos periodísticos genéricos",
        ours: "Informes ICEX, documentación de Oficinas Comerciales y notas sectoriales",
      },
      {
        aspect: "Nivel de especialización",
        generic: "Inglés comercial general (Business English)",
        ours: "Terminología de comercio exterior e internacionalización empresarial",
      },
      {
        aspect: "Formato de prácticas",
        generic: "Ejercicios sin formato de examen",
        ours: "Simulacros completos que replican la convocatoria vigente",
      },
      {
        aspect: "Retroalimentación",
        generic: "Corrección superficial de errores",
        ours: "Análisis detallado de léxico, registro y criterios del tribunal",
      },
      {
        aspect: "Planificación",
        generic: "Temario fijo para todos los alumnos",
        ours: "Itinerario personalizado según nivel y fecha de examen",
      },
    ],
  },

  "inspector-soivre": {
    title: "Inspector del SOIVRE",
    fullName:
      "Oposición al Cuerpo de Inspectores del SOIVRE (Servicio Oficial de Inspección, Vigilancia y Regulación de las Exportaciones)",
    category: "Cuerpo de Gestión",
    heroSubtitle:
      "Normativa técnica, reglamentos europeos y documentación aduanera: domina los idiomas del comercio exterior regulado.",
    // HIGGSFIELD PROMPT: Close-up of official inspection documents with a Spanish government seal, a magnifying glass, and a stamp on a polished wooden desk. Crisp, authoritative detail shot. Warm lighting, shallow depth of field. The precision and rigor of quality control.
    heroImage: "/images/exams/inspector-soivre.jpg",
    heroQuote: "Arquitectos de la integridad del comercio exterior de España.",
    description: [
      "El Cuerpo de Inspectores del SOIVRE desempeña funciones esenciales en el control de calidad y la inspección de los productos españoles destinados a la exportación, así como en la vigilancia de las importaciones. Sus miembros trabajan en estrecho contacto con normativa internacional, reglamentos de la Unión Europea y estándares de calidad globales, lo que hace imprescindible un sólido dominio de idiomas extranjeros.",
      "La prueba lingüística del proceso selectivo evalúa la capacidad del aspirante para comprender y traducir textos técnicos relacionados con normativas de calidad, reglamentos fitosanitarios, documentación aduanera y regulación del comercio internacional. El inglés es el idioma principal, aunque el francés tiene relevancia especial dado el peso de la normativa comunitaria redactada en este idioma.",
      "Nuestro programa para Inspectores del SOIVRE se centra en el vocabulario técnico de la inspección comercial: certificados de conformidad, normas ISO, reglamentos CE, documentos de despacho aduanero y legislación sanitaria internacional. Preparamos tanto la vertiente escrita (traducción y comprensión) como la oral (exposición técnica ante tribunal).",
    ],
    languages: ["Inglés", "Francés"],
    examFormat: [
      "Traducción directa de textos técnicos y normativos (idioma → español)",
      "Traducción inversa de documentación de inspección (español → idioma)",
      "Comprensión lectora de reglamentos y normativa internacional",
      "Prueba oral sobre temas de comercio exterior e inspección",
      "Terminología específica de calidad, aduanas y regulación",
    ],
    requirements: [
      "Nivel B2-C1 en inglés",
      "Francés valorado como segundo idioma",
      "Dominio de terminología técnica de inspección y calidad",
      "Comprensión de normativa europea e internacional",
    ],
    stats: [
      { value: "B2-C1", label: "Nivel requerido" },
      { value: "2", label: "Idiomas de la prueba" },
      { value: "ISO", label: "Normativa clave del examen" },
      { value: "95%", label: "Satisfacción de alumnos" },
    ],
    whyPrepare: [
      {
        title: "Vocabulario técnico-normativo",
        description:
          "Nuestros glosarios cubren la terminología específica de inspección, normalización, calidad y regulación aduanera que aparece en el examen.",
      },
      {
        title: "Textos de reglamentos reales",
        description:
          "Trabajamos con reglamentos CE, directivas europeas, normas ISO y documentación fitosanitaria, no con textos adaptados o simplificados.",
      },
      {
        title: "Doble componente técnico-lingüístico",
        description:
          "Nuestros profesores combinan formación lingüística avanzada con conocimiento del sector de inspección y comercio exterior.",
      },
      {
        title: "Práctica con documentación aduanera",
        description:
          "Certificados de conformidad, documentos de despacho, DUA y declaraciones sumarias en inglés y francés.",
      },
      {
        title: "Simulacros con normativa vigente",
        description:
          "Utilizamos los reglamentos más recientes de la UE para que te familiarices con el tipo de texto que propondrá el tribunal.",
      },
    ],
    preparationFeatures: [
      {
        title: "Traducción de reglamentos europeos",
        stat: "2x",
        statLabel: "sesiones semanales de traducción normativa",
        description: "Traducción de reglamentos CE de seguridad alimentaria, fitosanitarios y calidad industrial. Directa e inversa con informes de inspección y certificados.",
        capabilities: [
          { text: "Reglamentos europeos en formato original", detail: "Textos de seguridad alimentaria, fitosanitarios y de calidad industrial de la CE." },
          { text: "Actas de inspección y no conformidad", detail: "Traducción inversa de documentación técnica de inspección." },
          { text: "Certificados de exportación", detail: "Práctica con la documentación real que manejan los inspectores del SOIVRE." },
          { text: "Corrección de precisión terminológica", detail: "Retroalimentación centrada en léxico técnico de inspección y comercio exterior." },
        ],
      },
      {
        title: "Exposición técnica oral",
        stat: "15 min",
        statLabel: "por simulacro de exposición oral",
        description: "Presentación de informes de inspección, explicación de procedimientos y argumentación sobre incumplimientos ante panel evaluador.",
        capabilities: [
          { text: "Simulacros de presentación técnica", detail: "Reproducción del formato oral con temas de inspección y control de calidad." },
          { text: "Argumentación sobre incumplimientos", detail: "Cómo defender conclusiones de inspección con evidencia técnica en idioma extranjero." },
          { text: "Vocabulario de inspección y aduanas", detail: "Certificados de conformidad, controles de calidad, etiquetado, trazabilidad." },
          { text: "Normas ISO en idioma original", detail: "Comprensión de ISO 9001, ISO 22000 e ISO 14001 en inglés y francés." },
        ],
      },
      {
        title: "Legislación y seguimiento",
        stat: "Semanal",
        statLabel: "evaluación y ajuste del plan",
        description: "Comprensión rápida de textos legislativos extensos en inglés y francés, más seguimiento individualizado con informes de progreso.",
        capabilities: [
          { text: "Lectura comprensiva cronometrada", detail: "Técnicas de identificación rápida de disposiciones clave en textos normativos extensos." },
          { text: "Simulacros completos de examen", detail: "Pruebas integrales que replican traducción + comprensión + oral en condiciones reales." },
          { text: "Informes de progreso por destrezas", detail: "Análisis desglosado de tu evolución tras cada evaluación." },
          { text: "Plan adaptado a tu convocatoria", detail: "Ajuste continuo según calendario de examen y disponibilidad." },
        ],
      },
    ],
    faq: [
      {
        question:
          "¿Qué tipo de textos técnicos aparecen en el examen de idiomas?",
        answer:
          "Los textos suelen ser extractos de reglamentos europeos sobre seguridad alimentaria, normativa fitosanitaria, estándares de calidad industrial y documentación aduanera. También pueden aparecer informes de inspección y certificados de conformidad.",
      },
      {
        question: "¿Necesito formación técnica previa para la preparación lingüística?",
        answer:
          "No es imprescindible, pero ayuda. Nuestro programa incluye una introducción a los conceptos técnicos fundamentales de inspección y normalización para que puedas comprender y traducir los textos con precisión terminológica.",
      },
      {
        question:
          "¿Cuánta importancia tiene el francés frente al inglés?",
        answer:
          "El inglés es el idioma principal y obligatorio. Sin embargo, gran parte de la normativa europea está redactada originalmente en francés, por lo que el tribunal valora especialmente la competencia en este idioma. Recomendamos preparar ambos.",
      },
      {
        question:
          "¿Los simulacros replican exactamente el formato del examen?",
        answer:
          "Sí, utilizamos el formato exacto de convocatorias anteriores: extensión de los textos, tiempo disponible, tipo de ejercicios y criterios de evaluación. Nuestros alumnos llegan al examen sin sorpresas en cuanto al formato.",
      },
      {
        question:
          "¿Se puede combinar la preparación de Inspector con la de Ingeniero Técnico del SOIVRE?",
        answer:
          "Sí, ambas oposiciones comparten parte del vocabulario técnico (normalización, inspección, comercio exterior). Ofrecemos un programa combinado que optimiza el tiempo de preparación aprovechando las áreas comunes.",
      },
    ],
    relatedExams: [
      {
        title: "Ingeniero Técnico del SOIVRE",
        slug: "ingeniero-tecnico-soivre",
      },
      {
        title: "Diplomado Comercial del Estado",
        slug: "diplomado-comercial-estado",
      },
      {
        title: "Técnico Comercial y Economista del Estado",
        slug: "tecnico-comercial-economista-estado",
      },
    ],
    testimonial: {
      quote:
        "Venía de una academia que me preparaba con textos generales. Aquí, desde la primera semana, estaba traduciendo reglamentos CE y normas ISO de verdad. Esa especificidad fue lo que me permitió aprobar con holgura la prueba de inglés y sacar nota en la de francés.",
      name: "Javier A. M.",
      detail: "Inspector del SOIVRE, promoción 2024",
    },
    comparison: [
      {
        aspect: "Textos de trabajo",
        generic: "Artículos de prensa económica general",
        ours: "Reglamentos CE, normas ISO y documentación aduanera real",
      },
      {
        aspect: "Terminología",
        generic: "Vocabulario comercial genérico",
        ours: "Léxico de inspección, calidad, fitosanidad y aduanas",
      },
      {
        aspect: "Conocimiento del examen",
        generic: "Desconocimiento del formato específico",
        ours: "Simulacros basados en convocatorias anteriores del SOIVRE",
      },
      {
        aspect: "Profesorado",
        generic: "Profesores de idiomas generalistas",
        ours: "Docentes con conocimiento del sector de inspección comercial",
      },
      {
        aspect: "Material complementario",
        generic: "Gramáticas y ejercicios estándar",
        ours: "Glosarios técnicos, reglamentos bilingües y actas de inspección",
      },
    ],
  },

  "ingeniero-tecnico-soivre": {
    title: "Ingeniero Técnico del SOIVRE",
    fullName: "Oposición al Cuerpo de Ingenieros Técnicos del SOIVRE",
    category: "Cuerpo Técnico",
    heroSubtitle:
      "Documentación técnica, informes de laboratorio y normativa de certificación: la precisión lingüística que exige la ingeniería de inspección.",
    // HIGGSFIELD PROMPT: A professional laboratory or technical inspection facility with precision instruments, quality control charts on the wall, and a clipboard with inspection forms. Clean, well-lit, institutional. The technical side of state service. Cool whites with warm accent lighting.
    heroImage: "/images/exams/ingeniero-soivre.jpg",
    heroQuote: "El Ingeniero del SOIVRE no solo inspecciona; protege los estándares del comercio europeo.",
    description: [
      "El Cuerpo de Ingenieros Técnicos del SOIVRE reúne a profesionales con formación técnica e ingenieril que desempeñan labores de inspección, ensayo y certificación de productos en el ámbito del comercio exterior. Su trabajo implica el manejo cotidiano de documentación técnica en inglés y, con frecuencia, en francés, así como la comunicación con organismos de normalización y laboratorios internacionales.",
      "La prueba de idiomas en esta oposición tiene un marcado carácter técnico. Los textos propuestos para traducción suelen versar sobre especificaciones de producto, informes de laboratorio, protocolos de ensayo, normativa de seguridad y certificaciones internacionales. El candidato debe demostrar no solo corrección lingüística, sino también precisión terminológica en un contexto altamente especializado.",
      "En el Instituto Diplomático de Idiomas abordamos esta preparación con un enfoque multidisciplinar: trabajamos con documentación técnica real (normas UNE, EN e ISO en versión bilingüe), informes de ensayo de laboratorios acreditados y correspondencia técnica con organismos internacionales de normalización. Los simulacros incluyen tanto traducción cronometrada como exposición oral de informes técnicos.",
    ],
    languages: ["Inglés", "Francés"],
    examFormat: [
      "Traducción directa de documentación técnica e informes de laboratorio",
      "Traducción inversa de textos de normativa y especificaciones",
      "Comprensión de normas internacionales (ISO, EN) en idioma original",
      "Prueba oral: exposición de informes técnicos en idioma extranjero",
      "Evaluación de precisión terminológica técnica y científica",
    ],
    requirements: [
      "Nivel B2-C1 en inglés",
      "Francés recomendado",
      "Vocabulario técnico de ingeniería, ensayos y normalización",
      "Capacidad de lectura y traducción de documentación técnica",
    ],
    stats: [
      { value: "B2-C1", label: "Nivel requerido" },
      { value: "UNE-EN", label: "Normativa de referencia" },
      { value: "4", label: "Pruebas lingüísticas" },
      { value: "100%", label: "Materiales técnicos reales" },
    ],
    whyPrepare: [
      {
        title: "Documentación técnica real",
        description:
          "Trabajamos con normas UNE, EN e ISO en versión bilingüe, informes de laboratorio y protocolos de ensayo auténticos.",
      },
      {
        title: "Profesores con perfil técnico-lingüístico",
        description:
          "Nuestro equipo combina formación en ingeniería o ciencias con titulación avanzada en idiomas, lo que garantiza rigor técnico y precisión lingüística.",
      },
      {
        title: "Enfoque en precisión terminológica",
        description:
          "En textos técnicos, una palabra imprecisa puede cambiar el sentido completo. Entrenamos la exactitud terminológica que valora el tribunal.",
      },
      {
        title: "Exposición oral de informes técnicos",
        description:
          "Practicamos la presentación de resultados de ensayo, informes de no conformidad y análisis de certificaciones en inglés ante un panel evaluador.",
      },
    ],
    preparationFeatures: [
      {
        title: "Traducción técnica y normativa",
        stat: "2x",
        statLabel: "sesiones semanales de traducción técnica",
        description: "Normas ISO bilingües, informes de laboratorio, fichas técnicas y hojas de seguridad en inglés y francés.",
        capabilities: [
          { text: "Normas ISO en versión bilingüe", detail: "Práctica con versiones oficiales para desarrollar precisión en traducción normativa." },
          { text: "Informes de laboratorio y ensayos", detail: "Certificados de análisis, protocolos de prueba y resultados de laboratorios internacionales." },
          { text: "Fichas técnicas y hojas SDS", detail: "Lectura, comprensión y traducción de especificaciones de materiales y producto." },
          { text: "Corrección de precisión técnica", detail: "Retroalimentación centrada en terminología de certificación, marcado CE y auditorías." },
        ],
      },
      {
        title: "Comunicación técnica oral y escrita",
        stat: "15 min",
        statLabel: "por simulacro de exposición oral",
        description: "Redacción de comunicaciones con organismos de normalización y exposición oral técnica ante panel evaluador.",
        capabilities: [
          { text: "Correspondencia con ISO, CEN, AENOR", detail: "Práctica de redacción de comunicaciones técnicas formales con organismos internacionales." },
          { text: "Vocabulario de certificación de producto", detail: "Acreditación, marcado CE, declaraciones de conformidad, auditorías de calidad." },
          { text: "Simulacros de exposición oral técnica", detail: "Presentación de informes técnicos y argumentación sobre resultados de ensayo." },
          { text: "Grabación y análisis de desempeño", detail: "Revisión de cada simulacro para identificar áreas de mejora." },
        ],
      },
      {
        title: "Simulacros y seguimiento",
        stat: "Quincenal",
        statLabel: "simulacros completos de examen",
        description: "Pruebas integrales en condiciones reales: traducción cronometrada, comprensión lectora y exposición oral técnica.",
        capabilities: [
          { text: "Pruebas completas cronometradas", detail: "Traducción + comprensión + oral en una sesión, replicando el formato del examen." },
          { text: "Informe detallado por destrezas", detail: "Puntuación estimada y análisis de errores tras cada simulacro." },
          { text: "Plan adaptado a tu calendario", detail: "Ajuste semanal según disponibilidad y proximidad del examen." },
          { text: "Material de práctica autónoma", detail: "Ejercicios complementarios para reforzar entre sesiones." },
        ],
      },
    ],
    faq: [
      {
        question:
          "¿Los textos del examen son muy técnicos o también aparecen textos generales?",
        answer:
          "Los textos tienen un marcado carácter técnico: especificaciones de producto, informes de laboratorio, extractos de normas ISO y reglamentos de seguridad. El tribunal valora especialmente la precisión terminológica, no solo la corrección gramatical.",
      },
      {
        question:
          "¿Mi formación como ingeniero me da ventaja en la prueba de idiomas?",
        answer:
          "Sí, comprender el contenido técnico facilita la traducción. Sin embargo, conocer un concepto no significa saber expresarlo correctamente en inglés. Nuestro programa se enfoca en cerrar esa brecha entre conocimiento técnico y competencia lingüística.",
      },
      {
        question:
          "¿Puedo combinar esta preparación con la del Inspector del SOIVRE?",
        answer:
          "Absolutamente. Ambas oposiciones comparten vocabulario de inspección, normalización y comercio exterior. Ofrecemos un itinerario combinado que aprovecha las sinergias y añade los contenidos técnicos específicos del Ingeniero (laboratorio, ensayos, certificación).",
      },
      {
        question:
          "¿Qué nivel de francés necesito para esta oposición?",
        answer:
          "El francés no suele ser obligatorio en esta oposición, pero puede puntuar positivamente. Si decides presentarlo, un nivel B2 es generalmente suficiente. Nuestro programa de francés técnico se puede cursar como complemento.",
      },
      {
        question:
          "¿Cuántas horas semanales de preparación recomendáis?",
        answer:
          "Recomendamos entre 4 y 6 horas semanales de preparación específica de idiomas, repartidas en 2-3 sesiones. A esto se suma el trabajo autónomo con los materiales técnicos que proporcionamos: glosarios, textos de práctica y ejercicios de traducción.",
      },
      {
        question:
          "¿Dispongo de material para practicar entre sesiones?",
        answer:
          "Sí, proporcionamos un banco de textos técnicos clasificados por dificultad y temática, glosarios digitales actualizados y ejercicios de traducción con clave de corrección para trabajo autónomo entre clases.",
      },
    ],
    relatedExams: [
      { title: "Inspector del SOIVRE", slug: "inspector-soivre" },
      {
        title: "Diplomado Comercial del Estado",
        slug: "diplomado-comercial-estado",
      },
    ],
    testimonial: {
      quote:
        "Como ingeniero, creía que sabía suficiente inglés técnico, pero me faltaba la precisión que pide el tribunal. Aquí aprendí a traducir normas ISO con la exactitud que exige la oposición. La preparación oral con informes de laboratorio fue especialmente útil.",
      name: "Andrés F. R.",
      detail: "Ingeniero Técnico del SOIVRE, promoción 2023",
    },
    comparison: [
      {
        aspect: "Material de estudio",
        generic: "Gramáticas y textos de nivel avanzado",
        ours: "Normas UNE-EN-ISO bilingües, informes de laboratorio y fichas técnicas",
      },
      {
        aspect: "Enfoque de traducción",
        generic: "Textos literarios o periodísticos",
        ours: "Documentación técnica: especificaciones, protocolos de ensayo, SDS",
      },
      {
        aspect: "Preparación oral",
        generic: "Conversación sobre temas generales",
        ours: "Exposición de informes técnicos y defensa de resultados de ensayo",
      },
      {
        aspect: "Vocabulario",
        generic: "Léxico general avanzado",
        ours: "Terminología de certificación, acreditación, metrología y ensayos",
      },
      {
        aspect: "Comprensión del sector",
        generic: "Sin conocimiento del ámbito profesional",
        ours: "Docentes que conocen el trabajo del Ingeniero Técnico del SOIVRE",
      },
    ],
  },

  "ayudante-archivos-bibliotecas-museos": {
    title: "Ayudante de Archivos, Bibliotecas y Museos",
    fullName:
      "Oposición al Cuerpo de Ayudantes de Archivos, Bibliotecas y Museos del Estado",
    category: "Cuerpo de Gestión",
    heroSubtitle:
      "Textos culturales, catálogos internacionales y normativa archivística: la preparación lingüística humanística que necesitas para aprobar.",
    // HIGGSFIELD PROMPT: The interior of a grand Spanish library — the Biblioteca Nacional de Espana aesthetic. Rows of leather-bound books on dark wood shelves, reading lamps casting warm pools of light, ornate ceiling details visible above. Quiet, scholarly, timeless. Warm amber tones, architectural photography.
    heroImage: "/images/exams/archivos-bibliotecas.jpg",
    heroQuote: "Preservar la memoria de una nación comienza con el dominio de sus lenguas.",
    description: [
      "El Cuerpo de Ayudantes de Archivos, Bibliotecas y Museos agrupa a los profesionales que custodian, catalogan y difunden el patrimonio documental, bibliográfico y museístico de España. Su labor exige el manejo de fuentes en múltiples idiomas, desde manuscritos medievales en latín hasta catálogos internacionales en inglés, francés, alemán e italiano. La prueba de idiomas refleja esta diversidad lingüística y el carácter humanístico de la profesión.",
      "El examen lingüístico consiste habitualmente en la traducción directa de un texto de carácter cultural, histórico o artístico, así como preguntas de comprensión lectora sobre documentación bibliotecaria o archivística en lengua extranjera. A diferencia de otras oposiciones del ámbito comercial, aquí se valora especialmente la capacidad de interpretar textos académicos, catálogos de museos, descripciones archivísticas normalizadas (ISAD-G, ISAAR) y bibliografía especializada.",
      "Nuestro programa para este cuerpo aborda la preparación lingüística desde una perspectiva cultural y patrimonial. Trabajamos con textos del ICOM, publicaciones de la IFLA, catálogos del Museo del Prado, del Louvre y del British Museum, así como con normativa de descripción archivística internacional. Los alumnos pueden elegir entre inglés, francés, alemán e italiano según las opciones que ofrezca la convocatoria vigente.",
    ],
    languages: ["Inglés", "Francés", "Alemán", "Italiano"],
    examFormat: [
      "Traducción directa de texto cultural, histórico o artístico",
      "Comprensión lectora de documentación bibliotecaria o archivística",
      "Preguntas sobre terminología del ámbito patrimonial y cultural",
      "Posible prueba oral según convocatoria",
      "Evaluación del dominio de registro académico y cultural",
    ],
    requirements: [
      "Nivel B2 mínimo en el idioma elegido",
      "Opciones: inglés, francés, alemán o italiano",
      "Vocabulario de patrimonio cultural, archivística y biblioteconomía",
      "Comprensión de textos académicos y catálogos especializados",
    ],
    stats: [
      { value: "B2+", label: "Nivel requerido" },
      { value: "4", label: "Idiomas disponibles" },
      { value: "ISAD-G", label: "Normativa archivística clave" },
      { value: "85%", label: "Aprobados de nuestros alumnos" },
    ],
    whyPrepare: [
      {
        title: "Enfoque cultural y humanístico",
        description:
          "A diferencia de otras oposiciones, aquí los textos son culturales, artísticos e históricos. Nuestro programa refleja esta especificidad con materiales del ICOM, la IFLA y grandes museos.",
      },
      {
        title: "Cuatro idiomas disponibles",
        description:
          "Ofrecemos preparación en inglés, francés, alemán e italiano, los cuatro idiomas que puede ofrecer la convocatoria, cada uno con materiales culturales adaptados.",
      },
      {
        title: "Catálogos y textos de museos reales",
        description:
          "Trabajamos con publicaciones del Museo del Prado, el British Museum, el Louvre y la Biblioteca Nacional: los mismos tipos de texto que propone el tribunal.",
      },
      {
        title: "Normativa archivística internacional",
        description:
          "Dominio de la terminología de las normas ISAD-G, ISAAR(CPF), EAD y Dublin Core en su versión original en inglés y francés.",
      },
      {
        title: "Profesores con formación humanística",
        description:
          "Nuestro equipo incluye filólogos, historiadores del arte y documentalistas con titulación avanzada en idiomas, lo que garantiza rigor en el contenido cultural.",
      },
    ],
    preparationFeatures: [
      {
        title: "Traducción artística y archivística",
        stat: "2x",
        statLabel: "sesiones semanales de traducción cultural",
        description: "Catálogos de exposiciones, descripciones museográficas, documentación archivística normalizada y textos de crítica artística en inglés, francés e italiano.",
        capabilities: [
          { text: "Catálogos y textos museográficos", detail: "Traducción de catálogos de exposiciones, artículos de historia del arte y crítica artística." },
          { text: "Documentación archivística normalizada", detail: "Cuadros de clasificación, descripciones ISAD(G) y guías de archivo en idioma original." },
          { text: "Textos del ICOM y la IFLA", detail: "Documentos oficiales del Consejo Internacional de Museos y la Federación de Bibliotecarios." },
          { text: "Corrección de registro cultural", detail: "Retroalimentación sobre léxico patrimonial, registro académico y precisión terminológica." },
        ],
      },
      {
        title: "Vocabulario de biblioteconomía y museos",
        stat: "+1,200",
        statLabel: "términos patrimoniales especializados",
        description: "Terminología de catalogación (MARC, RDA), gestión de colecciones, préstamo interbibliotecario, museografía y conservación.",
        capabilities: [
          { text: "Catalogación y gestión de colecciones", detail: "MARC, RDA, préstamo interbibliotecario, servicios de referencia en inglés y francés." },
          { text: "Conservación y restauración", detail: "Léxico de conservación preventiva, restauración de documentos y gestión de patrimonio." },
          { text: "Museografía y exposiciones", detail: "Terminología de diseño expositivo, mediación cultural y educación en museos." },
          { text: "Módulo de italiano o alemán cultural", detail: "Tercer o cuarto idioma con enfoque en museos italianos, archivos germanos y publicaciones académicas." },
        ],
      },
      {
        title: "Simulacros y seguimiento",
        stat: "Mensual",
        statLabel: "evaluaciones completas de progreso",
        description: "Comprensión lectora cronometrada, simulacros completos y seguimiento individualizado con informes de progreso.",
        capabilities: [
          { text: "Comprensión lectora cronometrada", detail: "Técnicas de lectura rápida e identificación de información clave en textos extensos." },
          { text: "Simulacros completos de examen", detail: "Pruebas integrales: traducción + comprensión + oral en condiciones reales." },
          { text: "Informes de progreso por destrezas", detail: "Análisis desglosado de tu evolución en cada área evaluada." },
          { text: "Plan adaptado a tu calendario", detail: "Ajuste continuo según disponibilidad y proximidad del examen." },
        ],
      },
    ],
    faq: [
      {
        question: "¿Qué idioma me conviene más elegir para esta oposición?",
        answer:
          "Depende de tu nivel y de la convocatoria. El inglés es la opción mayoritaria y ofrece más material de práctica. El francés es muy útil por la importancia de la documentación francófona en archivística y biblioteconomía. El alemán y el italiano son menos frecuentes pero pueden aportar una ventaja competitiva si los dominas.",
      },
      {
        question:
          "¿Los textos del examen son literarios?",
        answer:
          "No exactamente literarios, pero sí culturales y humanísticos. Suelen ser extractos de catálogos de exposiciones, artículos de historia del arte, textos sobre patrimonio cultural, documentación archivística o publicaciones de organismos culturales internacionales.",
      },
      {
        question:
          "¿Necesito conocer las normas ISAD-G o ISAAR para la prueba de idiomas?",
        answer:
          "No se exige un conocimiento profundo de estas normas para la prueba de idiomas, pero los textos del examen pueden incluir terminología archivística normalizada. Conocer los conceptos básicos en el idioma elegido te dará ventaja.",
      },
      {
        question:
          "¿Puedo preparar dos idiomas simultáneamente?",
        answer:
          "Sí, es posible y puede ser estratégico si la convocatoria lo permite. Ofrecemos programas duales (por ejemplo, inglés + francés o inglés + italiano) con horarios coordinados para optimizar tu preparación.",
      },
      {
        question:
          "¿Hay prueba oral en esta oposición?",
        answer:
          "Depende de la convocatoria. Algunas incluyen una prueba oral optativa o complementaria. Nuestro programa contempla la preparación oral para que estés cubierto en cualquier escenario.",
      },
      {
        question:
          "¿Es muy diferente la preparación de este examen respecto a las oposiciones comerciales?",
        answer:
          "Sí, sustancialmente. Los textos son culturales y humanísticos, no económicos ni comerciales. El vocabulario, el registro y el tipo de documentación son completamente distintos. Por eso ofrecemos un programa específico para esta oposición.",
      },
    ],
    relatedExams: [
      { title: "Carrera Diplomática", slug: "carrera-diplomatica" },
      {
        title: "Diplomado Comercial del Estado",
        slug: "diplomado-comercial-estado",
      },
    ],
    testimonial: {
      quote:
        "Preparé el italiano con el Instituto porque ninguna otra academia ofrecía preparación específica para esta oposición en ese idioma. Los textos de catálogos del Museo del Prado y publicaciones del ICOM me prepararon exactamente para lo que encontré en el examen. Aprobé con la segunda mejor nota en idiomas.",
      name: "Lucía V. D.",
      detail:
        "Ayudante de Archivos, Bibliotecas y Museos, promoción 2024",
    },
    comparison: [
      {
        aspect: "Tipo de textos",
        generic: "Artículos periodísticos o comerciales",
        ours: "Catálogos de museos, textos de historia del arte y documentación archivística",
      },
      {
        aspect: "Vocabulario",
        generic: "Léxico general o de negocios",
        ours: "Terminología de museología, archivística, biblioteconomía y patrimonio",
      },
      {
        aspect: "Idiomas disponibles",
        generic: "Solo inglés o inglés y francés",
        ours: "Inglés, francés, alemán e italiano con materiales específicos",
      },
      {
        aspect: "Profesorado",
        generic: "Profesores de idiomas sin formación humanística",
        ours: "Filólogos e historiadores del arte con titulación avanzada en idiomas",
      },
      {
        aspect: "Normativa profesional",
        generic: "Desconocimiento de ISAD-G, ISAAR, ICOM, IFLA",
        ours: "Integración de la terminología normativa profesional en la preparación",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Static params & metadata                                           */
/* ------------------------------------------------------------------ */

export async function generateStaticParams() {
  return Object.keys(examData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const exam = examData[slug];

  if (!exam) {
    return {
      title: "Oposición no encontrada | Instituto Diplomático de Idiomas",
    };
  }

  return {
    title: `${exam.title} | Oposiciones | Instituto Diplomático de Idiomas`,
    description: `Preparación lingüística especializada para la oposición de ${exam.title}. ${exam.languages.join(", ")} para las pruebas de acceso. Programas a medida en Madrid.`,
  };
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default async function ExamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exam = examData[slug];

  if (!exam) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* 1. HERO — Asymmetric editorial layout */}
        <section className="bg-warm-white px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-gold" style={{ fontFamily: "var(--font-body)" }}>
                  {exam.category}
                </span>
                <h1 className="mb-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy md:text-6xl lg:text-7xl" style={{ fontFamily: "var(--font-heading)" }}>
                  {exam.title}
                </h1>
                <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-blue md:text-xl" style={{ fontFamily: "var(--font-body)" }}>
                  {exam.heroSubtitle}
                </p>
                <div className="flex items-center gap-8">
                  {exam.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-3xl font-bold text-navy" style={{ fontFamily: "var(--font-heading)" }}>{stat.value}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-slate-blue/60">{stat.label}</span>
                      {i < exam.stats.length - 1 && (
                        <div className="absolute" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative lg:col-span-5">
                <div className="aspect-[4/5] overflow-hidden rounded-full shadow-2xl">
                  {/* Image placeholder — see Higgsfield prompts in heroImage comments */}
                  <div className="flex h-full w-full items-center justify-center bg-light-gray text-center text-sm text-slate-blue/40">
                    <span className="max-w-[160px]">Imagen: {exam.title}</span>
                  </div>
                </div>
                <div className="absolute -bottom-8 -left-8 max-w-xs rounded-xl border-l-4 border-gold bg-white/90 p-6 shadow-xl backdrop-blur-md">
                  <p className="text-sm font-medium italic text-navy" style={{ fontFamily: "var(--font-body)" }}>
                    &ldquo;{exam.heroQuote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1b. LANGUAGES BAR */}
        <section className="bg-navy">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-6 py-8 md:gap-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50" style={{ fontFamily: "var(--font-body)" }}>
              Idiomas requeridos
            </span>
            <div className="flex items-center gap-3">
              {exam.languages.map((lang, i) => (
                <span key={lang} className="flex items-center gap-3">
                  <span className="text-lg font-bold text-gold md:text-xl" style={{ fontFamily: "var(--font-heading)" }}>{lang}</span>
                  {i < exam.languages.length - 1 && (
                    <span className="h-4 w-px bg-gold/30" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 2. ABOUT THIS EXAM */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-gold" style={{ fontFamily: "var(--font-body)" }}>Sobre esta oposición</span>
            <h2 className="mb-8 text-3xl font-bold text-navy lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
              {exam.title}
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-slate-blue md:text-lg" style={{ fontFamily: "var(--font-body)" }}>
              <p>{exam.description[0]}</p>
              <p>{exam.description[1]}</p>
            </div>
          </div>
        </section>

        {/* 2b. WHY PREPARE WITH US */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-gold" style={{ fontFamily: "var(--font-body)" }}>Por qué prepararte con nosotros</span>
              <h2 className="text-3xl font-bold text-navy lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
                Lo que nos diferencia en esta oposición
              </h2>
            </div>
            <WhyPrepareGrid items={exam.whyPrepare} />
          </div>
        </section>

        {/* 3. EXAM FORMAT — clean vertical layout */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-gold" style={{ fontFamily: "var(--font-body)" }}>Estructura del examen</span>
              <h2 className="text-3xl font-bold text-navy lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>Formato de la prueba de idiomas</h2>
            </div>

            <ExamStructureAccordion examFormat={exam.examFormat} />
          </div>
        </section>

        {/* 4. PREPARATION — click-through tabs */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mb-14">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-gold" style={{ fontFamily: "var(--font-body)" }}>Metodología</span>
              <h2 className="text-3xl font-bold text-navy lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>Cómo te preparamos</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-blue" style={{ fontFamily: "var(--font-body)" }}>
                Cada área de preparación tiene su propio enfoque, materiales y criterios de evaluación. Explora cada una.
              </p>
            </div>
            <MethodologyCards items={exam.preparationFeatures} />
          </div>
        </section>

        {/* 5. TESTIMONIAL */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <svg className="mx-auto h-10 w-10 text-gold/40" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M11.3 2.8C6.1 5.1 3 9.2 3 14c0 3.3 2.4 6 5.4 6 2.6 0 4.6-2 4.6-4.4 0-2.5-1.8-4.2-4.1-4.2-.5 0-1 .1-1.2.2.6-3.2 3.2-6.4 6.2-8l-2.6-0.8zm10.3 0C16.4 5.1 13.3 9.2 13.3 14c0 3.3 2.4 6 5.4 6 2.6 0 4.6-2 4.6-4.4 0-2.5-1.8-4.2-4.1-4.2-.5 0-1 .1-1.2.2.6-3.2 3.2-6.4 6.2-8l-2.6-0.8z" />
            </svg>
            <blockquote className="mt-8">
              <p className="text-xl italic leading-relaxed text-white lg:text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
                &ldquo;{exam.testimonial.quote}&rdquo;
              </p>
            </blockquote>
            <div className="mt-8">
              <p className="text-base font-semibold text-gold">{exam.testimonial.name}</p>
              <p className="mt-1 text-sm text-white/60">{exam.testimonial.detail}</p>
            </div>
          </div>
        </section>

        {/* 7. LANGUAGES AVAILABLE */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-gold" style={{ fontFamily: "var(--font-body)" }}>Idiomas</span>
            <h2 className="mb-10 text-3xl font-bold text-navy lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
              Idiomas disponibles para esta oposición
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {exam.languages.map((lang) => (
                <Link
                  key={lang}
                  href={`/idiomas/${languageSlugMap[lang] || lang.toLowerCase()}`}
                  className="group flex flex-col rounded-xl border border-light-gray bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-xl font-bold text-navy" style={{ fontFamily: "var(--font-heading)" }}>{lang}</h3>
                  <p className="mt-1 text-sm text-slate-blue">Preparación específica</p>
                  <span className="mt-4 text-sm font-semibold text-gold transition-colors group-hover:text-gold-hover">Ver programa &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-gold" style={{ fontFamily: "var(--font-body)" }}>FAQ</span>
              <h2 className="text-3xl font-bold text-navy lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>Preguntas frecuentes</h2>
            </div>
            <ExamFAQ items={exam.faq} />
          </div>
        </section>

        {/* 9. RELATED EXAMS */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-navy lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>Otras oposiciones que preparamos</h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {exam.relatedExams.map((related) => (
                <Link
                  key={related.slug}
                  href={`/oposiciones/${related.slug}`}
                  className="group rounded-xl border border-light-gray bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">{examData[related.slug]?.category ?? "Oposición"}</p>
                  <h3 className="mt-3 text-lg font-bold text-navy" style={{ fontFamily: "var(--font-heading)" }}>{related.title}</h3>
                  <span className="mt-4 inline-block text-sm font-semibold text-gold transition-colors group-hover:text-gold-hover">Ver programa &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 10. CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
              ¿Preparado para dar el paso?
            </h2>
            <p className="mb-10 text-lg text-white/70" style={{ fontFamily: "var(--font-body)" }}>
              Solicita una sesión de diagnóstico con nuestros especialistas y traza tu camino hacia la plaza.
            </p>
            <div className="flex justify-center gap-6">
              <Link
                href="/contacto"
                className="rounded-xl bg-gold px-10 py-4 text-lg font-bold text-navy transition-transform hover:scale-105 hover:bg-gold-hover"
              >
                Reservar diagnóstico
              </Link>
              <Link
                href="/metodologia"
                className="rounded-xl border border-white/20 bg-white/10 px-10 py-4 text-lg font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                Ver metodología
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
