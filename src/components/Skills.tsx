"use client";

import { skills } from "@/lib/data";

const categories = [
  { key: "frontend", label: "Front-End", color: "#818cf8", tw: "text-indigo-400" },
  { key: "backend", label: "Back-End", color: "#06b6d4", tw: "text-cyan-400" },
  { key: "database", label: "Base de données", color: "#4ade80", tw: "text-green-400" },
  { key: "tools", label: "Outils & DevOps", color: "#f59e0b", tw: "text-amber-400" },
] as const;

const techIcons: Record<string, string> = {
  "React": "https://cdn.simpleicons.org/react/61DAFB",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/ffffff",
  "TypeScript": "https://cdn.simpleicons.org/typescript/3178C6",
  "JavaScript": "https://cdn.simpleicons.org/javascript/F7DF1E",
  "HTML / CSS": "https://cdn.simpleicons.org/html5/E34F26",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "Sass": "https://cdn.simpleicons.org/sass/CC6699",
  "Bootstrap": "https://cdn.simpleicons.org/bootstrap/7952B3",
  "React Native": "https://cdn.simpleicons.org/react/61DAFB",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/68A063",
  "Symfony": "https://cdn.simpleicons.org/symfony/ffffff",
  "PHP": "https://cdn.simpleicons.org/php/8892BF",
  "API REST": "https://cdn.simpleicons.org/fastapi/009688",
  "MongoDB": "https://cdn.simpleicons.org/mongodb/47A248",
  "MySQL": "https://cdn.simpleicons.org/mysql/4479A1",
  "Git": "https://cdn.simpleicons.org/git/F05032",
  "Docker": "https://cdn.simpleicons.org/docker/2496ED",
  "Google Cloud": "https://cdn.simpleicons.org/googlecloud/4285F4",
  "Figma": "https://cdn.simpleicons.org/figma/F24E1E",
  "CI/CD": "https://cdn.simpleicons.org/githubactions/2088FF",
};

interface Skill {
  name: string;
  icon: string;
  color: string;
}

function SkillBadge({ skill }: { skill: Skill }) {
  const iconUrl = techIcons[skill.name];

  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl glass-card cursor-default transition-all duration-200">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${skill.color}18`, border: `1px solid ${skill.color}30` }}
      >
        {iconUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={iconUrl} alt={skill.name} className="w-4 h-4 object-contain" />
        ) : (
          <span className="text-sm">{skill.icon}</span>
        )}
      </div>
      <span className="text-sm font-medium text-slate-400">{skill.name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative bg-[#080b14]">
      {/* Glow */}
      <div className="glow-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600 opacity-[0.06]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-semibold tracking-widest uppercase gradient-text">
            02 — Compétences
          </span>
          <div className="h-px flex-1 bg-white/[0.08]" />
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-100">
          Ma <span className="gradient-text">stack technique</span>
        </h2>
        <p className="text-base mb-16 max-w-xl text-slate-400">
          Des technologies que j&apos;utilise quotidiennement en production.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((cat) => (
            <div key={cat.key}>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                />
                <span className={`text-sm font-semibold tracking-wide uppercase ${cat.tw}`}>
                  {cat.label}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skills[cat.key].map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
