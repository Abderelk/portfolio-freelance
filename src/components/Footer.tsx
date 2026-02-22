import { personalInfo } from "@/lib/data";
import { Github, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/[0.08] bg-[#080b14]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xl font-extrabold tracking-tight gradient-text">
          {personalInfo.initials}.
        </span>

        <p className="text-sm flex items-center gap-1.5 text-slate-500">
          Fait avec <Heart size={13} className="text-red-500" fill="#ef4444" /> par{" "}
          <span className="text-slate-400">{personalInfo.firstName}</span>
          {" · "}Next.js · Tailwind · Resend
        </p>

        <div className="flex items-center gap-4">
          <a href={`mailto:${personalInfo.email}`} className="text-slate-500 transition-colors hover:text-slate-300">
            <Mail size={16} />
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition-colors hover:text-slate-300">
            <Github size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
