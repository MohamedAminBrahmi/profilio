import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Morgan | Business Intelligence Engineer",
  description: "Transforming complex data into actionable insights. Business Intelligence Engineer specializing in data visualization, analytics, and strategic decision-making.",
  keywords: ["Business Intelligence", "Data Analytics", "Data Visualization", "BI Engineer", "Dashboard", "Power BI", "Tableau"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
