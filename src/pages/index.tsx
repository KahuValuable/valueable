import { Geist, Geist_Mono } from "next/font/google";
import CompanyFooter from "@/Components/CompanyFooter";
import Navbar from "@/Components/HigherOrderComponents/Navbar";
import HomeSection from "@/Components/HigherOrderComponents/HomeSection";
import ContactSection from "@/Components/HigherOrderComponents/ContactSection";
import ProductsSection from "@/Components/HigherOrderComponents/ProductsSection";
import AboutSection from "@/Components/HigherOrderComponents/AboutSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)]`}
      style={{ scrollBehavior: "smooth" }}
    >
      <br />
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <CompanyFooter />
      </footer>
    </div>
  );
}
