import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";


export const metadata: Metadata = {
  title: "Ahmet Emir Dokumacı",
  description: "Personal website of Ahmet Emir Dokumacı",
};
const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cx(GeistSans.variable, GeistMono.variable)}>
      <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
        <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[640px] w-full">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
