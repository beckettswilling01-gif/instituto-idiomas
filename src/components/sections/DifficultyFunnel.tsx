"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const funnelSteps = [
  { label: "Candidatos inscritos", value: "2,400", numeric: 2400 },
  { label: "Se presentan al examen", value: "1,800", numeric: 1800 },
  { label: "Superan la fase escrita", value: "320", numeric: 320 },
  { label: "Superan la prueba de idiomas", value: "90", numeric: 90 },
  { label: "Obtienen plaza", value: "25", numeric: 25 },
];

const max = funnelSteps[0].numeric;

export default function DifficultyFunnel() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
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
            Solo 1 de cada 96 candidatos consigue plaza.
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Datos representativos de la Carrera Diplomática. La prueba de idiomas
            es donde más candidatos quedan eliminados.
          </p>
        </motion.div>

        {/* Horizontal bar chart */}
        <div className="mx-auto mt-14 max-w-3xl space-y-5">
          {funnelSteps.map((step, i) => {
            const pct = Math.max((step.numeric / max) * 100, 8);
            const isLast = i === funnelSteps.length - 1;

            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease }}
              >
                {/* Label row */}
                <div className="mb-2 flex items-baseline justify-between">
                  <span
                    className="text-sm font-medium text-white/70"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {step.label}
                  </span>
                  <span
                    className={`text-lg font-bold ${isLast ? "text-gold" : "text-white"}`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.value}
                  </span>
                </div>

                {/* Bar */}
                <div className="h-3 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.7, ease }}
                    className={`h-full rounded-full ${isLast ? "bg-gold" : "bg-white/20"}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fail rate callout */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5, ease }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-baseline gap-3">
            <span
              className="text-5xl font-bold text-gold md:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              98.9%
            </span>
            <span
              className="text-lg text-white/80"
              style={{ fontFamily: "var(--font-body)" }}
            >
              tasa de eliminación
            </span>
          </div>
          <p
            className="mx-auto mt-4 max-w-lg text-sm text-white/60"
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
