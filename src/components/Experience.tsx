import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lightbulb, Code2, Brain } from "lucide-react";

const experiences = [
  {
    icon: Code2,
    title: "Backend & Systems",
    description:
      "Enjoy creating reliable backend systems, APIs, and infrastructure that scale smoothly.",
    skills: ["FastAPI", "Databases", "Docker", "Cloud"],
  },
  {
    icon: Brain,
    title: "AI & Intelligent Systems",
    description:
      "Integrating AI with real products—from RAG pipelines to autonomous agents.",
    skills: ["LLMs", "Voice-Agents", "MCP servers"],
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "Love turning problems into solutions that are simple, reliable, and built to scale.",
    skills: ["System Design", "Debugging", "Problem Breakdown"],
  },
];

const Experience = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/40 to-background" />

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          What I{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
            Do
          </span>
        </h2>

        <p className="text-muted-foreground text-lg text-center mb-16">
          The areas I enjoy working in
        </p>

        {/* Centered Cards */}
        <div className="grid md:grid-cols-3 gap-8 justify-center items-center">
          {experiences.map((exp, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true, // 🔥 animation runs ONCE only
              threshold: 0.3,
            });

            return (
              <motion.div
                key={exp.title}
                ref={ref}
                initial={{ x: -200, opacity: 0 }} // 🔥 come from LEFT
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.25,
                }}
                className="relative group h-full"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr blur-xl opacity-0 transition-all duration-500" />

                {/* Card */}
                <div
                  className="
                  relative rounded-2xl p-8 
                  bg-[#0e121b]/80 backdrop-blur-xl
                  border border-purple-700/20 
                  group-hover:border-purple-400
                  shadow-[0_8px_25px_rgba(0,0,0,0.45)]
                  transition-all duration-300
                  flex flex-col justify-between
                  min-h-[420px]
                "
                >
                  {/* Top */}
                  <div>
                    <div
                      className="p-5 rounded-xl mb-6 bg-gradient-to-br 
                      from-purple-600/20
                      border border-purple-700/30"
                    >
                      <exp.icon className="text-purple-200" size={36} />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-purple-200">
                      {exp.title}
                    </h3>

                    <p className="text-gray-300">{exp.description}</p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full border border-purple-200/30 text-purple-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
