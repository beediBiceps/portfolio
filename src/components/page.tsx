"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Terminal,
  Code,
  User,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Power,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function RetroPortfolio() {
  const [isBooted, setIsBooted] = useState(false);
  const [bootStep, setBootStep] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const [typedText, setTypedText] = useState("");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.7]);

  const bootSequence = [
    "INITIALIZING SYSTEM...",
    "LOADING PORTFOLIO.EXE...",
    "CONNECTING TO NEURAL NETWORK...",
    "SYSTEM READY",
  ];

  const fullText = "Welcome to my digital workspace...";

  // Boot sequence - optimized
  useEffect(() => {
    if (bootStep < bootSequence.length - 1) {
      const bootTimer = setTimeout(() => {
        setBootStep(bootStep + 1);
      }, 600);
      return () => clearTimeout(bootTimer);
    } else {
      const finalTimer = setTimeout(() => setIsBooted(true), 800);
      return () => clearTimeout(finalTimer);
    }
  }, [bootStep]);

  // Clock - optimized
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Typing effect - optimized
  useEffect(() => {
    if (!isBooted) return;
    let index = 0;
    const typeTimer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeTimer);
      }
    }, 80);
    return () => clearInterval(typeTimer);
  }, [isBooted]);

  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Linux",
  ];

  const projects = [
    {
      name: "TaskMaster Pro",
      description:
        "Full-stack task management application with real-time collaboration",
      tech: "React, Node.js, Socket.io, PostgreSQL",
      github: "#",
      demo: "#",
    },
    {
      name: "CodeSnippet Vault",
      description: "Developer tool for organizing and sharing code snippets",
      tech: "Next.js, TypeScript, Prisma, Tailwind CSS",
      github: "#",
      demo: "#",
    },
    {
      name: "RetroChat Terminal",
      description: "Terminal-style chat application with vintage aesthetics",
      tech: "Vue.js, Express, WebSockets, Redis",
      github: "#",
      demo: "#",
    },
  ];

  // Simplified Matrix Rain - much more performant
  const MatrixRain = () => {
    return (
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden opacity-20">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-400 text-xs font-mono"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `-10px`,
            }}
            animate={{
              y: ["0vh", "110vh"],
            }}
            transition={{
              duration: Math.random() * 2 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          >
            {Array.from({ length: 8 }).map((_, j) => (
              <div key={j} className="mb-2">
                {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    );
  };

  // Optimized Boot Screen
  const BootScreen = () => (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center space-y-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Power className="w-12 h-12 text-gray-400 mx-auto" />
        </motion.div>

        <div className="space-y-2">
          {bootSequence.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: index <= bootStep ? 1 : 0.3,
                x: index <= bootStep ? 0 : -20,
              }}
              className={`text-gray-400 font-mono text-sm ${
                index === bootStep ? "text-gray-300" : ""
              }`}
            >
              {index <= bootStep && ">"} {step}
              {index === bootStep && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="ml-1"
                >
                  █
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="w-48 h-1 bg-gray-400/20 mx-auto">
          <motion.div
            className="h-full bg-gray-400"
            initial={{ width: 0 }}
            animate={{
              width: `${((bootStep + 1) / bootSequence.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );

  // Simplified Glitch Text
  const GlitchText = ({
    children,
    className = "",
  }: {
    children: string;
    className?: string;
  }) => {
    return (
      <motion.div
        className={`relative ${className}`}
        whileHover={{
          textShadow: "2px 0 0 #ff0000, -2px 0 0 #00ff00",
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  };

  // Retro 3D Button Component
  const RetroButton = ({
    children,
    href,
    className = "",
    variant = "primary",
  }: {
    children: React.ReactNode;
    href?: string;
    className?: string;
    variant?: "primary" | "secondary" | "accent";
  }) => {
    const variants = {
      primary:
        "bg-cyan-400 border-cyan-600 shadow-[4px_4px_0px_0px_#1f2937] hover:shadow-[2px_2px_0px_0px_#1f2937]",
      secondary:
        "bg-gray-400 border-gray-600 shadow-[4px_4px_0px_0px_#1f2937] hover:shadow-[2px_2px_0px_0px_#1f2937]",
      accent:
        "bg-purple-400 border-purple-600 shadow-[4px_4px_0px_0px_#1f2937] hover:shadow-[2px_2px_0px_0px_#1f2937]",
    };

    const buttonContent = (
      <motion.button
        className={`
          ${variants[variant]}
          text-black font-bold py-2 px-4 border-2 
          transition-all duration-150 ease-in-out
          hover:translate-x-[2px] hover:translate-y-[2px]
          active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
          ${className}
        `}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.button>
    );

    if (href) {
      return <a href={href}>{buttonContent}</a>;
    }

    return buttonContent;
  };

  if (!isBooted) {
    return (
      <AnimatePresence>
        <BootScreen />
      </AnimatePresence>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-400 font-mono overflow-x-hidden">
      <MatrixRain />

      {/* Simplified Scanlines */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        style={{ opacity }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(156, 163, 175, 0.05) 2px, rgba(156, 163, 175, 0.05) 4px)",
          }}
        />
      </motion.div>

      {/* Header */}
      <motion.div
        className="border-b border-gray-400/30 bg-black/90 backdrop-blur-sm sticky top-0 z-40"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5" />
            <span className="text-sm">PORTFOLIO.EXE</span>
          </div>
          <div className="text-sm">{currentTime}</div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8 space-y-12 relative z-20">
        {/* Hero Section */}
        <motion.section
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="border border-gray-400/30 p-8 bg-black/50">
            <motion.pre
              className="text-gray-300 text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {`
 ██████╗ ██████╗ ██████╗ ███████╗██████╗ 
██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗
██║     ██║   ██║██║  ██║█████╗  ██████╔╝
██║     ██║   ██║██║  ██║██╔══╝  ██╔══██╗
╚██████╗╚██████╔╝██████╔╝███████╗██║  ██║
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝
`}
            </motion.pre>

            <motion.h1
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <GlitchText>ALEX CHEN</GlitchText>
            </motion.h1>

            <motion.h2
              className="text-xl text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              SOFTWARE ENGINEER
            </motion.h2>

            <div className="h-6">
              <p className="text-gray-200">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  █
                </motion.span>
              </p>
            </div>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.nav
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="border border-gray-400/30 bg-black/50 p-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <RetroButton href="#about" variant="primary">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  ABOUT
                </div>
              </RetroButton>
              <RetroButton href="#skills" variant="secondary">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  SKILLS
                </div>
              </RetroButton>
              <RetroButton href="#projects" variant="accent">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  PROJECTS
                </div>
              </RetroButton>
              <RetroButton href="#contact" variant="primary">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  CONTACT
                </div>
              </RetroButton>
            </div>
          </div>
        </motion.nav>

        {/* About Section */}
        <motion.section
          id="about"
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold border-b border-gray-400/30 pb-2">
            <GlitchText>{"> ABOUT.TXT"}</GlitchText>
          </h2>
          <Card className="bg-black/50 border-gray-400/30">
            <CardContent className="p-6">
              <div className="space-y-4 text-gray-200">
                <p>
                  {"> "} Passionate software engineer with 5+ years of
                  experience building scalable web applications and distributed
                  systems.
                </p>
                <p>
                  {"> "} Specialized in full-stack development with expertise in
                  modern JavaScript frameworks, cloud architecture, and DevOps
                  practices.
                </p>
                <p>
                  {"> "} When not coding, you can find me contributing to open
                  source projects, exploring new technologies, or playing retro
                  video games.
                </p>
                <div className="mt-4 p-3 border border-gray-400/20 bg-gray-400/5">
                  <p className="text-gray-300 text-sm">
                    STATUS: Available for new opportunities | LOCATION: San
                    Francisco, CA
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold border-b border-gray-400/30 pb-2">
            <GlitchText>{"> SKILLS.JSON"}</GlitchText>
          </h2>
          <Card className="bg-black/50 border-gray-400/30">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-gray-300 font-bold mb-3">
                    TECHNICAL_STACK:
                  </h3>
                  <div className="space-y-2">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-gray-400">{">"}</span>
                        <span className="text-gray-200">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-300 font-bold mb-3">SYSTEM_INFO:</h3>
                  <div className="space-y-2 text-gray-200 text-sm">
                    {[
                      "> OS: Linux/macOS/Windows",
                      "> IDE: VS Code, Vim",
                      "> Shell: Zsh/Bash",
                      "> Version Control: Git",
                      "> Cloud: AWS, Vercel, Netlify",
                      "> Databases: PostgreSQL, MongoDB",
                    ].map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {info}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold border-b border-gray-400/30 pb-2">
            <GlitchText>{"> PROJECTS.DIR"}</GlitchText>
          </h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-gray-400/30">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-300">
                          <GlitchText>
                            {"> "}
                            {project.name}
                          </GlitchText>
                        </h3>
                        <div className="flex gap-3">
                          <RetroButton
                            href={project.github}
                            variant="secondary"
                          >
                            <div className="flex items-center gap-1">
                              <Github className="w-4 h-4" />
                              CODE
                            </div>
                          </RetroButton>
                          <RetroButton href={project.demo} variant="primary">
                            <div className="flex items-center gap-1">
                              <ExternalLink className="w-4 h-4" />
                              DEMO
                            </div>
                          </RetroButton>
                        </div>
                      </div>
                      <p className="text-gray-200">{project.description}</p>
                      <div className="text-sm text-gray-300">
                        <span className="text-gray-400">TECH_STACK:</span>{" "}
                        {project.tech}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold border-b border-gray-400/30 pb-2">
            <GlitchText>{"> CONTACT.SH"}</GlitchText>
          </h2>
          <Card className="bg-black/50 border-gray-400/30">
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-gray-200">
                  {"> "} Ready to collaborate? Let{"'"}s connect and build
                  something amazing together.
                </p>
                <div className="flex flex-wrap gap-4">
                  <RetroButton
                    href="mailto:alex.chen@email.com"
                    variant="primary"
                  >
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      EMAIL
                    </div>
                  </RetroButton>
                  <RetroButton href="https://github.com" variant="secondary">
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      GITHUB
                    </div>
                  </RetroButton>
                  <RetroButton href="https://linkedin.com" variant="accent">
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      LINKEDIN
                    </div>
                  </RetroButton>
                </div>
                <div className="mt-6 p-4 border border-gray-400/20 bg-gray-400/5">
                  <pre className="text-gray-300 text-sm">
                    {`$ echo "Thanks for visiting my portfolio!"
Thanks for visiting my portfolio!
$ _`}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      █
                    </motion.span>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>

      {/* Footer */}
      <motion.footer
        className="border-t border-gray-400/30 bg-black/90 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4 text-center text-gray-300 text-sm">
          <p>{"> SYSTEM UPTIME: 2024 | BUILT WITH NEXT.JS & TAILWIND CSS"}</p>
        </div>
      </motion.footer>
    </div>
  );
}
