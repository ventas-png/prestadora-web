import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dict } from "@/lib/content";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://prestadoradeservicios.com"),
  title: dict.en.meta.title,
  description: dict.en.meta.description,
  icons: { icon: "/img/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
