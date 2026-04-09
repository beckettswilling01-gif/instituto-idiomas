"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckIcon,
  Users,
  Clock,
  BookOpen,
  ClipboardCheck,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

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
  classSize?: string;
  hoursPerWeek?: string;
  materials?: string[];
  mockExamFrequency?: string;
  feedbackMethod?: string;
  successMetric?: string;
}

interface MethodologyCardsProps {
  items: MethodologyItem[];
}

const metaConfig = [
  { key: "classSize", icon: Users, label: "Grupo" },
  { key: "hoursPerWeek", icon: Clock, label: "Dedicación" },
  { key: "mockExamFrequency", icon: ClipboardCheck, label: "Simulacros" },
  { key: "feedbackMethod", icon: MessageSquare, label: "Feedback" },
  { key: "successMetric", icon: TrendingUp, label: "Resultados" },
] as const;

function CapabilityRow({ item }: { item: Capability }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <button
      onClick={() => setExpanded(!expanded)}
      className="group w-full text-left"
    >
      <div className="flex items-start gap-3 py-2.5 transition-colors">
        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
          <CheckIcon className="h-3 w-3" />
        </div>
        <div className="min-w-0 flex-1">
          <span
            className="text-sm font-medium text-navy transition-colors group-hover:text-navy/70"
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

function MetadataGrid({ item }: { item: MethodologyItem }) {
  const entries = metaConfig.filter(
    (m) => item[m.key as keyof MethodologyItem],
  );
  if (entries.length === 0) return null;

  return (
    <div className="mb-6 grid grid-cols-2 gap-3">
      {entries.map((m) => {
        const Icon = m.icon;
        const value = item[m.key as keyof MethodologyItem] as string;
        return (
          <div
            key={m.key}
            className="flex items-start gap-2 rounded-lg bg-white p-3"
          >
            <Icon size={14} className="mt-0.5 shrink-0 text-gold" />
            <div>
              <span
                className="block text-[10px] font-semibold uppercase tracking-widest text-slate-blue/40"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {m.label}
              </span>
              <span
                className="text-xs font-medium text-navy"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {value}
              </span>
            </div>
          </div>
        );
      })}
      {/* Materials list if present */}
      {item.materials && item.materials.length > 0 && (
        <div className="col-span-2 flex items-start gap-2 rounded-lg bg-white p-3">
          <BookOpen size={14} className="mt-0.5 shrink-0 text-gold" />
          <div>
            <span
              className="block text-[10px] font-semibold uppercase tracking-widest text-slate-blue/40"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Materiales
            </span>
            <span
              className="text-xs font-medium text-navy"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item.materials.join(" · ")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MethodologyCards({ items }: MethodologyCardsProps) {
  return (
    <div className="divide-y divide-navy/8">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            delay: i * 0.08,
            duration: 0.5,
            ease: [0.2, 0, 0, 1],
          }}
          className="grid grid-cols-1 gap-8 py-12 first:pt-0 last:pb-0 md:grid-cols-12 md:gap-12 lg:py-16"
        >
          {/* Left column — title + stat */}
          <div className="md:col-span-4 md:sticky md:top-32 md:self-start">
            <span
              className="mb-2 block text-xs font-bold text-gold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3
              className="text-xl font-bold text-navy lg:text-2xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {item.title}
            </h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span
                className="text-3xl font-bold tracking-tight text-gold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.stat}
              </span>
              <span
                className="text-xs font-medium uppercase tracking-widest text-slate-blue/50"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.statLabel}
              </span>
            </div>
          </div>

          {/* Right column — metadata + description + capabilities */}
          <div className="md:col-span-8">
            <MetadataGrid item={item} />
            <p
              className="mb-6 text-base leading-relaxed text-slate-blue"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item.description}
            </p>
            <div className="space-y-0.5">
              {item.capabilities.map((c) => (
                <CapabilityRow key={c.text} item={c} />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
