"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

interface Program {
  name: string;
  idealFor: string;
  features: string[];
}

const programs: Program[] = [
  {
    name: "Programa Intensivo",
    idealFor: "Candidatos con convocatoria próxima",
    features: [
      "Sesiones diarias de preparación focalizada",
      "Simulaciones de examen semanales",
      "Corrección continua y retroalimentación inmediata",
      "Material específico de la convocatoria vigente",
    ],
  },
  {
    name: "Preparación Continua",
    idealFor: "Opositores que planifican a medio plazo",
    features: [
      "Sesiones regulares con ritmo sostenible",
      "Seguimiento mensual de objetivos y progreso",
      "Material progresivo adaptado a tu evolución",
      "Evaluaciones periódicas con informes detallados",
    ],
  },
  {
    name: "Plan Individualizado",
    idealFor: "Candidatos con necesidades específicas",
    features: [
      "Programa diseñado íntegramente a medida",
      "Horario flexible según tu disponibilidad",
      "Tutor personal asignado durante toda la preparación",
      "Objetivos personalizados y revisión constante",
    ],
  },
  {
    name: "Simulación de Examen",
    idealFor: "Candidatos que quieren evaluar su nivel",
    features: [
      "Prueba completa en condiciones reales de examen",
      "Corrección detallada por formadores especializados",
      "Informe de nivel con análisis por destrezas",
      "Plan de mejora personalizado tras la evaluación",
    ],
  },
];

export default function Programs() {
  return (
    <section className="relative bg-light-gray py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Programas
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl leading-snug text-navy lg:text-4xl">
            Formatos diseñados para cada fase de tu preparación
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue">
            Cada opositor tiene un punto de partida, un calendario y unas
            circunstancias distintas. Por eso ofrecemos programas que se adaptan
            a tu realidad, no al revés.
          </p>
        </motion.div>

        {/* Programs grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {programs.map((program, i) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease,
              }}
              className="rounded-xl border border-light-gray border-t-2 border-t-gold/30 bg-white p-6 transition-all hover:border-gold/40 hover:shadow-md md:p-8"
            >
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-navy lg:text-2xl">
                {program.name}
              </h3>

              <p className="mt-2 font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Ideal para:{" "}
                <span className="normal-case tracking-normal">
                  {program.idealFor}
                </span>
              </p>

              <ul className="mt-6 space-y-3">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    <span className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-blue">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-light-gray pt-4">
                <Link
                  href="/contacto"
                  className="font-[family-name:var(--font-body)] text-sm font-medium text-slate-blue transition-colors hover:text-navy"
                >
                  Solicitar información&nbsp;&rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
