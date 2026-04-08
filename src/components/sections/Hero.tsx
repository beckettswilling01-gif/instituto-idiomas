import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-warm-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — text */}
          <div>
            <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              INSTITUTO DE PREPARACIÓN LINGÜÍSTICA · MADRID
            </p>

            <h1 className="mt-6 font-[family-name:var(--font-heading)] text-4xl leading-[1.1] text-navy sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]">
              Supera la prueba de idiomas en tu oposición
            </h1>

            <p className="mt-6 max-w-xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-slate-blue lg:text-xl">
              Preparación específica para oposiciones de alto nivel: Carrera
              Diplomática, Técnico Comercial del Estado, SOIVRE y más.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-block rounded-sm bg-navy px-8 py-4 text-center font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-wider text-warm-white transition-colors hover:bg-slate-blue"
              >
                Solicitar diagnóstico
              </Link>
              <Link
                href="/metodologia"
                className="inline-block rounded-sm border-2 border-navy px-8 py-4 text-center font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:bg-navy hover:text-warm-white"
              >
                Ver metodología
              </Link>
            </div>

            <p className="mt-8 font-[family-name:var(--font-body)] text-sm tracking-wide text-slate-blue/60">
              Carrera Diplomática · Técnico Comercial · SOIVRE · Archivos y
              Bibliotecas
            </p>
          </div>

          {/* Right column — institutional visual */}
          <div className="flex flex-col">
            <div className="rounded-lg bg-navy p-8 lg:p-10">
              <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Preparación especializada
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "7 Idiomas",
                  "6 Oposiciones",
                  "Plan Personalizado",
                  "Simulaciones Reales",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="text-gold" aria-hidden="true">
                      &#10003;
                    </span>
                    <span className="font-[family-name:var(--font-body)] text-base text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="-mt-4 ml-6 rounded-lg border border-light-gray bg-light-gray p-5 lg:ml-10">
              <div className="flex items-baseline gap-3">
                <span className="font-[family-name:var(--font-heading)] text-3xl font-bold text-gold">
                  100%
                </span>
                <span className="font-[family-name:var(--font-body)] text-sm text-navy">
                  Enfoque en tu examen específico
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
