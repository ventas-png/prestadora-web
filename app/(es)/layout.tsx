import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dict } from "@/lib/content";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://prestadoradeservicios.com"),
  title: dict.es.meta.title,
  description: dict.es.meta.description,
  icons: { icon: "/img/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
