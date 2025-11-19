
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Users, Globe } from "lucide-react"; 
import Image from "next/image"; 


const features = [
  {
    icon: Star,
    title: "Customer Relationship",
    description: "Within a single window frame, view all your enquiries sent & received, ongoing projects, existing purchases & orders, and previous orders. Engage people from management & sales, marketing, to customers for seamlessly executing orders and purchases.",
  },
  {
    icon: Users,
    title: "AI Driven Tools Integrated",
    description: "Upselling and cross-selling has been easier with AI driven tools integrated with Product listing to hand out curated list of products & services. Automate follow ups, calls, messages, develop wholesale & marketing management system in our platform!",
  },
  {
    icon: Globe,
    title: "End To End Seamless",
    description: "Use all your product details & publish posts. Run advertisements, get access to curated marketing tools & strategies. We help to market products in the right businesses, with minimal follow ups. Hire a seamless end to end high-tech platform all at a near zero lower subscription costs.",
  },
];


const AboutSection = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-white">

    
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src={'/assets/image2.png'}
          alt="Industrial background image"
          layout="fill" 
          objectFit="cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">

        <h2 className="text-[40px] font-extrabold tracking-tight  mb-8">
          About Us
        </h2>

        <div className="relative w-8 h-4 mx-auto mb-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-12 border-l-2 border-dashed border-red-400"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-400 shadow-md"></div>
        </div>

        <p className="text-[20px] font-semibold uppercase tracking-widest text-red-400 mb-2">
          MEGA FOUNDRIES - FOR THE INDUSTRY
        </p>
        <h3 className="text-[35px] sm:text-4xl font-bold max-w-4xl mx-auto mb-16">
          Source And Procure Materials With Highly Efficient AI Integrated System.
        </h3>
      </div>

      <div className="relative z-10  mx-auto px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/95"
            >
              <CardHeader className="flex flex-col items-center pt-10 pb-4">
                <div className="w-16 h-16 rounded-full border-2 border-red-300 bg-red-50 flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-red-500" />
                </div>
                <CardTitle className="text-[30px] font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center px-6 pb-10">
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}



export default AboutSection
