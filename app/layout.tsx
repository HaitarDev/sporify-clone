import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import { twMerge } from "tailwind-merge";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";

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
    <html lang="en">
      <body className={twMerge("flex", inter.className)}>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar />
            <main className="flex-1">{children}</main>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
