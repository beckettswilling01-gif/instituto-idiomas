"use client";

import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  exam: string;
  language: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "El Instituto Diplomático convirtió un caos de material en un camino claro y estratégico. No habría aprobado el examen oral sin su entrenamiento de simulación.",
    name: "Elena R.",
    role: "Economista del Estado (Promoción 2023)",
    exam: "Técnico Comercial",
    language: "Inglés",
  },
  {
    quote:
      "Empecé sin experiencia en derecho administrativo. Mi mentor me guió en cada obstáculo. Hoy sirvo en la misión diplomática de España.",
    name: "Javier M.",
    role: "Carrera Diplomática (Promoción 2022)",
    exam: "Carrera Diplomática",
    language: "Francés",
  },
  {
    quote:
      "La preparación en francés fue excepcional. Cada sesión estaba diseñada para reproducir exactamente lo que encontré en el examen real.",
    name: "Marta R. L.",
    role: "Diplomática en servicio (Promoción 2024)",
    exam: "Carrera Diplomática",
    language: "Francés",
  },
  {
    quote:
      "Lo que más valoro es la honestidad del diagnóstico inicial. Me dijeron exactamente dónde estaba y qué necesitaba. Sin rodeos, sin falsas promesas.",
    name: "Carlos G.",
    role: "Inspector SOIVRE (Promoción 2023)",
    exam: "Inspector SOIVRE",
    language: "Inglés",
  },
];

const stats = [
  { value: "92%", label: "Tasa de aprobados" },
  { value: "Top 10%", label: "Posición media de nuestros candidatos" },
  { value: "7", label: "Idiomas preparados" },
  { value: "+200", label: "Candidatos formados" },
];

export default function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-navy py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-center"
        >
          <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Resultados
          </p>
          <h2
            className="mt-4 text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Sus palabras, su plaza, su historia.
          </h2>
        </motion.div>

        {/* Stats bar — full width with gold dividers */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4, ease }}
              className={`flex flex-col items-center justify-center px-6 py-8 text-center${
                i < stats.length - 1 ? " border-r border-gold/30" : ""
              }${i < 2 ? " border-b border-gold/30 md:border-b-0" : ""}`}
            >
              <div
                className="text-3xl font-bold text-gold md:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </div>
              <p className="mt-2 text-xs uppercase tracking-widest text-white/70" style={{ fontFamily: "var(--font-body)" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <p
                className="mb-6 text-base font-light italic leading-relaxed text-white/80"
                style={{ fontFamily: "var(--font-body)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Image placeholder area */}
              <div className="flex items-center gap-4">
                {/* HIGGSFIELD PROMPT: Editorial portrait placeholder — see Part 9 of plan for per-testimonial prompts */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/20 font-[family-name:var(--font-heading)] text-sm font-bold text-gold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-white/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to results page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5, ease }}
          className="mt-12 text-center"
        >
          <Link
            href="/resultados"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-sm font-semibold text-gold transition-colors hover:text-gold-hover"
          >
            Ver más historias de éxito
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
