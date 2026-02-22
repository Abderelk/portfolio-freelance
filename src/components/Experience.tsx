"use client";

import { experiences, education } from "@/lib/data";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative bg-[#080b14]">
      <div className="glow-orb absolute top-0 -left-[100px] w-[400px] h-[400px] bg-violet-500 opacity-[0.07]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-semibold tracking-widest uppercase gradient-text">
            04 — Parcours
          </span>
          <div className="h-px flex-1 bg-white/[0.08]" />
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-16 text-slate-100">
          Mon <span className="gradient-text">parcours</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experiences */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-indigo-600/15">
                <Briefcase size={18} className="text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Expériences</h3>
            </div>

            <div className="relative">
              <div className="absolute left-3.5 top-0 bottom-0 w-px bg-white/[0.08]" />

              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative pl-12">
                    <div
                      className="absolute left-0 top-1.5 w-7 h-7 rounded-full border-2 flex items-center justify-center bg-[#080b14]"
                      style={{ borderColor: exp.color, boxShadow: `0 0 12px ${exp.color}40` }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: exp.color }} />
                    </div>

                    <div className="p-5 rounded-2xl glass-card">
                      {exp.current && (
                        <span
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
                          style={{ background: `${exp.color}15`, color: exp.color }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: exp.color }} />
                          En cours
                        </span>
                      )}

                      <div className="mb-2">
                        <h4 className="font-bold text-base text-slate-100">{exp.title}</h4>
                        <p className="text-sm font-semibold" style={{ color: exp.color }}>
                          {exp.company} · {exp.type}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3 text-xs mb-3 text-slate-500">
                        <span className="flex items-center gap-1"><Calendar size={11} />{exp.period}</span>
                        <span className="flex items-center gap-1"><MapPin size={11} />{exp.location}</span>
                      </div>

                      <p className="text-sm leading-relaxed mb-4 text-slate-400">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.stack.map((tech) => (
                          <span key={tech} className="text-xs px-2.5 py-1 rounded-full" style={{ background: `${exp.color}12`, color: exp.color }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-cyan-500/15">
                <GraduationCap size={18} className="text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Formation</h3>
            </div>

            <div className="relative">
              <div className="absolute left-3.5 top-0 bottom-0 w-px bg-white/[0.08]" />

              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="relative pl-12">
                    <div
                      className={`absolute left-0 top-1.5 w-7 h-7 rounded-full border-2 flex items-center justify-center bg-[#080b14] ${
                        edu.current ? "border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]" : "border-slate-600"
                      }`}
                    >
                      <div className={`w-2.5 h-2.5 rounded-full ${edu.current ? "bg-cyan-400" : "bg-slate-600"}`} />
                    </div>

                    <div className="p-5 rounded-2xl glass-card">
                      {edu.current && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-3 bg-cyan-500/15 text-cyan-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          En cours
                        </span>
                      )}
                      <h4 className="font-bold text-base mb-1 text-slate-100">{edu.degree}</h4>
                      <p className="text-sm font-semibold mb-1 text-cyan-400">{edu.school}</p>
                      {edu.subtitle && (
                        <p className="text-xs mb-2 text-slate-500">{edu.subtitle}</p>
                      )}
                      <span className="text-xs flex items-center gap-1 text-slate-500">
                        <Calendar size={11} />{edu.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendation */}
            <div className="mt-10 p-5 rounded-2xl border border-indigo-600/20 bg-indigo-600/5">
              <p className="text-sm font-semibold mb-1 text-indigo-400">💬 Recommandation</p>
              <p className="text-sm leading-relaxed text-slate-400">
                En cours d&apos;obtention auprès de mon tuteur d&apos;alternance chez Kaptcher.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
