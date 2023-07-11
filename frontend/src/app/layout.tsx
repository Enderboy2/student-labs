import "./globals.scss";
import Navbar from "./sections/Navbar/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Labs",
  description:
    '"Student Labs" is an online platform designed with the sole purpose of assisting students in their academic pursuits. With its user-friendly interface',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="prose">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
