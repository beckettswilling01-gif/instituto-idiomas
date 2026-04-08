import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Instituto Diplomático de Idiomas | Preparación Lingüística para Oposiciones en Madrid",
  description:
    "Centro de preparación lingüística de élite en Madrid. Formación especializada en inglés, francés, alemán, árabe, chino, italiano y portugués para oposiciones del Estado: Carrera Diplomática, Técnico Comercial, Diplomado Comercial, SOIVRE y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
