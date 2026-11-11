import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { dict } from "@/lib/content";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const manrope = Manrope({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-head" });

export const metadata: Metadata = {
  metadataBase: new URL("https://prestadoradeservicios.com"),
  title: dict.es.meta.title,
  description: dict.es.meta.description,
  icons: { icon: "/img/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
