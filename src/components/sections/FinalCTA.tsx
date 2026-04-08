"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight as ArrowRightIcon } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FinalCTA() {
  return (
    <section className="w-full bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="mx-auto mb-8 h-px w-12 bg-gold" aria-hidden="true" />

          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-5xl">
            Tu carrera merece una preparación a la altura
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-white/70 md:text-lg">
            Solicita una sesión de diagnóstico gratuita. Evaluamos tu nivel,
            analizamos tu oposición y diseñamos un plan a medida.
          </p>

          <div className="mt-10">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-lime-pale px-10 py-4 font-[family-name:var(--font-body)] text-base font-semibold text-forest transition-all hover:scale-110 hover:brightness-90"
            >
              Reserva tu sesión de diagnóstico
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-6 font-[family-name:var(--font-body)] text-xs tracking-wide text-white/40">
            Sin compromiso &middot; Presencial u online &middot; Madrid
          </p>
        </motion.div>
      </div>
    </section>
  );
}
