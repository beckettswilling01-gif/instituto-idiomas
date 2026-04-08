"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const funnelSteps = [
  { label: "Candidatos inscritos", value: "2,400", width: "100%" },
  { label: "Se presentan al examen", value: "1,800", width: "75%" },
  { label: "Superan la fase escrita", value: "320", width: "30%" },
  { label: "Superan la prueba de idiomas", value: "90", width: "12%" },
  { label: "Obtienen plaza", value: "25", width: "6%" },
];

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

        {/* Funnel visualization */}
        <div className="mx-auto mt-14 max-w-2xl space-y-3">
          {funnelSteps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease }}
              style={{ width: step.width, originX: 0.5 }}
              className="mx-auto"
            >
              <div
                className={`flex items-center justify-between rounded-lg px-5 py-3.5 ${
                  i === funnelSteps.length - 1
                    ? "bg-gold text-navy"
                    : "bg-white/10 text-white"
                }`}
              >
                <span
                  className="text-sm font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {step.label}
                </span>
                <span
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fail rate callout */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5, ease }}
          className="mt-12 text-center"
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
