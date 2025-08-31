import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import type {Metadata} from "next";
import {Inter, Inter_Tight, JetBrains_Mono} from "next/font/google";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Meta Tags Generator",
  description: "Gerador de Meta Tags HTML.",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-BR">
    <body className={`${inter.variable} ${interTight.variable} ${jetBrainsMono.variable} antialiased`}>
    {children}
    </body>
    </html>
  );
}
