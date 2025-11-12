import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Server, Database, Brain, Cpu, FileJson, Key, Boxes, MessageSquare, PhoneCall, PackageOpen, Braces } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    subtitle: "Crafting responsive, interactive UIs with modern frameworks",
    skills: [
      { name: "HTML", icon: Code2, color: "from-orange-400 to-red-500" },
      { name: "CSS", icon: Code2, color: "from-blue-400 to-cyan-500" },
      { name: "JavaScript", icon: FileJson, color: "from-yellow-400 to-amber-500" },
      { name: "React.js", icon: Braces, color: "from-cyan-400 to-blue-500" },
      { name: "TypeScript", icon: Code2, color: "from-blue-500 to-indigo-500" },
    ],
  },
  {
    title: "Backend & APIs",
    subtitle: "Designing fast, scalable, and secure backend systems",
    skills: [
      { name: "Python", icon: Code2, color: "from-blue-400 to-yellow-400" },
      { name: "FastAPI", icon: Server, color: "from-green-400 to-emerald-500" },
      { name: "Node.js", icon: Server, color: "from-green-500 to-lime-500" },
      { name: "RESTful APIs", icon: Server, color: "from-purple-400 to-pink-500" },
      { name: "Auth & WebSockets", icon: Key, color: "from-cyan-400 to-blue-500" },
    ],
  },
  {
    title: "Databases & Storage",
    subtitle: "Efficient data management and scalable storage handling",
    skills: [
      { name: "MongoDB", icon: Database, color: "from-green-400 to-emerald-600" },
      { name: "MinIO", icon: PackageOpen, color: "from-red-400 to-rose-500" },
      { name: "SQL", icon: Database, color: "from-blue-400 to-indigo-500" },
    ],
  },
  {
    title: "AI & Developer Tools",
    subtitle: "Integrating AI and real-time communication into products",
    skills: [
      { name: "LangChain", icon: Brain, color: "from-purple-400 to-violet-500" },
      { name: "Gemini API", icon: Brain, color: "from-blue-400 to-purple-500" },
      { name: "LiveKit", icon: MessageSquare, color: "from-cyan-400 to-teal-500" },
      { name: "Twilio", icon: PhoneCall, color: "from-red-400 to-pink-500" },
    ],
  },
  {
    title: "Core Programming",
    subtitle: "Strong foundation in problem-solving and development tools",
    skills: [
      { name: "C++", icon: Cpu, color: "from-blue-500 to-purple-600" },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background -z-10" />
      
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="relative inline-block">
            <p className="text-muted-foreground text-lg mb-2">
              Tools & Technologies I work with
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mx-auto"
            />
          </div>
        </motion.div>

        <div className="space-y-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="text-center space-y-2">
                <h3 className="text-3xl font-bold text-foreground">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                  {category.subtitle}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative"
                  >
                    {/* Glass Card */}
                    <div className="glass-card rounded-2xl p-6 h-full flex flex-col items-center justify-center gap-4 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(99,179,237,0.3)]">
                      {/* Icon with gradient background */}
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                        <skill.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Skill Name */}
                      <h4 className="text-sm font-semibold text-center text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </h4>

                      {/* Neon border on hover */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-cyan-400/20 to-blue-500/20" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-primary-foreground font-semibold rounded-full hover:shadow-[0_0_30px_rgba(99,179,237,0.5)] transition-all duration-300 group"
          >
            View Projects
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
