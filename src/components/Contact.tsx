import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    color: "hover:text-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "hover:text-blue-500",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    color: "hover:text-sky-400",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:yugal@example.com",
    color: "hover:text-red-400",
  },
];

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="connect" className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background -z-10" />
      
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="relative inline-block">
            <p className="text-muted-foreground text-lg mb-2">
              Let's build something amazing together! Reach out to collaborate or just say hi 👋
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mx-auto"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-foreground/80 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your visions. Feel free to reach out through any of these platforms:
              </p>

              <div className="flex gap-4 mb-8">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0 0 20px rgba(99, 179, 237, 0.5)" }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 glass-card rounded-xl transition-all ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-foreground/80">
                  <Mail className="text-primary" size={20} />
                  <span>yugal@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <Github className="text-primary" size={20} />
                  <span>github.com/yugalchandak</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 space-y-6"
            >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or just say hello..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-primary-foreground hover:shadow-[0_0_30px_rgba(99,179,237,0.5)] transition-all"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="text-center mt-20 pt-8 border-t border-border"
      >
        <p className="text-muted-foreground">
          Designed & Built by <span className="text-gradient font-semibold">Yugal Chandak</span> © 2025
        </p>
      </motion.footer>
    </section>
  );
};

export default Contact;
