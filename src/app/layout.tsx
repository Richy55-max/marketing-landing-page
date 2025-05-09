import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../styles/globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marketing Landing Page | GreatFrontEnd Projects",
  description: "Build a marketing landing page containing typical key sections and elements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${notoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
