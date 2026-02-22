import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Abderrahmane El Kafif — Développeur Full Stack Paris",
  description:
    "Portfolio d'Abderrahmane El Kafif, développeur Full Stack basé à Paris. Spécialisé React, Next.js, Node.js, MongoDB, TypeScript. Disponible en freelance et CDI.",
  keywords: [
    "développeur full stack",
    "développeur web Paris",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "freelance développeur",
  ],
  authors: [{ name: "Abderrahmane El Kafif" }],
  openGraph: {
    title: "Abderrahmane El Kafif — Développeur Full Stack",
    description: "Développeur Full Stack basé à Paris. React, Next.js, Node.js, MongoDB.",
    url: "https://aek-services.fr",
    siteName: "AEK Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} antialiased bg-[#080b14] text-slate-100`}
        style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
