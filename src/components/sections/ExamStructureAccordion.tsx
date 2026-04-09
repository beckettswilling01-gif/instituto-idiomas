"use client";

import { motion } from "framer-motion";
import { CheckIcon, AlertTriangle, Lightbulb, Clock, Weight } from "lucide-react";

interface ExamPhase {
  title: string;
  description: string;
  duration?: string;
  weight?: string;
  evaluationCriteria?: string[];
  commonPitfalls?: string[];
  tips?: string[];
}

interface ExamStructureAccordionProps {
  examFormat: ExamPhase[];
}

export default function ExamStructureAccordion({
  examFormat,
}: ExamStructureAccordionProps) {
  return (
    <div className="divide-y divide-navy/8">
      {examFormat.map((phase, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            delay: i * 0.08,
            duration: 0.5,
            ease: [0.2, 0, 0, 1],
          }}
          className="grid grid-cols-1 gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-12 md:gap-12 lg:py-16"
        >
          {/* Left column — phase number + title + metadata pills */}
          <div className="md:col-span-4 md:sticky md:top-32 md:self-start">
            <span
              className="mb-2 block text-xs font-bold text-gold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Fase {String(i + 1).padStart(2, "0")}
            </span>
            <h3
              className="text-xl font-bold text-navy lg:text-2xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {phase.title}
            </h3>
            {/* Metadata pills */}
            {(phase.duration || phase.weight) && (
              <div className="mt-4 flex flex-wrap gap-2">
                {phase.duration && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-gold/10 px-3 py-1.5 text-xs font-medium text-navy">
                    <Clock size={12} className="text-gold" />
                    {phase.duration}
                  </span>
                )}
                {phase.weight && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-navy/8 px-3 py-1.5 text-xs font-medium text-navy">
                    <Weight size={12} className="text-navy/50" />
                    {phase.weight}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Right column — description + criteria + pitfalls + tips */}
          <div className="md:col-span-8">
            <p
              className="text-base leading-relaxed text-slate-blue"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {phase.description}
            </p>

            {/* Evaluation criteria */}
            {phase.evaluationCriteria && phase.evaluationCriteria.length > 0 && (
              <div className="mt-5">
                <h4
                  className="mb-2 text-xs font-semibold uppercase tracking-widest text-navy/60"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Qué evalúa el tribunal
                </h4>
                <ul className="space-y-1.5">
                  {phase.evaluationCriteria.map((c, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm leading-relaxed text-slate-blue"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <CheckIcon size={14} className="mt-0.5 shrink-0 text-gold" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Common pitfalls */}
            {phase.commonPitfalls && phase.commonPitfalls.length > 0 && (
              <div className="mt-5">
                <h4
                  className="mb-2 text-xs font-semibold uppercase tracking-widest text-navy/60"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Errores frecuentes
                </h4>
                <ul className="space-y-1.5">
                  {phase.commonPitfalls.map((p, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm leading-relaxed text-slate-blue"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <AlertTriangle size={14} className="mt-0.5 shrink-0 text-amber-500/70" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tips */}
            {phase.tips && phase.tips.length > 0 && (
              <div className="mt-5 rounded-xl bg-gold/8 p-4">
                {phase.tips.map((t, j) => (
                  <div
                    key={j}
                    className="flex items-start gap-2 text-sm leading-relaxed text-navy"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <Lightbulb size={14} className="mt-0.5 shrink-0 text-gold" />
                    {t}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
