"use client";

import { motion } from "framer-motion";

interface ExamStructureAccordionProps {
  examFormat: string[];
}

export default function ExamStructureAccordion({
  examFormat,
}: ExamStructureAccordionProps) {
  return (
    <div className="relative">
      {/* Center line — desktop only, left-aligned on mobile */}
      <div className="absolute left-5 top-0 bottom-0 w-px bg-navy/12 md:left-1/2 md:-translate-x-px" />

      <div className="space-y-0">
        {examFormat.map((item, i) => {
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.55,
                ease: [0.2, 0, 0, 1],
              }}
              className="relative py-8 md:py-12"
            >
              {/* Node circle on the line */}
              <div className="absolute left-5 top-8 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-navy shadow-[0_0_0_6px_var(--color-warm-white)] md:left-1/2 md:top-12">
                <span
                  className="text-sm font-bold text-gold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {i + 1}
                </span>
              </div>

              {/* Content — alternates sides on md+ */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-3rem)] ${
                  isLeft
                    ? "md:mr-auto"
                    : "md:ml-auto"
                }`}
              >
                <div className="rounded-2xl bg-light-gray p-6 lg:p-8">
                  {/* Phase label */}
                  <span
                    className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-gold"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Fase {i + 1}
                  </span>

                  {/* Phase description */}
                  <p
                    className="text-base font-medium leading-relaxed text-navy"
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
  );
}
