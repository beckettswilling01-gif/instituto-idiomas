"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

interface Stat {
  value: string;
  label: string;
}

interface FeatureShowcaseProps {
  kicker: string;
  headline: string;
  description: string;
  stats?: Stat[];
  bullets?: string[];
  imagePlaceholder: string;
  imagePrompt: string;
  reverse?: boolean;
  bgClass?: string;
  children?: ReactNode;
}

export default function FeatureShowcase({
  kicker,
  headline,
  description,
  stats,
  bullets,
  imagePlaceholder,
  imagePrompt,
  reverse = false,
  bgClass = "bg-warm-white",
  children,
}: FeatureShowcaseProps) {
  return (
    <section className={`${bgClass} py-20 lg:py-28`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em] text-gold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {kicker}
            </p>

            <h2
              className="mt-4 text-3xl font-bold text-navy lg:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {headline}
            </h2>

            <p
              className="mt-5 text-base leading-relaxed text-slate-blue md:text-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {description}
            </p>

            {/* Bullet points */}
            {bullets && bullets.length > 0 && (
              <ul className="mt-6 space-y-3">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span
                      className="text-sm leading-relaxed text-slate-blue"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Stats row */}
            {stats && stats.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <span
                      className="text-2xl font-bold text-navy"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="ml-2 text-sm text-slate-blue/70"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {children}
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
          >
            {/* HIGGSFIELD PROMPT: {imagePrompt} */}
            <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl bg-light-gray text-center text-sm text-slate-blue/40">
              <span className="max-w-[240px]">{imagePlaceholder}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
