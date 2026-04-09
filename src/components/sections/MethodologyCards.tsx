"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { CheckIcon, X } from "lucide-react";

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

function CapabilityRow({ item, index }: { item: Capability; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          setExpanded(!expanded);
        }}
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

function ExpandedContent({ item }: { item: MethodologyItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
      className="overflow-hidden"
    >
      <div className="grid grid-cols-1 gap-8 pt-6 lg:grid-cols-2 lg:gap-12">
        {/* Left: description + stat */}
        <div>
          <p
            className="mb-6 text-sm leading-relaxed text-slate-blue"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {item.description}
          </p>
          <div className="rounded-xl bg-navy p-5">
            <span
              className="text-4xl font-bold tracking-tight text-gold"
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
              {item.capabilities.length} elementos
            </span>
          </div>
          <div className="space-y-0.5 rounded-xl bg-white p-2">
            {item.capabilities.map((c, i) => (
              <CapabilityRow key={c.text} item={c} index={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MethodologyCards({ items }: MethodologyCardsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <LayoutGroup>
      <motion.div layout className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((item, i) => {
          const isExpanded = expandedIndex === i;
          const hasExpanded = expandedIndex !== null;

          return (
            <motion.div
              key={item.title}
              layout
              transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              onClick={() => setExpandedIndex(isExpanded ? null : i)}
              className={`cursor-pointer rounded-2xl bg-light-gray p-6 transition-colors ${
                isExpanded ? "md:col-span-2" : ""
              } ${hasExpanded && !isExpanded ? "opacity-70" : ""}`}
            >
              {/* Card header — always visible */}
              <motion.div layout="position" className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-3">
                    <span
                      className="text-xs font-bold text-gold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="text-lg font-bold text-navy"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <div className="mt-3 flex items-baseline gap-3">
                    <span
                      className="text-2xl font-bold text-gold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.stat}
                    </span>
                    <span
                      className="text-xs uppercase tracking-widest text-slate-blue/60"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.statLabel}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="rounded-lg bg-navy/10 px-3 py-1 text-xs font-medium text-navy"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.capabilities.length} elementos
                  </span>
                  {isExpanded && (
                    <X size={16} className="text-slate-blue/50" />
                  )}
                </div>
              </motion.div>

              {/* Expanded content */}
              <AnimatePresence>
                {isExpanded && <ExpandedContent item={item} />}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </LayoutGroup>
  );
}
