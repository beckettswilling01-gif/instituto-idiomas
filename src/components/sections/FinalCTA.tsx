import Link from "next/link";
import { Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-light-gray py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left — copy */}
          <div>
            <h2
              className="mb-6 text-3xl font-extrabold text-navy md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Empieza tu camino hacia la excelencia.
            </h2>

            <p
              className="mb-8 text-lg text-slate-blue"
              style={{ fontFamily: "var(--font-body)" }}
            >
              El primer paso hacia una carrera de por vida al servicio del Estado
              empieza con una conversación. Sin presión, solo orientación
              profesional.
            </p>

            <div className="flex items-center gap-4 font-bold text-navy">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold">
                <Phone className="h-5 w-5 text-navy" />
              </div>
              <span>Diagnóstico directo: +34 910 000 000</span>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-3xl border border-light-gray bg-white p-8 shadow-xl">
            <form className="space-y-4">
              <div>
                <label
                  className="mb-2 block text-sm font-bold text-navy"
                  htmlFor="name"
                >
                  Nombre completo
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Juan García"
                  className="w-full rounded-xl border-none bg-light-gray p-4 text-navy focus:ring-2 focus:ring-navy"
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-bold text-navy"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="juan@ejemplo.com"
                  className="w-full rounded-xl border-none bg-light-gray p-4 text-navy focus:ring-2 focus:ring-navy"
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-bold text-navy"
                  htmlFor="exam"
                >
                  Oposición de interés
                </label>
                <select
                  id="exam"
                  className="w-full rounded-xl border-none bg-light-gray p-4 text-navy focus:ring-2 focus:ring-navy"
                >
                  <option>Carrera Diplomática</option>
                  <option>Técnicos Comerciales</option>
                  <option>Inspector SOIVRE</option>
                  <option>Otra / No estoy seguro</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-navy">
                  Método de contacto preferido
                </label>
                <div className="flex gap-4">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="contact"
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-sm">WhatsApp</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="contact"
                      className="text-navy focus:ring-navy"
                    />
                    <span className="text-sm">Llamada</span>
                  </label>
                </div>
              </div>

              <Link
                href="/contacto"
                className="mt-4 block w-full rounded-xl bg-navy py-4 text-center text-lg font-bold text-white transition-opacity hover:opacity-90"
              >
                Reservar mi diagnóstico
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
