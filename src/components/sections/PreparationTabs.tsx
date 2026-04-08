"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon } from "lucide-react";

export interface Capability {
  text: string;
  detail: string;
}

export interface PrepTab {
  title: string;
  stat: string;
  statLabel: string;
  description: string;
  capabilities: Capability[];
}

interface PreparationTabsProps {
  tabs: PrepTab[];
}

function CapabilityRow({ item, index }: { item: Capability; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="group w-full text-left"
      >
        <div className="flex items-start gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-navy/5">
          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
            <CheckIcon className="h-3 w-3" />
          </div>
          <div className="min-w-0 flex-1">
            <span
              className="text-sm font-medium text-navy transition-colors group-hover:text-navy/80"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item.text}
            </span>
            <AnimatePresence>
              {expanded && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-1 overflow-hidden text-xs leading-relaxed text-slate-blue"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.detail}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <div
            className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center transition-transform duration-200 ${
              expanded ? "rotate-45" : ""
            }`}
          >
            <span className="text-xs text-slate-blue/50">+</span>
          </div>
        </div>
      </button>
    </motion.div>
  );
}

function TabPanel({ tab }: { tab: PrepTab }) {
  return (
    <motion.div
      key={tab.title}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
    >
      {/* Left: description + stat */}
      <div>
        <h3
          className="mb-4 text-xl font-bold text-navy"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {tab.title}
        </h3>
        <p
          className="mb-6 text-sm leading-relaxed text-slate-blue"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {tab.description}
        </p>

        {/* Stat callout */}
        <div className="rounded-xl bg-navy p-5">
          <span
            className="text-4xl font-bold tracking-tight text-gold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {tab.stat}
          </span>
          <span
            className="mt-1 block text-xs font-medium uppercase tracking-widest text-white/60"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {tab.statLabel}
          </span>
        </div>
      </div>

      {/* Right: capabilities */}
      <div>
        <div className="mb-3 flex items-center justify-between px-3">
          <span
            className="text-xs font-semibold uppercase tracking-widest text-slate-blue/50"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Incluye
          </span>
          <span className="text-xs text-slate-blue/40">
            {tab.capabilities.length} elementos
          </span>
        </div>
        <div className="space-y-0.5 rounded-xl border border-light-gray bg-white p-2">
          {tab.capabilities.map((c, i) => (
            <CapabilityRow key={c.text} item={c} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function PreparationTabs({ tabs }: PreparationTabsProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Tab selector pills */}
      <div className="mb-10 flex flex-wrap gap-2">
        {tabs.map((tab, i) => {
          const isActive = active === i;
          return (
            <button
              key={tab.title}
              onClick={() => setActive(i)}
              className={`relative flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "border-navy bg-navy text-white shadow-lg"
                  : "border-light-gray bg-white text-slate-blue hover:border-navy/20 hover:text-navy"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="text-xs text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="hidden sm:inline">{tab.title}</span>
              <span className="sm:hidden">{tab.title.split(" ").slice(0, 2).join(" ")}</span>
            </button>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="mb-10 flex gap-1.5">
        {tabs.map((_, i) => (
          <div key={i} className="h-1 flex-1 overflow-hidden rounded-full bg-light-gray">
            <motion.div
              className="h-full rounded-full bg-gold"
              initial={false}
              animate={{ width: i <= active ? "100%" : "0%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        ))}
      </div>

      {/* Active tab content */}
      <AnimatePresence mode="wait">
        <TabPanel tab={tabs[active]} />
      </AnimatePresence>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between border-t border-light-gray pt-8">
        <button
          onClick={() => setActive(Math.max(0, active - 1))}
          disabled={active === 0}
          className="flex items-center gap-2 text-sm text-slate-blue transition-colors hover:text-navy disabled:cursor-not-allowed disabled:opacity-30"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <span>&larr;</span> Anterior
        </button>
        <div
          className="text-xs text-slate-blue/40"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {active + 1} / {tabs.length}
        </div>
        <button
          onClick={() => setActive(Math.min(tabs.length - 1, active + 1))}
          disabled={active === tabs.length - 1}
          className="flex items-center gap-2 text-sm text-slate-blue transition-colors hover:text-navy disabled:cursor-not-allowed disabled:opacity-30"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Siguiente <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}
