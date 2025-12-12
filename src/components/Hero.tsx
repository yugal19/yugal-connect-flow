import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Github } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const roles = ["Backend Developer", "AI Enthusiast"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const name = "Yugal Chandak"

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 pt-16 md:pt-20 overflow-hidden"
    >
      {/* Clean elegant background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/50 to-background" />

      <div className="container mx-auto">
        <div
          className="
          flex flex-col md:flex-row 
          items-center justify-center 
          gap-12 md:gap-20
          "
        >
          {/* LEFT SIDE — CENTERED MORE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="
              flex-1 
              text-center md:text-left
              md:ml-12         /* SHIFT RIGHT */
              lg:ml-20         /* EXTRA CENTERING FOR LARGE SCREENS */
            "
          >
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-[1.15]"
            >
              <span className="block text-foreground/80 mb-1 font-cormorant">
                Hey, I'm
              </span>

              <motion.span
                className="block text-[hsl(265,85%,72%)] drop-shadow-sm font-cormorant font-semibold"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.2, // typing speed
                    },
                  },
                }}
              >
                {name.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 5 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>
            {/* Underline */}
            <div className="h-[3px] w-28 bg-[hsl(265,80%,65%)] rounded-full mb-8 opacity-80"></div>
            {/* Role animation */}
            <div className="text-xl md:text-2xl font-jakarta text-muted-foreground mb-6 h-12 flex items-center justify-center md:justify-start">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                {roles[roleIndex]}
              </motion.span>
            </div>
            {/* Larger description */}
            <p className="text-xl md:text-2xl font-jakarta text-foreground/80 max-w-2xl mb-10 leading-relaxed">
              A developer who enjoys building thoughtful, user-centric products
              — combining clean backend engineering, practical AI, and modern
              design.
            </p>
            {/* Buttons */}
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3 text-lg flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full shadow-lg font-semibold"
              >
                <Github size={22} /> GitHub
              </motion.a>

              <motion.button
                onClick={() => scrollToSection("connect")}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 text-lg glass-card rounded-full font-semibold hover:border-primary/50 transition-all"
              >
                Let's Connect
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT SIDE — PROFILE IMAGE WITH HOVER GLOW */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex-shrink-0 md:mr-10 lg:mr-20"
          >
            <div className="relative group">
              {/* Glow ring on hover */}
              <div
                className="
                absolute -inset-6 
                bg-gradient-to-r 
                from-purple-500/20 via-blue-500/20 to-cyan-400/20 
                rounded-full 
                blur-3xl 
                opacity-0 
                group-hover:opacity-60 
                group-hover:blur-[120px]
                transition-all 
                duration-700
              "
              />

              {/* Image */}
              <div className="relative p-4 bg-background rounded-full">
                <img
                  src={profileImage}
                  alt="Yugal Chandak"
                  className="w-[22rem] h-[22rem] md:w-[26rem] md:h-[26rem] rounded-full object-cover border-2 border-white/10 shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("skills")}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-primary hover:text-primary/80 transition-colors"
        >
          <ChevronDown size={34} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
