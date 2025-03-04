import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/admin_panel/AuthProvider";
import App from "./App";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Empire E-Commerce Website",
  description: "Develop by om salunke",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <App>
          {children}
          </App>
        </AuthProvider>
        <Toaster position="bottom-center" reverseOrder={false}/>
      </body>
    </html>
  );
}
