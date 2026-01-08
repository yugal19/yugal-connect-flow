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
  const [visibleGroups, setVisibleGroups] = useState<boolean[]>(
    () => new Array(skillGroups.length).fill(false)
  );

  const wrapperRefs = useRef<Array<HTMLElement | null>>(
    new Array(skillGroups.length).fill(null)
  );

  useEffect(() => {
    if (wrapperRefs.current.length !== skillGroups.length) {
      wrapperRefs.current = new Array(skillGroups.length).fill(null);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleGroups((prev) => {
          const next = [...prev];
          entries.forEach((entry) => {
            const idx = Number(
              (entry.target as HTMLElement).dataset.index
            );
            if (!Number.isNaN(idx)) {
              next[idx] = entry.isIntersecting; // toggle on/off
            }
          });
          return next;
        });
      },
      {
        threshold: 0.3,
      }
    );

    wrapperRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/50 to-background" />

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-purple-500">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Tools and technologies I work with.
          </p>
          <div className="mt-6 h-1 w-48 mx-auto bg-purple-800 rounded-full" />
        </div>

        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => {
            const isShown = visibleGroups[groupIndex];

            return (
              <div
                key={group.title}
                data-index={groupIndex}
                ref={(el) => (wrapperRefs.current[groupIndex] = el)}
                className="space-y-4"
              >
                <div
                  className={`transform transition-all duration-1000 ease-in-out ${
                    isShown
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-24"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-white border-l-4 border-purple-500 pl-3">
                    {group.title}
                  </h3>

                  <div className="flex flex-wrap gap-5 mt-3">
                    {group.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center gap-3 px-5 py-2.5 rounded-lg border border-gray-700 shadow-sm"
                        >
                          <Icon className="w-5 h-5 text-purple-400" />
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
