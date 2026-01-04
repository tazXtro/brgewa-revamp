import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRGEWA - Bangladesh Retired Government Employee Welfare Association",
  description: "Hospital Management System for Bangladesh Retired Government Employee Welfare Association (BRGEWA). Providing healthcare services to retired government employees.",
  keywords: ["BRGEWA", "Hospital", "Healthcare", "Bangladesh", "Retired Government Employees", "Welfare"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
