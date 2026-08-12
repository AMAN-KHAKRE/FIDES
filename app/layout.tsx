import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FIDES — Your occasion. Our responsibility.",
  description: "Procurement and managed execution for events and celebrations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
