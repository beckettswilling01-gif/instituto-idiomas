"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

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
      {/* Accordion phases */}
      <Accordion type="single" collapsible className="w-full space-y-3">
        {examFormat.map((item, i) => (
          <AccordionItem
            value={`phase-${i}`}
            key={i}
            className="rounded-xl border-none bg-light-gray"
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center gap-5 px-6 py-5 text-left transition-colors [&[data-state=open]>svg]:rotate-180">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {i + 1}
                </span>
                <span
                  className="flex-1 text-base font-semibold text-navy"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item}
                </span>
                <ChevronDown
                  size={18}
                  strokeWidth={2}
                  className="shrink-0 text-gold transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="px-6 pb-2 pl-20 text-sm leading-relaxed text-slate-blue font-[family-name:var(--font-body)]">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>Fase {i + 1} del proceso de evaluación</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Glass info bar */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-navy/90 p-8 backdrop-blur-xl">
          <h3
            className="mb-4 text-lg font-bold text-gold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Requisitos lingüísticos
          </h3>
          <ul className="space-y-3">
            {requirements.map((req, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-relaxed text-white/80"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {req}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-navy/90 p-8 backdrop-blur-xl">
          <h3
            className="mb-4 text-lg font-bold text-gold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Idiomas de la prueba
          </h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <span
                key={lang}
                className="rounded-xl bg-gold/15 px-5 py-2.5 text-sm font-bold text-gold"
              >
                {lang}
              </span>
            ))}
          </div>
          <p
            className="mt-4 text-sm leading-relaxed text-white/70"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {languageDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
