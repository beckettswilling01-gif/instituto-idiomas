"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { BGPattern } from "@/components/ui/bg-pattern";

const ease = [0.22, 1, 0.36, 1] as const;

interface ComparisonItem {
  text: string;
  detail: string;
}

const genericItems: ComparisonItem[] = [
  {
    text: "Clases grupales genéricas",
    detail: "Sin enfoque en oposiciones ni formato de examen",
  },
  {
    text: "Material estándar",
    detail: "No adaptado a pruebas oficiales del Estado",
  },
  {
    text: "Profesores generalistas",
    detail: "Sin experiencia en exámenes de oposiciones",
  },
  {
    text: "Progresión lineal",
    detail: "Sin planificación temporal ni objetivos concretos",
  },
  {
    text: "Sin simulaciones",
    detail: "Ninguna práctica real de examen",
  },
  {
    text: "Sin seguimiento",
    detail: "Avanzas solo, sin retroalimentación específica",
  },
];

const premiumItems: ComparisonItem[] = [
  {
    text: "Preparación individualizada",
    detail: "Diseñada para tu oposición y convocatoria concreta",
  },
  {
    text: "Materiales de examen real",
    detail: "Modelados sobre pruebas oficiales de cada cuerpo",
  },
  {
    text: "Formadores especializados",
    detail: "Con experiencia directa en pruebas lingüísticas del Estado",
  },
  {
    text: "Planificación estratégica",
    detail: "Calendario adaptado a tu fecha de examen",
  },
  {
    text: "Simulaciones completas",
    detail: "Pruebas reales con corrección detallada",
  },
  {
    text: "Acompañamiento continuo",
    detail: "Retroalimentación personalizada en cada fase",
  },
];

export default function Differentiation() {
  return (
    <section className="relative bg-warm-white py-20 lg:py-28">
      <BGPattern
        variant="dots"
        mask="fade-edges"
        size={20}
        fill="rgba(11,31,59,0.02)"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            POR QUÉ ELEGIRNOS
          </p>

          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl leading-snug tracking-[-0.02em] text-navy md:text-4xl">
            La diferencia entre prepararse y prepararse bien
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue">
            No todas las academias entienden las exigencias reales de una prueba
            de idiomas para oposiciones. Comparar enfoques te ayudará a tomar la
            mejor decisión para tu carrera.
          </p>
        </motion.div>

        {/* Comparison grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* LEFT — Generic Academy */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="rounded-xl border border-light-gray bg-white p-6 md:p-8"
          >
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-red-400/60" />
              <p className="font-[family-name:var(--font-body)] text-sm font-bold uppercase tracking-widest text-red-400/70">
                ACADEMIA GENERALISTA
              </p>
            </div>

            <ul className="mt-7 space-y-5">
              {genericItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X
                    className="mt-0.5 h-4 w-4 shrink-0 text-red-400/60"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-[family-name:var(--font-body)] text-sm font-medium text-navy/70">
                      {item.text}
                    </p>
                    <p className="mt-0.5 font-[family-name:var(--font-body)] text-xs text-slate-blue/50">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT — Instituto Diplomático */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="relative overflow-hidden rounded-xl border border-gold/20 bg-gold/[0.03] p-6 md:p-8"
          >
            {/* Subtle glow */}
            <div
              className="pointer-events-none absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-gold" />
                <p className="font-[family-name:var(--font-body)] text-sm font-bold uppercase tracking-widest text-gold">
                  CON INSTITUTO DIPLOMÁTICO
                </p>
              </div>

              <ul className="mt-7 space-y-5">
                {premiumItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-[family-name:var(--font-body)] text-sm font-medium text-navy">
                        {item.text}
                      </p>
                      <p className="mt-0.5 font-[family-name:var(--font-body)] text-xs text-slate-blue/60">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom punch line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-14 text-center"
        >
          <p className="font-[family-name:var(--font-heading)] text-lg font-semibold text-navy">
            Un solo objetivo: que apruebes tu prueba de idiomas.
          </p>
          <Link
            href="/metodologia"
            className="mt-4 inline-flex items-center gap-1.5 font-[family-name:var(--font-body)] text-sm font-medium text-gold transition-colors hover:text-gold-hover"
          >
            Ver metodología
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
