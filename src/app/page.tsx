import Image from "next/image";
import HeroSection from "./components/hero";
import BusinessSolutions from "./components/busineesSolution";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BusinessSolutions />
    </div>
  );
}
