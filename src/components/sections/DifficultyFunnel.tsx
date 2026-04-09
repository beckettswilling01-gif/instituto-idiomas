"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

interface FunnelStep {
  label: string;
  value: number;
}

interface ExamFunnel {
  name: string;
  slug: string;
  steps: FunnelStep[];
}

const examFunnels: ExamFunnel[] = [
  {
    name: "Carrera Diplomática",
    slug: "carrera-diplomatica",
    steps: [
      { label: "Inscritos", value: 2400 },
      { label: "Se presentan", value: 1800 },
      { label: "Superan escrita", value: 320 },
      { label: "Superan idiomas", value: 90 },
      { label: "Obtienen plaza", value: 25 },
    ],
  },
  {
    name: "Técnico Comercial",
    slug: "tecnico-comercial-economista-estado",
    steps: [
      { label: "Inscritos", value: 1800 },
      { label: "Se presentan", value: 1350 },
      { label: "Superan escrita", value: 280 },
      { label: "Superan idiomas", value: 75 },
      { label: "Obtienen plaza", value: 20 },
    ],
  },
  {
    name: "Diplomado Comercial",
    slug: "diplomado-comercial-estado",
    steps: [
      { label: "Inscritos", value: 1200 },
      { label: "Se presentan", value: 900 },
      { label: "Superan escrita", value: 195 },
      { label: "Superan idiomas", value: 60 },
      { label: "Obtienen plaza", value: 18 },
    ],
  },
  {
    name: "Inspector SOIVRE",
    slug: "inspector-soivre",
    steps: [
      { label: "Inscritos", value: 800 },
      { label: "Se presentan", value: 600 },
      { label: "Superan escrita", value: 140 },
      { label: "Superan idiomas", value: 45 },
      { label: "Obtienen plaza", value: 12 },
    ],
  },
  {
    name: "Ingeniero SOIVRE",
    slug: "ingeniero-tecnico-soivre",
    steps: [
      { label: "Inscritos", value: 600 },
      { label: "Se presentan", value: 450 },
      { label: "Superan escrita", value: 110 },
      { label: "Superan idiomas", value: 35 },
      { label: "Obtienen plaza", value: 10 },
    ],
  },
  {
    name: "Archivos y Bibliotecas",
    slug: "ayudante-archivos-bibliotecas-museos",
    steps: [
      { label: "Inscritos", value: 3500 },
      { label: "Se presentan", value: 2600 },
      { label: "Superan escrita", value: 480 },
      { label: "Superan idiomas", value: 120 },
      { label: "Obtienen plaza", value: 30 },
    ],
  },
];

// Colors from TOP (elite/gold) to BOTTOM (mass/navy) — design system palette
const segmentColors = [
  "bg-gold",
  "bg-gold/60",
  "bg-gold/30",
  "bg-white/15",
  "bg-white/6",
];

// Legend — top to bottom (winners first)
const legendItems = [
  { color: "bg-gold", label: "Obtienen plaza" },
  { color: "bg-gold/60", label: "Superan idiomas" },
  { color: "bg-gold/30", label: "Superan escrita" },
  { color: "bg-white/15", label: "Se presentan" },
  { color: "bg-white/6", label: "Inscritos" },
];

function FunnelBar({ exam, index }: { exam: ExamFunnel; index: number }) {
  const total = exam.steps[0].value;
  const finalValue = exam.steps[exam.steps.length - 1].value;

  // Build segments from dropoff between steps, then REVERSE so gold is on top
  const segments = exam.steps.map((step, i) => {
    const nextValue = i < exam.steps.length - 1 ? exam.steps[i + 1].value : 0;
    const dropoff = step.value - nextValue;
    const heightPct = Math.max((dropoff / total) * 100, 3);
    return { ...step, dropoff, heightPct };
  });

  // Reverse: gold (obtienen plaza) at top, dark (inscritos) at bottom
  const reversed = [...segments].reverse();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease }}
      className="flex flex-col items-center"
    >
      {/* Final number on top */}
      <div className="mb-3 text-center">
        <span
          className="block text-2xl font-bold text-gold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {finalValue}
        </span>
        <span
          className="block text-[10px] font-medium text-white/50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          de {total.toLocaleString("es-ES")}
        </span>
      </div>

      {/* Vertical bar — gold on top, dark on bottom */}
      <div className="flex h-[280px] w-14 flex-col overflow-hidden rounded-xl md:h-[340px] md:w-16">
        {reversed.map((seg, i) => (
          <motion.div
            key={seg.label}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1 + i * 0.08,
              duration: 0.5,
              ease,
            }}
            className={`origin-top ${segmentColors[i]}`}
            style={{ height: `${seg.heightPct}%` }}
          />
        ))}
      </div>

      {/* Exam name below */}
      <Link
        href={`/oposiciones/${exam.slug}`}
        className="mt-3 text-center text-xs font-semibold text-white/70 transition-colors hover:text-gold"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {exam.name}
      </Link>
    </motion.div>
  );
}

export default function DifficultyFunnel() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-center"
        >
          <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            La realidad de las oposiciones
          </p>
          <h2
            className="mt-4 text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            La prueba de idiomas es donde más candidatos quedan eliminados.
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Datos representativos por oposición. El oro en la cima representa a
            quienes consiguen plaza — la inmensa mayoría queda en el camino.
          </p>
        </motion.div>

        {/* 6 vertical bars */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-3 gap-6 md:grid-cols-6 md:gap-4">
          {examFunnels.map((exam, i) => (
            <FunnelBar key={exam.slug} exam={exam} index={i} />
          ))}
        </div>

        {/* Legend */}
        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className={`h-3 w-3 rounded-sm ${item.color}`} />
              <span
                className="text-xs text-white/60"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Elimination callout */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5, ease }}
          className="mt-14 text-center"
        >
          <p
            className="mx-auto max-w-lg text-sm text-white/60"
            style={{ fontFamily: "var(--font-body)" }}
          >
            La diferencia entre aprobar y suspender no es saber un idioma. Es
            saber demostrarlo en el formato exacto que exige el tribunal.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
