import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MultiPost SaaS",
  description: "Share to all platforms at once",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ఇక్కడ children మాత్రమే ఉండాలి, అప్పుడే page.tsx డిజైన్ కనిపిస్తుంది */}
        {children}
      </body>
    </html>
  );
}