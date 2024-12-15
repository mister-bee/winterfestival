import "./globals.css";
import type { Metadata } from "next";
import { Balsamiq_Sans } from "next/font/google";

const balsamiq = Balsamiq_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-balsamiq",
});

export const metadata: Metadata = {
  title: "Tyrrell Winter Festival",
  description:
    "Join us for music, food, arts and crafts, and maybe even Santa!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={balsamiq.variable}>
      <body
        className={`${balsamiq.className} min-h-screen flex flex-col items-center justify-start pt-12 px-4`}
      >
        {children}
      </body>
    </html>
  );
}
