import Link from "next/link";

interface ExamCard {
  icon: string;
  title: string;
  description: string;
  level: string;
  levelColor: "high" | "extreme" | "medium" | "competitive";
  href: string;
}

const levelStyles = {
  high: "bg-red-50 text-red-700",
  extreme: "bg-red-50 text-red-700",
  medium: "bg-light-gray text-slate-blue",
  competitive: "bg-light-gray text-slate-blue",
};

const exams: ExamCard[] = [
  {
    icon: "🌍",
    title: "Carrera Diplomática",
    description:
      "Prepárate para el papel de representación internacional más prestigioso de España.",
    level: "Nivel: Alto",
    levelColor: "high",
    href: "/oposiciones/carrera-diplomatica",
  },
  {
    icon: "📊",
    title: "Técnicos Comerciales y Economistas del Estado",
    description:
      "Política económica y gestión de élite para la Administración del Estado.",
    level: "Nivel: Extremo",
    levelColor: "extreme",
    href: "/oposiciones/tecnico-comercial-economista-estado",
  },
  {
    icon: "📈",
    title: "Diplomado Comercial del Estado",
    description:
      "Expertos en comercio internacional e inversiones extranjeras.",
    level: "Nivel: Alto",
    levelColor: "high",
    href: "/oposiciones/diplomado-comercial-estado",
  },
  {
    icon: "🛡️",
    title: "Inspector del SOIVRE",
    description:
      "Garantizando los estándares de calidad y seguridad del comercio exterior español.",
    level: "Nivel: Medio-Alto",
    levelColor: "medium",
    href: "/oposiciones/inspector-soivre",
  },
  {
    icon: "⚙️",
    title: "Ingeniero Técnico del SOIVRE",
    description:
      "Supervisión técnica para inspecciones de comercio agrícola e industrial.",
    level: "Nivel: Medio",
    levelColor: "medium",
    href: "/oposiciones/ingeniero-tecnico-soivre",
  },
  {
    icon: "🏛️",
    title: "Auxiliar de Archivos, Bibliotecas y Museos",
    description:
      "Únete a los guardianes del patrimonio cultural y documental de España.",
    level: "Nivel: Competitivo",
    levelColor: "competitive",
    href: "/oposiciones/ayudante-archivos-bibliotecas-museos",
  },
];

export default function ExamsCarousel() {
  return (
    <section className="bg-light-gray py-20 lg:py-28" id="programs">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          className="mb-12 text-center text-3xl font-bold text-navy lg:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Nuestros programas especializados.
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {exams.map((exam) => (
            <div
              key={exam.title}
              className="rounded-2xl bg-white p-6 transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="rounded-xl bg-light-gray p-3 text-2xl">
                  {exam.icon}
                </div>
                <span
                  className={`rounded px-2 py-1 text-[10px] font-black uppercase ${levelStyles[exam.levelColor]}`}
                >
                  {exam.level}
                </span>
              </div>

              <h3
                className="mb-2 text-xl font-bold text-navy"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {exam.title}
              </h3>

              <p
                className="mb-6 text-sm leading-relaxed text-slate-blue"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {exam.description}
              </p>

              <Link
                href={exam.href}
                className="block w-full rounded-xl bg-light-gray py-3 text-center font-bold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                Más información
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
