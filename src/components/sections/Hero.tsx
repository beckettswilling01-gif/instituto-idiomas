import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-navy px-6 text-white lg:px-12">
      <div className="mx-auto max-w-[1200px] pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Left — text */}
          <div className="flex w-full max-w-[800px] flex-col items-center text-center lg:items-start lg:text-left">
            <h1
              className="text-4xl font-normal leading-[1] text-white md:text-[56px] md:leading-[1]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Supera la prueba de idiomas en tu oposición
            </h1>

            <p
              className="mt-6 text-lg leading-relaxed text-white/80"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Preparación específica para oposiciones de alto nivel: Carrera
              Diplomática, Técnico Comercial del Estado, SOIVRE y más.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-lime-pale px-5 py-3 text-base font-medium text-forest transition-all hover:scale-110 hover:brightness-90 md:px-10 md:py-5 md:text-xl"
              >
                Solicitar diagnóstico
              </Link>
              <Link
                href="/metodologia"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-3 text-base font-medium text-white transition-all hover:scale-105 hover:bg-white/10 md:px-8 md:py-5 md:text-lg"
              >
                Ver metodología
              </Link>
            </div>
          </div>

          {/* Right — image */}
          <div className="flex w-full justify-center lg:justify-end">
            <div className="relative w-full overflow-hidden rounded-2xl" style={{ maxWidth: 450 }}>
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&q=80"
                alt="Edificio institucional en Madrid"
                className="h-auto w-full object-cover"
                width={900}
                height={750}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
