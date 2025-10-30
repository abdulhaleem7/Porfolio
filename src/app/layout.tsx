import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Abdul-Haleem Salaudeen | Software Engineer (.NET | Fintech | E-Commerce)",
  description: "Professional portfolio of Abdul-Haleem Salaudeen, a Software Engineer specializing in .NET development for fintech and e-commerce solutions. Based in Lagos, Nigeria.",
  keywords: ["Abdul-Haleem Salaudeen", "Software Engineer", "ASP.NET Core", "Fintech", "E-Commerce", "C#", ".NET", "Lagos", "Nigeria"],
  authors: [{ name: "Abdul-Haleem Salaudeen" }],
  icons: {
    icon: '/IMG_7981.JPG',
    shortcut: '/IMG_7981.JPG',
    apple: '/IMG_7981.JPG',
  },
  openGraph: {
    title: "Abdul-Haleem Salaudeen | Software Engineer",
    description: "Professional portfolio showcasing .NET development expertise in fintech and e-commerce solutions.",
    type: "website",
    images: ['/IMG_7981.JPG'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
