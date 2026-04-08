"use client";

import {
  Globe,
  TrendingUp,
  Briefcase,
  Shield,
  Wrench,
  Library,
} from "lucide-react";
import { ExpandingCards, type CardItem } from "@/components/ui/expanding-cards";

const exams: CardItem[] = [
  {
    id: "carrera-diplomatica",
    title: "Carrera Diplomática",
    description:
      "Preparación integral de inglés y francés para las pruebas escritas y orales del servicio exterior.",
    // HIGGSFIELD PROMPT: The ornate entrance hall of the Palacio de Santa Cruz in Madrid, seat of the Spanish Ministry of Foreign Affairs. Marble floors, high ceilings with chandeliers, diplomatic flags lining a corridor. Warm natural light streaming through tall windows. Grand, institutional, aspirational. Architectural photography, symmetrical composition.
    imgSrc: "/images/exams/carrera-diplomatica.png",
    icon: <Globe size={24} />,
    linkHref: "/oposiciones/carrera-diplomatica",
  },
  {
    id: "tecnico-comercial-economista-estado",
    title: "Técnico Comercial y Economista del Estado",
    description:
      "Dominio avanzado de idiomas para uno de los cuerpos más exigentes de la administración económica.",
    // HIGGSFIELD PROMPT: A modern Spanish government office interior with clean lines, a large conference table, and floor-to-ceiling windows overlooking a Madrid cityscape. Documents and economic reports neatly arranged. Professional, precise, contemporary. Warm tones, architectural interior photography.
    imgSrc: "/images/exams/tecnico-comercial.png",
    icon: <TrendingUp size={24} />,
    linkHref: "/oposiciones/tecnico-comercial-economista-estado",
  },
  {
    id: "diplomado-comercial-estado",
    title: "Diplomado Comercial del Estado",
    description:
      "Formación lingüística específica para las pruebas de acceso al cuerpo comercial del Estado.",
    // HIGGSFIELD PROMPT: An aerial view of a busy Mediterranean port with container ships and cranes, seen from a high office window in a Spanish trade ministry building. Documents and a laptop on the windowsill in the foreground. The intersection of commerce and diplomacy. Warm, golden hour light.
    imgSrc: "/images/exams/diplomado-comercial.png",
    icon: <Briefcase size={24} />,
    linkHref: "/oposiciones/diplomado-comercial-estado",
  },
  {
    id: "inspector-soivre",
    title: "Inspector del SOIVRE",
    description:
      "Preparación de idiomas orientada al comercio exterior y la inspección internacional.",
    // HIGGSFIELD PROMPT: Close-up of official inspection documents with a Spanish government seal, a magnifying glass, and a stamp on a polished wooden desk. Crisp, authoritative detail shot. Warm lighting, shallow depth of field. The precision and rigor of quality control.
    imgSrc: "/images/exams/inspector-soivre.png",
    icon: <Shield size={24} />,
    linkHref: "/oposiciones/inspector-soivre",
  },
  {
    id: "ingeniero-tecnico-soivre",
    title: "Ingeniero Técnico del SOIVRE",
    description:
      "Competencia lingüística técnica para el cuerpo de ingenieros del servicio de inspección.",
    // HIGGSFIELD PROMPT: A professional laboratory or technical inspection facility with precision instruments, quality control charts on the wall, and a clipboard with inspection forms. Clean, well-lit, institutional. The technical side of state service. Cool whites with warm accent lighting.
    imgSrc: "/images/exams/ingeniero-soivre.png",
    icon: <Wrench size={24} />,
    linkHref: "/oposiciones/ingeniero-tecnico-soivre",
  },
  {
    id: "ayudante-archivos-bibliotecas-museos",
    title: "Archivos, Bibliotecas y Museos",
    description:
      "Preparación en idiomas para el acceso a instituciones culturales y patrimoniales del Estado.",
    // HIGGSFIELD PROMPT: The interior of a grand Spanish library — the Biblioteca Nacional de Espana aesthetic. Rows of leather-bound books on dark wood shelves, reading lamps casting warm pools of light, ornate ceiling details visible above. Quiet, scholarly, timeless. Warm amber tones, architectural photography.
    imgSrc: "/images/exams/archivos-bibliotecas.png",
    icon: <Library size={24} />,
    linkHref: "/oposiciones/ayudante-archivos-bibliotecas-museos",
  },
];

export default function ExamsExpandingCards() {
  return (
    <section className="bg-warm-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Oposiciones que preparamos
          </p>

          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl leading-snug text-navy lg:text-4xl">
            Preparación específica para cada convocatoria
          </h2>

          <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-blue">
            Cada oposición exige un nivel, un formato y unas destrezas
            lingüísticas diferentes. Explora tu camino.
          </p>
        </div>

        {/* Expanding cards */}
        <div className="flex justify-center">
          <ExpandingCards items={exams} defaultActiveIndex={0} />
        </div>
      </div>
    </section>
  );
}
