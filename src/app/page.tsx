import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import CredibilityStrip from "@/components/sections/CredibilityStrip";
import DifficultyFunnel from "@/components/sections/DifficultyFunnel";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import ExamsExpandingCards from "@/components/sections/ExamsExpandingCards";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HomeFAQ from "@/components/sections/HomeFAQ";
import DiagnosticCTA from "@/components/sections/DiagnosticCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CredibilityStrip />
        <DifficultyFunnel />

        {/* Feature 1: Exam-specific preparation */}
        <FeatureShowcase
          kicker="Preparación inversa desde el examen"
          headline="Materiales diseñados desde la prueba real, no desde un libro de texto."
          description="Cada ejercicio, cada traducción y cada simulacro está modelado sobre exámenes oficiales de convocatorias anteriores. Trabajamos con los formatos exactos que encontrarás el día de la prueba: traducción directa e inversa, resumen analítico, exposición oral ante tribunal."
          bullets={[
            "Textos de la tipología exacta de cada convocatoria",
            "Vocabulario jurídico-institucional especializado por oposición",
            "Ejercicios de traducción cronometrada con formato oficial",
            "Materiales actualizados con cada nueva convocatoria",
          ]}
          stats={[
            { value: "6", label: "oposiciones cubiertas" },
            { value: "7", label: "idiomas disponibles" },
          ]}
          imageSrc="/images/feature-exam-prep.png"
          imagePlaceholder="Materiales de examen y formatos oficiales"
          imagePrompt=""
        />

        {/* Feature 2: Personalized plan */}
        <FeatureShowcase
          reverse
          bgClass="bg-light-gray"
          kicker="Plan personalizado"
          headline="Un itinerario a medida que se adapta a tu vida y a tu examen."
          description="En la sesión de diagnóstico evaluamos tu nivel real en cada destreza. A partir de ahí, diseñamos un calendario que trabaja hacia atrás desde tu fecha de examen. Sesiones de 1,5 a 2 horas, desde 3 meses intensivos hasta 18 meses de preparación continua."
          bullets={[
            "Diagnóstico inicial por destrezas: oral, escrita, traducción, comprensión",
            "Hitos intermedios medibles para que veas tu avance real",
            "Plan que se ajusta semana a semana según tu progreso",
            "Compatible con tu trabajo y otras obligaciones",
          ]}
          stats={[
            { value: "30 min", label: "diagnóstico gratuito" },
            { value: "4", label: "formatos de programa" },
          ]}
          imageSrc="/images/feature-plan.png"
          imagePlaceholder="Plan de estudio personalizado con calendario"
          imagePrompt=""
        />

        {/* Feature 3: Tribunal simulation */}
        <FeatureShowcase
          kicker="Simulacros de examen"
          headline="Reproductemos las condiciones exactas del día de la prueba."
          description="Simulaciones completas con los mismos tiempos, el mismo formato y la misma presión que encontrarás ante el tribunal. Cada simulacro es corregido por especialistas que conocen los criterios de evaluación reales. Sabrás exactamente qué esperar."
          bullets={[
            "Pruebas completas cronometradas en condiciones reales",
            "Corrección detallada con puntuación estimada por destreza",
            "Entrenamiento oral ante tribunal simulado",
            "Gestión del tiempo y estrategia de examen incluidas",
          ]}
          stats={[
            { value: "100%", label: "formato real del examen" },
            { value: "Cada 2", label: "semanas en programa intensivo" },
          ]}
          imageSrc="/images/feature-simulation.png"
          imagePlaceholder="Sala de simulación de examen con tribunal"
          imagePrompt=""
        />

        {/* Feature 4: Expert feedback & tracking */}
        <FeatureShowcase
          reverse
          bgClass="bg-light-gray"
          kicker="Seguimiento experto"
          headline="Retroalimentación constante de formadores que conocen el tribunal."
          description="Cada ejercicio recibe corrección detallada. No genérica — específica para los criterios de tu oposición. Tus formadores han preparado a decenas de candidatos que hoy sirven en el Estado. Saben exactamente qué busca el tribunal y te entrenan para demostrarlo."
          bullets={[
            "Corrección inmediata y constructiva tras cada ejercicio",
            "Evaluaciones semanales con informe por destrezas",
            "Formadores con experiencia directa en pruebas oficiales",
            "Ajuste continuo del plan según tu evolución real",
          ]}
          stats={[
            { value: "92%", label: "tasa de aprobados" },
            { value: "Top 10%", label: "posición media de nuestros candidatos" },
          ]}
          imageSrc="/images/feature-tracking.png"
          imagePlaceholder="Tutor corrigiendo ejercicios con candidato"
          imagePrompt=""
        />

        <ExamsExpandingCards />
        <TestimonialsSection />
        <HomeFAQ />
        <DiagnosticCTA />
      </main>
      <Footer />
    </>
  );
}
