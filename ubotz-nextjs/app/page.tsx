import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import InstitutionSupport from "./components/InstitutionSupport";
import HowWeWork from "./components/HowWeWork";
import PlatformModules from "./components/PlatformModules";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <InstitutionSupport />
      <HowWeWork />
      <PlatformModules />
      <FAQ />
      <CTASection />
      <Footer />
    </>
  );
}
