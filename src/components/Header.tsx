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

type DropdownKey = "oposiciones";

const navItems: { label: string; href: string; dropdownKey?: DropdownKey }[] = [
  { label: "Oposiciones", href: "/oposiciones", dropdownKey: "oposiciones" },
  { label: "Metodología", href: "/metodologia" },
  { label: "Programas", href: "/programas" },
  { label: "Resultados", href: "/resultados" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
];

const dropdowns: Record<DropdownKey, { items: readonly { label: string; href: string }[]; viewAllLabel: string; viewAllHref: string }> = {
  oposiciones: { items: oposicionesDropdown, viewAllLabel: "Ver todas las oposiciones", viewAllHref: "/oposiciones" },
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey | null>(null);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const clickedInside = Object.values(dropdownRefs.current).some(
        (ref) => ref && ref.contains(e.target as Node)
      );
      if (!clickedInside) setOpenDropdown(null);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, []);

  const handleDropdownEnter = useCallback((key: DropdownKey) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(key);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  }, []);

  return (
    <>
      {/* Floating dark pill header — Acely style */}
      <header className="fixed left-0 right-0 z-50 px-4 pt-2.5">
        <div className="mx-auto max-w-[1264px]">
          <div className="flex w-full items-center justify-between rounded-full bg-navy py-3 pl-6 pr-4 shadow-lg lg:py-3.5 lg:pl-8 lg:pr-3.5">

            {/* Brand */}
            <div className="flex items-center gap-6 lg:gap-8">
              <Link href="/" className="shrink-0">
                <span
                  className="text-lg font-semibold tracking-tight text-white lg:text-xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Instituto Diplomático
                  <span className="ml-1.5 text-xs font-normal tracking-wide text-white/60 lg:text-sm">
                    de Idiomas
                  </span>
                </span>
              </Link>

              {/* Desktop nav */}
              <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
                <ul className="flex items-center gap-1">
                  {navItems.map((item) =>
                    item.dropdownKey ? (
                      <li
                        key={item.href}
                        className="group/item relative"
                        ref={(el) => { dropdownRefs.current[item.dropdownKey!] = el; }}
                        onMouseEnter={() => handleDropdownEnter(item.dropdownKey!)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                        >
                          {item.label}
                          <svg
                            className="h-3 w-3 shrink-0 opacity-90"
                            viewBox="0 0 12 12"
                            fill="currentColor"
                          >
                            <path d="M6 9L2 4h8L6 9z" />
                          </svg>
                        </Link>

                        {/* Dropdown */}
                        <div
                          className={`absolute left-0 top-full z-50 pt-1 transition-all duration-200 ${
                            openDropdown === item.dropdownKey
                              ? "visible translate-y-0 opacity-100"
                              : "invisible translate-y-1 opacity-0"
                          }`}
                        >
                          <div className="min-w-[300px] overflow-hidden rounded-xl bg-white py-2 shadow-xl">
                            <ul>
                              {dropdowns[item.dropdownKey!].items.map((dd) => (
                                <li key={dd.href}>
                                  <Link
                                    href={dd.href}
                                    className="block px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-light-gray"
                                  >
                                    {dd.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <div className="border-t border-light-gray px-5 py-2.5">
                              <Link
                                href={dropdowns[item.dropdownKey!].viewAllHref}
                                className="text-xs font-semibold text-gold transition-colors hover:text-gold-hover"
                              >
                                {dropdowns[item.dropdownKey!].viewAllLabel} &rarr;
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    ) : (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>

            {/* Right side: CTA + hamburger */}
            <div className="ml-auto flex items-center gap-2">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-gold px-4 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:brightness-90 lg:px-5 lg:py-3 lg:text-base"
              >
                Solicitar diagnóstico
              </Link>

              {/* Hamburger */}
              <button
                type="button"
                aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
                className="ml-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-white transition-all hover:rounded-full hover:bg-white/10 xl:hidden"
                onClick={() => setMobileOpen((prev) => !prev)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <line
                    x1="1" y1="6" x2="23" y2="6"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    className="origin-center transition-transform duration-200"
                    style={mobileOpen ? { transform: "translateY(6px) rotate(45deg)" } : {}}
                  />
                  <line
                    x1="1" y1="12" x2="23" y2="12"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    className="origin-center transition-all duration-200"
                    style={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  />
                  <line
                    x1="1" y1="18" x2="23" y2="18"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    className="origin-center transition-transform duration-200"
                    style={mobileOpen ? { transform: "translateY(-6px) rotate(-45deg)" } : {}}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 xl:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 flex flex-col bg-white pt-20 transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex-1 overflow-auto px-6 py-8" aria-label="Main">
            <ul className="space-y-1">
              {navItems.map((item) =>
                item.dropdownKey ? (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => setMobileExpanded((prev) => prev === item.dropdownKey ? null : item.dropdownKey!)}
                      className="flex w-full items-center justify-between -mx-2 px-4 py-3 text-sm font-medium text-navy transition-colors hover:bg-light-gray rounded-lg"
                    >
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${mobileExpanded === item.dropdownKey ? "rotate-180" : ""}`}
                        viewBox="0 0 12 12"
                        fill="currentColor"
                      >
                        <path d="M6 9L2 4h8L6 9z" />
                      </svg>
                    </button>
                    {mobileExpanded === item.dropdownKey && (
                      <ul className="ml-4 space-y-0.5 pb-2">
                        {dropdowns[item.dropdownKey!].items.map((dd) => (
                          <li key={dd.href}>
                            <Link
                              href={dd.href}
                              onClick={closeMobile}
                              className="block px-4 py-2.5 text-sm text-slate-blue transition-colors hover:text-navy hover:bg-light-gray rounded-lg"
                            >
                              {dd.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMobile}
                      className="block -mx-2 px-4 py-3 text-sm font-medium text-navy transition-colors hover:bg-light-gray rounded-lg"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
              <li>
                <Link
                  href="/contacto"
                  onClick={closeMobile}
                  className="mt-4 block rounded-full bg-gold px-6 py-3 text-center text-sm font-medium text-white"
                >
                  Solicitar diagnóstico
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[72px] lg:h-[80px]" aria-hidden="true" />
    </>
  );
}
