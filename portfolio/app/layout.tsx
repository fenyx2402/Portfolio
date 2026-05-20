import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Instrument+Serif:ital@1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-black">
          <Navbar />
          {children}
        </body>
    </html>
  );
}
