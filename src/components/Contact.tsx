import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/yugal19",
    color: "hover:text-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yugal-chandak-25b993285/",
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
    href: "mailto:yugalchandak19@gmail.com",
    color: "hover:text-red-400",
  },
];

const SERVICE_ID = "vault_sec";
const TEMPLATE_ID = "template_ws9lw2e"; // <- You can rename based on EmailJS template
const PUBLIC_KEY = "JlaAcZzaylyYl--Pj";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      from_name: formData.name,
      from_email: formData.email,
      from_message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY)
      .then(() => {
        toast({
          title: "Message Sent! 🚀",
          description: "Thanks for reaching out! I’ll get back to you soon.",
        });

        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast({
          title: "Error ❌",
          description:
            "Something went wrong while sending your message. Try again!",
          variant: "destructive",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="connect" className="py-20 px-6 relative overflow-hidden">
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
            Let’s <span className="text-gradient">Connect</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-2">
            Let's build something amazing together! Reach out to collaborate or
            just say hi 👋
          </p>

          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-foreground/80 mb-8">
                I'm always open to discussing new projects, creative ideas, and
                opportunities to be a part of.
              </p>

              <div className="flex gap-4 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass-card rounded-lg transition-all ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon
                      size={18}
                      className="opacity-80 hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — FORM */}
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
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-primary-foreground hover:shadow-[0_0_30px_rgba(99,179,237,0.5)] transition-all"
              >
                <Send size={18} className="mr-2" />
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
