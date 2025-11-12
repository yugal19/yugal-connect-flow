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
    <section className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="text-gradient">Do</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My expertise and focus areas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all h-full">
                <div className="p-4 bg-primary/10 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                  <exp.icon className="text-primary" size={32} />
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
