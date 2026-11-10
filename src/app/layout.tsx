import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Avisos } from "@/components/Avisos";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: "CRM Seguros · Demo",
  description: "Demostración de un CRM para agentes de seguros. Datos ficticios.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${openSans.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        {children}
        <Avisos />
      </body>
    </html>
  );
}
