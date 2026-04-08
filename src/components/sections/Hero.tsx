import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm-white px-6 pt-16 pb-12 md:pt-28 md:pb-20 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — text */}
          <div className="z-10">
            <span
              className="mb-6 inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-hover"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Preparación de Elite
            </span>

            <h1
              className="text-4xl font-bold leading-[1.1] tracking-tight text-navy md:text-[56px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Domina el idioma que tu oposición{" "}
              <span className="text-slate-blue">exige.</span>
            </h1>

            <p
              className="mt-6 max-w-lg text-lg leading-relaxed text-slate-blue md:text-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Preparación lingüística 1:1 para las oposiciones más competitivas
              de España. Online o presencial. Diseñada para futuros servidores
              del Estado.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Solicitar diagnóstico gratuito
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/programas"
                className="inline-flex items-center justify-center rounded-xl border border-light-gray bg-white px-8 py-4 text-center text-lg font-bold text-navy transition-colors hover:bg-light-gray"
              >
                Ver programas
              </Link>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-700 hover:rotate-0 lg:rotate-2">
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&q=80"
                alt="Edificio institucional en Madrid"
                className="aspect-[4/5] w-full object-cover"
                width={900}
                height={1125}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
