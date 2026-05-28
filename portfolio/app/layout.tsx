import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akanksha Powar — Software Developer",
  description: "Full Stack Developer specializing in Python, FastAPI, Next.js, and real-time systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-black">{children}</body>
    </html>
  );
}
