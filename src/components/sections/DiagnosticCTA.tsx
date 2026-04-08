import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DiagnosticCTAProps {
  headline?: string;
  subheadline?: string;
}

export default function DiagnosticCTA({
  headline = "El primer paso es una conversación.",
  subheadline = "Reserva tu sesión de diagnóstico gratuita. Evaluamos tu nivel, analizamos tu oposición y te proponemos un plan a medida. Sin compromiso.",
}: DiagnosticCTAProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,165,90,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2
          className="text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {headline}
        </h2>

        <p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {subheadline}
        </p>

        <div className="mt-10">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-lg font-bold text-navy transition-all hover:scale-[1.02] hover:bg-gold-hover"
          >
            Solicitar diagnóstico gratuito
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <p
          className="mt-6 text-sm text-white/70"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Presencial u online · 30 minutos · Completamente gratuito
        </p>
      </div>

      {/* Image placeholder */}
      {/* HIGGSFIELD PROMPT: A bright, modern study room with floor-to-ceiling windows overlooking Madrid rooftops. A clean desk with a laptop, a notebook, and a warm cup of coffee. Morning golden light flooding in. The space feels inviting, professional, and calm. No people. Architectural interior photography, warm white and gold tones. */}
    </section>
  );
}
