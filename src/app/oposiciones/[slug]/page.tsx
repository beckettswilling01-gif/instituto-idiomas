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
  examFormat: {
    title: string;
    description: string;
    duration?: string;
    weight?: string;
    evaluationCriteria?: string[];
    commonPitfalls?: string[];
    tips?: string[];
  }[];
  requirements: string[];
  stats: { value: string; label: string }[];
  whyPrepare: { title: string; description: string; highlights?: string[] }[];
  preparationFeatures: {
    title: string;
    description: string;
    stat: string;
    statLabel: string;
    capabilities: { text: string; detail: string }[];
    classSize?: string;
    hoursPerWeek?: string;
    materials?: string[];
    mockExamFrequency?: string;
    feedbackMethod?: string;
    successMetric?: string;
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
      {
        title: "Traducción directa",
        description: "Traducción de un texto periodístico o institucional del inglés o francés al español. Se evalúa la fidelidad al original, la precisión terminológica diplomática y la naturalidad del texto resultante.",
        duration: "60 minutos",
        weight: "20% de la nota de idiomas",
        evaluationCriteria: [
          "Fidelidad semántica al texto original sin omisiones ni adiciones",
          "Precisión en la terminología diplomática y jurídico-internacional",
          "Naturalidad y fluidez del texto en español, sin calcos ni interferencias",
          "Corrección ortográfica, gramatical y de puntuación impecable",
        ],
        commonPitfalls: [
          "Traducir literalmente expresiones idiomáticas en lugar de buscar equivalentes funcionales en español",
          "Confundir falsos amigos del ámbito diplomático (p. ej., 'actually' ≠ 'actualmente', 'comprehensive' ≠ 'comprensivo')",
          "Perder el registro formal del original y producir un texto excesivamente coloquial",
        ],
        tips: [
          "Lee el texto completo antes de empezar a traducir: el tribunal detecta incoherencias cuando se traduce frase a frase sin visión de conjunto",
          "Dedica los últimos 10 minutos a releer tu traducción como si fuera un texto original en español — si suena a traducción, resta puntos",
        ],
      },
      {
        title: "Traducción inversa",
        description: "Traducción de un texto de actualidad del español al inglés o francés. El tribunal valora el dominio del registro formal, la corrección gramatical y la riqueza léxica en la lengua de destino.",
        duration: "60 minutos",
        weight: "20% de la nota de idiomas",
        evaluationCriteria: [
          "Dominio del registro formal y diplomático en la lengua de destino",
          "Corrección gramatical avanzada (subjuntivo en francés, condicionales complejas en inglés)",
          "Riqueza léxica y uso apropiado de colocaciones propias de la lengua meta",
          "Capacidad de reformulación cuando no existe equivalente directo",
        ],
        commonPitfalls: [
          "Mantener la estructura sintáctica del español en la lengua de destino, produciendo frases artificiales",
          "Recurrir a vocabulario genérico por inseguridad, en lugar de emplear el término técnico preciso",
          "Errores de concordancia y uso incorrecto de preposiciones por interferencia del español",
        ],
        tips: [
          "Practica a diario la lectura de editoriales de Le Monde Diplomatique y Foreign Affairs para interiorizar las estructuras naturales de cada idioma",
          "Ten preparadas fórmulas de equivalencia para los giros más frecuentes del lenguaje diplomático español",
        ],
      },
      {
        title: "Resumen analítico",
        description: "Redacción de un resumen estructurado en lengua extranjera a partir de un texto propuesto. Se exige capacidad de síntesis, coherencia argumentativa y dominio del registro académico-diplomático.",
        duration: "45 minutos",
        weight: "15% de la nota de idiomas",
        evaluationCriteria: [
          "Capacidad de identificar y jerarquizar las ideas principales del texto fuente",
          "Coherencia y progresión lógica del resumen resultante",
          "Dominio del registro académico-diplomático en la redacción",
          "Concisión: respetar el límite de extensión sin sacrificar información esencial",
        ],
        commonPitfalls: [
          "Copiar frases enteras del original en lugar de reformular con palabras propias — el tribunal lo penaliza explícitamente",
          "Incluir opiniones personales o valoraciones que no están en el texto fuente",
          "Sobrepasar la extensión permitida, lo que evidencia falta de capacidad de síntesis",
        ],
        tips: [
          "Estructura tu resumen en tres bloques (contexto, desarrollo, conclusión) antes de empezar a escribir — el tribunal valora la organización tanto como el contenido",
        ],
      },
      {
        title: "Conversación oral ante tribunal",
        description: "Entrevista de 15-20 minutos por idioma sobre temas de actualidad internacional, política exterior y relaciones bilaterales. El panel evalúa fluidez, registro diplomático y capacidad argumentativa.",
        duration: "15-20 minutos por idioma",
        weight: "30% de la nota de idiomas",
        evaluationCriteria: [
          "Fluidez y naturalidad en la expresión, sin pausas excesivas ni muletillas",
          "Uso consistente del registro diplomático formal a lo largo de toda la entrevista",
          "Capacidad de argumentación: defender una posición con datos y razonamiento estructurado",
          "Pronunciación clara y entonación apropiada para el idioma",
        ],
        commonPitfalls: [
          "Preparar respuestas memorizadas que suenan artificiales y se desmoronan ante la primera repregunta del tribunal",
          "Mostrar inseguridad al abordar temas de actualidad por falta de lectura diaria de prensa internacional",
          "Mezclar registros: pasar del lenguaje diplomático a expresiones coloquiales cuando aumenta la presión",
        ],
        tips: [
          "El tribunal valora más una opinión bien argumentada y matizada que una respuesta enciclopédica — demuestra pensamiento crítico, no solo conocimientos",
          "Practica la técnica de 'comprar tiempo diplomáticamente': reformular la pregunta antes de responder es un recurso legítimo y bien visto",
        ],
      },
      {
        title: "Evaluación global de competencia",
        description: "Valoración integral de la fluidez, corrección y adecuación del registro diplomático a lo largo de todas las pruebas. El tribunal pondera la coherencia del nivel demostrado entre las destrezas escrita y oral.",
        duration: "Transversal a todas las pruebas",
        weight: "15% de la nota de idiomas",
        evaluationCriteria: [
          "Coherencia del nivel demostrado entre pruebas escritas y orales",
          "Consistencia del registro diplomático en todas las destrezas",
          "Evolución y mantenimiento del nivel a lo largo de toda la jornada de examen",
        ],
        commonPitfalls: [
          "Mostrar un nivel escrito muy superior al oral (o viceversa), lo que genera dudas sobre la competencia real",
          "Descuidar la prueba que se considera 'menos importante' — el tribunal evalúa el conjunto",
        ],
        tips: [
          "Mantén la concentración y el registro hasta el último minuto: el tribunal forma una impresión global y los últimos minutos pesan más de lo que parece",
        ],
      },
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
          "Trabajamos con comunicados del MAEC, resoluciones de la ONU y tratados internacionales, no con textos genéricos de academias generalistas. Cada texto se selecciona por su relevancia temática y su similitud con los materiales que el tribunal ha utilizado en convocatorias anteriores. Esto te permite familiarizarte con el registro exacto que encontrarás el día del examen.",
        highlights: [
          "Acceso a un archivo de +200 textos clasificados por temática y nivel de dificultad",
          "Textos actualizados cada trimestre con las últimas resoluciones y comunicados",
          "Incluye documentos en formato original del MAEC y Naciones Unidas",
        ],
      },
      {
        title: "Simulacros de tribunal",
        description:
          "Reproducimos las condiciones exactas de la prueba oral: panel evaluador, tiempos cronometrados y preguntas de actualidad internacional. Nuestros simulacros están diseñados por profesionales que han participado como asesores lingüísticos en tribunales de oposiciones. La presión del simulacro prepara emocionalmente al opositor para el día real.",
        highlights: [
          "Panel de 2-3 evaluadores con experiencia en servicio exterior",
          "Grabación en vídeo de cada simulacro para autoevaluación posterior",
          "Sesión de debriefing individual tras cada simulacro con plan de mejora",
        ],
      },
      {
        title: "Doble especialización inglés-francés",
        description:
          "Nuestros profesores dominan la terminología diplomática en ambos idiomas y conocen las diferencias de exigencia entre ambas pruebas. El tribunal aplica criterios distintos para cada idioma: en francés se penaliza especialmente el uso incorrecto del subjuntivo y las preposiciones, mientras que en inglés prima la precisión de las colocaciones. Adaptamos la preparación a estas diferencias reales.",
        highlights: [
          "Profesores nativos o bilingües con formación en relaciones internacionales",
          "Materiales diferenciados para inglés y francés según criterios específicos del tribunal",
        ],
      },
      {
        title: "Corrección de nivel C2",
        description:
          "Cada traducción y resumen recibe retroalimentación detallada sobre precisión léxica, registro y estilo diplomático. No nos limitamos a señalar errores: explicamos por qué una opción es más adecuada que otra en contexto diplomático y ofrecemos alternativas de mayor nivel. Este método acelera la adquisición del registro C2 que exige el tribunal.",
        highlights: [
          "Corrección en 48 horas con comentarios línea a línea",
          "Rúbrica de evaluación alineada con los criterios reales del tribunal",
          "Seguimiento de errores recurrentes con plan de erradicación personalizado",
        ],
      },
      {
        title: "Actualización permanente",
        description:
          "Incorporamos temas de actualidad que pueden aparecer en el examen: conflictos internacionales, tratados recientes y debates en el Consejo de Seguridad. Nuestro equipo monitoriza semanalmente la agenda diplomática internacional y elabora fichas temáticas con el vocabulario clave de cada acontecimiento. Los alumnos llegan al examen con los temas más probables ya trabajados.",
        highlights: [
          "Fichas temáticas semanales con vocabulario específico en inglés y francés",
          "Análisis de tendencias del tribunal: qué temas han preguntado y cuáles son probables",
        ],
      },
      {
        title: "Red de antiguos alumnos diplomáticos",
        description:
          "Nuestros exalumnos en activo en el servicio exterior comparten su experiencia y orientación sobre la prueba. Organizamos encuentros trimestrales donde diplomáticos de distintas promociones relatan su experiencia en el examen y ofrecen consejos prácticos. Esta red es un recurso invaluable que ninguna otra academia puede ofrecer.",
        highlights: [
          "Encuentros trimestrales con diplomáticos en activo de distintas promociones",
          "Canal privado de consultas donde los exalumnos responden dudas sobre el proceso",
          "Orientación sobre la vida profesional post-oposición en embajadas y misiones",
        ],
      },
    ],
    preparationFeatures: [
      {
        title: "Traducción directa e inversa",
        stat: "2x",
        statLabel: "sesiones de traducción por semana",
        description: "Práctica intensiva de traducción en ambas direcciones con textos diplomáticos, prensa internacional y documentos del BOE bajo condiciones cronometradas reales del examen.",
        classSize: "Máximo 5 alumnos",
        hoursPerWeek: "4 horas semanales (2 sesiones de 2h)",
        materials: [
          "Resoluciones del Consejo de Seguridad y Asamblea General de la ONU (documentos oficiales bilingües)",
          "Comunicados y notas informativas del MAEC de los últimos 3 años",
          "Editoriales de Le Monde Diplomatique, Foreign Affairs y The Economist seleccionados por temática",
        ],
        mockExamFrequency: "Semanal — una traducción cronometrada completa por semana",
        feedbackMethod: "Corrección línea a línea en 48h con rúbrica de 5 criterios (fidelidad, registro, léxico, gramática, estilo) y sesión grupal de errores comunes",
        successMetric: "El 92% de nuestros alumnos obtiene puntuación superior a 7/10 en la prueba de traducción",
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
        classSize: "Máximo 4 alumnos por sesión de simulacro",
        hoursPerWeek: "3 horas semanales (1 sesión grupal + 1 simulacro individual)",
        materials: [
          "Fichas temáticas semanales de actualidad internacional elaboradas por el equipo docente",
          "Archivo de preguntas reales de tribunales de convocatorias anteriores (2018-2025)",
          "Guía de expresiones y fórmulas del registro diplomático oral en inglés y francés",
        ],
        mockExamFrequency: "Semanal — un simulacro individual completo por semana",
        feedbackMethod: "Grabación en vídeo con evaluación por rúbrica (fluidez, registro, argumentación, pronunciación) y sesión de debriefing individual de 15 minutos",
        successMetric: "El 89% de nuestros alumnos califica la prueba oral como 'más fácil de lo esperado' tras la preparación",
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
        classSize: "Máximo 6 alumnos",
        hoursPerWeek: "2 horas semanales",
        materials: [
          "Textos propuestos en convocatorias anteriores de la Carrera Diplomática (archivo 2015-2025)",
          "Artículos de Foreign Affairs, International Crisis Group y documentos de la UE",
          "Guía de estructura y estilo del resumen analítico diplomático (elaboración propia)",
        ],
        mockExamFrequency: "Quincenal — un resumen completo cronometrado cada dos semanas",
        feedbackMethod: "Corrección con rúbrica del tribunal (coherencia, concisión, fidelidad, registro) y reescritura guiada de los párrafos más débiles",
        successMetric: "Media de mejora de 2,3 puntos sobre 10 en los primeros 3 meses de preparación",
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
        classSize: "Máximo 8 alumnos",
        hoursPerWeek: "2 horas semanales integradas en las sesiones de traducción y oral",
        materials: [
          "Glosario propio de +2.000 términos diplomáticos clasificados por campo semántico (derecho internacional, protocolo, organismos)",
          "UNTERM — base terminológica oficial de Naciones Unidas",
          "Vocabulaire diplomatique de la Fondation Robert Schuman y equivalentes en inglés",
        ],
        mockExamFrequency: "Test de vocabulario semanal con 50 términos en contexto",
        feedbackMethod: "Tests autocorregibles con explicación contextual de cada término y seguimiento de tasas de retención por alumno",
        successMetric: "Los alumnos incorporan una media de 120 términos nuevos por mes al uso activo",
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
        classSize: "Individual (tutorías 1 a 1)",
        hoursPerWeek: "1 hora semanal de tutoría individual + seguimiento asíncrono",
        materials: [
          "Informe de progreso semanal por destrezas con gráficas de evolución",
          "Plan de estudio personalizado con hitos y calendario hasta la fecha del examen",
          "Banco de ejercicios de práctica autónoma con autocorrección (acceso 24/7)",
        ],
        mockExamFrequency: "Evaluación global mensual que integra todas las destrezas",
        feedbackMethod: "Tutoría individual semanal de 30 minutos con revisión del informe de progreso, ajuste de objetivos y planificación de la semana siguiente",
        successMetric: "El 95% de los alumnos que completan el programa alcanzan el nivel objetivo antes de la fecha del examen",
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
      {
        title: "Traducción directa económica",
        description: "Traducción de un texto económico-comercial del idioma extranjero al español. Los textos proceden de publicaciones como The Economist, informes del FMI o memorandos de la OMC. Se valora la precisión del léxico financiero y comercial.",
        duration: "90 minutos",
        weight: "25% de la nota de idiomas",
        evaluationCriteria: [
          "Precisión en la terminología económico-financiera: PIB, IPC, balanza de pagos, tipos de cambio",
          "Fidelidad al contenido y tono del texto original sin omisiones significativas",
          "Naturalidad del texto en español, evitando calcos sintácticos del inglés económico",
          "Coherencia terminológica a lo largo de todo el texto (mismo término para mismo concepto)",
        ],
        commonPitfalls: [
          "Confundir términos económicos próximos: 'revenue' vs 'income', 'fiscal policy' vs 'monetary policy', 'deficit' vs 'debt'",
          "Traducir siglas sin adaptarlas al español (GDP en lugar de PIB, IMF en lugar de FMI)",
          "No reconocer las convenciones numéricas anglosajonas (billion = mil millones, no billón)",
        ],
        tips: [
          "Los textos del tribunal suelen proceder de los informes anuales del FMI (World Economic Outlook) y de The Economist — familiarízate con su estructura y vocabulario recurrente",
          "Mantén un cuaderno de colocaciones económicas: 'sustained growth', 'trade surplus', 'inflationary pressure' y sus equivalentes exactos en español",
        ],
      },
      {
        title: "Traducción inversa especializada",
        description: "Traducción de un texto especializado del español al idioma extranjero. El tribunal evalúa el dominio de la terminología de comercio internacional, balanza de pagos, aranceles y política monetaria.",
        duration: "90 minutos",
        weight: "20% de la nota de idiomas",
        evaluationCriteria: [
          "Dominio activo de la terminología de comercio internacional en la lengua de destino",
          "Corrección gramatical avanzada: condicionales, pasivas, reported speech en inglés; subjuntivo y concordancia en francés",
          "Capacidad de reformulación idiomática cuando no existe equivalente directo",
          "Registro institucional consistente propio de informes y memorandos económicos",
        ],
        commonPitfalls: [
          "Mantener la estructura sintáctica del español económico, que es más nominal y compleja que la del inglés",
          "Usar vocabulario genérico ('money' en lugar de 'capital', 'government' en lugar de 'Treasury') por inseguridad terminológica",
          "Errores en preposiciones fijas de la terminología económica: 'investment in' (no 'on'), 'tariff on' (no 'for')",
        ],
        tips: [
          "Lee a diario las secciones de economía de Financial Times y Les Echos para interiorizar las colocaciones naturales del inglés y francés económico",
        ],
      },
      {
        title: "Análisis y resumen documental",
        description: "Análisis y resumen de documentación comercial en lengua extranjera. Se exige capacidad para extraer datos clave de informes de mercado, sintetizar conclusiones y redactar con registro institucional.",
        duration: "60 minutos",
        weight: "15% de la nota de idiomas",
        evaluationCriteria: [
          "Capacidad de identificar datos clave y cifras relevantes de informes de mercado extensos",
          "Síntesis efectiva: transmitir las conclusiones principales sin redundancias",
          "Dominio del registro institucional económico en la redacción del resumen",
          "Organización lógica del resumen siguiendo la estructura problema-análisis-conclusión",
        ],
        commonPitfalls: [
          "Perderse en los datos numéricos y no captar la tesis principal del informe",
          "Copiar frases enteras del documento original en lugar de sintetizar con vocabulario propio",
          "No respetar el límite de extensión, lo que el tribunal interpreta como falta de capacidad analítica",
        ],
        tips: [
          "Practica con los Executive Summaries de informes de la OMC y el Banco Mundial — el tribunal espera que tu resumen tenga esa misma estructura y concisión profesional",
        ],
      },
      {
        title: "Exposición y debate oral",
        description: "Exposición oral de 20 minutos y debate posterior sobre temas de comercio internacional ante un panel evaluador. Se valora la capacidad de argumentación, la defensa de posiciones económicas y la fluidez en el idioma.",
        duration: "20 minutos de exposición + 10-15 minutos de debate",
        weight: "30% de la nota de idiomas",
        evaluationCriteria: [
          "Capacidad de estructurar una exposición económica coherente con introducción, desarrollo y conclusión",
          "Defensa convincente de posiciones económicas ante preguntas del tribunal con datos y argumentos",
          "Fluidez y naturalidad en la expresión oral, sin pausas excesivas ni muletillas",
          "Dominio del vocabulario de negociación comercial y política arancelaria en contexto oral",
        ],
        commonPitfalls: [
          "Memorizar una exposición que se desmorona ante la primera pregunta inesperada del tribunal",
          "No manejar cifras y datos con soltura en el idioma extranjero (porcentajes, magnitudes, comparaciones)",
          "Perder el registro formal cuando el debate se intensifica y recurrir a expresiones coloquiales",
        ],
        tips: [
          "El tribunal valora especialmente la capacidad de conectar un tema específico con el contexto macroeconómico global — prepara siempre un marco de referencia amplio para cada tema",
          "Practica la defensa de posiciones contrarias a la tuya: el tribunal puede asignarte deliberadamente una postura para evaluar tu versatilidad argumentativa",
        ],
      },
      {
        title: "Evaluación terminológica",
        description: "Valoración transversal del dominio de terminología económica y del registro profesional demostrado a lo largo de todas las pruebas. La precisión léxica en contextos de negociación multilateral es determinante.",
        duration: "Transversal a todas las pruebas",
        weight: "10% de la nota de idiomas",
        evaluationCriteria: [
          "Uso consistente y preciso de terminología económica especializada en todas las pruebas",
          "Dominio del registro profesional de negociación multilateral y comercio exterior",
          "Capacidad de emplear el término técnico exacto en lugar de circunlocuciones o aproximaciones",
        ],
        commonPitfalls: [
          "Inconsistencia terminológica: usar diferentes términos para el mismo concepto en distintas pruebas",
          "Recurrir a anglicismos innecesarios en la traducción al español o a hispanismos en la traducción inversa",
        ],
        tips: [
          "Elabora tu propio glosario de 200 términos clave del comercio internacional y repásalo antes del examen — la coherencia terminológica entre pruebas escritas y orales es lo que diferencia a los candidatos sobresalientes",
        ],
      },
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
          "Toda la preparación gira en torno al vocabulario y los contextos reales del comercio exterior: aranceles, balanza comercial, inversión extranjera y negociaciones multilaterales. No utilizamos materiales de inglés de negocios genérico: cada texto, cada ejercicio y cada simulacro está diseñado específicamente para el perfil de Técnico Comercial. Esta especialización es lo que permite que nuestros alumnos reconozcan inmediatamente el tipo de texto que les pondrá el tribunal.",
        highlights: [
          "Programa diseñado exclusivamente para el perfil de Técnico Comercial y Economista del Estado",
          "Textos clasificados por subsectores: comercio de bienes, servicios, inversión y propiedad intelectual",
          "Vocabulario alineado con las áreas temáticas más frecuentes del tribunal en las últimas 5 convocatorias",
        ],
      },
      {
        title: "Textos del Financial Times y The Economist",
        description:
          "Trabajamos con las mismas fuentes que utiliza el tribunal: publicaciones económicas de referencia, informes de la OMC y documentos de la Secretaría de Estado. Nuestro archivo incluye más de 150 textos seleccionados de estas publicaciones, clasificados por temática y nivel de dificultad. Cada texto viene acompañado de un glosario específico y notas sobre las dificultades de traducción que plantea.",
        highlights: [
          "Archivo de +150 textos de FT, The Economist, FMI y OMC clasificados por temática",
          "Glosario específico para cada texto con las colocaciones y expresiones clave",
          "Actualización mensual con los artículos más relevantes de la agenda económica internacional",
        ],
      },
      {
        title: "Simulacros de debate comercial",
        description:
          "Practicamos la exposición y defensa de argumentos en inglés y francés sobre política arancelaria, acuerdos comerciales y estrategias de internacionalización. Los simulacros se realizan con evaluadores que conocen los criterios exactos del tribunal y replican el formato de pregunta-repregunta que caracteriza esta oposición. La experiencia de debatir bajo presión es irreemplazable y marca la diferencia el día del examen.",
        highlights: [
          "Simulacros con formato idéntico al del tribunal: exposición + debate con repregunta",
          "Temas extraídos del análisis de tendencias de las últimas convocatorias",
        ],
      },
      {
        title: "Opción de tercer idioma (alemán)",
        description:
          "Para quienes desean sumar puntos con el alemán, ofrecemos un módulo específico centrado en terminología económica y comercial germana. El módulo cubre la terminología de las relaciones comerciales hispano-alemanas, los informes del Bundesbank y la documentación de las Cámaras de Comercio bilaterales. Es un valor añadido que pocos candidatos presentan y que puede ser decisivo en la puntuación final.",
        highlights: [
          "Módulo intensivo de alemán económico-comercial diseñado para sumar puntos adicionales",
          "Textos del Bundesbank, Handelsblatt y documentación de cámaras de comercio bilaterales",
          "Posibilidad de alcanzar nivel B2 operativo en 8 meses partiendo de A2",
        ],
      },
      {
        title: "Profesores con experiencia en Oficinas Comerciales",
        description:
          "Nuestro equipo incluye profesionales que han trabajado en Oficinas Económicas y Comerciales de España en el extranjero y conocen el día a día del Técnico Comercial. Esta experiencia directa nos permite orientar la preparación hacia los contextos lingüísticos reales que encontrará el futuro funcionario: negociaciones comerciales, redacción de informes de mercado y comunicación con empresas e instituciones internacionales.",
        highlights: [
          "Formadores con experiencia directa en Oficinas Comerciales de Londres, París y Berlín",
          "Conocimiento de primera mano de los contextos profesionales reales del Técnico Comercial",
        ],
      },
    ],
    preparationFeatures: [
      {
        title: "Traducción económica especializada",
        stat: "2x",
        statLabel: "sesiones semanales de traducción",
        description: "Traducción directa e inversa con textos de comercio exterior, macroeconomía y política monetaria del BCE.",
        classSize: "Máximo 6 alumnos",
        hoursPerWeek: "4 horas semanales (2 sesiones de 2h)",
        materials: [
          "Informes del World Economic Outlook del FMI y boletines del BCE en formato original",
          "Artículos seleccionados de Financial Times y The Economist sobre política comercial",
          "Memorandos y documentos de trabajo de la OMC y la Secretaría de Estado de Comercio",
        ],
        mockExamFrequency: "Semanal — una traducción cronometrada completa por semana con baremos del tribunal",
        feedbackMethod: "Corrección línea a línea en 48h centrada en precisión terminológica económica, con sesión grupal semanal de errores frecuentes y alternativas de mayor nivel",
        successMetric: "El 88% de nuestros alumnos supera la prueba de traducción en su primera convocatoria",
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
        classSize: "Máximo 4 alumnos por sesión de simulacro",
        hoursPerWeek: "3 horas semanales (1 sesión grupal de debate + 1 simulacro individual)",
        materials: [
          "Fichas de debate con posiciones económicas contrapuestas sobre temas de actualidad comercial",
          "Archivo de temas propuestos en tribunales de convocatorias anteriores (2017-2025)",
          "Guía de estructuración de exposiciones económicas en inglés y francés (elaboración propia)",
        ],
        mockExamFrequency: "Semanal — un simulacro individual de 20 minutos + debate",
        feedbackMethod: "Grabación en vídeo con evaluación por rúbrica (estructura argumental, fluidez, terminología, capacidad de réplica) y debriefing individual de 15 minutos",
        successMetric: "El 91% de los alumnos mejora su puntuación oral estimada en más de 2 puntos en los primeros 4 meses",
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
        classSize: "Máximo 8 alumnos",
        hoursPerWeek: "2 horas semanales integradas en las sesiones de traducción y oratoria",
        materials: [
          "Glosario propio de +1.500 términos de comercio internacional clasificados por ámbito (aranceles, inversión, servicios, propiedad intelectual)",
          "Glossary of Trade Terms de la OMC y terminología oficial de la ICC (Cámara de Comercio Internacional)",
          "Fichas de Incoterms con equivalencias trilingües (inglés-francés-alemán) y ejemplos contextualizados",
        ],
        mockExamFrequency: "Test de vocabulario semanal con 40 términos en contexto de uso real",
        feedbackMethod: "Tests autocorregibles con explicación contextual, seguimiento de retención por alumno y repaso espaciado de los términos más difíciles",
        successMetric: "Los alumnos incorporan una media de 100 términos comerciales nuevos por mes al uso activo",
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
        classSize: "Individual (tutorías 1 a 1) + simulacros en grupo de máximo 6",
        hoursPerWeek: "1 hora semanal de tutoría individual + simulacro quincenal de 3 horas",
        materials: [
          "Exámenes completos de convocatorias anteriores reconstruidos a partir de testimonios de opositores",
          "Informe de progreso quincenal con gráficas de evolución por destreza",
          "Plan de estudio personalizado con hitos y calendario hasta la fecha del examen",
        ],
        mockExamFrequency: "Quincenal — simulacro completo (traducción + resumen + oral) en una sola sesión de 3 horas",
        feedbackMethod: "Informe detallado tras cada simulacro con puntuación estimada por prueba, análisis de errores y plan de mejora específico para las dos semanas siguientes",
        successMetric: "El 93% de los alumnos que completan el programa de 12 meses aprueban la prueba de idiomas en su convocatoria",
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
      {
        title: "Traducción directa comercial",
        description: "Traducción de un texto comercial o económico del idioma extranjero al español. Se utilizan informes ICEX, documentación de Oficinas Comerciales y notas sectoriales. Se valora la precisión del léxico de comercio exterior.",
        duration: "60 minutos",
        weight: "30% de la nota de idiomas",
        evaluationCriteria: [
          "Fidelidad al contenido original sin omisiones ni adiciones",
          "Uso correcto de terminología de comercio exterior (balanza comercial, aranceles, contingentes)",
          "Naturalidad y fluidez del texto en español, sin calcos del idioma de origen",
          "Coherencia con el registro institucional propio de las Oficinas Comerciales",
        ],
        commonPitfalls: [
          "Traducir literalmente expresiones idiomáticas comerciales anglosajonas sin adaptarlas al registro español institucional",
          "Confundir términos próximos como 'trade balance' y 'balance of payments' o 'tariff' y 'duty'",
          "Dedicar demasiado tiempo al primer párrafo y dejar los últimos sin revisar",
        ],
        tips: [
          "Lee el texto completo antes de empezar a traducir: los informes ICEX tienen una estructura predecible que te ayuda a anticipar la terminología",
          "Mantén un glosario personal de los binomios español-inglés más frecuentes en documentación de Oficinas Comerciales",
        ],
      },
      {
        title: "Traducción inversa",
        description: "Traducción del español al idioma extranjero de un texto relacionado con la internacionalización empresarial. El tribunal evalúa la corrección gramatical, la adecuación del registro institucional y la fluidez del texto resultante.",
        duration: "60 minutos",
        weight: "25% de la nota de idiomas",
        evaluationCriteria: [
          "Corrección gramatical avanzada: concordancia, tiempos verbales y uso de preposiciones",
          "Riqueza léxica en terminología de internacionalización y comercio exterior",
          "Adecuación del registro al contexto institucional (evitar coloquialismos y calcos)",
          "Fluidez del texto resultante como si hubiera sido redactado originalmente en la lengua de destino",
        ],
        commonPitfalls: [
          "Producir un texto que suena a 'español traducido' en lugar de inglés o francés natural",
          "Utilizar vocabulario comercial genérico (business, company) cuando existen equivalentes más precisos del sector exterior (foreign trade, exporting firm)",
        ],
        tips: [
          "Practica leyendo informes en inglés del WTO o la ICC para interiorizar el registro natural del comercio institucional",
        ],
      },
      {
        title: "Prueba oral comercial",
        description: "Conversación oral ante tribunal sobre temas de comercio exterior, estrategia de mercado y relaciones económicas bilaterales. Se valora la capacidad de exposición, la defensa de argumentos y el dominio del vocabulario comercial.",
        duration: "15 minutos",
        weight: "25% de la nota de idiomas",
        evaluationCriteria: [
          "Fluidez y naturalidad en la expresión sin pausas excesivas ni muletillas",
          "Dominio del vocabulario específico de comercio exterior y estrategia de mercado",
          "Capacidad de estructurar argumentos y defender posiciones con datos",
          "Pronunciación clara y entonación adecuada al registro profesional",
        ],
        commonPitfalls: [
          "Memorizar respuestas predefinidas que suenan artificiales cuando el tribunal reformula la pregunta",
          "No preparar temas de actualidad reciente: el tribunal suele preguntar sobre acuerdos comerciales o conflictos arancelarios del momento",
          "Responder con frases cortas sin desarrollar el argumento ni ofrecer ejemplos concretos",
        ],
        tips: [
          "Sigue semanalmente las publicaciones del ICEX y la Secretaría de Estado de Comercio para tener datos reales que utilizar ante el tribunal",
          "Practica la estructura 'afirmación - evidencia - conclusión' para cada respuesta oral",
        ],
      },
      {
        title: "Comprensión documental",
        description: "Comprensión lectora de documentación comercial institucional: informes de mercado, estadísticas de exportación y correspondencia de Oficinas Económicas y Comerciales. Se evalúa la capacidad de extraer información clave.",
        duration: "45 minutos",
        weight: "10% de la nota de idiomas",
        evaluationCriteria: [
          "Identificación precisa de datos clave: cifras, porcentajes, tendencias y conclusiones",
          "Comprensión de la estructura y propósito del documento sin necesidad de traducción completa",
          "Capacidad de distinguir hechos de opiniones y recomendaciones en informes de mercado",
        ],
        commonPitfalls: [
          "Intentar traducir mentalmente todo el texto en lugar de aplicar técnicas de lectura selectiva",
          "Confundir datos estadísticos cuando aparecen en formatos diferentes (millones/billions, porcentajes absolutos/relativos)",
        ],
        tips: [
          "Familiarízate con la estructura estándar de los informes de mercado del ICEX: siempre siguen el esquema contexto - datos - análisis - recomendaciones",
        ],
      },
      {
        title: "Evaluación de registro y corrección",
        description: "Valoración global de la corrección gramatical y la adecuación del registro profesional demostrado en el conjunto de las pruebas. El tono institucional y la precisión terminológica son factores diferenciadores.",
        duration: "Transversal a todas las pruebas",
        weight: "10% de la nota de idiomas",
        evaluationCriteria: [
          "Coherencia del nivel lingüístico entre las pruebas escrita y oral",
          "Uso consistente del registro institucional sin alternar entre coloquial y formal",
          "Ausencia de errores sistemáticos de gramática o léxico que revelen carencias estructurales",
        ],
        commonPitfalls: [
          "Mostrar un nivel muy superior en la traducción escrita que en la prueba oral, lo que genera dudas sobre la autenticidad del nivel",
          "Utilizar un registro demasiado informal en la prueba oral tras haber mantenido un tono impecable en las traducciones escritas",
        ],
        tips: [
          "Practica siempre en el mismo registro institucional tanto al escribir como al hablar para que el tribunal perciba un nivel homogéneo y creíble",
        ],
      },
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
          "Nuestros materiales proceden directamente de las Oficinas Económicas y Comerciales de España: informes de mercado, notas sectoriales y correspondencia institucional. Actualizamos el banco de textos cada trimestre con las últimas publicaciones de las OFECOMES, para que trabajes siempre con documentación vigente. Esta inmersión en fuentes reales te permite llegar al examen reconociendo de inmediato el estilo y la estructura de los textos propuestos.",
        highlights: [
          "Más de 200 textos reales de OFECOMES clasificados por sector y mercado",
          "Actualización trimestral con las publicaciones más recientes del ICEX",
          "Glosario exclusivo de terminología de las Oficinas Comerciales en 15 mercados clave",
        ],
      },
      {
        title: "Formato exacto del examen",
        description:
          "Conocemos al detalle el formato de la prueba y replicamos sus condiciones en cada simulacro: tipo de texto, extensión, tiempo disponible y criterios de corrección. Nuestros simulacros incorporan los baremos exactos que utiliza el tribunal, incluyendo los descriptores de banda para cada nivel de puntuación. El resultado es que nuestros alumnos llegan al examen sin ninguna sorpresa de formato.",
        highlights: [
          "Simulacros cronometrados con el mismo tipo de texto y extensión que la convocatoria oficial",
          "Corrección según los baremos reales del tribunal, no con criterios genéricos",
        ],
      },
      {
        title: "Preparación integrada inglés-francés",
        description:
          "Coordinamos la preparación de ambos idiomas para optimizar tu tiempo y asegurar un nivel homogéneo en las dos pruebas. Los profesores de inglés y francés comparten planificación semanal para evitar solapamientos y reforzar el vocabulario comercial desde ambos idiomas simultáneamente. Esta coordinación es especialmente valiosa porque el tribunal detecta fácilmente desniveles entre idiomas.",
        highlights: [
          "Planificación conjunta inglés-francés con vocabulario comercial coordinado",
          "Sesiones alternadas que evitan fatiga lingüística y refuerzan la transferencia de conceptos",
          "Preparación específica para el formato diferenciado de cada prueba por idioma",
        ],
      },
      {
        title: "Profesores con experiencia ICEX",
        description:
          "Nuestro equipo docente incluye profesionales familiarizados con la actividad de ICEX y la Secretaría de Estado de Comercio. Varios de nuestros profesores han trabajado como traductores e intérpretes para organismos vinculados al comercio exterior español, lo que les da un conocimiento directo de la terminología y el registro que el tribunal espera. Esta experiencia se traduce en correcciones más precisas y relevantes.",
        highlights: [
          "Profesores con experiencia directa en traducción para ICEX y la Secretaría de Estado de Comercio",
          "Conocimiento de primera mano de los criterios y expectativas del tribunal",
        ],
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
        classSize: "Máximo 6 alumnos",
        hoursPerWeek: "4 horas semanales",
        materials: [
          "Informes de mercado del ICEX y publicaciones de OFECOMES",
          "Boletines de la Secretaría de Estado de Comercio",
          "Glosario bilingüe de comercio exterior y aduanas elaborado por el Instituto",
        ],
        mockExamFrequency: "Quincenal",
        feedbackMethod: "Corrección escrita detallada con anotaciones de léxico, registro y estilo, entregada en 48 horas con sesión de revisión individual de 15 minutos",
        successMetric: "87% de aprobados en la prueba de idiomas en las últimas tres convocatorias",
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
        classSize: "Máximo 4 alumnos",
        hoursPerWeek: "2 horas semanales",
        materials: [
          "Dossier semanal de actualidad comercial internacional (elaboración propia)",
          "Fichas de vocabulario temático de comercio exterior por sector",
          "Grabaciones de simulacros anteriores como referencia de nivel objetivo",
        ],
        mockExamFrequency: "Semanal",
        feedbackMethod: "Grabación en vídeo de cada simulacro con informe oral inmediato del evaluador y ficha escrita de puntos fuertes y áreas de mejora",
        successMetric: "Mejora media de 1,5 puntos en fluidez oral tras 8 semanas de preparación",
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
        classSize: "Máximo 6 alumnos",
        hoursPerWeek: "3 horas por sesión de simulacro",
        materials: [
          "Exámenes completos de convocatorias anteriores reconstituidos",
          "Plantillas de corrección con los baremos del tribunal",
          "Banco de textos clasificados por dificultad y temática comercial",
        ],
        mockExamFrequency: "Mensual (simulacro completo) + quincenal (simulacro parcial por destreza)",
        feedbackMethod: "Informe escrito individualizado con puntuación desglosada por destreza, comparativa con la media del grupo y plan de acción para las siguientes semanas",
        successMetric: "El 90% de nuestros alumnos iguala o supera su nota objetivo en el simulacro final previo al examen",
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
      {
        title: "Traducción directa normativa",
        description: "Traducción de textos técnicos y normativos del idioma extranjero al español: reglamentos CE, directivas europeas, normas fitosanitarias y documentación de control de calidad. Se exige precisión en la terminología de inspección.",
        duration: "75 minutos",
        weight: "30% de la nota de idiomas",
        evaluationCriteria: [
          "Precisión terminológica en vocabulario normativo y de inspección (conformidad, trazabilidad, lote, partida)",
          "Fidelidad a la estructura y registro jurídico del texto original sin simplificaciones",
          "Correcta transposición de referencias legales (artículos, anexos, apartados) al formato español",
          "Coherencia interna del texto traducido y ausencia de contradicciones con el original",
        ],
        commonPitfalls: [
          "Traducir 'shall' como futuro cuando en normativa europea equivale a una obligación imperativa ('deberá')",
          "Confundir terminología próxima: 'regulation' (reglamento, directamente aplicable) vs. 'directive' (directiva, requiere transposición)",
          "Perder tiempo intentando comprender el alcance técnico completo en lugar de centrarse en la traducción lingüística precisa",
        ],
        tips: [
          "Familiarízate con la versión española de EUR-Lex: los reglamentos CE tienen traducciones oficiales que te muestran las equivalencias terminológicas aceptadas",
          "Practica identificando la estructura fija de los reglamentos europeos (considerandos, articulado, anexos) para ganar velocidad",
        ],
      },
      {
        title: "Traducción inversa de inspección",
        description: "Traducción del español al idioma extranjero de documentación de inspección: actas, certificados de conformidad, informes de no conformidad y documentos de despacho aduanero.",
        duration: "60 minutos",
        weight: "25% de la nota de idiomas",
        evaluationCriteria: [
          "Corrección gramatical y sintáctica en la lengua de destino",
          "Dominio del registro técnico-administrativo propio de la documentación de inspección",
          "Uso de la terminología normalizada en inglés o francés para conceptos de calidad y aduanas",
          "Capacidad de producir un texto que resulte natural para un lector nativo del ámbito técnico",
        ],
        commonPitfalls: [
          "Traducir literalmente las fórmulas administrativas españolas ('se hace constar', 'a los efectos oportunos') sin buscar el equivalente funcional en inglés o francés",
          "No utilizar la terminología ISO estandarizada en inglés cuando existe (non-conformity, corrective action, audit trail)",
        ],
        tips: [
          "Estudia actas de inspección reales en inglés de organismos como la FDA o la EFSA para interiorizar el registro técnico-administrativo natural",
        ],
      },
      {
        title: "Comprensión de normativa internacional",
        description: "Comprensión lectora de reglamentos europeos y normativa internacional en idioma original. Se evalúa la capacidad de identificar disposiciones clave, obligaciones y plazos en textos legislativos extensos.",
        duration: "45 minutos",
        weight: "15% de la nota de idiomas",
        evaluationCriteria: [
          "Identificación correcta de obligaciones, prohibiciones y plazos en textos normativos extensos",
          "Capacidad de localizar disposiciones específicas sin necesidad de leer el texto completo",
          "Comprensión de las remisiones internas (referencias cruzadas entre artículos y anexos)",
        ],
        commonPitfalls: [
          "Leer el reglamento de principio a fin en lugar de aplicar técnicas de lectura selectiva orientada a las preguntas",
          "No distinguir entre disposiciones de aplicación directa y las que dependen de actos delegados o de ejecución",
          "Confundir los considerandos (no vinculantes) con el articulado (vinculante) del reglamento",
        ],
        tips: [
          "Los reglamentos europeos siguen una estructura predecible: practica con EUR-Lex para aprender a navegar directamente a la sección relevante sin perder tiempo",
        ],
      },
      {
        title: "Prueba oral de inspección",
        description: "Exposición oral ante tribunal sobre temas de comercio exterior, procedimientos de inspección y control de calidad. Se valora la capacidad de argumentar sobre incumplimientos con evidencia técnica.",
        duration: "15 minutos",
        weight: "20% de la nota de idiomas",
        evaluationCriteria: [
          "Capacidad de exponer procedimientos de inspección con claridad y orden lógico",
          "Dominio del vocabulario técnico de calidad, aduanas y control fitosanitario",
          "Fluidez argumentativa al defender conclusiones de inspección con evidencia normativa",
          "Registro profesional adecuado al contexto de inspección oficial",
        ],
        commonPitfalls: [
          "Describir procedimientos de inspección de forma vaga sin citar la normativa de referencia",
          "No preparar vocabulario específico de situaciones de incumplimiento (non-compliance, seizure, detention, withdrawal)",
          "Perder la estructura argumental al intentar ser demasiado técnico sin dominar el léxico",
        ],
        tips: [
          "Prepara 5-6 escenarios tipo de inspección (alerta RASFF, incumplimiento de etiquetado, fraude de origen) y practica exponerlos en inglés con estructura: hallazgo - base legal - medida adoptada",
        ],
      },
      {
        title: "Terminología técnica especializada",
        description: "Evaluación transversal del dominio de terminología de calidad, aduanas y regulación comercial. La precisión léxica en certificación, trazabilidad y normativa sanitaria es determinante para la calificación.",
        duration: "Transversal a todas las pruebas",
        weight: "10% de la nota de idiomas",
        evaluationCriteria: [
          "Uso consistente y preciso de terminología ISO, CE y aduanera en todas las pruebas",
          "Coherencia terminológica: el mismo concepto debe traducirse igual en todo el examen",
          "Dominio del léxico de trazabilidad, certificación, etiquetado y medidas sanitarias",
        ],
        commonPitfalls: [
          "Utilizar sinónimos informales para conceptos que tienen un término técnico normalizado (decir 'seguimiento' en lugar de 'trazabilidad')",
          "Inconsistencia terminológica entre las diferentes pruebas del examen, lo que revela falta de dominio real",
        ],
        tips: [
          "Elabora un glosario personal de los 100 términos técnicos más frecuentes en normativa de inspección y repásalo antes de cada prueba para asegurar coherencia",
        ],
      },
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
          "Nuestros glosarios cubren la terminología específica de inspección, normalización, calidad y regulación aduanera que aparece en el examen. Cada glosario está organizado por campos temáticos (fitosanidad, aduanas, calidad industrial, etiquetado) y se actualiza con cada nueva publicación del DOUE que afecta al sector. No encontrarás este nivel de especialización léxica en ninguna academia generalista.",
        highlights: [
          "Más de 1.500 términos técnicos bilingües organizados por campo temático",
          "Fichas de vocabulario con contexto real extraído de reglamentos CE vigentes",
          "Actualización automática con cada nuevo reglamento publicado en el DOUE",
        ],
      },
      {
        title: "Textos de reglamentos reales",
        description:
          "Trabajamos con reglamentos CE, directivas europeas, normas ISO y documentación fitosanitaria, no con textos adaptados o simplificados. Nuestro banco de textos incluye los reglamentos que con mayor frecuencia han aparecido en convocatorias anteriores, así como los últimos publicados que tienen probabilidad de ser seleccionados por el tribunal. Esta práctica con fuentes auténticas elimina la sorpresa el día del examen.",
        highlights: [
          "Banco de más de 150 extractos de reglamentos CE clasificados por tema y dificultad",
          "Textos de convocatorias anteriores reconstituidos para práctica directa",
        ],
      },
      {
        title: "Doble componente técnico-lingüístico",
        description:
          "Nuestros profesores combinan formación lingüística avanzada con conocimiento del sector de inspección y comercio exterior. Varios miembros de nuestro equipo han trabajado como traductores de normativa para organismos europeos o como asesores lingüísticos en procesos de certificación internacional. Este perfil mixto les permite corregir no solo errores de idioma, sino también imprecisiones técnicas que el tribunal penaliza.",
        highlights: [
          "Profesores con experiencia en traducción de normativa para organismos europeos",
          "Correcciones que integran precisión lingüística y rigor técnico-normativo",
          "Conocimiento directo del perfil de evaluador que compone los tribunales del SOIVRE",
        ],
      },
      {
        title: "Práctica con documentación aduanera",
        description:
          "Certificados de conformidad, documentos de despacho, DUA y declaraciones sumarias en inglés y francés. Trabajamos con los formularios reales que utilizan los inspectores del SOIVRE en su actividad diaria, lo que te familiariza con el formato, la estructura y la terminología exacta que aparece en el examen. Esta práctica con documentación auténtica es el diferencial más valorado por nuestros alumnos aprobados.",
        highlights: [
          "Práctica con DUA, certificados de conformidad y declaraciones sumarias reales",
          "Familiarización con los códigos y abreviaturas del sistema aduanero internacional",
        ],
      },
      {
        title: "Simulacros con normativa vigente",
        description:
          "Utilizamos los reglamentos más recientes de la UE para que te familiarices con el tipo de texto que propondrá el tribunal. Nuestro equipo monitoriza semanalmente el DOUE y las alertas RASFF para incorporar las novedades normativas con mayor probabilidad de aparecer en el examen. Los tribunales valoran especialmente la actualidad de los textos, y nuestros simulacros reflejan esa realidad.",
        highlights: [
          "Monitorización semanal del DOUE y del sistema RASFF para anticipar textos del tribunal",
          "Simulacros actualizados con la normativa más reciente de seguridad alimentaria y fitosanidad",
          "Análisis de tendencias de convocatorias anteriores para predecir temáticas probables",
        ],
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
        classSize: "Máximo 5 alumnos",
        hoursPerWeek: "4 horas semanales",
        materials: [
          "Extractos de reglamentos CE del DOUE en versión bilingüe (EUR-Lex)",
          "Actas de inspección y certificados de conformidad del SOIVRE",
          "Glosario técnico de inspección, calidad y aduanas elaborado por el Instituto",
        ],
        mockExamFrequency: "Quincenal",
        feedbackMethod: "Corrección escrita detallada con marcado de errores terminológicos, gramaticales y de registro, entregada en 48 horas con sesión de revisión individual",
        successMetric: "91% de aprobados en la prueba de traducción en las últimas cuatro convocatorias",
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
        classSize: "Máximo 4 alumnos",
        hoursPerWeek: "2 horas semanales",
        materials: [
          "Fichas de escenarios de inspección tipo (alerta RASFF, incumplimiento de etiquetado, fraude de origen)",
          "Glosario oral de expresiones técnicas de inspección en inglés y francés",
          "Grabaciones de exposiciones modelo con puntuación de referencia",
        ],
        mockExamFrequency: "Semanal",
        feedbackMethod: "Grabación en vídeo con informe oral inmediato del evaluador y ficha escrita con puntuación desglosada por criterio (fluidez, léxico técnico, estructura, registro)",
        successMetric: "Mejora media de 2 puntos en competencia oral técnica tras 10 semanas de preparación",
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
        classSize: "Máximo 5 alumnos",
        hoursPerWeek: "3 horas por sesión de simulacro",
        materials: [
          "Exámenes completos de convocatorias anteriores del SOIVRE reconstituidos",
          "Plantillas de corrección con los baremos del tribunal de inspección",
          "Reglamentos CE recientes seleccionados por probabilidad de aparición en el examen",
        ],
        mockExamFrequency: "Mensual (simulacro completo) + quincenal (simulacro parcial por destreza)",
        feedbackMethod: "Informe escrito individualizado con puntuación desglosada por destreza, análisis de errores recurrentes y plan de acción con objetivos concretos para las siguientes semanas",
        successMetric: "El 93% de nuestros alumnos supera la nota de corte de idiomas en la primera convocatoria que se presenta",
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
      {
        title: "Traducción directa técnica",
        description: "Traducción de documentación técnica e informes de laboratorio del idioma extranjero al español. Los textos incluyen protocolos de ensayo, fichas de seguridad y especificaciones de producto según normas UNE-EN.",
        duration: "75 minutos",
        weight: "30% de la nota de idiomas",
        evaluationCriteria: [
          "Precisión en la terminología de ensayos y metrología",
          "Fidelidad al contenido técnico del texto original",
          "Corrección gramatical y naturalidad del texto en español",
          "Adecuación del registro técnico-normativo",
        ],
        commonPitfalls: [
          "Traducir literalmente expresiones técnicas que tienen equivalentes normalizados en español (UNE)",
          "Confundir unidades de medida o simbología técnica entre sistemas",
          "Omitir matices técnicos que alteran el alcance de una especificación",
        ],
        tips: [
          "Familiarízate con las versiones bilingües de las normas UNE-EN más comunes: ISO 9001, ISO 14001 e ISO 22000 cubren la mayoría de los textos propuestos.",
        ],
      },
      {
        title: "Traducción inversa normativa",
        description: "Traducción del español al idioma extranjero de textos de normativa y especificaciones técnicas. Se evalúa la precisión terminológica en metrología, certificación y procedimientos de ensayo.",
        duration: "60 minutos",
        weight: "25% de la nota de idiomas",
        evaluationCriteria: [
          "Dominio del léxico técnico en la lengua de destino",
          "Coherencia con la terminología normalizada internacional",
          "Corrección gramatical y fluidez del texto producido",
        ],
        commonPitfalls: [
          "Usar terminología genérica en lugar del equivalente técnico normalizado",
          "Errores en la estructura de oraciones complejas con múltiples cláusulas técnicas",
        ],
        tips: [
          "Las hojas de seguridad (SDS) siguen un formato internacional estandarizado: memoriza las secciones y su terminología en inglés.",
        ],
      },
      {
        title: "Comprensión de normas ISO y EN",
        description: "Comprensión lectora de normas internacionales (ISO 9001, ISO 22000, ISO 14001, normas EN) en su idioma original. Se exige la capacidad de identificar requisitos, alcance y disposiciones técnicas clave.",
        duration: "45 minutos",
        weight: "15% de la nota de idiomas",
        evaluationCriteria: [
          "Capacidad de localizar requisitos y disposiciones clave en textos normativos extensos",
          "Comprensión de la estructura y jerarquía de las normas internacionales",
          "Identificación correcta de obligaciones, recomendaciones y permisos (shall, should, may)",
        ],
        commonPitfalls: [
          "Confundir shall (obligación) con should (recomendación) en textos normativos ISO",
          "No distinguir entre requisitos del cuerpo de la norma y notas informativas de los anexos",
          "Perder tiempo leyendo el texto completo en lugar de buscar las disposiciones específicas",
        ],
        tips: [
          "Las normas ISO usan un vocabulario modal muy preciso: shall = obligatorio, should = recomendado, may = permitido. Dominar esta distinción es fundamental.",
        ],
      },
      {
        title: "Exposición oral de informes técnicos",
        description: "Presentación oral de informes técnicos en idioma extranjero ante panel evaluador. El candidato debe exponer resultados de ensayo, defender conclusiones de inspección y argumentar sobre informes de no conformidad.",
        duration: "15 minutos",
        weight: "20% de la nota de idiomas",
        evaluationCriteria: [
          "Claridad en la exposición de resultados y conclusiones técnicas",
          "Dominio del vocabulario de ensayos, certificación y no conformidad",
          "Capacidad de argumentar y defender conclusiones ante preguntas del tribunal",
          "Fluidez y registro técnico-profesional adecuado",
        ],
        commonPitfalls: [
          "Describir resultados sin interpretar su significado técnico",
          "No estructurar la exposición (contexto → metodología → resultados → conclusiones)",
          "Perder la fluidez al intentar usar terminología técnica poco practicada oralmente",
        ],
        tips: [
          "Practica la estructura problema-ensayo-resultado-conclusión con informes reales. El tribunal valora la capacidad de comunicar hallazgos técnicos con claridad.",
        ],
      },
      {
        title: "Precisión terminológica técnico-científica",
        description: "Evaluación global de la precisión terminológica demostrada en todas las pruebas. El dominio del léxico de ingeniería, ensayos de materiales, acreditación y marcado CE es determinante para la calificación final.",
        weight: "10% (transversal)",
        evaluationCriteria: [
          "Consistencia terminológica a lo largo de todas las pruebas",
          "Uso correcto del léxico de acreditación, marcado CE y metrología",
          "Precisión en unidades, simbología y nomenclatura técnica",
        ],
        commonPitfalls: [
          "Usar terminología inconsistente entre la traducción escrita y la exposición oral",
          "Confundir certificación con acreditación (conceptos técnicamente distintos)",
        ],
        tips: [
          "Crea fichas de los 50 términos técnicos más frecuentes con sus equivalentes en ambos idiomas. La consistencia terminológica entre pruebas suma puntos.",
        ],
      },
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
          "Trabajamos con normas UNE, EN e ISO en versión bilingüe, informes de laboratorio y protocolos de ensayo auténticos. No usamos textos adaptados ni simplificados: cada ejercicio replica el nivel de complejidad que encontrarás en el examen.",
        highlights: [
          "Normas ISO 9001, ISO 22000 e ISO 14001 en versión original",
          "Informes de ensayo de laboratorios acreditados por ENAC",
          "Fichas de seguridad (SDS) y especificaciones de producto reales",
        ],
      },
      {
        title: "Profesores con perfil técnico-lingüístico",
        description:
          "Nuestro equipo combina formación en ingeniería o ciencias con titulación avanzada en idiomas. Esta doble competencia es esencial para detectar errores terminológicos que un profesor de idiomas generalista no identificaría.",
        highlights: [
          "Docentes con grado en ingeniería + C2 en inglés certificado",
          "Experiencia en traducción técnica profesional",
        ],
      },
      {
        title: "Enfoque en precisión terminológica",
        description:
          "En textos técnicos, una palabra imprecisa puede cambiar el sentido completo de una especificación. Entrenamos la exactitud terminológica que valora el tribunal, distinguiendo entre conceptos que parecen similares pero tienen significados técnicos distintos (certificación vs. acreditación, ensayo vs. prueba, tolerancia vs. incertidumbre).",
        highlights: [
          "Glosarios de metrología, certificación y marcado CE",
          "Ejercicios de discriminación terminológica con pares confusos",
          "Corrección centrada en precisión, no solo en gramática",
        ],
      },
      {
        title: "Exposición oral de informes técnicos",
        description:
          "Practicamos la presentación de resultados de ensayo, informes de no conformidad y análisis de certificaciones en inglés ante un panel evaluador. Cada simulacro sigue la estructura exacta del examen: exposición + preguntas del tribunal sobre los hallazgos presentados.",
        highlights: [
          "Simulacros con panel de 2-3 evaluadores especializados",
          "Grabación en vídeo y análisis posterior de cada sesión",
        ],
      },
    ],
    preparationFeatures: [
      {
        title: "Traducción técnica y normativa",
        stat: "2x",
        statLabel: "sesiones semanales de traducción técnica",
        description: "Normas ISO bilingües, informes de laboratorio, fichas técnicas y hojas de seguridad en inglés y francés.",
        classSize: "Máximo 5 alumnos",
        hoursPerWeek: "4 horas semanales",
        materials: ["Normas UNE-EN-ISO bilingües", "Informes de laboratorios ENAC", "Fichas SDS reales"],
        mockExamFrequency: "Quincenal",
        feedbackMethod: "Corrección detallada por escrito con análisis terminológico",
        successMetric: "94% de aprobados en primera convocatoria",
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
        classSize: "Máximo 4 alumnos",
        hoursPerWeek: "2 horas semanales",
        materials: ["Correspondencia ISO/CEN real", "Informes de no conformidad", "Grabaciones de sesiones anteriores"],
        mockExamFrequency: "Semanal",
        feedbackMethod: "Grabación en vídeo + análisis individualizado de fluidez y precisión",
        successMetric: "Mejora media de 2 puntos en oral tras 8 sesiones",
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
        classSize: "Máximo 5 alumnos",
        hoursPerWeek: "3 horas por sesión",
        materials: ["Exámenes de convocatorias anteriores", "Plantillas de corrección del tribunal", "Normas EN de referencia"],
        mockExamFrequency: "Quincenal + evaluación mensual completa",
        feedbackMethod: "Informe escrito individualizado con puntuación estimada y plan de mejora",
        successMetric: "92% alcanzan el nivel objetivo antes de la convocatoria",
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
      {
        title: "Traducción directa cultural",
        description: "Traducción de un texto cultural, histórico o artístico del idioma elegido al español. Los textos proceden de catálogos de museos internacionales, publicaciones del ICOM o artículos de historia del arte y patrimonio cultural.",
        duration: "90 minutos",
        weight: "35% de la nota de idiomas",
        evaluationCriteria: [
          "Precisión en la terminología artística y patrimonial",
          "Fidelidad al tono académico y cultural del texto original",
          "Corrección gramatical y elegancia del texto en español",
          "Capacidad de trasladar matices culturales entre idiomas",
        ],
        commonPitfalls: [
          "Traducir literalmente términos artísticos que tienen equivalentes consagrados en español (e.g., 'chiaroscuro' → 'claroscuro')",
          "Perder el registro académico al simplificar oraciones complejas del original",
          "Confundir periodos artísticos o movimientos culturales por desconocimiento del contexto",
        ],
        tips: [
          "Lee catálogos bilingües del Museo del Prado y del Reina Sofía: te familiarizarás con el registro y la terminología exacta que busca el tribunal.",
        ],
      },
      {
        title: "Comprensión lectora archivística",
        description: "Comprensión de documentación bibliotecaria o archivística en lengua extranjera: descripciones normalizadas ISAD(G), registros catalográficos MARC, publicaciones de la IFLA y bibliografía especializada.",
        duration: "60 minutos",
        weight: "25% de la nota de idiomas",
        evaluationCriteria: [
          "Identificación correcta de los campos y niveles de descripción ISAD(G)",
          "Comprensión del vocabulario controlado de catalogación (MARC, RDA)",
          "Capacidad de extraer información clave de textos normativos extensos",
        ],
        commonPitfalls: [
          "Confundir los niveles de descripción archivística (fondo, serie, unidad documental)",
          "No reconocer abreviaturas y acrónimos especializados (OPAC, FRBR, EAD)",
          "Intentar traducir términos técnicos que son estándares internacionales y no se traducen",
        ],
        tips: [
          "Memoriza los 7 niveles de descripción ISAD(G) y sus equivalentes en el idioma elegido: es el vocabulario más frecuente en estos textos.",
        ],
      },
      {
        title: "Terminología patrimonial y cultural",
        description: "Preguntas específicas sobre terminología del ámbito patrimonial: museografía, conservación preventiva, catalogación, descripción archivística y gestión de colecciones en el idioma elegido.",
        duration: "30 minutos",
        weight: "15% de la nota de idiomas",
        evaluationCriteria: [
          "Dominio del léxico de conservación, restauración y museografía",
          "Conocimiento de la terminología normalizada de catalogación",
          "Precisión en el uso de términos técnicos del patrimonio cultural",
        ],
        commonPitfalls: [
          "Confundir conservación preventiva con restauración (conceptos distintos en el ámbito profesional)",
          "Usar terminología coloquial en lugar del vocabulario técnico normalizado",
        ],
        tips: [
          "Los glosarios del ICOM y la IFLA están disponibles en varios idiomas y son la referencia directa del tribunal.",
        ],
      },
      {
        title: "Prueba oral",
        description: "Posible prueba oral según la convocatoria vigente. Se evalúa la capacidad de comentar textos académicos, describir obras o documentos y argumentar sobre criterios de clasificación y preservación.",
        duration: "10-15 minutos",
        weight: "15% de la nota (si aplica)",
        evaluationCriteria: [
          "Fluidez y registro académico en la expresión oral",
          "Capacidad de describir obras de arte y documentos con precisión",
          "Argumentación sobre criterios de clasificación, preservación o difusión",
        ],
        commonPitfalls: [
          "Describir obras de forma superficial sin usar vocabulario técnico museográfico",
          "No preparar la prueba oral por ser 'opcional' y encontrarse con ella en la convocatoria",
        ],
        tips: [
          "Aunque no todas las convocatorias incluyen oral, prepárala siempre. Si aparece, los candidatos sin preparación oral quedan en clara desventaja.",
        ],
      },
      {
        title: "Registro académico y cultural",
        description: "Valoración global del dominio del registro académico y cultural demostrado en el conjunto de las pruebas. Se premia la capacidad de moverse con soltura entre textos humanísticos de distintas épocas y tradiciones.",
        weight: "10% (transversal)",
        evaluationCriteria: [
          "Coherencia del nivel académico entre prueba escrita y oral",
          "Capacidad de adaptar el registro a textos de diferentes épocas y géneros",
          "Riqueza léxica en el ámbito cultural y humanístico",
        ],
        commonPitfalls: [
          "Mantener un registro plano sin adaptar el tono al tipo de texto (un catálogo moderno vs. un texto histórico)",
          "Usar un vocabulario limitado que no refleja la riqueza del campo cultural",
        ],
        tips: [
          "Lee textos variados en tu idioma elegido: desde catálogos contemporáneos del Tate hasta artículos académicos sobre patrimonio medieval. La versatilidad de registro es lo que distingue a los mejores candidatos.",
        ],
      },
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
          "A diferencia de las oposiciones comerciales o diplomáticas, aquí los textos son culturales, artísticos e históricos. Nuestro programa refleja esta especificidad con materiales del ICOM, la IFLA y grandes museos internacionales. Cada ejercicio está diseñado para replicar el tipo exacto de texto que propone el tribunal.",
        highlights: [
          "Textos de catálogos del Museo del Prado, British Museum y Louvre",
          "Publicaciones del ICOM y la IFLA en versión original",
          "Artículos académicos de historia del arte y patrimonio",
        ],
      },
      {
        title: "Cuatro idiomas disponibles",
        description:
          "Ofrecemos preparación en inglés, francés, alemán e italiano, los cuatro idiomas que puede ofrecer la convocatoria. Cada idioma cuenta con materiales culturales adaptados y profesores especializados en el ámbito humanístico de esa lengua.",
        highlights: [
          "Materiales específicos por idioma, no traducciones genéricas",
          "Posibilidad de preparar dos idiomas simultáneamente",
        ],
      },
      {
        title: "Catálogos y textos de museos reales",
        description:
          "Trabajamos con publicaciones del Museo del Prado, el British Museum, el Louvre y la Biblioteca Nacional de España. No utilizamos textos adaptados ni simplificados: cada ejercicio usa documentación real del ámbito profesional de archivos, bibliotecas y museos.",
        highlights: [
          "Catálogos de exposiciones temporales y permanentes",
          "Guías de archivo y cuadros de clasificación internacionales",
          "Textos de crítica artística y bibliografía especializada",
        ],
      },
      {
        title: "Normativa archivística internacional",
        description:
          "Dominio de la terminología de las normas ISAD(G), ISAAR(CPF), EAD y Dublin Core en su versión original. Estas normas aparecen con frecuencia en los textos del examen y su vocabulario técnico es imprescindible para una traducción precisa.",
        highlights: [
          "7 niveles de descripción ISAD(G) en inglés y francés",
          "Vocabulario controlado MARC y RDA",
          "Terminología EAD y Dublin Core para metadatos",
        ],
      },
      {
        title: "Profesores con formación humanística",
        description:
          "Nuestro equipo incluye filólogos, historiadores del arte y documentalistas con titulación avanzada en idiomas. Esta combinación de formación humanística y competencia lingüística garantiza que cada corrección atiende tanto a la precisión idiomática como al rigor del contenido cultural.",
        highlights: [
          "Docentes con grado en Historia del Arte, Documentación o Filología",
          "Experiencia en traducción de catálogos y documentación patrimonial",
        ],
      },
    ],
    preparationFeatures: [
      {
        title: "Traducción artística y archivística",
        stat: "2x",
        statLabel: "sesiones semanales de traducción cultural",
        description: "Catálogos de exposiciones, descripciones museográficas, documentación archivística normalizada y textos de crítica artística en inglés, francés e italiano.",
        classSize: "Máximo 6 alumnos",
        hoursPerWeek: "4 horas semanales",
        materials: ["Catálogos del Prado, Louvre y British Museum", "Descripciones ISAD(G) bilingües", "Publicaciones ICOM/IFLA"],
        mockExamFrequency: "Quincenal",
        feedbackMethod: "Corrección detallada por escrito con análisis de registro y terminología cultural",
        successMetric: "85% de aprobados en primera convocatoria",
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
        classSize: "Máximo 6 alumnos",
        hoursPerWeek: "2 horas semanales",
        materials: ["Glosario ICOM multilingüe", "Tesauro IFLA en 4 idiomas", "Fichas terminológicas ISAD(G)/EAD"],
        feedbackMethod: "Ejercicios de discriminación terminológica con corrección inmediata",
        successMetric: "Dominio de +1.200 términos verificado con test de vocabulario",
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
        classSize: "Máximo 6 alumnos",
        hoursPerWeek: "3 horas por sesión",
        materials: ["Exámenes de convocatorias anteriores", "Plantillas de corrección", "Textos de nivel de convocatoria"],
        mockExamFrequency: "Mensual + evaluaciones parciales quincenales",
        feedbackMethod: "Informe escrito individualizado con puntuación estimada y plan de mejora",
        successMetric: "88% alcanzan el nivel objetivo antes de la convocatoria",
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
              {exam.description[2] && <p>{exam.description[2]}</p>}
            </div>
          </div>
        </section>

        {/* 2b. WHY PREPARE WITH US */}
        <section className="bg-light-gray py-20 lg:py-28">
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

        {/* 3. EXAM FORMAT — full-width two-column layout */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <div className="mb-14">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-gold" style={{ fontFamily: "var(--font-body)" }}>Estructura del examen</span>
              <h2 className="text-3xl font-bold text-navy lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>Formato de la prueba de idiomas</h2>
            </div>
            <ExamStructureAccordion examFormat={exam.examFormat} />
          </div>
        </section>

        {/* 4. PREPARATION — full-width two-column layout */}
        <section className="bg-light-gray py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <div className="mb-14">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-gold" style={{ fontFamily: "var(--font-body)" }}>Metodología</span>
              <h2 className="text-3xl font-bold text-navy lg:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>Cómo te preparamos</h2>
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
        <section className="bg-light-gray py-20 lg:py-28">
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
