import { Anvil, Hammer, Construction, Layers, Beaker } from "lucide-react";

export const materialsData: Record<string, any> = {
  "cast-iron": {
    title: "Cast Iron",
    icon: Anvil,
    description: "Known for its excellent machinability, vibration dampening, and wear resistance. Ideal for engine blocks, manhole covers, and heavy machinery bases.",
    properties: ["High compressive strength", "Good castability", "Vibration damping", "Wear resistance"],
    applications: ["Automotive engine blocks", "Pipe fittings", "Machine tool bases", "Manhole covers"],
    image: "/assets/image16.jpg"  
  },
  "ductile-iron": {
    title: "Ductile Iron",
    icon: Hammer,
    description: "Also known as nodular cast iron, it offers the castability of gray iron but with much higher tensile strength and toughness.",
    properties: ["High ductility", "Impact resistance", "High tensile strength", "Elasticity"],
    applications: ["Water and sewer pipes", "Automotive crankshafts", "Wind turbine hubs", "Hydraulic components"],
    image: "/assets/image13.jpg"
  },
  "steel": {
    title: "Steel",
    icon: Construction,
    description: "The backbone of modern construction. We offer carbon, alloy, and tool steels tailored to structural integrity and durability needs.",
    properties: ["High yield strength", "Weldability", "Versatility", "Durability"],
    applications: ["Structural beams", "Automotive chassis", "Construction equipment", "Tools and dies"],
    image: "/assets/image11.jpg"
  },
  "aluminum": {
    title: "Aluminum",
    icon: Layers,
    description: "Lightweight yet strong, aluminum is essential for aerospace, automotive, and marine industries requiring corrosion resistance.",
    properties: ["Lightweight", "Corrosion resistant", "High thermal conductivity", "Non-magnetic"],
    applications: ["Aerospace components", "Automotive panels", "Heat sinks", "Marine fittings"],
    image: "/assets/image7.jpg"
  },
  "stainless": {  
    title: "Stainless Steel",
    icon: Beaker,
    description: "Selected for its corrosion resistance and hygiene properties. Essential for medical, food processing, and chemical industries.",
    properties: ["Excellent corrosion resistance", "High temperature strength", "Hygienic surface", "Low maintenance"],
    applications: ["Food processing equipment", "Medical instruments", "Chemical tanks", "Architectural cladding"],
    image: "/assets/image12.jpg"
  }
};