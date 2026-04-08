"use client";

import { motion } from "framer-motion";
import { BGPattern } from "@/components/ui/bg-pattern";

const ease = [0.22, 1, 0.36, 1] as const;

const painPoints = [
  {
    title: "La prueba de idiomas frena tu oposición",
    detail:
      "Se convierte en el cuello de botella que impide avanzar en el proceso selectivo.",
  },
  {
    title: "Las academias no preparan para el examen real",
    detail:
      "Clases genéricas que no abordan el formato ni las exigencias específicas.",
  },
  {
    title: "Meses sin dirección clara",
    detail:
      "Estudio sin metodología adaptada ni planificación temporal concreta.",
  },
  {
    title: "Presión del tiempo y nivel exigido",
    detail: "La convocatoria no espera. El nivel C1 no se improvisa.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="relative bg-light-gray py-20 lg:py-28">
      <BGPattern
        variant="horizontal-lines"
        mask="fade-edges"
        size={60}
        fill="rgba(11,31,59,0.02)"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            El desafío
          </p>

          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl leading-snug text-navy lg:text-4xl">
            El idioma no debería frenar tu carrera
          </h2>

          <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue">
            Miles de opositores brillantes ven truncado su acceso a los cuerpos
            superiores del Estado por una prueba de idiomas para la que nadie les
            ha preparado de forma adecuada.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — El problema */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease }}
              className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.3em] text-gold"
            >
              El problema
            </motion.p>

            <ul className="mt-6 space-y-6">
              {painPoints.map((point, i) => (
                <motion.li
                  key={point.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.4,
                    ease,
                  }}
                  className="flex items-start gap-4"
                >
                  <span
                    className="mt-2.5 block h-px w-5 shrink-0 bg-gold"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-[family-name:var(--font-body)] text-base font-semibold leading-snug text-navy">
                      {point.title}
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-blue">
                      {point.detail}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* RIGHT — La solución */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.5, ease }}
            className="rounded-xl border border-light-gray border-l-2 border-l-gold bg-white p-8"
          >
            <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              La solución
            </p>

            <h3 className="mt-4 font-[family-name:var(--font-heading)] text-2xl leading-snug text-navy lg:text-3xl">
              Preparación diseñada para que apruebes
            </h3>

            <p className="mt-6 font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue">
              Nuestra metodología parte de un diagnóstico individualizado: nivel
              actual, convocatoria objetivo y plazo disponible. A partir de ahí,
              diseñamos un plan de trabajo con hitos claros y revisiones
              periódicas de progreso.
            </p>

            <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue">
              Trabajamos con materiales específicos para cada oposición:
              ejercicios calibrados al formato del examen, simulacros reales
              corregidos por profesores nativos y sesiones de expresión oral que
              replican las condiciones de la prueba.
            </p>

            <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue">
              Cada alumno sigue una progresión estructurada que cubre
              comprensión lectora, expresión escrita, traducción y comunicación
              oral, siempre con conciencia del calendario de la convocatoria. No
              hay sesiones de relleno: cada hora de clase te acerca al nivel
              que exige tu oposición.
            </p>

            <p className="mt-6 font-[family-name:var(--font-body)] text-base font-semibold leading-relaxed text-navy">
              Cada hora de estudio tiene un propósito claro: acercarte al
              aprobado con la máxima eficiencia.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
