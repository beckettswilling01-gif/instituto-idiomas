"use client";

import { Gallery6 } from "@/components/ui/gallery6";

const examItems = [
  {
    id: "carrera-diplomatica",
    title: "Carrera Diplomática",
    category: "Cuerpo Superior",
    summary:
      "Preparación integral de inglés y francés para las pruebas escritas y orales del servicio exterior.",
    url: "/oposiciones/carrera-diplomatica",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
  },
  {
    id: "tecnico-comercial",
    title: "Técnico Comercial y Economista del Estado",
    category: "Cuerpo Superior",
    summary:
      "Dominio avanzado de idiomas para uno de los cuerpos más exigentes de la administración económica.",
    url: "/oposiciones/tecnico-comercial-economista-estado",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "diplomado-comercial",
    title: "Diplomado Comercial del Estado",
    category: "Cuerpo de Gestión",
    summary:
      "Formación lingüística específica para las pruebas de acceso al cuerpo comercial del Estado.",
    url: "/oposiciones/diplomado-comercial-estado",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: "inspector-soivre",
    title: "Inspector del SOIVRE",
    category: "Cuerpo de Gestión",
    summary:
      "Preparación de idiomas orientada al comercio exterior y la inspección internacional.",
    url: "/oposiciones/inspector-soivre",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80",
  },
  {
    id: "ingeniero-soivre",
    title: "Ingeniero Técnico del SOIVRE",
    category: "Cuerpo Técnico",
    summary:
      "Competencia lingüística técnica para el cuerpo de ingenieros del servicio de inspección.",
    url: "/oposiciones/ingeniero-tecnico-soivre",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    id: "archivos-bibliotecas",
    title: "Ayudante de Archivos, Bibliotecas y Museos",
    category: "Cuerpo de Gestión",
    summary:
      "Preparación en idiomas para el acceso a instituciones culturales y patrimoniales del Estado.",
    url: "/oposiciones/ayudante-archivos-bibliotecas-museos",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
  },
];

export default function ExamsCarousel() {
  return (
    <div className="bg-warm-white">
      <Gallery6
        heading="Preparación específica para cada convocatoria"
        ctaText="Ver todas las oposiciones"
        ctaUrl="/oposiciones"
        items={examItems}
      />
    </div>
  );
}
