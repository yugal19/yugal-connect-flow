import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type HoverItem = {
  title: string;
  description: string;
  link: string;
};

export const HoverEffect = ({
  items,
  className,
  children,
}: {
  items: HoverItem[];
  className?: string;
  children?: React.ReactNode;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("relative grid py-10", className)}>
      {items.map((_, idx) => (
        <div
          key={idx}
          className="absolute inset-0 pointer-events-none"
          style={{ display: hoveredIndex === idx ? "block" : "none" }}
        />
      ))}

      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full rounded-3xl bg-purple-400/25"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.2 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              />
            )}
          </AnimatePresence>

          <div className="relative z-10">
            {children && (children as any[])[idx]}
          </div>
        </div>
      ))}
    </div>
  );
};
