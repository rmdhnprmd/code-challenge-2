import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./pages/Navbar";
import SmoothScroll from "@/utils/smoothScroll";
import MyFooter from "./pages/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Nextcent",
    template: "%s | Nextcent"
  },
  description: "Manage your entire community in a single system",
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>
          <Navbar />
          {children}
          <MyFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
