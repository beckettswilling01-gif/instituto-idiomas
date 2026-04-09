"use client";

import { motion } from "framer-motion";
import { Globe, ClipboardCheck } from "lucide-react";

interface ExamStructureAccordionProps {
  examFormat: string[];
  requirements: string[];
  languages: string[];
  languageDescription: string;
}

export default function ExamStructureAccordion({
  examFormat,
  requirements,
  languages,
  languageDescription,
}: ExamStructureAccordionProps) {
  return (
    <div>
      {/* Vertical alternating timeline */}
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-navy/15 md:left-1/2 md:-translate-x-px" />

        <div className="space-y-12 md:space-y-16">
          {examFormat.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.2, 0, 0, 1],
                }}
                className="relative"
              >
                {/* Node on timeline */}
                <div className="absolute left-6 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold md:left-1/2" style={{ fontFamily: "var(--font-heading)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Content card — alternates sides on desktop */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
                  }`}
                >
                  <div className="rounded-2xl bg-light-gray p-6 lg:p-8">
                    <span
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-gold"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Fase {i + 1}
                    </span>
                    <p
                      className="text-base leading-relaxed text-navy"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Requirements + Languages — light cards with icon headers */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="rounded-2xl bg-light-gray p-8"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy">
              <ClipboardCheck size={20} className="text-gold" />
            </div>
            <h3
              className="text-lg font-bold text-navy"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Requisitos lingüísticos
            </h3>
          </div>
          <ul className="space-y-3">
            {requirements.map((req, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-relaxed text-slate-blue"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {req}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="rounded-2xl bg-light-gray p-8"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy">
              <Globe size={20} className="text-gold" />
            </div>
            <h3
              className="text-lg font-bold text-navy"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Idiomas de la prueba
            </h3>
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span
                key={lang}
                className="rounded-lg bg-navy/8 px-4 py-2 text-sm font-semibold text-navy"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {lang}
              </span>
            ))}
          </div>
          <p
            className="text-sm leading-relaxed text-slate-blue"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {languageDescription}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
