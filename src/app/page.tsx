import Image from "next/image";
import HeroSection from "./components/hero";
import BusinessSolutions from "./components/busineesSolution";
import ProductCarousel from "./components/productCarousel";
import ChatBlog from "./components/chatBlog";
import CosmoBlog from "./components/cosmoBlog";
import Taglines from "./components/tagline/page";
import SourcingRequest from "./components/SourcingRequest";
import FloatingQuoteBtn from "./components/FloatingQuoteBtn";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BusinessSolutions />
      <CosmoBlog />
      <ChatBlog />
      <ProductCarousel />
      <Taglines />
      <SourcingRequest />
      <FloatingQuoteBtn />
    </div>
  );
}
