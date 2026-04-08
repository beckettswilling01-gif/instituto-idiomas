"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

export function MetodologiaFAQ({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, i) => (
          <AccordionItem
            value={`faq-${i}`}
            key={i}
            className="rounded-lg border border-light-gray bg-white py-2 transition-shadow duration-300 hover:shadow-sm"
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between gap-4 px-6 py-3 text-left font-[family-name:var(--font-heading)] text-base font-semibold leading-snug text-navy lg:text-lg [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                <span className="pr-4">{faq.question}</span>
                <Plus
                  size={20}
                  strokeWidth={2}
                  className="shrink-0 text-gold transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="px-6 pb-2 text-sm leading-relaxed text-slate-blue/70 font-[family-name:var(--font-body)]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
