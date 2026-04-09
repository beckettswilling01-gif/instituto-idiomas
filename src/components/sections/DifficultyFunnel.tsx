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

// Slice colors for pie segments — gold for survivors, progressively faded for eliminated
const sliceColors = [
  "#ffdea5",     // Obtienen plaza (gold)
  "rgba(255,222,165,0.6)",  // Superan idiomas
  "rgba(255,222,165,0.3)",  // Superan escrita
  "rgba(255,255,255,0.15)", // Se presentan
  "rgba(255,255,255,0.06)", // No se presentan
];

const legendItems = [
  { color: "bg-gold", label: "Obtienen plaza" },
  { color: "bg-gold/60", label: "Superan idiomas" },
  { color: "bg-gold/30", label: "Superan escrita" },
  { color: "bg-white/15", label: "Se presentan" },
  { color: "bg-white/[0.06]", label: "No se presentan" },
];

function PieChart({ exam, index }: { exam: ExamFunnel; index: number }) {
  const total = exam.steps[0].value;
  const finalValue = exam.steps[exam.steps.length - 1].value;

  // Build slices from the steps (reversed so gold draws first / on top visually)
  // Each slice = the number of people at that stage minus the next stage
  const slices: { label: string; value: number; pct: number }[] = [];

  // "Obtienen plaza" slice
  slices.push({
    label: exam.steps[4].label,
    value: exam.steps[4].value,
    pct: exam.steps[4].value / total,
  });
  // "Superan idiomas" (but didn't get plaza)
  slices.push({
    label: exam.steps[3].label,
    value: exam.steps[3].value - exam.steps[4].value,
    pct: (exam.steps[3].value - exam.steps[4].value) / total,
  });
  // "Superan escrita" (but failed idiomas)
  slices.push({
    label: exam.steps[2].label,
    value: exam.steps[2].value - exam.steps[3].value,
    pct: (exam.steps[2].value - exam.steps[3].value) / total,
  });
  // "Se presentan" (but failed escrita)
  slices.push({
    label: exam.steps[1].label,
    value: exam.steps[1].value - exam.steps[2].value,
    pct: (exam.steps[1].value - exam.steps[2].value) / total,
  });
  // "No se presentan"
  slices.push({
    label: "No se presentan",
    value: exam.steps[0].value - exam.steps[1].value,
    pct: (exam.steps[0].value - exam.steps[1].value) / total,
  });

  // Build SVG conic gradient via individual arc paths
  const size = 120;
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 2;

  let cumAngle = -90; // start from top

  const paths = slices.map((slice, i) => {
    const angle = slice.pct * 360;
    const startAngle = cumAngle;
    const endAngle = cumAngle + angle;
    cumAngle = endAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);

    const largeArc = angle > 180 ? 1 : 0;

    const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;

    return (
      <motion.path
        key={slice.label}
        d={d}
        fill={sliceColors[i]}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.1 + i * 0.08,
          duration: 0.4,
          ease,
        }}
      />
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease }}
      className="flex flex-col items-center"
    >
      {/* Pie chart */}
      <div className="relative">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="drop-shadow-[0_0_12px_rgba(255,222,165,0.15)]"
        >
          {paths}
        </svg>
        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="text-lg font-bold text-gold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {finalValue}
          </span>
          <span
            className="text-[9px] text-white/50"
            style={{ fontFamily: "var(--font-body)" }}
          >
            de {total.toLocaleString("es-ES")}
          </span>
        </div>
      </div>

      {/* Exam name */}
      <Link
        href={`/oposiciones/${exam.slug}`}
        className="mt-4 text-center text-xs font-semibold text-white/70 transition-colors hover:text-gold"
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
            Cada gráfico muestra cuántos candidatos superan cada fase del proceso
            selectivo. La fracción dorada representa a quienes consiguen plaza.
          </p>
        </motion.div>

        {/* 6 pie charts */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-3 gap-8 md:grid-cols-6 md:gap-6">
          {examFunnels.map((exam, i) => (
            <PieChart key={exam.slug} exam={exam} index={i} />
          ))}
        </div>

        {/* Legend */}
        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full ${item.color}`} />
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
