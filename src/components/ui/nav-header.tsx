"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

interface NavHeaderProps {
  items: NavItem[];
  onTabHover?: (href: string) => void;
  onTabLeave?: () => void;
}

function NavHeader({ items, onTabHover, onTabLeave }: NavHeaderProps) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border-2 border-navy bg-warm-white p-1"
      onMouseLeave={() => {
        setPosition((pv) => ({ ...pv, opacity: 0 }));
        onTabLeave?.();
      }}
    >
      {items.map((item) => (
        <Tab
          key={item.href}
          setPosition={setPosition}
          href={item.href}
          onHover={() => onTabHover?.(item.href)}
        >
          {item.label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  href,
  onHover,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
  href: string;
  onHover: () => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
        onHover();
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      <Link href={href} className="whitespace-nowrap">
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-navy md:h-12"
    />
  );
};

export default NavHeader;
