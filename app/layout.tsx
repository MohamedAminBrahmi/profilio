import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Amin Brahmi | Business Intelligence Engineer",
  description: "Transforming complex data into actionable insights. Business Intelligence Engineer specializing in data visualization, analytics, and strategic decision-making.",
  keywords: ["Business Intelligence", "Data Analytics", "Data Visualization", "BI Engineer", "Power BI", "Python", "Data Analysis"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
