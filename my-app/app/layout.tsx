import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html>
      <body>
          <Header />
            <main>
              <section className={inter.className}>{children}</section>
            </main>
          <Footer />
      </body>
   </html>
  );
}
