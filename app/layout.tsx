import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlagiarismCheck – Simple Plagiarism Detection for Educators",
  description: "Upload assignments to check against web sources and previous submissions. Detailed similarity reports and citation suggestions for tutors, small schools, and homeschool parents."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="243917d3-fb8a-4467-8b17-a844b029ef7f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
