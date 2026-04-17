"use client";

import { useEffect, useState } from "react";

type P = {
  x: number;
  y: number;
  size: number;
  dur: number;
  delay: number;
  opacity: number;
  color: string;
};

const COLORS = ["#ffd239", "#ffd239", "#41b6e1", "#c9f442", "#ffd239", "#919191"];

export function Particles() {
  const [list, setList] = useState<P[]>([]);

  useEffect(() => {
    setList(
      Array.from({ length: 28 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3.2 + 1.2,
        dur: Math.random() * 18 + 14,
        delay: Math.random() * 14,
        opacity: Math.random() * 0.28 + 0.06,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      })),
    );
  }, []);

  if (list.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {list.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
            animation: `particle-float ${p.dur}s ${p.delay}s ease-in-out infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}
