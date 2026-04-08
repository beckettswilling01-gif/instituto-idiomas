import Link from "next/link";

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

const idiomas = [
  { label: "Inglés", href: "/idiomas/ingles" },
  { label: "Francés", href: "/idiomas/frances" },
  { label: "Alemán", href: "/idiomas/aleman" },
  { label: "Italiano", href: "/idiomas/italiano" },
  { label: "Portugués", href: "/idiomas/portugues" },
  { label: "Árabe", href: "/idiomas/arabe" },
  { label: "Chino", href: "/idiomas/chino" },
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white/90">
      {/* Gold accent line */}
      <div className="h-1 bg-gold" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-8">
        {/* Columns */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 -- Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p
              className="text-xl font-semibold tracking-tight text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Instituto Diplomático
              <span className="block text-sm font-normal tracking-wide text-white/70">
                de Idiomas
              </span>
            </p>

            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Centro de referencia en Madrid para la preparación lingüística de
              oposiciones al servicio exterior y la administración del Estado.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Formación de excelencia con metodología propia, resultados
              contrastados y atención personalizada.
            </p>
          </div>

          {/* Column 2 -- Navegación */}
          <div>
            <h3
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 -- Oposiciones */}
          <div>
            <h3
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Oposiciones
            </h3>
            <ul className="space-y-2.5">
              {oposiciones.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 -- Contacto */}
          <div>
            <h3
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contacto
            </h3>
            <address className="space-y-3 not-italic text-sm text-white/80">
              <p className="leading-relaxed">
                Calle de Ejemplo, 42
                <br />
                28001 Madrid, España
              </p>
              <p>
                <a
                  href="mailto:info@institutodiplomatico.es"
                  className="transition-colors hover:text-white"
                >
                  info@institutodiplomatico.es
                </a>
              </p>
              <p>
                <a
                  href="tel:+34910000000"
                  className="transition-colors hover:text-white"
                >
                  +34 910 000 000
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/60">
            &copy; {currentYear} Instituto Diplomático de Idiomas. Todos los
            derechos reservados.
          </p>

          <div className="flex gap-6">
            <Link
              href="/aviso-legal"
              className="text-xs text-white/60 transition-colors hover:text-white/70"
            >
              Aviso Legal
            </Link>
            <Link
              href="/politica-de-privacidad"
              className="text-xs text-white/60 transition-colors hover:text-white/70"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
