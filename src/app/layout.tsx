import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Stedi Supply - University Accessory Provider",
  description: "Modern accessory provider for universities with shortened turnaround times and dismantled supply minimums.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
