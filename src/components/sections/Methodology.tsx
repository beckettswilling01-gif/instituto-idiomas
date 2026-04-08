"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ClipboardCheck as ClipboardCheckIcon,
  Map as MapIcon,
  BookOpen as BookOpenIcon,
  FileText as FileTextIcon,
  Target as TargetIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

interface Step {
  icon: LucideIcon;
  number: string;
  title: string;
  phase: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: ClipboardCheckIcon,
    number: "1",
    title: "Diagnóstico inicial",
    phase: "Fase 1",
    description:
      "Evaluamos tu nivel actual, identificamos carencias y definimos los objetivos específicos según tu oposición y convocatoria.",
  },
  {
    icon: MapIcon,
    number: "2",
    title: "Plan personalizado",
    phase: "Fase 2",
    description:
      "Diseñamos un itinerario de preparación adaptado a tu calendario, tu prueba concreta y el nivel que necesitas alcanzar.",
  },
  {
    icon: BookOpenIcon,
    number: "3",
    title: "Entrenamiento específico",
    phase: "Fase 3",
    description:
      "Trabajamos con materiales y ejercicios modelados sobre los exámenes reales: comprensión, expresión, traducción y uso de la lengua.",
  },
  {
    icon: FileTextIcon,
    number: "4",
    title: "Simulaciones de examen",
    phase: "Fase 4",
    description:
      "Realizamos pruebas completas en condiciones reales, con corrección detallada y retroalimentación personalizada.",
  },
  {
    icon: TargetIcon,
    number: "5",
    title: "Optimización final",
    phase: "Fase 5",
    description:
      "Afinamos las áreas de mejora, consolidamos fortalezas y preparamos la estrategia definitiva para el día del examen.",
  },
];

export default function Methodology() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative bg-warm-white py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-16 max-w-2xl text-center lg:mb-20"
        >
          <p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Metodologia
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Un sistema probado en cinco fases
          </h2>
          <p className="mt-5 font-[family-name:var(--font-body)] text-lg leading-relaxed text-slate-blue/70">
            Nuestra metodología estructurada y orientada a resultados ha sido
            perfeccionada durante años de experiencia preparando candidatos para
            las pruebas de idiomas más exigentes del panorama público español.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mx-auto max-w-3xl">
          {/* Animated vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-light-gray md:left-6">
            <motion.div
              className="h-full w-full origin-top bg-light-gray"
              style={{ scaleY: lineScaleY, transformOrigin: "top" }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease,
                }}
                className="relative grid grid-cols-[2.5rem_1fr] gap-5 md:grid-cols-[3rem_1fr] md:gap-8"
              >
                {/* Left: number circle */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold/40 bg-warm-white md:h-12 md:w-12">
                  <span className="font-[family-name:var(--font-heading)] text-sm font-semibold text-gold">
                    {step.number}
                  </span>
                </div>

                {/* Right: content */}
                <div className="pt-0.5">
                  <div className="flex items-center gap-3">
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-navy lg:text-2xl">
                      {step.title}
                    </h3>
                    <span className="font-[family-name:var(--font-body)] text-xs font-medium text-gold/60">
                      {step.phase}
                    </span>
                  </div>
                  <p className="mt-2 font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue/70">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
