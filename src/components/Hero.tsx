"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden min-h-screen bg-[#080b14] pt-24 pb-16"
    >
      {/* Glow orbs */}
      <div className="glow-orb absolute -top-[200px] -right-[150px] w-[700px] h-[700px] bg-indigo-600 opacity-12" />
      <div className="glow-orb absolute bottom-0 -left-[100px] w-[500px] h-[500px] bg-cyan-500 opacity-[0.08]" />
      <div className="glow-orb animate-float absolute top-[40%] left-[45%] w-[300px] h-[300px] bg-violet-500 opacity-[0.07]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 glass-card border-indigo-600/30">
              <span
                className="w-2 h-2 rounded-full bg-green-400"
                style={{ animation: "pulse-dot 2s infinite", boxShadow: "0 0 8px #4ade80" }}
              />
              <span className="text-green-400">{personalInfo.availabilityLabel}</span>
            </div>

            {/* Name */}
            <h1 className="font-extrabold leading-none tracking-tight mb-6 text-[clamp(44px,6vw,80px)]">
              <span className="text-slate-100">{personalInfo.firstName}</span>
              <br />
              <span className="gradient-text">{personalInfo.lastName}</span>
            </h1>

            {/* Role */}
            <p className="text-2xl font-semibold mb-4 text-slate-400">
              {personalInfo.role}
            </p>

            {/* Tagline */}
            <p className="text-base leading-relaxed mb-8 max-w-lg text-slate-400">
              {personalInfo.tagline}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin size={14} />
                {personalInfo.location}
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-indigo-400"
              >
                <Mail size={14} />
                {personalInfo.email}
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-[0_8px_32px_rgba(79,70,229,0.3)]"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-100 transition-all duration-200 hover:scale-105 glass-card"
              >
                Me contacter
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-400 transition-all duration-200 hover:scale-105 glass-card"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div
            className={`relative flex justify-center transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-600 to-cyan-500 blur-[40px] opacity-30 scale-90" />

              {/* Photo */}
              <div className="relative w-72 h-80 rounded-3xl overflow-hidden border-2 border-white/[0.08]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/photo.jpg"
                  alt="Abderrahmane El Kafif"
                  className="w-full h-full object-cover object-top block"
                />
              </div>

              {/* Floating: Stack */}
              <div className="absolute -left-16 top-8 px-4 py-3 rounded-2xl glass-card animate-float min-w-[140px]">
                <div className="text-xs mb-1 text-slate-500">Stack principale</div>
                <div className="flex gap-1.5 flex-wrap">
                  {["React", "Next.js", "Node"].map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-md font-medium bg-indigo-600/20 text-indigo-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating: Experience */}
              <div className="absolute -right-12 bottom-12 px-4 py-3 rounded-2xl glass-card animate-float" style={{ animationDelay: "2s" }}>
                <div className="text-2xl font-extrabold gradient-text">3+</div>
                <div className="text-xs text-slate-500">ans d&apos;expérience</div>
              </div>

              {/* Floating: Projects */}
              <div className="absolute -right-8 top-6 px-4 py-3 rounded-2xl glass-card animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-2xl font-extrabold gradient-text">10+</div>
                <div className="text-xs text-slate-500">projets livrés</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="flex justify-center mt-16">
          <a href="#about" className="flex flex-col items-center gap-2 text-slate-500 transition-opacity hover:opacity-60">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} style={{ animation: "float 2s ease-in-out infinite" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
