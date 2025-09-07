import type { Metadata } from "next";
import { Libre_Bodoni } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const libreBodoni = Libre_Bodoni({
  variable: "--font-libre-bodoni",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Music Kits for Kids",
  description: "A youth-led nonprofit providing music kits for students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreBodoni.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
