import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Code2, Brain } from "lucide-react";

const experiences = [
  {
    icon: Code2,
    title: "Backend Developer",
    description: "Building scalable REST APIs with FastAPI, MongoDB, and PostgreSQL",
    skills: ["FastAPI", "MongoDB", "PostgreSQL", "Docker"],
  },
  {
    icon: Brain,
    title: "AI Engineer",
    description: "Developing RAG pipelines, autonomous agents, and computer vision systems",
    skills: ["RAG", "LangChain", "OpenAI", "Computer Vision"],
  },
  {
    icon: Briefcase,
    title: "Full-Stack Integration",
    description: "Connecting AI capabilities with modern web applications",
    skills: ["API Design", "WebSockets", "Real-time Systems", "Cloud Deployment"],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background -z-10" />
      
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            What I <span className="text-gradient">Do</span>
          </h2>
          <div className="relative inline-block">
            <p className="text-muted-foreground text-lg mb-2">
              My expertise and focus areas
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mx-auto"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative glass-card rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(99,179,237,0.3)] transition-all h-full">
                <div className="p-5 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <exp.icon className="text-primary" size={36} />
                </div>

                <h3 className="text-2xl font-bold mb-3">{exp.title}</h3>
                <p className="text-foreground/80 mb-6">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
