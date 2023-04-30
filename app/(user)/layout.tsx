import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import "./../globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Open Heaven Devotional',
  description: 'Open Heaven Daily Devotional',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="text-black">
      <body className={inter.className}>
        <Header />
        <h2>Huh?</h2>
        <Banner />
        {children}
      </body>
    </html>
  )
};
