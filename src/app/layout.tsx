import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
//const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Car Rental",
  description: "Easy and trustworthy car renting service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.className} text-body lg:bg-body`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
