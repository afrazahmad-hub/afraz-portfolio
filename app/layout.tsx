import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afraz Ahmad | Fintech · Blockchain · ML",
  description:
    "Portfolio of Afraz Ahmad, a fintech, blockchain, machine learning, and AML/KYC compliance professional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
