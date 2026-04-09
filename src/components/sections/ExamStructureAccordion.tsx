"use client";

import { motion } from "framer-motion";

interface ExamPhase {
  title: string;
  description: string;
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
          {/* Left column — phase number + title */}
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
          </div>

          {/* Right column — description */}
          <div className="md:col-span-8">
            <p
              className="text-base leading-relaxed text-slate-blue"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {phase.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
