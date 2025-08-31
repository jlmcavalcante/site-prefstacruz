import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Visite Santa Cruz dos Milagres",
  description: "Conheça Santa Cruz dos Milagres, a cidade da fé e da peregrinação no Piauí.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-white`}>
        <Header />
        <main className="bg-white p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
