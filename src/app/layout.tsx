import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "globals";

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
  icons: {
    icon: [
      { url: "/favicon_package_v0.16/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_package_v0.16/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon_package_v0.16/apple-touch-icon.png",
    other: [
      { rel: "mask-icon", url: "/favicon_package_v0.16/safari-pinned-tab.svg" },
      { rel: "manifest", url: "/favicon_package_v0.16/site.webmanifest" },
      { rel: "msapplication-TileImage", url: "/favicon_package_v0.16/mstile-150x150.png" },
    ],
  },
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
