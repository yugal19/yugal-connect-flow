import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Database, Brain, Cloud, Terminal, GitBranch } from "lucide-react";

const skills = [
  {
    icon: Code,
    name: "Python",
    level: 95,
    description: "FastAPI, Flask, Django",
  },
  {
    icon: Database,
    name: "Databases",
    level: 85,
    description: "SQL, MongoDB, PostgreSQL",
  },
  {
    icon: Brain,
    name: "AI/ML",
    level: 80,
    description: "RAG, LLMs, Computer Vision",
  },
  {
    icon: Cloud,
    name: "Cloud & DevOps",
    level: 75,
    description: "Docker, AWS, CI/CD",
  },
  {
    icon: Terminal,
    name: "Backend APIs",
    level: 90,
    description: "REST, GraphQL, WebSockets",
  },
  {
    icon: GitBranch,
    name: "Version Control",
    level: 85,
    description: "Git, GitHub, Collaboration",
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
