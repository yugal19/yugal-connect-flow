import React from "react";
import { Github } from "lucide-react";

import projectAI from "@/assets/project-ai.jpg";
import projectAPI from "@/assets/RAG.png";
import projectSatellite from "@/assets/voice.jpg";
import AiAgent from "@/assets/AI_Agent.png";
import projectVoice from "@/assets/voice_agent.webp";

const projects = [
  {
    title: "Josby",
    description:
      "A real-time job finder across LinkedIn & Naukri with automated AI filtering.",
    image: projectAI,
    tech: [
      "Python",
      "FastAPI",
      "GeminiAPI",
      "BeautifulSoup",
      "Scraping",
      "MongoDB",
    ],
    github: "https://github.com",
  },
  {
    title: "Voice Agent",
    description:
      "A voice-based agent capable of receiving calls and answering user queries live.",
    image: projectVoice,
    tech: ["FastAPI", "Speech Recognition", "LiveKit", "Twilio"],
    github: "https://github.com/yugal19/livekit-voice-agent",
  },
  {
    title: "AI RAG Pipeline",
    description:
      "A high-performance RAG pipeline using LanceDB for semantic search and fast document retrieval.",
    image: projectAPI,
    tech: ["Python", "LanceDB", "Gemini API", "Embeddings"],
    github: "https://github.com/yugal19/rag-implementation",
  },
  {
    title: "Agentic ChatBot",
    description: "An intelligent chatbot with autonomous search using Tavily.",
    image: AiAgent,
    tech: ["Python", "GeminiAPI", "Tavily Search"],
    github: "https://github.com/yugal19/AI-Agentic-Chatbot-Repo",
  },
  {
    title: "Voice Desktop Automation",
    description:
      "Hands-free desktop automation powered by a voice-controlled MCP agent.",
    image: projectSatellite,
    tech: ["Python", "Deepgram", "MCP Server", "subprocess"],
    github: "https://github.com/yugal19/desktop-automation",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background -z-10" />

      <div className="text-center mb-16">
        <h2 className="text-6xl font-extrabold font-jakarta mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
          A curated selection of projects blending AI, engineering, and clean
          system design.
        </p>
        <div className="mt-6 h-1 w-56 mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full" />
      </div>

      <div className="container mx-auto max-w-7xl space-y-24">
        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;

          return (
            // .group must wrap both image and panel so group-hover works
            <div
              key={project.title}
              className={`group relative flex flex-col md:flex-row items-start gap-12 ${
                !isLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE (left or right depending on zig-zag) */}
              <div className="relative w-full md:w-1/2 h-[420px] md:h-[460px] rounded-2xl overflow-hidden border border-border shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                {/* two separate boxes inside the image, same corner */}
                <div
                  className={`absolute bottom-4 flex items-center gap-4 ${
                    isLeft ? "left-4" : "right-4"
                  }`}
                >
                  {/* Project name box (bright purple gradient) */}
                  <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-700 text-white font-semibold text-lg shadow-lg">
                    {project.title}
                  </div>

                  {/* GitHub box (bright cyan-blue) */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg hover:opacity-90 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* SLIDE-OUT PANEL: occupies the other half (same size as image) */}
              {/* initial state: translated fully off toward its originating image side */}
              {/* on group-hover it translates to 0 and becomes visible */}
              <div
                className={`
                  w-full md:w-1/2
                  flex items-center justify-center
                  /* visual styling */
                  bg-card border border-border rounded-2xl shadow-lg p-8

                  /* initial  state */
                  opacity-0 pointer-events-none

                  /* translation and hover show */
                  transition-transform  duration-500 ease-out
                  ${
                    isLeft
                      ? "translate-x-12 group-hover:translate-x-0"
                      : "-translate-x-12 group-hover:-translate-x-0"
                  }
                  group-hover:opacity-100 group-hover:pointer-events-auto
                `}
              >
                <div className="max-w-xl">
                  <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm font-semibold border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
