import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import HowWeWork from "./components/HowWeWork";
import PlatformModules from "./components/PlatformModules";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <HowWeWork />
      <PlatformModules />
      <Pricing />
      {/* Second platform modules occurrence from original */}
      <PlatformModules />
      <FAQ />
      <ContactSection />
      <Footer />
    </>
  );
}
