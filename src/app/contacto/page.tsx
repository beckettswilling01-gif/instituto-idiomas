"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oposiciones = [
  "Carrera Diplomática",
  "Técnico Comercial del Estado",
  "Diplomado Comercial del Estado",
  "Inspector SOIVRE",
  "Ingeniero SOIVRE",
  "Archivos y Bibliotecas del Estado",
  "Otra",
] as const;

const idiomas = [
  "Inglés",
  "Francés",
  "Alemán",
  "Árabe",
  "Chino",
  "Italiano",
  "Portugués",
] as const;

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    oposicion: "",
    idioma: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  const inputClasses =
    "w-full rounded-sm border border-light-gray bg-white px-4 py-3 font-[family-name:var(--font-body)] text-sm text-navy placeholder:text-slate-blue/40 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

  const labelClasses =
    "block font-[family-name:var(--font-body)] text-sm font-medium text-navy mb-2";

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Contacto
            </p>

            <h1 className="mt-5 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Solicita tu sesión de diagnóstico
            </h1>

            <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-white/80 md:text-lg">
              Reserva una sesión de diagnóstico gratuita y sin compromiso.
              Evaluamos tu nivel, analizamos tu oposición y te proponemos un
              plan de preparación a medida.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
              {/* LEFT: Contact Form */}
              <div className="lg:col-span-3">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-navy lg:text-3xl">
                  Escríbenos
                </h2>
                <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-blue/70">
                  Completa el formulario y nos pondremos en contacto contigo en
                  un plazo máximo de 24 horas laborables.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="nombre" className={labelClasses}>
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre y apellidos"
                      className={inputClasses}
                    />
                  </div>

                  {/* Email + Teléfono */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className={labelClasses}>
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="+34 600 000 000"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  {/* Oposición + Idioma */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="oposicion" className={labelClasses}>
                        Oposición que preparas
                      </label>
                      <select
                        id="oposicion"
                        name="oposicion"
                        required
                        value={form.oposicion}
                        onChange={handleChange}
                        className={inputClasses}
                      >
                        <option value="" disabled>
                          Selecciona una oposición
                        </option>
                        {oposiciones.map((op) => (
                          <option key={op} value={op}>
                            {op}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="idioma" className={labelClasses}>
                        Idioma principal
                      </label>
                      <select
                        id="idioma"
                        name="idioma"
                        required
                        value={form.idioma}
                        onChange={handleChange}
                        className={inputClasses}
                      >
                        <option value="" disabled>
                          Selecciona un idioma
                        </option>
                        {idiomas.map((lang) => (
                          <option key={lang} value={lang}>
                            {lang}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="mensaje" className={labelClasses}>
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      value={form.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntanos tu situación: nivel actual, fecha de examen, dudas..."
                      className={inputClasses + " resize-vertical"}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-sm bg-gold px-10 py-4 font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:bg-gold-hover"
                  >
                    Enviar solicitud
                  </button>
                </form>
              </div>

              {/* RIGHT: Contact Info */}
              <div className="lg:col-span-2">
                <div className="rounded-lg border border-light-gray bg-white p-8 lg:p-10">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-navy lg:text-2xl">
                    Información de contacto
                  </h3>

                  <div className="mt-8 space-y-6">
                    {/* Dirección */}
                    <div>
                      <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        Dirección
                      </p>
                      <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-blue">
                        Calle de Ejemplo, 42
                        <br />
                        28001 Madrid, España
                      </p>
                    </div>

                    {/* Email */}
                    <div>
                      <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        Correo electrónico
                      </p>
                      <a
                        href="mailto:info@institutodiplomatico.es"
                        className="mt-2 block font-[family-name:var(--font-body)] text-sm text-slate-blue transition-colors hover:text-navy"
                      >
                        info@institutodiplomatico.es
                      </a>
                    </div>

                    {/* Teléfono */}
                    <div>
                      <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        Teléfono
                      </p>
                      <a
                        href="tel:+34910000000"
                        className="mt-2 block font-[family-name:var(--font-body)] text-sm text-slate-blue transition-colors hover:text-navy"
                      >
                        +34 910 000 000
                      </a>
                    </div>

                    {/* Horario */}
                    <div>
                      <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        Horario de atención
                      </p>
                      <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-blue">
                        Lunes a Viernes: 9:00 - 20:00
                        <br />
                        Sábados: 10:00 - 14:00
                      </p>
                    </div>
                  </div>

                  {/* Diagnostic note */}
                  <div className="mt-8 rounded-sm border-l-2 border-gold bg-light-gray/50 px-5 py-4">
                    <p className="font-[family-name:var(--font-body)] text-sm font-medium text-navy">
                      Sesión de diagnóstico gratuita
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-body)] text-xs leading-relaxed text-slate-blue/70">
                      La primera sesión es completamente gratuita y sin
                      compromiso. Evaluamos tu nivel, analizamos los requisitos
                      de tu oposición y te proponemos un plan de preparación
                      personalizado. Presencial u online, a tu elección.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
