"use client";

import { projects } from "@/lib/data";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 relative bg-[#0d1117]">
      <div className="glow-orb absolute bottom-0 -right-[100px] w-[500px] h-[500px] bg-cyan-500 opacity-[0.06]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-semibold tracking-widest uppercase gradient-text">
            03 — Réalisations
          </span>
          <div className="h-px flex-1 bg-white/[0.08]" />
        </div>

        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
            Mes <span className="gradient-text">projets</span>
          </h2>
          <a
            href="https://github.com/Abderelk"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-300"
          >
            Voir GitHub <ArrowRight size={14} />
          </a>
        </div>

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((project, i) => (
            <div key={project.id} className="group relative p-8 rounded-3xl glass-card overflow-hidden min-h-[280px]">
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] translate-x-[30%] -translate-y-[30%]"
                style={{ background: project.color, opacity: 0.08 }}
              />

              <div className="text-xs font-semibold tracking-widest uppercase mb-6 text-slate-500">
                0{i + 1}
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: `${project.color}20`, border: `1px solid ${project.color}30` }}
                >
                  {project.emoji}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-slate-100">{project.title}</h3>
                  <p className="text-sm font-medium" style={{ color: project.color }}>{project.shortDesc}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-6 text-slate-400">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg text-white transition-all hover:opacity-80"
                    style={{ background: project.color }}
                  >
                    <ExternalLink size={12} />
                    Voir le projet
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg transition-all glass-card text-slate-400"
                  >
                    <Github size={12} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Others */}
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((project) => (
            <div key={project.id} className="p-6 rounded-2xl glass-card relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[40px] translate-x-[30%] -translate-y-[30%]"
                style={{ background: project.color, opacity: 0.06 }}
              />
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: `${project.color}20` }}
                >
                  {project.emoji}
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-100">{project.title}</h3>
                  <p className="text-xs font-medium mt-0.5" style={{ color: project.color }}>{project.shortDesc}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4 text-slate-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-full" style={{ background: `${project.color}12`, color: project.color }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
