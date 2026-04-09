"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Oposiciones", href: "/oposiciones" },
  { label: "Idiomas", href: "/idiomas" },
  { label: "Metodología", href: "/metodologia" },
  { label: "Programas", href: "/programas" },
  { label: "Resultados", href: "/resultados" },
  { label: "Contacto", href: "/contacto" },
] as const;

const oposiciones = [
  { label: "Carrera Diplomática", href: "/oposiciones/carrera-diplomatica" },
  { label: "Técnico Comercial", href: "/oposiciones/tecnico-comercial-economista-estado" },
  { label: "Diplomado Comercial", href: "/oposiciones/diplomado-comercial-estado" },
  { label: "Inspector SOIVRE", href: "/oposiciones/inspector-soivre" },
  { label: "Ingeniero SOIVRE", href: "/oposiciones/ingeniero-tecnico-soivre" },
  {
    label: "Archivos y Bibliotecas",
    href: "/oposiciones/ayudante-archivos-bibliotecas-museos",
  },
] as const;

const socials = [
  { icon: Globe, href: "#", label: "Web" },
  { icon: Mail, href: "mailto:info@institutodiplomatico.es", label: "Email" },
  { icon: Phone, href: "tel:+34910000000", label: "Teléfono" },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy pt-24 pb-12">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,222,165,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,222,165,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/30" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div className="group">
            <div className="mb-8 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-gold/70 shadow-lg transition-transform duration-300 group-hover:scale-105">
                <span
                  className="text-lg font-bold text-navy"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  ID
                </span>
              </div>
              <span
                className="ml-3 text-xl font-bold tracking-tight text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Instituto
                <span className="block text-sm font-normal tracking-wide text-white/60">
                  Diplomático de Idiomas
                </span>
              </span>
            </div>
            <p
              className="mb-8 text-sm leading-relaxed text-white/70"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Centro de referencia en Madrid para la preparación lingüística de
              oposiciones al servicio exterior y la administración del Estado.
            </p>
            <div className="flex space-x-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-gold/30 hover:bg-gold/10 hover:text-gold hover:shadow-lg"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Navegación */}
          <div>
            <h3
              className="mb-6 text-sm font-semibold uppercase tracking-widest text-gold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Navegación
            </h3>
            <ul className="space-y-3.5">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-white/70 transition-colors duration-300 hover:text-white"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gold opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Oposiciones */}
          <div>
            <h3
              className="mb-6 text-sm font-semibold uppercase tracking-widest text-gold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Oposiciones
            </h3>
            <ul className="space-y-3.5">
              {oposiciones.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-white/70 transition-colors duration-300 hover:text-white"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gold opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contacto */}
          <div>
            <h3
              className="mb-6 text-sm font-semibold uppercase tracking-widest text-gold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-white/70" style={{ fontFamily: "var(--font-body)" }}>
                <MapPin className="mr-2.5 mt-0.5 h-4 w-4 shrink-0 text-gold/50" />
                <span>
                  Calle de Ejemplo, 42
                  <br />
                  28001 Madrid, España
                </span>
              </li>
              <li>
                <a
                  href="mailto:info@institutodiplomatico.es"
                  className="flex items-center text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Mail className="mr-2.5 h-4 w-4 shrink-0 text-gold/50" />
                  info@institutodiplomatico.es
                </a>
              </li>
              <li>
                <a
                  href="tel:+34910000000"
                  className="flex items-center text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Phone className="mr-2.5 h-4 w-4 shrink-0 text-gold/50" />
                  +34 910 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <p
            className="text-xs font-medium text-white/50"
            style={{ fontFamily: "var(--font-body)" }}
          >
            &copy; {currentYear} Instituto Diplomático de Idiomas. Todos los
            derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/aviso-legal"
              className="text-xs text-white/50 transition-colors hover:text-white/70"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Aviso Legal
            </Link>
            <Link
              href="/politica-de-privacidad"
              className="text-xs text-white/50 transition-colors hover:text-white/70"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
