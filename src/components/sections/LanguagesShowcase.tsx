"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

interface Language {
  code: string;
  name: string;
  nativeName: string;
  slug: string;
  exams: string[];
}

const languages: Language[] = [
  {
    code: "EN",
    name: "Inglés",
    nativeName: "English",
    slug: "ingles",
    exams: ["Carrera Diplomática", "Técnicos Comerciales"],
  },
  {
    code: "FR",
    name: "Francés",
    nativeName: "Français",
    slug: "frances",
    exams: ["Carrera Diplomática", "Instituciones Europeas"],
  },
  {
    code: "DE",
    name: "Alemán",
    nativeName: "Deutsch",
    slug: "aleman",
    exams: ["Técnicos Comerciales", "Instituciones Europeas"],
  },
  {
    code: "IT",
    name: "Italiano",
    nativeName: "Italiano",
    slug: "italiano",
    exams: ["Carrera Diplomática", "Organismos Internacionales"],
  },
  {
    code: "PT",
    name: "Portugués",
    nativeName: "Português",
    slug: "portugues",
    exams: ["Relaciones Iberoamericanas", "Carrera Diplomática"],
  },
  {
    code: "AR",
    name: "Árabe",
    nativeName: "العربية",
    slug: "arabe",
    exams: ["Carrera Diplomática", "Servicio Exterior"],
  },
  {
    code: "ZH",
    name: "Chino",
    nativeName: "中文",
    slug: "chino",
    exams: ["Carrera Diplomática", "Comercio Internacional"],
  },
];

export default function LanguagesShowcase() {
  return (
    <section className="bg-light-gray py-20 lg:py-28">
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
            7 idiomas
          </p>

          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl leading-snug text-navy lg:text-4xl">
            Donde tú ves un idioma, nosotros vemos tu plaza.
          </h2>

          <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue">
            Preparación de excelencia en siete idiomas, adaptada a las exigencias
            reales de cada convocatoria.
          </p>
        </motion.div>

        {/* Languages grid — 3+4 layout or responsive */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4, ease }}
            >
              <Link
                href={`/idiomas/${lang.slug}`}
                className="group flex h-full flex-col rounded-xl bg-white p-6 transition-all duration-300 hover:shadow-md"
              >
                {/* Language code badge */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy font-[family-name:var(--font-heading)] text-sm font-bold text-gold">
                  {lang.code}
                </div>

                {/* Name */}
                <h3 className="font-[family-name:var(--font-heading)] text-lg text-navy">
                  {lang.name}
                </h3>
                <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-slate-blue/60">
                  {lang.nativeName}
                </p>

                {/* Exam tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {lang.exams.map((exam) => (
                    <span
                      key={exam}
                      className="rounded-full bg-gold/10 px-2.5 py-0.5 font-[family-name:var(--font-body)] text-xs text-gold-hover"
                    >
                      {exam}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-auto pt-4">
                  <span className="inline-flex items-center gap-1 font-[family-name:var(--font-body)] text-sm font-medium text-slate-blue transition-colors group-hover:text-navy">
                    Ver programa
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
