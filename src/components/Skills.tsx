import { useState, useEffect, useRef } from "react";
import {
  Code2,
  Globe,
  Server,
  Database,
  Cpu,
  Cloud,
  Boxes,
  FileJson,
  Atom,
  Wrench,
  Braces,
  Layers,
  Network,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: Globe },
      { name: "CSS", icon: Layers },
      { name: "JavaScript", icon: FileJson },
      { name: "React.js", icon: Atom },
      { name: "TypeScript", icon: Braces },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: Code2 },
      { name: "FastAPI", icon: Server },
      { name: "REST APIs", icon: Layers },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "MinIO", icon: Cloud },
    ],
  },
  {
    title: "AI & Tools",
    skills: [
      { name: "LangChain", icon: Cpu },
      { name: "LiveKit", icon: Network },
      { name: "Twilio", icon: Wrench },
      { name: "Docker", icon: Boxes },
      { name: "Appwrite", icon: Cloud },
    ],
  },
];

const Skills = () => {
  // state: which groups are currently visible (per-group)
  const [visibleGroups, setVisibleGroups] = useState<boolean[]>(() =>
    new Array(skillGroups.length).fill(false)
  );

  // refs: observe the group wrappers (non-transformed elements)
  const wrapperRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleGroups((prev) => {
          const next = prev.slice();
          entries.forEach((entry) => {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx)) {
              next[idx] = entry.isIntersecting;
            }
          });
          return next;
        });
      },
      {
        threshold: 0.45,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    wrapperRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      wrapperRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background same as Hero */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/50 to-background" />

      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="
              text-4xl md:text-5xl font-bold tracking-tight mb-4
              text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-800 to-cyan-700
            "
          >
            Technical Skills
          </h2>

          <p className="text-gray-400 text-lg">
            Tools and technologies I work with.
          </p>

          <div className="mt-6 h-1 w-48 mx-auto bg-gradient-to-r from-purple-800 to-cyan-700 rounded-full" />
        </div>

        {/* Groups */}
        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => {
            const isShown = !!visibleGroups[groupIndex];

            return (
              // wrapper: observed by IntersectionObserver (no transforms here)
              <div
                key={group.title}
                data-index={groupIndex}
                ref={(el) => (wrapperRefs.current[groupIndex] = el)}
                className="space-y-4"
              >
                {/* inner animated wrapper: slides from extreme left -> center */}
                <div
                  className={`group-slide ${isShown ? "show" : ""}`}
                  aria-hidden={!isShown}
                >
                  {/* Title (slides with wrapper) */}
                  <h3 className="text-xl font-semibold text-white border-l-4 border-purple-400 pl-3 group-title">
                    {group.title}
                  </h3>

                  {/* Items container */}
                  <div className="flex flex-wrap gap-5 mt-3">
                    {group.skills.map((skill, skillIndex) => {
                      // wait for the group wrapper to finish its slide (700ms),
                      // then stagger items: baseDelay ≈ wrapper duration + small buffer
                      const baseDelay = 760; // ms
                      const perItem = 90; // ms per item
                      const delayMs = baseDelay + skillIndex * perItem;

                      return (
                        <div
                          key={skill.name}
                          className={`item-slide ${
                            isShown ? "show" : ""
                          } flex items-center gap-3 px-5 py-2.5 rounded-lg border border-gray-700 bg-slate-801/50 shadow-sm`}
                          style={{
                            transitionDelay: `${isShown ? delayMs : 0}ms`,
                          }}
                        >
                          {/* ICON → colored */}
                          <skill.icon className="w-5 h-5 text-purple-400 to " />

                          {/* LABEL → thin font */}
                          <span className="text-sm text-gray-200 font-light tracking-wide">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
