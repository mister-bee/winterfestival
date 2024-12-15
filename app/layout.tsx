import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tyrrell Winter Festival",
  description: "Join us for a magical winter celebration!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
