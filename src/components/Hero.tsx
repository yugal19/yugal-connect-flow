import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const roles = [
  "Backend Developer",
  "AI Enthusiast",
  "FastAPI Expert",
  "Python Developer",
  "API Builder",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Hi, I'm <span className="text-gradient">Yugal Chandak</span> 👋
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-muted-foreground mb-6 h-12 flex items-center justify-center md:justify-start"
            >
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[roleIndex]}
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-foreground/80 max-w-2xl mb-8"
            >
              I'm a 3rd-year Data Science and AI student at IIIT Naya Raipur, passionate about
              building scalable backend systems, integrating AI into modern products, and exploring
              real-world applications of technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 justify-center md:justify-start flex-wrap"
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 179, 237, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-primary-foreground rounded-full font-semibold shadow-lg transition-all"
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("connect")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-card rounded-full font-semibold hover:border-primary/50 transition-all"
              >
                Let's Connect
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500 animate-glow" />
              <div className="relative p-2 bg-background rounded-full">
                <img
                  src={profileImage}
                  alt="Yugal Chandak"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-primary/30"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("skills")}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-primary hover:text-primary/80 transition-colors"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
