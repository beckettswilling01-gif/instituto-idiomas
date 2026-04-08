"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BGPattern } from "@/components/ui/bg-pattern";

const ease = [0.22, 1, 0.36, 1] as const;

interface Exam {
  slug: string;
  category: string;
  name: string;
  description: string;
}

const exams: Exam[] = [
  {
    slug: "carrera-diplomatica",
    category: "Cuerpo Superior",
    name: "Carrera Diplomática",
    description:
      "Preparación integral de inglés y francés para las pruebas escritas y orales del servicio exterior.",
  },
  {
    slug: "tecnico-comercial-economista-estado",
    category: "Cuerpo Superior",
    name: "Técnico Comercial y Economista del Estado",
    description:
      "Dominio avanzado de idiomas para uno de los cuerpos más exigentes de la administración económica.",
  },
  {
    slug: "diplomado-comercial-estado",
    category: "Cuerpo de Gestión",
    name: "Diplomado Comercial del Estado",
    description:
      "Formación lingüística específica para las pruebas de acceso al cuerpo comercial del Estado.",
  },
  {
    slug: "inspector-soivre",
    category: "Cuerpo de Gestión",
    name: "Inspector del SOIVRE",
    description:
      "Preparación de idiomas orientada al comercio exterior y la inspección internacional.",
  },
  {
    slug: "ingeniero-tecnico-soivre",
    category: "Cuerpo Técnico",
    name: "Ingeniero Técnico del SOIVRE",
    description:
      "Competencia lingüística técnica para el cuerpo de ingenieros del servicio de inspección.",
  },
  {
    slug: "ayudante-archivos-bibliotecas-museos",
    category: "Cuerpo de Gestión",
    name: "Ayudante de Archivos, Bibliotecas y Museos",
    description:
      "Preparación en idiomas para el acceso a instituciones culturales y patrimoniales del Estado.",
  },
];

export default function ExamsGrid() {
  return (
    <section className="relative bg-warm-white py-20 lg:py-28">
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
            Oposiciones que preparamos
          </p>

          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl leading-snug text-navy lg:text-4xl">
            Preparación específica para cada convocatoria
          </h2>

          <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue">
            Cada oposición exige un nivel, un formato y unas destrezas
            lingüísticas diferentes. Por eso diseñamos programas a medida para
            cada convocatoria, con materiales actualizados y simulacros reales.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {exams.map((exam, i) => (
            <motion.div
              key={exam.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease }}
            >
              <Link
                href={`/oposiciones/${exam.slug}`}
                className="group flex h-full flex-col rounded-xl border border-light-gray bg-white p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-md"
              >
                <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {exam.category}
                </p>

                <h3 className="mt-3 font-[family-name:var(--font-heading)] text-lg leading-snug text-navy">
                  {exam.name}
                </h3>

                <p className="mt-3 flex-1 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-blue">
                  {exam.description}
                </p>

                <div className="mt-6 border-t border-light-gray pt-4">
                  <span className="inline-flex items-center gap-1.5 font-[family-name:var(--font-body)] text-sm font-semibold text-slate-blue transition-colors duration-200 group-hover:text-navy">
                    Ver programa
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
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
