"use client";

import { motion } from "framer-motion";
import { BookOpen, Target, Users, Award, Clock, Shield } from "lucide-react";

const ICONS = [BookOpen, Target, Users, Award, Clock, Shield];

interface WhyPrepareGridProps {
  items: { title: string; description: string }[];
}

export default function WhyPrepareGrid({ items }: WhyPrepareGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.2, 0, 0, 1] }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0, 14, 36, 0.06)",
            }}
            className="rounded-2xl bg-light-gray p-8 transition-colors"
          >
            <div className="mb-5 flex items-start gap-2">
              <Icon size={48} strokeWidth={1.5} className="text-navy" />
              <span
                className="text-xs font-bold text-gold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3
              className="text-lg font-bold text-navy"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {item.title}
            </h3>
            <p
              className="mt-2 text-sm leading-relaxed text-slate-blue"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
