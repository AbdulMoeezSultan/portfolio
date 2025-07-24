import type { Metadata } from "next";
import Navbar from "./ui/navbar";
import { oswald } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "It's a porfolio bruhhhhhhh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} bg-background p-4 text-textDark`}>
        <Navbar />
        {children}</body>
    </html>
  );
}
