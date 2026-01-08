// import React, { useEffect, useRef } from "react";
// import { Github } from "lucide-react";

// import projectAI from "@/assets/project-ai.jpg";
// import projectAPI from "@/assets/RAG.png";
// import projectSatellite from "@/assets/voice.jpg";
// import AiAgent from "@/assets/AI_Agent.png";
// import projectVoice from "@/assets/voice_agent.webp";

// const projects = [
//   {
//     title: "Josby",
//     description:
//       "A real-time job finder across LinkedIn & Naukri with automated AI filtering.",
//     image: projectAI,
//     tech: [
//       "Python",
//       "FastAPI",
//       "GeminiAPI",
//       "BeautifulSoup",
//       "Scraping",
//       "MongoDB",
//     ],
//     github: "https://github.com",
//   },
//   {
//     title: "Voice Agent",
//     description:
//       "A voice-based agent capable of receiving calls and answering user queries live.",
//     image: projectVoice,
//     tech: ["FastAPI", "Speech Recognition", "LiveKit", "Twilio"],
//     github: "https://github.com/yugal19/livekit-voice-agent",
//   },
//   {
//     title: "AI RAG Pipeline",
//     description:
//       "A high-performance RAG pipeline using LanceDB for semantic search and fast document retrieval.",
//     image: projectAPI,
//     tech: ["Python", "LanceDB", "Gemini API", "Embeddings"],
//     github: "https://github.com/yugal19/rag-implementation",
//   },
//   {
//     title: "Voice Desktop Automation",
//     description:
//       "Hands-free desktop automation powered by a voice-controlled MCP agent.",
//     image: projectSatellite,
//     tech: ["Python", "Deepgram", "MCP Server", "subprocess", "Web Socket"],
//     github: "https://github.com/yugal19/desktop-automation",
//   },
//   {
//     title: "Agentic ChatBot",
//     description: "An intelligent chatbot with autonomous search using Tavily.",
//     image: AiAgent,
//     tech: ["Python", "GeminiAPI", "Tavily Search"],
//     github: "https://github.com/yugal19/AI-Agentic-Chatbot-Repo",
//   },
// ];

// export default function Projects() {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const lineRef = useRef<HTMLDivElement | null>(null);
//   const glowRef = useRef<HTMLDivElement | null>(null);
//   const rafRef = useRef<number | null>(null);

//   useEffect(() => {
//     const update = () => {
//       const section = sectionRef.current;
//       const line = lineRef.current;
//       const glow = glowRef.current;
//       if (!section || !line || !glow) return;

//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.offsetHeight;
//       const scrollY = window.scrollY;
//       const viewH = window.innerHeight;

//       const start = sectionTop;
//       const end = sectionTop + sectionHeight - viewH;

//       const raw = (scrollY - start) / (end - start);
//       const progress = Math.min(Math.max(raw, 0), 1);

//       const travel = line.clientHeight - glow.clientHeight;
//       const y = progress * travel;

//       glow.style.transform = `translateY(${y}px)`;
//     };

//     window.addEventListener("scroll", update, { passive: true });
//     window.addEventListener("resize", update);
//     update();

//     return () => {
//       window.removeEventListener("scroll", update);
//       window.removeEventListener("resize", update);
//     };
//   }, []);

//   return (
//     <section id="projects" ref={sectionRef} className="py-20 px-6 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background -z-10" />

//       {/* Header */}
//       <div className="text-center mb-16">
//         <h2 className="text-6xl font-extrabold font-jakarta mb-4">
//           Featured{" "}
//           <span className="bg-gradient-to-r from-purple-400 to-violet-600 text-transparent bg-clip-text">
//             Projects
//           </span>
//         </h2>
//         <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
//           A curated selection of projects blending AI, engineering, and clean
//           system design.
//         </p>
//         <div className="mt-6 h-1 w-56 mx-auto bg-gradient-to-r from-purple-400 to-violet-600 rounded-full" />
//       </div>

//       {/* Center line container (glow will move inside this) */}
//       <div
//         ref={lineRef}
//         className="pointer-events-none absolute left-1/2 top-[260px] -translate-x-1/2 w-px h-[calc(100%-320px)]"
//       >
//         {/* faint base line */}
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
//         {/* moving glow / scanner */}
//         <div
//           ref={glowRef}
//           className="absolute left-0 w-px h-28 bg-purple-900 blur-[1px]"
//           style={{ transform: "translateY(0px)" }}
//         />
//       </div>

//       {/* Projects list */}
//       <div className="container mx-auto max-w-7xl space-y-24 relative">
//         {projects.map((project, index) => {
//           const isLeft = index % 2 === 0;

//           return (
//             <div
//               key={project.title}
//               className={`group relative flex flex-col md:flex-row items-start gap-12 ${
//                 !isLeft ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               {/* IMAGE */}
//               <div className="relative w-full md:w-1/2 h-[420px] md:h-[460px] rounded-2xl overflow-hidden border border-border shadow-lg">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-contain"
//                 />

//                 <div
//                   className={`absolute bottom-4 flex items-center gap-4 ${
//                     isLeft ? "left-4" : "right-4"
//                   }`}
//                 >
//                   <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-700 text-white font-semibold text-lg shadow-lg">
//                     {project.title}
//                   </div>

//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="p-3 rounded-xl bg-purple-600 text-white shadow-lg hover:opacity-90 transition"
//                   >
//                     <Github size={18} />
//                   </a>
//                 </div>
//               </div>

//               {/* PANEL */}
//               <div
//                 className={`
//                   w-full md:w-1/2 flex items-center justify-center
//                   bg-card border border-border rounded-2xl shadow-lg p-8
//                   opacity-0 pointer-events-none
//                   transition-transform duration-500 ease-out
//                   ${
//                     isLeft
//                       ? "translate-x-12 group-hover:translate-x-0"
//                       : "-translate-x-12 group-hover:-translate-x-0"
//                   }
//                   group-hover:opacity-100 group-hover:pointer-events-auto
//                 `}
//               >
//                 <div className="max-w-xl">
//                   <p className="text-neutral-300 text-lg leading-relaxed mb-6">
//                     {project.description}
//                   </p>

//                   <div className="flex flex-wrap gap-2">
//                     {project.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm font-semibold border border-border"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import { Github } from "lucide-react";

// import projectAI from "@/assets/project-ai.jpg";
// import projectAPI from "@/assets/RAG.png";
// import projectSatellite from "@/assets/voice.jpg";
// import AiAgent from "@/assets/AI_Agent.png";
// import projectVoice from "@/assets/voice_agent.webp";

// const projects = [
//   {
//     title: "Josby",
//     description:
//       "A real-time job finder across LinkedIn & Naukri with automated AI filtering.",
//     image: projectAI,
//     tech: [
//       "Python",
//       "FastAPI",
//       "GeminiAPI",
//       "BeautifulSoup",
//       "Scraping",
//       "MongoDB",
//     ],
//     github: "https://github.com",
//   },
//   {
//     title: "Voice Agent",
//     description:
//       "A voice-based agent capable of receiving calls and answering user queries live.",
//     image: projectVoice,
//     tech: ["FastAPI", "Speech Recognition", "LiveKit", "Twilio"],
//     github: "https://github.com/yugal19/livekit-voice-agent",
//   },
//   {
//     title: "AI RAG Pipeline",
//     description:
//       "A high-performance RAG pipeline using LanceDB for semantic search and fast document retrieval.",
//     image: projectAPI,
//     tech: ["Python", "LanceDB", "Gemini API", "Embeddings"],
//     github: "https://github.com/yugal19/rag-implementation",
//   },
//   {
//     title: "Voice Desktop Automation",
//     description:
//       "Hands-free desktop automation powered by a voice-controlled MCP agent.",
//     image: projectSatellite,
//     tech: ["Python", "Deepgram", "MCP Server", "subprocess", "Web Socket"],
//     github: "https://github.com/yugal19/desktop-automation",
//   },
//   {
//     title: "Agentic ChatBot",
//     description: "An intelligent chatbot with autonomous search using Tavily.",
//     image: AiAgent,
//     tech: ["Python", "GeminiAPI", "Tavily Search"],
//     github: "https://github.com/yugal19/AI-Agentic-Chatbot-Repo",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="relative py-32 px-6 bg-background">
//       <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/50 to-background" />

//       {/* HEADER (put on top of beam via z-10) */}
//       <div className="text-center mb-24 relative z-10">
//         <h2 className="text-6xl font-extrabold mb-4">
//           Featured{" "}
//           <span className="bg-gradient-to-r from-purple-400 to-violet-600 text-transparent bg-clip-text">
//             Projects
//           </span>
//         </h2>
//         <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
//           A curated selection of projects blending AI, engineering, and clean
//           system design.
//         </p>
//         <div className="mt-6 h-1 w-56 mx-auto bg-gradient-to-r from-purple-400 to-violet-600 rounded-full" />
//       </div>

//       {/* CENTER STICKY BEAM
//           NOTE:
//             - top-[260px] ensures the beam starts below the header (adjust if your header size is different)
//             - h-[calc(100%-320px)] sets beam height leaving gaps at top/bottom (adjust 320px to change bottom gap)
//             - hidden on small screens (remove `hidden md:block` to show on mobile)
//       */}
//       <div className="pointer-events-none md:block absolute left-1/2 top-[260px] -translate-x-1/2 w-[6px] h-[calc(100%-320px)] flex justify-center">
//         <div className="sticky top-1/3">
//           <svg
//             width="6"
//             height="100%"
//             viewBox="0 0 6 1000"
//             preserveAspectRatio="none"
//             fill="none"
//           >
//             <defs>
//               <linearGradient
//                 id="beamGradient"
//                 x1="0"
//                 y1="0"
//                 x2="0"
//                 y2="1000"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
//                 <stop offset="30%" stopColor="#18CCFC" stopOpacity="1" />
//                 <stop offset="55%" stopColor="#6344F5" stopOpacity="1" />
//                 <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
//               </linearGradient>
//             </defs>

//             <path
//               d="M3 0 V1000"
//               stroke="url(#beamGradient)"
//               strokeWidth="2"
//               strokeLinecap="round"
//               style={{
//                 filter: "drop-shadow(0 0 6px rgba(124,231,255,0.7))",
//               }}
//             />
//           </svg>
//         </div>
//       </div>

//       {/* PROJECT LIST */}
//       <div className="container mx-auto max-w-7xl space-y-28 relative">
//         {projects.map((project, index) => {
//           const isLeft = index % 2 === 0;

//           return (
//             <div
//               key={project.title}
//               className={`relative flex flex-col md:flex-row items-center gap-12 ${
//                 !isLeft ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               {/* IMAGE */}
//               <div className="relative w-full md:w-1/2 h-[420px] rounded-2xl overflow-hidden border border-border shadow-lg">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                 />

//                 <div
//                   className={`absolute bottom-4 flex items-center gap-4 ${
//                     isLeft ? "left-4" : "right-4"
//                   }`}
//                 >
//                   <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-700 text-white font-semibold text-lg shadow-lg">
//                     {project.title}
//                   </div>

//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="p-3 rounded-xl bg-purple-600 text-white shadow-lg hover:opacity-90 transition"
//                   >
//                     <Github size={18} />
//                   </a>
//                 </div>
//               </div>

//               {/* INFO PANEL */}
//               <div className="w-full md:w-1/2 bg-card border border-border rounded-2xl shadow-lg p-8">
//                 <p className="text-neutral-300 text-lg leading-relaxed mb-6">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm font-semibold border border-border"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
"use client";
import React, { useState } from "react";
import { Github } from "lucide-react";
import { TracingBeam } from "@/components/ui/tracing-beam";

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
    title: "Voice Desktop Automation",
    description:
      "Hands-free desktop automation powered by a voice-controlled MCP agent.",
    image: projectSatellite,
    tech: ["Python", "Deepgram", "MCP Server", "subprocess", "Web Socket"],
    github: "https://github.com/yugal19/desktop-automation",
  },
  {
    title: "Agentic ChatBot",
    description: "An intelligent chatbot with autonomous search using Tavily.",
    image: AiAgent,
    tech: ["Python", "GeminiAPI", "Tavily Search"],
    github: "https://github.com/yugal19/AI-Agentic-Chatbot-Repo",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-32">
      <TracingBeam>
        <div className="space-y-40">
          {projects.map((project, index) => {
            const isLeft = index % 2 === 0;
            const isHovered = hovered === index;

            return (
              <div
                key={index}
                className="grid grid-cols-[1fr_100px_1fr] items-center"
              >
                {/* LEFT COLUMN */}
                <div className="flex justify-end">
                  {isLeft && (
                    <ProjectImage
                      project={project}
                      onHover={setHovered}
                      index={index}
                    />
                  )}
                  {!isLeft && isHovered && (
                    <ProjectDescription project={project} />
                  )}
                </div>

                {/* CENTER BEAM COLUMN */}
                <div />

                {/* RIGHT COLUMN */}
                <div className="flex justify-start">
                  {!isLeft && (
                    <ProjectImage
                      project={project}
                      onHover={setHovered}
                      index={index}
                    />
                  )}
                  {isLeft && isHovered && (
                    <ProjectDescription project={project} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </TracingBeam>
    </section>
  );
}

function ProjectImage({
  project,
  index,
  onHover,
}: {
  project: any;
  index: number;
  onHover: (v: number | null) => void;
}) {
  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="relative w-[520px] h-[360px] rounded-2xl overflow-hidden border border-border shadow-lg cursor-pointer"
    >
      <img src={project.image} className="w-full h-full object-contain" />

      <div className="absolute bottom-4 left-4 flex items-center gap-3">
        <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-700 text-white font-semibold shadow">
          {project.title}
        </div>
        <a href={project.github} target="_blank">
          <Github className="text-white" />
        </a>
      </div>
    </div>
  );
}

function ProjectDescription({ project }: { project: any }) {
  return (
    <div className="w-[520px] bg-card border border-border rounded-2xl shadow-xl p-8 animate-fade-in">
      <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech: string) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-secondary text-sm border border-border text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
