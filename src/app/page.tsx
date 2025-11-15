import Image from "next/image";
import HeroSection from "./components/hero";
import BusinessSolutions from "./components/busineesSolution";
import ProductCarousel from "./components/productCarousel";
 
export default function Home() {
  return (
    <div>
      <HeroSection />
      <BusinessSolutions />
      <ProductCarousel />
    </div>
  );
}
