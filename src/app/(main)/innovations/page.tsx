
import { liveChatData } from "@/app/(main)/our-values/content";
import { FeatureBlockItem } from "@/app/components/FeatureBlock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Users, Globe } from "lucide-react";
import Image from "next/image";
import HotProductVideos from "../category/HotProductVideos";
import { newInnovationData } from "@/lib/newsData";
const allFeatureBlocks = [
  liveChatData[0],
];
const features = [
  {
    icon: Star,
    title: "Global Engineering Excellence",
    description:
      "Mega Foundries stands at the forefront of precision manufacturing, delivering high-strength metal solutions engineered to global standards. With decades of expertise, we combine advanced metallurgy, cutting-edge machining, and modern production systems to create products that power industries worldwide.",
  },
  {
    icon: Users,
    title: "Innovation-Driven Manufacturing",
    description:
      "Our commitment to continuous innovation is reflected in every process we execute. From automated foundry operations to AI-supported quality control, Mega Foundries integrates new-age technologies to ensure consistency, reliability, and unmatched performance across all product lines.",
  },
  {
    icon: Globe,
    title: "Worldwide Infrastructure & Partnerships",
    description:
      "With a globally connected network and strong partnerships across government, commercial, and industrial sectors, Mega Foundries delivers end-to-end foundry, fabrication, and engineering solutions. We supply, manufacture, and support our clients at scale, ensuring seamless delivery from raw material sourcing to final deployment.",
  },
];
const AboutSection = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-white">
      <div className="absolute inset-0 z-0 h-[225px] w-full">
        <Image
          src={'/assets/image14.jpeg'}
          alt="Industrial background image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-[40px] pb-12 font-extrabold tracking-tight text-white mb-8">
          Innovations
        </h2>
        <p className="text-[20px] py-5 font-semibold uppercase tracking-widest text-[#cc2221] mb-2">
          MEGA FOUNDRIES - FOR THE INDUSTRY
        </p>
        <h3 className="text-[25px] sm:text-4xl font-bold max-w-4xl mx-auto mb-16">
          Streamline your entire material procurement process with intelligent AI automation
        </h3>
      </div>
      <HotProductVideos
        title={newInnovationData.title}
        videos={newInnovationData.videos}
      />
    </section>
  );
}



export default AboutSection
