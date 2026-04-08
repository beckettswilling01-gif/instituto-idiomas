import {
  CalendarCheck,
  GraduationCap,
  FileText,
  Mic,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: CalendarCheck,
    title: "Planificación personalizada",
    description:
      "Tu plan de estudio se diseña desde la fecha de examen hacia atrás, adaptado a tu ritmo y disponibilidad.",
  },
  {
    icon: GraduationCap,
    title: "Mentores especializados",
    description:
      "Aprende de profesionales en activo que ya aprobaron. Nuestros formadores conocen el examen desde dentro.",
  },
  {
    icon: FileText,
    title: "Simulacros reales",
    description:
      "Simulaciones completas en condiciones reales. Reproducimos la presión de la sala del Tribunal.",
  },
  {
    icon: Mic,
    title: "Preparación oral e idiomas",
    description:
      "Entrenamiento intensivo para presentaciones orales y exámenes técnicos de inglés, francés y alemán.",
  },
  {
    icon: ShieldCheck,
    title: "Seguimiento semanal",
    description:
      "Check-ins semanales para monitorizar avances, identificar debilidades y mantener el impulso.",
  },
  {
    icon: Users,
    title: "Únete a la elite",
    description:
      "Nuestros candidatos se sitúan consistentemente en el 10% superior de su convocatoria.",
  },
];

export default function LanguagesGrid() {
  return (
    <section className="relative bg-warm-white py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section intro */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p
            className="mb-4 text-sm font-bold uppercase tracking-widest text-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Excelencia garantizada
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            El camino hacia tu plaza.
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="rounded-2xl border-l-4 border-navy bg-white p-8 shadow-sm"
              >
                <Icon
                  className="mb-6 h-10 w-10 text-slate-blue"
                  strokeWidth={1.5}
                />
                <h3
                  className="mb-4 text-xl font-bold text-navy"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-slate-blue"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
