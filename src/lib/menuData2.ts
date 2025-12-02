// lib/menuData.ts
import { Zap, Factory, Settings, ShieldCheck, Leaf, Sun, Droplets, Gauge } from 'lucide-react';

export const menuData = {
  irrigation: {
    id: 'irrigation products',
    label: 'Irrigation Products',
    icon: Zap,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "Biomass Energy",
        slug: "biomass-energy",
        image: '/assets/image1.jpeg',
        description: 'Systems and solutions that generate power from organic materials such as wood, agricultural crops, or wastes.',
        items: [
          "Biomass Boilers",
          "Biomass Power Plant Components",
          "Feedstock Handling Systems",
          "Gasification Equipment",
          "Wood-Fired Boilers"
        ]
      },
      {
        name: "Elastic Energy",
        slug: "elastic-energy",
        image: '/assets/image2.jpeg',
        description: 'Potential energy stored in an object when it is stretched, compressed, or deformed.',
        items: ["Spring Systems", "Hydraulic Accumulators", "Flywheel Storage"]
      },
      {
        name: "Electrical Energy",
        slug: "electrical-energy",
        image: '/assets/image3.jpeg',
        description: 'Comprehensive electrical energy grids, transmission towers, and high voltage infrastructure solutions.',
        items: [
          "Cable Lugs Connectors",
          "Cables",
          "Electrical Wire",
          "Power Distribution",
          "Switch Gears",
          "Turbine"
        ]
      },
      {
        name: "Hydro Power",
        slug: "hydro-power",
        image: '/assets/image4.jpg',
        description: 'Equipment for generating power from the energy of falling or fast-running water.',
        items: [
          "Fish Passages And Ladders",
          "Hydro Power Control Systems",
          "Reservoir Management Systems",
          "Turbines And Generators"
        ]
      },
      {
        name: "Machinery",
        slug: "machinery",
        image: '/assets/image5.jpeg',
        description: 'Mechanical devices or assemblies designed to perform specific tasks, often involving movement.',
        items: ["Industrial Tools", "Heavy Machinery", "Automation Robotics"]
      },
      {
        name: "Nuclear Energy",
        slug: "nuclear-energy",
        image: '/assets/image6.jpg',
        description: 'Technology and equipment for harvesting energy released from the nucleus of atoms.',
        items: ["Nuclear Boilers", "Radiation Shielding", "Control Rods", "Cooling Towers"]
      },
      {
        name: "Renewable Energy",
        slug: "renewable-energy",
        image: '/assets/image7.jpg',
        description: 'Energy derived from natural sources that are constantly replenished.',
        items: ["Hydro Generator", "Geothermal Systems", "Tidal Power Units"]
      },
      {
        name: "Solar Energy",
        slug: "solar-energy",
        image: '/assets/image8.jpg',
        description: 'Explore Solar Energy Solutions On Mega Foundries, Your Platform For Sourcing Top-Tier Solar Products.',
        items: [
          "Inverters",
          "Mounting Structure",
          "Solar Accessories",
          "Solar Batteries",
          "Solar Charge Controllers",
          "Solar Monitoring Systems",
          "Solar Panel"
        ]
      },
      {
        name: "Thermal Energy",
        slug: "thermal-energy",
        image: '/assets/image3.jpeg', // Reusing placeholder, update if needed
        description: 'Power generation using heat sources.',
        items: ["Turbines And Generator", "Heat Exchangers", "Cooling Systems"]
      },
      {
        name: "Wind Energy",
        slug: "wind-energy",
        image: '/assets/image1.jpeg', // Reusing placeholder
        description: 'Harnessing the power of wind for electricity generation.',
        items: [
          "Blades & Rotors",
          "Pitch Systems",
          "Power Plant",
          "Tower Structure",
          "Wind Farm Management Systems",
          "Wind Generators"
        ]
      }
    ]
  },
  earth_moving: {
    id: 'earth_moving',
    label: 'Earth Moving',
    icon: Factory,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "Automotive & Transport",
        slug: "automotive-transport",
        image: '/assets/image9.jpeg',
        description: 'Explore A Wide Range Of Vehicles, Auto Parts, And Transport Machinery Designed For Performance And Durability.',
        items: ["Auto Motorcycle Parts Accessories", "Fleet Vehicles", "Heavy Transport"]
      },
      {
        name: "Electrical & Power Systems",
        slug: "electrical-power-systems",
        image: '/assets/image10.jpeg',
        description: 'Comprehensive Solutions For Energy Distribution, Control, And Automation.',
        items: [
          "Big Power Supply",
          "Cables",
          "Electrical Equipment",
          "Power And Generating Sets",
          "Power Cables",
          "Vortex Flow Meter"
        ]
      },
      {
        name: "Fabrication & Processing",
        slug: "fabrication-processing",
        image: '/assets/image11.jpg',
        description: 'Advanced Machinery For Cutting, Bending, Shaping, And Assembling Materials.',
        items: [
          "Fiber Laser Cutting Machine",
          "Laser Cutting Machines",
          "CNC Routers",
          "Welding Stations"
        ]
      },
      {
        name: "Generator",
        slug: "generator",
        image: '/assets/image12.jpg',
        description: 'Reliable Power Generation Units For Continuous, Standby, Or Emergency Use.',
        items: ["Diesel Generators", "Gas Generators", "Hydro Electric Generators", "Hybrid Systems"]
      },
      {
        name: "Industrial & Plant Equipment",
        slug: "industrial-plant-equipment",
        image: '/assets/image13.jpg',
        description: 'Essential Machinery And Systems Used In Manufacturing Plants And Industrial Setups.',
        items: [
          "Dust Collection Plants",
          "Galvanized Threaded Rods And Accessories",
          "Industrial Equipment",
          "Safety And Security Infrastructure",
          "Plit Pipe Clamp"
        ]
      },
      {
        name: "Mechanical Equipment",
        slug: "mechanical-equipment",
        image: '/assets/image14.jpeg',
        description: 'Powered Machines And Devices That Perform Work Involving Motion.',
        items: ["Conveyors", "Gears & Gearboxes", "Industrial Fans"]
      },
      {
        name: "Motor",
        slug: "motor",
        image: '/assets/image15.jpg',
        description: 'Covers All Types Of Industrial And Commercial Motors Used In Driving Mechanical Systems.',
        items: ["AC Motors", "DC Motors", "Servo Motors", "Stepper Motors"]
      },
      {
        name: "Pumps",
        slug: "pumps",
        image: '/assets/image16.jpg',
        description: 'In The Power Generation Sector, Reliable Pumps Are The Backbone Of Efficient Operations.',
        items: ["Centrifugal Pumps", "Submersible Pumps", "Vacuum Pumps", "Diaphragm Pumps"]
      },
    ]
  },
  cathodic_protection: {
    id: 'cathodic_protection',
    label: 'Cathodic Protection',
    icon: Settings,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "Biomass Energy",
        slug: "biomass-energy",
        image: '/assets/image1.jpeg',
        description: 'Systems and solutions that generate power from organic materials such as wood, agricultural crops, or wastes.',
        items: [
          "Biomass Boilers",
          "Biomass Power Plant Components",
          "Feedstock Handling Systems",
          "Gasification Equipment",
          "Wood-Fired Boilers"
        ]
      },
      {
        name: "Elastic Energy",
        slug: "elastic-energy",
        image: '/assets/image2.jpeg',
        description: 'Potential energy stored in an object when it is stretched, compressed, or deformed.',
        items: ["Spring Systems", "Hydraulic Accumulators", "Flywheel Storage"]
      },
      {
        name: "Electrical Energy",
        slug: "electrical-energy",
        image: '/assets/image3.jpeg',
        description: 'Comprehensive electrical energy grids, transmission towers, and high voltage infrastructure solutions.',
        items: [
          "Cable Lugs Connectors",
          "Cables",
          "Electrical Wire",
          "Power Distribution",
          "Switch Gears",
          "Turbine"
        ]
      },
      {
        name: "Hydro Power",
        slug: "hydro-power",
        image: '/assets/image4.jpg',
        description: 'Equipment for generating power from the energy of falling or fast-running water.',
        items: [
          "Fish Passages And Ladders",
          "Hydro Power Control Systems",
          "Reservoir Management Systems",
          "Turbines And Generators"
        ]
      },
      {
        name: "Machinery",
        slug: "machinery",
        image: '/assets/image5.jpeg',
        description: 'Mechanical devices or assemblies designed to perform specific tasks, often involving movement.',
        items: ["Industrial Tools", "Heavy Machinery", "Automation Robotics"]
      },
      {
        name: "Nuclear Energy",
        slug: "nuclear-energy",
        image: '/assets/image6.jpg',
        description: 'Technology and equipment for harvesting energy released from the nucleus of atoms.',
        items: ["Nuclear Boilers", "Radiation Shielding", "Control Rods", "Cooling Towers"]
      },
      {
        name: "Renewable Energy",
        slug: "renewable-energy",
        image: '/assets/image7.jpg',
        description: 'Energy derived from natural sources that are constantly replenished.',
        items: ["Hydro Generator", "Geothermal Systems", "Tidal Power Units"]
      },
      {
        name: "Solar Energy",
        slug: "solar-energy",
        image: '/assets/image8.jpg',
        description: 'Explore Solar Energy Solutions On Mega Foundries, Your Platform For Sourcing Top-Tier Solar Products.',
        items: [
          "Inverters",
          "Mounting Structure",
          "Solar Accessories",
          "Solar Batteries",
          "Solar Charge Controllers",
          "Solar Monitoring Systems",
          "Solar Panel"
        ]
      },
      {
        name: "Thermal Energy",
        slug: "thermal-energy",
        image: '/assets/image3.jpeg', // Reusing placeholder, update if needed
        description: 'Power generation using heat sources.',
        items: ["Turbines And Generator", "Heat Exchangers", "Cooling Systems"]
      },
      {
        name: "Wind Energy",
        slug: "wind-energy",
        image: '/assets/image1.jpeg', // Reusing placeholder
        description: 'Harnessing the power of wind for electricity generation.',
        items: [
          "Blades & Rotors",
          "Pitch Systems",
          "Power Plant",
          "Tower Structure",
          "Wind Farm Management Systems",
          "Wind Generators"
        ]
      }
    ]
  },
  precast_molds: {
    id: 'precast_molds',
    label: 'Precast Molds',
    icon: ShieldCheck,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "Automotive & Transport",
        slug: "automotive-transport",
        image: '/assets/image9.jpeg',
        description: 'Explore A Wide Range Of Vehicles, Auto Parts, And Transport Machinery Designed For Performance And Durability.',
        items: ["Auto Motorcycle Parts Accessories", "Fleet Vehicles", "Heavy Transport"]
      },
      {
        name: "Electrical & Power Systems",
        slug: "electrical-power-systems",
        image: '/assets/image10.jpeg',
        description: 'Comprehensive Solutions For Energy Distribution, Control, And Automation.',
        items: [
          "Big Power Supply",
          "Cables",
          "Electrical Equipment",
          "Power And Generating Sets",
          "Power Cables",
          "Vortex Flow Meter"
        ]
      },
      {
        name: "Fabrication & Processing",
        slug: "fabrication-processing",
        image: '/assets/image11.jpg',
        description: 'Advanced Machinery For Cutting, Bending, Shaping, And Assembling Materials.',
        items: [
          "Fiber Laser Cutting Machine",
          "Laser Cutting Machines",
          "CNC Routers",
          "Welding Stations"
        ]
      },
      {
        name: "Generator",
        slug: "generator",
        image: '/assets/image12.jpg',
        description: 'Reliable Power Generation Units For Continuous, Standby, Or Emergency Use.',
        items: ["Diesel Generators", "Gas Generators", "Hydro Electric Generators", "Hybrid Systems"]
      },
      {
        name: "Industrial & Plant Equipment",
        slug: "industrial-plant-equipment",
        image: '/assets/image13.jpg',
        description: 'Essential Machinery And Systems Used In Manufacturing Plants And Industrial Setups.',
        items: [
          "Dust Collection Plants",
          "Galvanized Threaded Rods And Accessories",
          "Industrial Equipment",
          "Safety And Security Infrastructure",
          "Plit Pipe Clamp"
        ]
      },
      {
        name: "Mechanical Equipment",
        slug: "mechanical-equipment",
        image: '/assets/image14.jpeg',
        description: 'Powered Machines And Devices That Perform Work Involving Motion.',
        items: ["Conveyors", "Gears & Gearboxes", "Industrial Fans"]
      },
      {
        name: "Motor",
        slug: "motor",
        image: '/assets/image15.jpg',
        description: 'Covers All Types Of Industrial And Commercial Motors Used In Driving Mechanical Systems.',
        items: ["AC Motors", "DC Motors", "Servo Motors", "Stepper Motors"]
      },
      {
        name: "Pumps",
        slug: "pumps",
        image: '/assets/image16.jpg',
        description: 'In The Power Generation Sector, Reliable Pumps Are The Backbone Of Efficient Operations.',
        items: ["Centrifugal Pumps", "Submersible Pumps", "Vacuum Pumps", "Diaphragm Pumps"]
      },
    ]
  },
  precast_parts: {
    id: 'precast_parts',
    label: 'Precast Parts',
    icon: Leaf,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "Biomass Energy",
        slug: "biomass-energy",
        image: '/assets/image1.jpeg',
        description: 'Systems and solutions that generate power from organic materials such as wood, agricultural crops, or wastes.',
        items: [
          "Biomass Boilers",
          "Biomass Power Plant Components",
          "Feedstock Handling Systems",
          "Gasification Equipment",
          "Wood-Fired Boilers"
        ]
      },
      {
        name: "Elastic Energy",
        slug: "elastic-energy",
        image: '/assets/image2.jpeg',
        description: 'Potential energy stored in an object when it is stretched, compressed, or deformed.',
        items: ["Spring Systems", "Hydraulic Accumulators", "Flywheel Storage"]
      },
      {
        name: "Electrical Energy",
        slug: "electrical-energy",
        image: '/assets/image3.jpeg',
        description: 'Comprehensive electrical energy grids, transmission towers, and high voltage infrastructure solutions.',
        items: [
          "Cable Lugs Connectors",
          "Cables",
          "Electrical Wire",
          "Power Distribution",
          "Switch Gears",
          "Turbine"
        ]
      },
      {
        name: "Hydro Power",
        slug: "hydro-power",
        image: '/assets/image4.jpg',
        description: 'Equipment for generating power from the energy of falling or fast-running water.',
        items: [
          "Fish Passages And Ladders",
          "Hydro Power Control Systems",
          "Reservoir Management Systems",
          "Turbines And Generators"
        ]
      },
      {
        name: "Machinery",
        slug: "machinery",
        image: '/assets/image5.jpeg',
        description: 'Mechanical devices or assemblies designed to perform specific tasks, often involving movement.',
        items: ["Industrial Tools", "Heavy Machinery", "Automation Robotics"]
      },
      {
        name: "Nuclear Energy",
        slug: "nuclear-energy",
        image: '/assets/image6.jpg',
        description: 'Technology and equipment for harvesting energy released from the nucleus of atoms.',
        items: ["Nuclear Boilers", "Radiation Shielding", "Control Rods", "Cooling Towers"]
      },
      {
        name: "Renewable Energy",
        slug: "renewable-energy",
        image: '/assets/image7.jpg',
        description: 'Energy derived from natural sources that are constantly replenished.',
        items: ["Hydro Generator", "Geothermal Systems", "Tidal Power Units"]
      },
      {
        name: "Solar Energy",
        slug: "solar-energy",
        image: '/assets/image8.jpg',
        description: 'Explore Solar Energy Solutions On Mega Foundries, Your Platform For Sourcing Top-Tier Solar Products.',
        items: [
          "Inverters",
          "Mounting Structure",
          "Solar Accessories",
          "Solar Batteries",
          "Solar Charge Controllers",
          "Solar Monitoring Systems",
          "Solar Panel"
        ]
      },
      {
        name: "Thermal Energy",
        slug: "thermal-energy",
        image: '/assets/image3.jpeg', // Reusing placeholder, update if needed
        description: 'Power generation using heat sources.',
        items: ["Turbines And Generator", "Heat Exchangers", "Cooling Systems"]
      },
      {
        name: "Wind Energy",
        slug: "wind-energy",
        image: '/assets/image1.jpeg', // Reusing placeholder
        description: 'Harnessing the power of wind for electricity generation.',
        items: [
          "Blades & Rotors",
          "Pitch Systems",
          "Power Plant",
          "Tower Structure",
          "Wind Farm Management Systems",
          "Wind Generators"
        ]
      }
    ]
  },
  mining: {
    id: 'mining',
    label: 'Mining ',
    icon: Sun,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "Automotive & Transport",
        slug: "automotive-transport",
        image: '/assets/image9.jpeg',
        description: 'Explore A Wide Range Of Vehicles, Auto Parts, And Transport Machinery Designed For Performance And Durability.',
        items: ["Auto Motorcycle Parts Accessories", "Fleet Vehicles", "Heavy Transport"]
      },
      {
        name: "Electrical & Power Systems",
        slug: "electrical-power-systems",
        image: '/assets/image10.jpeg',
        description: 'Comprehensive Solutions For Energy Distribution, Control, And Automation.',
        items: [
          "Big Power Supply",
          "Cables",
          "Electrical Equipment",
          "Power And Generating Sets",
          "Power Cables",
          "Vortex Flow Meter"
        ]
      },
      {
        name: "Fabrication & Processing",
        slug: "fabrication-processing",
        image: '/assets/image11.jpg',
        description: 'Advanced Machinery For Cutting, Bending, Shaping, And Assembling Materials.',
        items: [
          "Fiber Laser Cutting Machine",
          "Laser Cutting Machines",
          "CNC Routers",
          "Welding Stations"
        ]
      },
      {
        name: "Generator",
        slug: "generator",
        image: '/assets/image12.jpg',
        description: 'Reliable Power Generation Units For Continuous, Standby, Or Emergency Use.',
        items: ["Diesel Generators", "Gas Generators", "Hydro Electric Generators", "Hybrid Systems"]
      },
      {
        name: "Industrial & Plant Equipment",
        slug: "industrial-plant-equipment",
        image: '/assets/image13.jpg',
        description: 'Essential Machinery And Systems Used In Manufacturing Plants And Industrial Setups.',
        items: [
          "Dust Collection Plants",
          "Galvanized Threaded Rods And Accessories",
          "Industrial Equipment",
          "Safety And Security Infrastructure",
          "Plit Pipe Clamp"
        ]
      },
      {
        name: "Mechanical Equipment",
        slug: "mechanical-equipment",
        image: '/assets/image14.jpeg',
        description: 'Powered Machines And Devices That Perform Work Involving Motion.',
        items: ["Conveyors", "Gears & Gearboxes", "Industrial Fans"]
      },
      {
        name: "Motor",
        slug: "motor",
        image: '/assets/image15.jpg',
        description: 'Covers All Types Of Industrial And Commercial Motors Used In Driving Mechanical Systems.',
        items: ["AC Motors", "DC Motors", "Servo Motors", "Stepper Motors"]
      },
      {
        name: "Pumps",
        slug: "pumps",
        image: '/assets/image16.jpg',
        description: 'In The Power Generation Sector, Reliable Pumps Are The Backbone Of Efficient Operations.',
        items: ["Centrifugal Pumps", "Submersible Pumps", "Vacuum Pumps", "Diaphragm Pumps"]
      },
    ]
  },
  Metals: {
    id: 'metals',
    label: 'Metals ',
    icon: Droplets,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "Biomass Energy",
        slug: "biomass-energy",
        image: '/assets/image1.jpeg',
        description: 'Systems and solutions that generate power from organic materials such as wood, agricultural crops, or wastes.',
        items: [
          "Biomass Boilers",
          "Biomass Power Plant Components",
          "Feedstock Handling Systems",
          "Gasification Equipment",
          "Wood-Fired Boilers"
        ]
      },
      {
        name: "Elastic Energy",
        slug: "elastic-energy",
        image: '/assets/image2.jpeg',
        description: 'Potential energy stored in an object when it is stretched, compressed, or deformed.',
        items: ["Spring Systems", "Hydraulic Accumulators", "Flywheel Storage"]
      },
      {
        name: "Electrical Energy",
        slug: "electrical-energy",
        image: '/assets/image3.jpeg',
        description: 'Comprehensive electrical energy grids, transmission towers, and high voltage infrastructure solutions.',
        items: [
          "Cable Lugs Connectors",
          "Cables",
          "Electrical Wire",
          "Power Distribution",
          "Switch Gears",
          "Turbine"
        ]
      },
      {
        name: "Hydro Power",
        slug: "hydro-power",
        image: '/assets/image4.jpg',
        description: 'Equipment for generating power from the energy of falling or fast-running water.',
        items: [
          "Fish Passages And Ladders",
          "Hydro Power Control Systems",
          "Reservoir Management Systems",
          "Turbines And Generators"
        ]
      },
      {
        name: "Machinery",
        slug: "machinery",
        image: '/assets/image5.jpeg',
        description: 'Mechanical devices or assemblies designed to perform specific tasks, often involving movement.',
        items: ["Industrial Tools", "Heavy Machinery", "Automation Robotics"]
      },
      {
        name: "Nuclear Energy",
        slug: "nuclear-energy",
        image: '/assets/image6.jpg',
        description: 'Technology and equipment for harvesting energy released from the nucleus of atoms.',
        items: ["Nuclear Boilers", "Radiation Shielding", "Control Rods", "Cooling Towers"]
      },
      {
        name: "Renewable Energy",
        slug: "renewable-energy",
        image: '/assets/image7.jpg',
        description: 'Energy derived from natural sources that are constantly replenished.',
        items: ["Hydro Generator", "Geothermal Systems", "Tidal Power Units"]
      },
      {
        name: "Solar Energy",
        slug: "solar-energy",
        image: '/assets/image8.jpg',
        description: 'Explore Solar Energy Solutions On Mega Foundries, Your Platform For Sourcing Top-Tier Solar Products.',
        items: [
          "Inverters",
          "Mounting Structure",
          "Solar Accessories",
          "Solar Batteries",
          "Solar Charge Controllers",
          "Solar Monitoring Systems",
          "Solar Panel"
        ]
      },
      {
        name: "Thermal Energy",
        slug: "thermal-energy",
        image: '/assets/image3.jpeg', // Reusing placeholder, update if needed
        description: 'Power generation using heat sources.',
        items: ["Turbines And Generator", "Heat Exchangers", "Cooling Systems"]
      },
      {
        name: "Wind Energy",
        slug: "wind-energy",
        image: '/assets/image1.jpeg', // Reusing placeholder
        description: 'Harnessing the power of wind for electricity generation.',
        items: [
          "Blades & Rotors",
          "Pitch Systems",
          "Power Plant",
          "Tower Structure",
          "Wind Farm Management Systems",
          "Wind Generators"
        ]
      }
    ]
  }
};