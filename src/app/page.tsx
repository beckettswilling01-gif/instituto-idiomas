import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
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
        <DifficultyFunnel />

        {/* Feature 1: What you get — exam materials + simulations */}
        <FeatureShowcase
          kicker="Lo que incluye tu preparación"
          headline="Materiales reales, simulacros reales, resultados reales."
          description="Todo está modelado sobre exámenes oficiales de convocatorias anteriores. Traducción directa e inversa, resumen analítico, exposición oral — practicas con los formatos exactos que encontrarás el día de la prueba. Y cada dos semanas, un simulacro completo en condiciones idénticas al examen real."
          bullets={[
            "Textos y vocabulario de la tipología exacta de cada convocatoria",
            "Simulacros completos cronometrados cada dos semanas",
            "Entrenamiento oral ante tribunal simulado",
            "Materiales actualizados con cada nueva convocatoria",
            "Corrección detallada con puntuación estimada por destreza",
          ]}
          stats={[
            { value: "6", label: "oposiciones" },
            { value: "7", label: "idiomas" },
            { value: "100%", label: "formato real" },
          ]}
          imageSrc="/images/feature-exam-prep.png"
          imagePlaceholder="Materiales de examen y simulacros"
          imagePrompt=""
        />

        {/* Feature 2: How it works — plan + tracking */}
        <FeatureShowcase
          reverse
          bgClass="bg-light-gray"
          kicker="Cómo funciona"
          headline="Un plan a medida, un tutor que conoce el tribunal, seguimiento semanal."
          description="Empezamos con un diagnóstico gratuito de 30 minutos donde evaluamos tu nivel real en cada destreza. A partir de ahí, diseñamos un calendario que trabaja hacia atrás desde tu fecha de examen. Cada semana recibes corrección detallada — no genérica, sino específica para los criterios de tu oposición."
          bullets={[
            "Diagnóstico inicial gratuito por destrezas: oral, escrita, traducción",
            "Plan personalizado que se ajusta semana a semana",
            "Formadores con experiencia directa en pruebas oficiales",
            "Evaluaciones semanales con informe de progreso",
            "Desde 3 meses intensivos hasta 18 meses de preparación continua",
          ]}
          stats={[
            { value: "92%", label: "aprobados" },
            { value: "Top 10%", label: "posición media" },
          ]}
          imageSrc="/images/feature-tracking.png"
          imagePlaceholder="Tutor y plan de seguimiento"
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
