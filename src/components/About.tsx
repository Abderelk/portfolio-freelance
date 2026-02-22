"use client";

import { personalInfo } from "@/lib/data";
import { Sparkles, Code2, Dumbbell } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 relative bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase gradient-text">
            01 — À propos
          </span>
          <div className="h-px flex-1 bg-white/[0.08]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-8 text-slate-100">
              Passionné par le{" "}
              <span className="gradient-text">web moderne</span>
            </h2>
            <p className="text-base leading-relaxed mb-6 text-slate-400">
              {personalInfo.description}
            </p>
            <p className="text-base leading-relaxed mb-10 text-slate-400">
              Actuellement en Bachelor Développement Web à Digital Campus Paris, j&apos;ai eu l&apos;opportunité de travailler en alternance chez{" "}
              <span className="text-slate-100 font-semibold">Kaptcher</span>{" "}
              où j&apos;ai pu participer à des projets ambitieux impliquant React,
              TypeScript et Google Cloud.
            </p>
            <a
              href="/cv-abderrahmane-elkafif.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 hover:scale-105 bg-gradient-to-r from-indigo-600 to-cyan-500"
            >
              Télécharger mon CV
            </a>
          </div>

          {/* Right: Cards */}
          <div className="flex flex-col gap-5">
            <div className="p-6 rounded-2xl glass-card">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-indigo-600/15">
                <Code2 size={20} className="text-indigo-400" />
              </div>
              <h3 className="font-bold text-base mb-2 text-slate-100">
                Développeur Full Stack
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                De la conception UI/UX à l&apos;architecture back-end, je gère l&apos;ensemble
                du cycle de développement avec React, Next.js, Node.js et MongoDB.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-cyan-500/15">
                <Sparkles size={20} className="text-cyan-400" />
              </div>
              <h3 className="font-bold text-base mb-2 text-slate-100">
                Freelance & Pédagogie
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Développeur freelance depuis mars 2024, j&apos;ai également animé un atelier
                de codage pour enseigner le développement web aux collégiens et lycéens.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-violet-500/15">
                <Dumbbell size={20} className="text-violet-400" />
              </div>
              <h3 className="font-bold text-base mb-2 text-slate-100">
                En dehors du code
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Boxeur anglais en compétition et adepte de la salle de sport —
                la discipline sportive nourrit ma rigueur dans le développement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
