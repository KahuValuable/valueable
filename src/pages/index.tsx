import { Geist, Geist_Mono } from "next/font/google";
import CompanyFooter from "@/Components/BaseComponents/CompanyFooter";
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
    <div className="bg-white">
      <Navbar />
      <div
        className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)]`}
        style={{ scrollBehavior: "smooth" }}
      >
        <br />
        <HomeSection />
        <AboutSection />
        <ProductsSection />
        <ContactSection />
        <CompanyFooter />
      </div>
    </div>
  );
}
