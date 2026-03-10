import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Ubotz - The Operating System for Learning",
  description:
    "Scale your institute with professional-grade governance, not just content. The first all-in-one platform built for institutional authority.",
  keywords: "LMS, ERP, CRM, institutional governance, learning management system, education platform",
  openGraph: {
    title: "Ubotz - The Operating System for Learning",
    description:
      "Scale your institute with professional-grade governance. The first all-in-one platform built for institutional authority.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geist.variable} font-sans bg-background-light text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
