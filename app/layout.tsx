import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import HeaderContainer from "@/components/header/HeaderContainer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Encuentra alojamientos únicos para tu próxima escapada",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <HeaderContainer />
        {children}
      </body>
    </html>
  );
}
