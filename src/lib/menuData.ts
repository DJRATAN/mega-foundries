import { Factory, Zap } from "lucide-react";

export const menuData = {
    energy: {
        id: 'energy',
        label: 'Energy',
        icon: Zap,
        categories: [
            {
                name: "Biomass Energy",
                items: ["Biomass Boilers",
                    "Biomass Power Plant Components",
                    "Feedstock Handling Systems",
                    "Gasification Equipment",
                    "Wood-Fired Boilers"]
            },
            {
                name: "Elastic energy",
                items: [""]
            },
            {
                name: "Electrical Energy",
                items: ["Cable Lugs Connectors",
                    "Cables",
                    "Electrical Wire",
                    "Power Distribution",
                    "Switch Gears",
                    "Turbine"]
            },
            {
                name: "Hydro Power",
                items: [
                    "Fish Passages And Ladders",
                    "Hydro Power Control Systems",
                    "Reservoir Management Systems",
                    "Turbines And Generators"
                ]
            },
            {
                name: "Machinery",
                items: ["Tools"]
            },
            {
                name: "Nuclear energy",
                items: ["Boilers"]
            },
            {
                name: "Renewable Energy",
                items: ["Hydro Generator"]
            },
            {
                name: "Solar energy",
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
                items: ["Turbines And Generator"]
            },
            {
                name: "Wind Energy",
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
    powerGen: {
        id: 'power-gen',
        label: 'Power Generation',
        icon: Factory,
        categories: [
            {
                name: "Automotive & Transport Equipment",
                items: ["Auto Motorcycle Parts Accessories"]
            },
            {
                name: "Electrical & Power Systems",
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
                name: "Fabrication & Processing Machines",
                items: [
                    "Fiber Laser Cutting Machine",
                    "Laser Cutting Machines",
                ]
            },
            {
                name: "Generator",
                items: [
                    "Diesel",
                    "Hydro Electric"
                ]
            },
            {
                name: "Industrial & Plant Equipment",
                items: [
                    "Dust Collection Plants",
                    "Galvanized Threaded Rods And Accessories",
                    "Industrial Equipment",
                    "Safety And Security Infrastructure",
                    "Plit Pipe Clamp"
                ]
            }
        ]
    },
    irrigation: {
        id: 'irrigation products',
        label: 'Irrigation Products',
        icon: Zap,
        categories: [
            {
                name: "Biomass Energy",
                items: ["Biomass Boilers",
                    "Biomass Power Plant Components",
                    "Feedstock Handling Systems",
                    "Gasification Equipment",
                    "Wood-Fired Boilers"]
            }
        ]
    }
};