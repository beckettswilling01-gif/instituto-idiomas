"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const languages = [
  {
    code: "EN",
    name: "Inglés",
    slug: "ingles",
    description:
      "El idioma más demandado en oposiciones del Estado",
  },
  {
    code: "FR",
    name: "Francés",
    slug: "frances",
    description:
      "Esencial para la Carrera Diplomática y cuerpos europeos",
  },
  {
    code: "DE",
    name: "Alemán",
    slug: "aleman",
    description:
      "Diferenciación lingüística para candidatos ambiciosos",
  },
  {
    code: "IT",
    name: "Italiano",
    slug: "italiano",
    description:
      "Preparación específica para pruebas de nivel avanzado",
  },
  {
    code: "PT",
    name: "Portugués",
    slug: "portugues",
    description:
      "Competencia lingüística para relaciones iberoamericanas",
  },
  {
    code: "AR",
    name: "Árabe",
    slug: "arabe",
    description:
      "Formación especializada para el servicio exterior",
  },
  {
    code: "ZH",
    name: "Chino",
    slug: "chino",
    description:
      "Preparación estratégica en el idioma del futuro",
  },
];

export default function LanguagesGrid() {
  return (
    <section className="relative bg-light-gray py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Idiomas
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Siete idiomas, un solo objetivo: tu plaza
          </h2>
          <p className="mt-5 font-[family-name:var(--font-body)] text-lg leading-relaxed text-slate-blue/70">
            Ofrecemos preparación especializada en los siete idiomas más
            relevantes para las oposiciones al servicio público en España,
            adaptada a las exigencias reales de cada convocatoria.
          </p>
        </motion.div>

        {/* Languages grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease,
              }}
            >
              <Link
                href={`/idiomas/${lang.slug}`}
                className="group block rounded-xl border border-light-gray border-l-2 border-l-gold/40 bg-white p-6 text-left transition-all hover:border-l-gold hover:shadow-md"
              >
                <div className="mb-3 flex items-baseline gap-3">
                  <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-gold">
                    {lang.code}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-navy">
                    {lang.name}
                  </h3>
                </div>

                <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-blue/60">
                  {lang.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
