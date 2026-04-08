"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

const oposicionesDropdown = [
  { label: "Carrera Diplomática", href: "/oposiciones/carrera-diplomatica" },
  { label: "Técnico Comercial y Economista del Estado", href: "/oposiciones/tecnico-comercial-economista-estado" },
  { label: "Diplomado Comercial del Estado", href: "/oposiciones/diplomado-comercial-estado" },
  { label: "Inspector del SOIVRE", href: "/oposiciones/inspector-soivre" },
  { label: "Ingeniero Técnico del SOIVRE", href: "/oposiciones/ingeniero-tecnico-soivre" },
  { label: "Ayudante de Archivos, Bibliotecas y Museos", href: "/oposiciones/ayudante-archivos-bibliotecas-museos" },
] as const;

const navLinks: readonly { label: string; href: string; hasDropdown?: boolean }[] = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Oposiciones", href: "/oposiciones", hasDropdown: true },
  { label: "Idiomas", href: "/idiomas" },
  { label: "Metodología", href: "/metodologia" },
  { label: "Programas", href: "/programas" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOposExpanded, setMobileOposExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileOposExpanded(false);
  }, []);

  const handleDropdownEnter = useCallback(() => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-warm-white/95 backdrop-blur-md shadow-sm border-b border-light-gray"
            : "bg-warm-white border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Brand */}
          <Link href="/" className="shrink-0">
            <span
              className="text-xl font-semibold tracking-tight text-navy lg:text-2xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Instituto Diplomático
              <span className="block text-sm font-normal tracking-wide text-slate-blue lg:text-base">
                de Idiomas
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 xl:flex">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={link.href}
                    className="relative flex items-center gap-1 text-sm font-medium text-navy/80 transition-colors hover:text-navy after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
                  >
                    {link.label}
                    {/* Chevron */}
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {/* Dropdown panel */}
                  <div
                    className={`absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                      dropdownOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="rounded-lg border border-light-gray bg-white shadow-lg">
                      {/* Dropdown header */}
                      <div className="border-b border-light-gray px-5 py-3">
                        <p
                          className="text-xs font-semibold uppercase tracking-[0.15em] text-gold"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          Oposiciones que preparamos
                        </p>
                      </div>

                      {/* Exam links */}
                      <div className="py-2">
                        {oposicionesDropdown.map((exam) => (
                          <Link
                            key={exam.href}
                            href={exam.href}
                            className="block px-5 py-2.5 text-sm text-navy/80 transition-colors hover:bg-light-gray hover:text-navy"
                          >
                            {exam.label}
                          </Link>
                        ))}
                      </div>

                      {/* Footer link */}
                      <div className="border-t border-light-gray px-5 py-3">
                        <Link
                          href="/oposiciones"
                          className="text-xs font-semibold text-gold transition-colors hover:text-gold-hover"
                        >
                          Ver todas las oposiciones &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-navy/80 transition-colors hover:text-navy after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contacto"
              className="hidden rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-sm transition-colors hover:bg-gold-hover sm:inline-block"
            >
              Solicitar diagnóstico
            </Link>

            {/* Hamburger */}
            <button
              type="button"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              className="relative z-60 flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span
                className={`block h-0.5 w-6 rounded bg-navy transition-transform duration-300 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded bg-navy transition-opacity duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded bg-navy transition-transform duration-300 ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-warm-white transition-opacity duration-300 xl:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-1 flex-col items-center justify-center gap-6 py-24">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href} className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => setMobileOposExpanded((prev) => !prev)}
                  className="flex items-center gap-2 text-2xl font-medium text-navy transition-colors hover:text-gold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {link.label}
                  <svg
                    className={`h-5 w-5 transition-transform duration-200 ${mobileOposExpanded ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileOposExpanded && (
                  <div className="mt-3 flex flex-col items-center gap-2">
                    {oposicionesDropdown.map((exam) => (
                      <Link
                        key={exam.href}
                        href={exam.href}
                        onClick={closeMobile}
                        className="text-base text-slate-blue transition-colors hover:text-gold"
                      >
                        {exam.label}
                      </Link>
                    ))}
                    <Link
                      href="/oposiciones"
                      onClick={closeMobile}
                      className="mt-1 text-sm font-semibold text-gold"
                    >
                      Ver todas &rarr;
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="text-2xl font-medium text-navy transition-colors hover:text-gold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {link.label}
              </Link>
            )
          )}

          <Link
            href="/contacto"
            onClick={closeMobile}
            className="mt-4 rounded-sm bg-gold px-8 py-3 text-lg font-semibold text-navy transition-colors hover:bg-gold-hover"
          >
            Solicitar diagnóstico
          </Link>
        </nav>
      </div>

      {/* Spacer so content doesn't hide behind fixed header */}
      <div className="h-[88px] lg:h-[96px]" aria-hidden="true" />
    </>
  );
}
