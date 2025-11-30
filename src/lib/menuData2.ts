import { Zap, Factory } from 'lucide-react';

export const menuData = {
  energy: {
    id: 'energy',
    label: 'Energy',
    icon: Zap,
    bannerImage: '/assets/image9.jpeg',
    categories: [
      {
        name: "Biomass Energy",
        image: '/assets/image1.jpeg',
        description: 'The Biomass Energy Category Encompasses Systems And Solutions That Generate Power From Organic Materials Such As Wood...',
        items: ["Biomass Boilers", "Biomass Power Plant Components", "Feedstock Handling Systems", "Gasification Equipment", "Wood-Fired Boilers"]
      },
      {
        name: "Elastic Energy",
        image: '/assets/image2.jpeg',
        description: 'Elastic Energy Is A Form Of Potential Energy Stored In An Object When It Is Stretched, Compressed, Or Deformed...',
        items: [] // Add relevant items if available, e.g., ["Springs", "Elastic Bands"]
      },
      {
        name: "Electrical Energy",
        image: '/assets/image3.jpeg',
        description: 'Comprehensive electrical energy grids, transmission towers, and high voltage infrastructure solutions.',
        items: ["Cable Lugs Connectors", "Cables", "Electrical Wire", "Power Distribution", "Switch Gears", "Turbine"]
      },
      {
        name: "Hydro Power",
        image: '/assets/image4.jpg',
        description: 'Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium...',
        items: ["Fish Passages And Ladders", "Hydro Power Control Systems", "Reservoir Management Systems", "Turbines And Generators"]
      },
      {
        name: "Machinery",
        image: '/assets/image5.jpeg',
        description: 'Machinery Refers To Mechanical Devices Or Assemblies Designed To Perform Specific Tasks, Often Involving Movement.',
        items: ["Tools"] // Add more specific machinery items if needed
      },
      {
        name: "Nuclear Energy",
        image: '/assets/image6.jpg',
        description: 'Nuclear Energy Is A Form Of Energy Released From The Nucleus Of Atoms Through The Processes Of Fission.',
        items: ["Boilers"] // Add more nuclear energy items if needed, e.g., ["Reactors", "Control Rods"]
      },
      {
        name: "Renewable Energy",
        image: '/assets/image7.jpg',
        description: 'Renewable Energy Is Energy Derived From Natural Sources That Are Constantly Replenished, Such As Sunlight.',
        items: ["Hydro Generator"] // Add more renewable energy items if needed
      },
      {
        name: "Solar Energy",
        image: '/assets/image8.jpg',
        description: 'Explore Solar Energy Solutions On Mega Foundries, Your Platform For Sourcing Top-Tier Solar Products.',
        items: ["Inverters", "Mounting Structure", "Solar Accessories", "Solar Batteries", "Solar Charge Controllers", "Solar Monitoring Systems", "Solar Panel"]
      },
    ]
  },
  powerGen: {
    id: 'power-gen', // Changed to match your input id 'power-gen'
    label: 'Power Generation',
    icon: Factory,
    bannerImage: '/assets/image10.jpeg',
    categories: [
      {
        name: "Automotive & Transport", // Changed to match your input title
        image: '/assets/image9.jpeg',
        description: 'Explore A Wide Range Of Vehicles, Auto Parts, And Transport Machinery Designed For Performance And Durability.',
        items: ["Auto Motorcycle Parts Accessories"]
      },
      {
        name: "Electrical & Power Systems",
        image: '/assets/image10.jpeg',
        description: 'Comprehensive Solutions For Energy Distribution, Control, And Automation. Includes Transformers, Circuit Breakers...',
        items: ["Big Power Supply", "Cables", "Electrical Equipment", "Power And Generating Sets", "Power Cables", "Vortex Flow Meter"]
      },
      {
        name: "Fabrication & Processing", // Changed to match your input title
        image: '/assets/image11.jpg',
        description: 'This Category Includes Advanced Machinery For Cutting, Bending, Shaping, And Assembling Materials.',
        items: ["Fiber Laser Cutting Machine", "Laser Cutting Machines"]
      },
      {
        name: "Generator",
        image: '/assets/image12.jpg',
        description: 'Reliable Power Generation Units For Continuous, Standby, Or Emergency Use. Includes Diesel, Gas, Hybrid...',
        items: ["Diesel", "Hydro Electric"]
      },
      {
        name: "Industrial & Plant Equipment",
        image: '/assets/image13.jpg',
        description: 'Discover Essential Machinery And Systems Used In Manufacturing Plants And Industrial Setups.',
        items: ["Dust Collection Plants", "Galvanized Threaded Rods And Accessories", "Industrial Equipment", "Safety And Security Infrastructure", "Plit Pipe Clamp"]
      },
      {
        name: "Mechanical Equipment",
        image: '/assets/image14.jpeg',
        description: 'Mechanical Equipment Refers To Powered Machines And Devices That Perform Work Involving Motion.',
        items: [] // Add relevant items if available
      },
      {
        name: "Motor",
        image: '/assets/image15.jpg',
        description: 'Covers All Types Of Industrial And Commercial Motors Used In Driving Mechanical Systems.',
        items: [] // Add relevant items if available
      },
      {
        name: "Pumps",
        image: '/assets/image16.jpg',
        description: 'In The Power Generation Sector, Reliable Pumps Are The Backbone Of Efficient Operations.',
        items: [] // Add relevant items if available
      },
    ]
  }
};