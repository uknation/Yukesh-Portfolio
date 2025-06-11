import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Yukesh Choudhary",
  description:
    "Building scalable and performant web applications with modern technologies.",
  keywords: [
    "Yukesh Choudhary,", // Replace "Your Name" with your actual name
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
  ],
  openGraph: {
    title: "Yukesh Choudhary - Portfolio", // Replace "Your Name" with your actual name
    description:
      "Building scalable and performant web applications with modern technologies.",
    url: "https://yukesh-portfolio.onrender.com", // Replace "#" with your deployed website URL
    siteName: "Yukesh Choudhary Portfolio", // Replace "Your Name" with your actual name
    images: [
      {
        url: "/img/preview.png", // Take a screenshot of your homepage and save it as "preview.png" in the "public/img" folder.
        width: 1200,
        height: 630,
        alt: "Yukesh Choudhary - Portfolio", // Replace "Your Name" with your actual name
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yukesh Choudhary - Portfolio", // Replace "Your Name" with your actual name
    description:
      "Building scalable and performant web applications with modern technologies.",
    images: ["/img/preview.png"], // Take a screenshot of your homepage and save it as "preview.png" in the "public/img" folder.
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
