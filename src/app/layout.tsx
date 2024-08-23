import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hearder from "@/components/Hearder";
import clsx from "clsx";
import { BreadcrumbWithCustomSeparator } from "@/components/BreadCrumbs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={clsx(inter.className, "bg-gray-200")}>
        <Hearder />
        <BreadcrumbWithCustomSeparator />
        {children}
      </body>
    </html>
  );
}
