"use client";

import { useState } from "react";
import { Send, Github, Mail, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.error || "Erreur lors de l'envoi");
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue");
    }
  };

  return (
    <section id="contact" className="py-28 relative bg-[#0d1117]">
      <div className="glow-orb absolute -bottom-[100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600 opacity-[0.08]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-semibold tracking-widest uppercase gradient-text">
            05 — Contact
          </span>
          <div className="h-px flex-1 bg-white/[0.08]" />
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-100">
          Travaillons <span className="gradient-text">ensemble</span>
        </h2>
        <p className="text-base mb-16 max-w-xl text-slate-400">
          Un projet, une opportunité, une question ? N&apos;hésitez pas à me contacter,
          je vous réponds rapidement.
        </p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <div className="space-y-4 mb-10">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 p-4 rounded-2xl glass-card group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-indigo-600/15">
                  <Mail size={18} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold mb-0.5 text-slate-500">Email</p>
                  <p className="text-sm font-medium text-slate-100">{personalInfo.email}</p>
                </div>
              </a>

              <a href={`tel:${personalInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 p-4 rounded-2xl glass-card group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-cyan-500/15">
                  <Phone size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold mb-0.5 text-slate-500">Téléphone</p>
                  <p className="text-sm font-medium text-slate-100">{personalInfo.phone}</p>
                </div>
              </a>

              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl glass-card group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-violet-500/15">
                  <Github size={18} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold mb-0.5 text-slate-500">GitHub</p>
                  <p className="text-sm font-medium text-slate-100">github.com/Abderelk</p>
                </div>
              </a>
            </div>

            {/* Availability */}
            <div className="p-5 rounded-2xl border border-green-400/20 bg-green-400/5">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2 h-2 rounded-full bg-green-400"
                  style={{ boxShadow: "0 0 6px #4ade80", animation: "pulse-dot 2s infinite" }}
                />
                <span className="text-sm font-semibold text-green-400">Disponible</span>
              </div>
              <p className="text-sm text-slate-400">
                Ouvert aux opportunités freelance et CDI à Paris et en remote.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] p-8 rounded-2xl text-center glass-card border-green-400/30">
                <CheckCircle size={52} className="mb-4 text-green-400" />
                <h3 className="text-xl font-bold mb-2 text-slate-100">Message envoyé !</h3>
                <p className="text-sm text-slate-400">
                  Merci pour votre message. Je vous réponds dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-2 text-slate-500">Nom *</label>
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 font-medium bg-white/[0.03] border border-white/[0.08] text-slate-100 placeholder:text-slate-600 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2 text-slate-500">Email *</label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 font-medium bg-white/[0.03] border border-white/[0.08] text-slate-100 placeholder:text-slate-600 focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2 text-slate-500">Sujet *</label>
                  <input
                    type="text" name="subject" value={form.subject} onChange={handleChange} required
                    placeholder="Objet de votre message"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 font-medium bg-white/[0.03] border border-white/[0.08] text-slate-100 placeholder:text-slate-600 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2 text-slate-500">Message *</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Décrivez votre projet ou votre demande..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 font-medium bg-white/[0.03] border border-white/[0.08] text-slate-100 placeholder:text-slate-600 focus:border-indigo-500 resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl text-sm bg-red-500/10 text-red-400">
                    <AlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed bg-gradient-to-r from-indigo-600 to-cyan-500"
                >
                  {status === "loading" ? (
                    <><Loader2 size={16} className="animate-spin" />Envoi en cours...</>
                  ) : (
                    <><Send size={16} />Envoyer le message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
