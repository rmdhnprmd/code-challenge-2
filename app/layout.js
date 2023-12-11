import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./pages/Navbar";
import SmoothScroll from "@/utils/smoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextCent",
  description: "Manage your entire community in a single system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
