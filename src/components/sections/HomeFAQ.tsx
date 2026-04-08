"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question:
      "¿Puedo empezar a prepararme sin formación jurídica o económica?",
    answer:
      "Por supuesto. Muchos candidatos con éxito provienen de formaciones académicas diversas. Nuestra sesión de diagnóstico nos ayuda a construir un plan \"puente\" para ponerte al día en los fundamentos legales y económicos antes de abordar los temas específicos del examen.",
  },
  {
    question:
      "¿Ofrecéis tutorías online para candidatos fuera de Madrid?",
    answer:
      "Sí, nuestra plataforma online proporciona el mismo nivel de intensidad y retroalimentación personalizada que las sesiones presenciales, utilizando videoconferencia en alta definición y pizarras digitales compartidas para materias técnicas.",
  },
  {
    question: "¿Cómo elijo la oposición adecuada para mí?",
    answer:
      "Elegir la oposición correcta es la decisión más crítica. Durante nuestra sesión de diagnóstico, analizamos tus objetivos profesionales, personalidad y fortalezas académicas para recomendar el camino donde tienes la mayor probabilidad de éxito.",
  },
  {
    question: "¿Cuánto tiempo necesito para prepararme?",
    answer:
      "Depende de tu nivel de partida y la oposición elegida. Nuestros programas van desde 3 meses intensivos hasta 18 meses de preparación continua. En la sesión de diagnóstico, evaluamos tu nivel actual y definimos un calendario realista hacia la fecha de tu examen.",
  },
  {
    question: "¿Cuáles son los idiomas más demandados en oposiciones?",
    answer:
      "Inglés y francés son los más solicitados, especialmente para la Carrera Diplomática y Técnicos Comerciales. Sin embargo, alemán, árabe y chino están ganando peso estratégico en convocatorias recientes. Te asesoramos sobre qué idioma maximiza tus opciones.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-warm-white py-20 lg:py-28" id="faq">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Resolvemos tus dudas
          </p>
          <h2
            className="text-3xl font-bold text-navy lg:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-2xl bg-light-gray p-6 transition-colors hover:bg-light-gray/80"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span
                  className="text-lg font-bold text-navy"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`ml-4 h-5 w-5 shrink-0 text-navy transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <p
                  className="mt-4 leading-relaxed text-slate-blue"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
