"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon, ChevronDown } from "lucide-react";

interface Capability {
  text: string;
  detail: string;
}

interface MethodologyItem {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  capabilities: Capability[];
}

interface MethodologyCardsProps {
  items: MethodologyItem[];
}

function CapabilityRow({ item }: { item: Capability }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setExpanded(!expanded);
      }}
      className="group w-full text-left"
    >
      <div className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-navy/5">
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
  );
}

export default function MethodologyCards({ items }: MethodologyCardsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isExpanded = expandedIndex === i;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: i * 0.06,
              duration: 0.4,
              ease: [0.2, 0, 0, 1],
            }}
            className="rounded-2xl bg-light-gray"
          >
            {/* Clickable header row */}
            <button
              onClick={() => setExpandedIndex(isExpanded ? null : i)}
              className="flex w-full items-center gap-5 px-6 py-5 text-left lg:px-8 lg:py-6"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <h3
                  className="text-base font-bold text-navy lg:text-lg"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                {!isExpanded && (
                  <p
                    className="mt-0.5 text-xs text-slate-blue/60"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.stat} {item.statLabel} · {item.capabilities.length}{" "}
                    elementos
                  </p>
                )}
              </div>
              <ChevronDown
                size={20}
                className={`shrink-0 text-gold transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Expanded content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 gap-6 px-6 pb-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pb-8">
                    {/* Left: description + stat */}
                    <div>
                      <p
                        className="mb-5 text-sm leading-relaxed text-slate-blue"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item.description}
                      </p>
                      <div className="rounded-xl bg-navy p-5">
                        <span
                          className="text-3xl font-bold tracking-tight text-gold"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {item.stat}
                        </span>
                        <span
                          className="mt-1 block text-xs font-medium uppercase tracking-widest text-white/60"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {item.statLabel}
                        </span>
                      </div>
                    </div>

                    {/* Right: capabilities checklist */}
                    <div>
                      <div className="mb-2 flex items-center justify-between px-3">
                        <span
                          className="text-xs font-semibold uppercase tracking-widest text-slate-blue/50"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          Incluye
                        </span>
                        <span className="text-xs text-slate-blue/40">
                          {item.capabilities.length} elementos
                        </span>
                      </div>
                      <div className="space-y-0.5 rounded-xl bg-white p-2">
                        {item.capabilities.map((c) => (
                          <CapabilityRow key={c.text} item={c} />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
