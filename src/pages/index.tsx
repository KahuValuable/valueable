import Head from "next/head";
import CompanyFooter from "@/Components/CompanyFooter";
import Navbar from "@/Components/HigherOrderComponents/Navbar";
import HomeSection from "@/Components/HigherOrderComponents/HomeSection";
import AboutSection from "@/Components/HigherOrderComponents/AboutSection";
import ProductsSection from "@/Components/HigherOrderComponents/ProductsSection";
import HowItWorksSection from "@/Components/HigherOrderComponents/HowItWorksSection";
import ContactSection from "@/Components/HigherOrderComponents/ContactSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>valueable — Social &amp; environmental value, quantified</title>
        <meta
          name="description"
          content="valueable turns what your organisation does into a defensible, monetised cost-benefit analysis — grounded in the NZ Treasury CBAx evidence base and the Living Standards Framework."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="valueable — the value of doing good, quantified" />
        <meta
          property="og:description"
          content="Defensible social and environmental cost-benefit analysis for Aotearoa. Activities → Outcomes → Impacts ($) → Social value."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.valueable.co.nz" />
        <meta property="og:image" content="/ValuableLogoBlue.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.valueable.co.nz" />
      </Head>

      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <ProductsSection />
        <HowItWorksSection />
        <ContactSection />
      </main>
      <CompanyFooter />
    </>
  );
}
