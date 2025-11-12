import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import projectAI from "@/assets/project-ai.jpg";
import projectAPI from "@/assets/project-api.jpg";
import projectSatellite from "@/assets/project-satellite.jpg";
import projectVoice from "@/assets/project-voice.jpg";

const projects = [
  {
    title: "Autonomous Code Review AI",
    description: "Real-time GitHub-integrated AI assistant that reviews code, suggests improvements, and maintains code quality standards across repositories.",
    image: projectAI,
    tags: ["AI", "Backend", "GitHub API"],
    tech: ["Python", "FastAPI", "OpenAI", "LangChain", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Voice-Controlled Browser Extension",
    description: "Accessibility-focused browser extension with FastAPI backend enabling hands-free web navigation through voice commands.",
    image: projectVoice,
    tags: ["Backend", "AI", "Accessibility"],
    tech: ["FastAPI", "Speech Recognition", "JavaScript", "Chrome Extension"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI RAG Pipeline with LanceDB",
    description: "High-performance document retrieval system using RAG architecture with vector embeddings for semantic search and intelligent query responses.",
    image: projectAPI,
    tags: ["AI", "Backend", "Database"],
    tech: ["Python", "LanceDB", "OpenAI", "Vector Embeddings"],
    github: "https://github.com",
  },
  {
    title: "Satellite Change Detection System",
    description: "Multi-temporal satellite image analysis system using computer vision to detect environmental changes and generate insights.",
    image: projectSatellite,
    tags: ["AI", "Computer Vision"],
    tech: ["Python", "OpenCV", "TensorFlow", "Satellite Imagery"],
    github: "https://github.com",
  },
];

const allTags = ["All", "AI", "Backend", "Tools", "Frontend"];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedTag, setSelectedTag] = useState("All");

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            A curated selection of projects that reflect my commitment to simplicity and purposeful design
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-foreground/80 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all"
                  >
                    <Github size={18} />
                    Code
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:glow-primary transition-all"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
