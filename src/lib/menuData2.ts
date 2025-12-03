// // lib/menuData.ts
// import { Zap, Factory, Settings, ShieldCheck, Leaf, Sun, Droplets, Gauge } from 'lucide-react';

// export const menuData = {
//   irrigation: {
//     id: 'irrigation_products',
//     label: 'Irrigation Products',
//     icon: Zap,
//     bannerImage: '/assets/image10.jpeg',
//     color: 'bg-orange-100 text-orange-900',
//     categories: [
//       {
//         name: "Drip Irrigation Systems",
//         slug: "drip-irrigation-systems",
//         image: "/assets/image1.jpeg",
//         description: "Precision watering systems designed for agriculture and horticulture with minimal water wastage.",
//         items: ["Drip lines", "Inline laterals", "Emitters", "Pressure-compensating emitters"]
//         // },
//         // {
//         //   name: "Sprinkler Irrigation Systems",
//         //   slug: "sprinkler-irrigation-systems",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Uniform water distribution models suitable for lawns, farms, and large cultivation areas.",
//         //   items: ["Impact sprinklers", "Gear sprinklers", "Center pivot sprinklers", "Gun sprinklers"]
//         // },
//         // {
//         //   name: "Irrigation Pumps",
//         //   slug: "irrigation-pumps",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Reliable pumping solutions for agricultural and industrial irrigation workflows.",
//         //   items: ["Centrifugal pumps", "Submersible pumps", "Solar irrigation pumps", "Jet pumps"]
//         // },
//         // {
//         //   name: "PVC & HDPE Pipes",
//         //   slug: "pvc-hdpe-pipes",
//         //   image: "/assets/image10.jpeg",
//         //   description: "High-durability pipes for water supply distribution across farms and agricultural setups.",
//         //   items: ["PVC pipes", "HDPE pipes", "LDPE pipes", "Pipe fittings"]
//         // },
//         // {
//         //   name: "Irrigation Control Valves",
//         //   slug: "irrigation-control-valves",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Flow-regulating valves for manual and automated irrigation applications.",
//         //   items: ["Solenoid valves", "Pressure reducing valves", "Ball valves", "Control filters"]
//         // },
//         // {
//         //   name: "Filtration Systems",
//         //   slug: "filtration-systems",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Filters ensuring particulate-free water supply in drip and sprinkler systems.",
//         //   items: ["Screen filters", "Disc filters", "Media filters", "Hydrocyclone separators"]
//         // },
//         // {
//         //   name: "Agricultural Water Storage",
//         //   slug: "agricultural-water-storage",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Storage solutions for irrigation including tanks, reservoirs and modular units.",
//         //   items: ["Water tanks", "Flexi tanks", "HDPE lined storage pits", "Reservoir liners"]
//         // },
//         // {
//         //   name: "Fertilizer & Chemical Injectors",
//         //   slug: "fertilizer-injectors",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Devices to inject nutrients and agro-chemicals into water distribution systems.",
//         //   items: ["Venturi injectors", "Dosing pumps", "Fertigation tanks", "Nutrient mixers"]
//         // },
//         // {
//         //   name: "Greenhouse Irrigation Equipment",
//         //   slug: "greenhouse-irrigation",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Climate-controlled irrigation tools for protected agriculture.",
//         //   items: ["Misting systems", "Fogging nozzles", "Capillary mats", "Automation timers"]
//         // },
//         // {
//         //   name: "Smart Irrigation Controllers",
//         //   slug: "smart-irrigation-controllers",
//         //   image: "/assets/image10.jpeg",
//         //   description: "IoT-based controllers for water-saving and automatic irrigation scheduling.",
//         //   items: ["Wi-Fi irrigation controllers", "Moisture sensors", "Weather-based control units"]
//         // },
//         // {
//         //   name: "Canal & Surface Irrigation Tools",
//         //   slug: "canal-surface-irrigation",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Solutions designed for open-flow irrigation without pipelines.",
//         //   items: ["Canal gates", "Channel meters", "Flow level regulators", "Check structures"]
//         // },
//         // {
//         //   name: "Landscape Irrigation Systems",
//         //   slug: "landscape-irrigation-systems",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Urban and residential irrigation products for lawns, parks, and sports grounds.",
//         //   items: ["Pop-up sprinklers", "Rotor sprinklers", "Drippers for landscaping"]
//         // },
//         // {
//         //   name: "Micro Irrigation Accessories",
//         //   slug: "micro-irrigation-accessories",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Fine-scale irrigation tools for nurseries and commercial plantations.",
//         //   items: ["Microtubes", "Barb fittings", "Micro sprayers", "Inline connectors"]
//         // },
//         // {
//         //   name: "Soil Moisture Management Systems",
//         //   slug: "soil-moisture-management",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Solutions to monitor and optimize soil moisture for maximum yield.",
//         //   items: ["Moisture probes", "Soil sensors", "Data logging systems"]
//         // },
//         // {
//         //   name: "Rainwater Harvesting Systems",
//         //   slug: "rainwater-harvesting-systems",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Systems designed to collect and store rainwater for irrigation use.",
//         //   items: ["Gutter filtration units", "Percolation pits", "Rainwater tanks"]
//         // },
//         // {
//         //   name: "Irrigation Fittings & Joints",
//         //   slug: "irrigation-fittings-joints",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Connectors and adaptors for irrigation pipeline networks.",
//         //   items: ["Elbows", "Tees", "Joiners", "End caps"]
//       },
//       {
//         name: "Solar Irrigation Systems",
//         slug: "solar-irrigation-systems",
//         image: "/assets/image2.jpeg",
//         description: "Energy-efficient solar-based irrigation pumping and automation setups.",
//         items: ["Solar pump kits", "Solar charge controllers", "Remote monitoring units"]
//       },
//       {
//         name: "Irrigation Tools & Accessories",
//         slug: "irrigation-tools-accessories",
//         image: "/assets/image3.jpeg",
//         description: "Maintenance accessories for repairing and optimizing irrigation installations.",
//         items: ["Punch tools", "Pipe cutters", "Repair couplers", "Distribution manifolds"]
//       },
//       {
//         name: "Agronomy & Field Survey Equipment",
//         slug: "agronomy-survey-equipment",
//         image: "/assets/image4.jpg",
//         description: "Yield-enhancing tools for field study and agricultural optimization.",
//         items: ["Laser land levelers", "Weather stations", "Nutrient meters"]
//       },
//       {
//         name: "Irrigation Project Contracting",
//         slug: "irrigation-contracting",
//         image: "/assets/image5.jpeg",
//         description: "Turnkey execution services for irrigation infrastructure projects.",
//         items: ["Drip installation projects", "Sprinkler project execution", "Pipeline network design"]
//       }
//     ]
//   }
//   ,
//   earth_moving: {
//     id: 'earth_moving',
//     label: 'Earth Moving',
//     icon: Factory,
//     bannerImage: '/assets/image14.jpeg',
//     color: 'bg-orange-100 text-orange-900',
//     categories: [
//       {
//         name: "Excavators",
//         slug: "excavators",
//         image: "/assets/image6.jpg",
//         description: "Large-scale excavators for trenching, mining, construction and demolition applications.",
//         items: ["Crawler excavators", "Mini excavators", "Long-reach excavators", "Hydraulic breakers"]
//       },
//       {
//         name: "Wheel Loaders",
//         slug: "wheel-loaders",
//         image: "/assets/image7.jpg",
//         description: "Heavy-duty loaders designed to transport bulk earth and aggregates efficiently.",
//         items: ["Heavy wheel loaders", "Compact loaders", "Loader buckets", "Log grapples"]
//       },
//       {
//         name: "Backhoe Loaders",
//         slug: "backhoe-loaders",
//         image: "/assets/image8.jpg",
//         description: "Multi-purpose earthmovers combining digging and loading capabilities.",
//         items: ["Construction backhoes", "Agriculture backhoes", "Extendable booms"]
//       },
//       {
//         name: "Bulldozers",
//         slug: "bulldozers",
//         image: "/assets/image9.jpeg",
//         description: "Powerful dozers for leveling, grading and pushing heavy earth materials.",
//         items: ["Crawler dozers", "Mini dozers", "Swamp dozers", "Ripper attachments"]
//       },
//       {
//         name: "Motor Graders",
//         slug: "motor-graders",
//         image: "/assets/image10.jpeg",
//         description: "Precision grading machines for road construction and land leveling.",
//         items: ["Articulated graders", "Rigid frame graders", "Precision blade control systems"]
//       },
//       {
//         name: "Skid Steer Loaders",
//         slug: "skid-steer-loaders",
//         image: "/assets/image11.jpg",
//         description: "Compact loaders designed for use in confined construction spaces.",
//         items: ["Standard skid steers", "Track skid steers", "Augers & trenchers"]
//       },
//       // {
//       //   name: "Dump Trucks",
//       //   slug: "dump-trucks",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Hauling and transport vehicles for earth, aggregates, and ores.",
//       //   items: ["Articulated dump trucks", "Rigid dumpers", "Off-highway trucks"]
//       // },
//       // {
//       //   name: "Trenchers",
//       //   slug: "trenchers",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Machines used for pipe, sewage, and cable trench excavation.",
//       //   items: ["Chain trenchers", "Wheel trenchers", "Micro trenchers"]
//       // },
//       // {
//       //   name: "Compactors & Rollers",
//       //   slug: "compactors-rollers",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Soil and asphalt compaction equipment for site preparation and road works.",
//       //   items: ["Single drum rollers", "Tandem rollers", "Vibratory compactors"]
//       // },
//       // {
//       //   name: "Crawler Carriers",
//       //   slug: "crawler-carriers",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Tracked carriers capable of transporting payloads across rough terrains.",
//       //   items: ["Tracked dumpers", "Rubber track carriers", "Utility crawler chassis"]
//       // },
//       // {
//       //   name: "Rock Breakers & Hammers",
//       //   slug: "rock-breakers",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Attachments for breaking rock, reinforced concrete and mining extraction.",
//       //   items: ["Hydraulic hammers", "Chisel tools", "Vibration damped breakers"]
//       // },
//       // {
//       //   name: "Rippers & Scarifiers",
//       //   slug: "rippers-scarifiers",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Soil ripping tools designed for hard and compact terrain.",
//       //   items: ["Single shank rippers", "Multi-shank rippers", "Rear-frame ripper kits"]
//       // },
//       // {
//       //   name: "Buckets & Attachments",
//       //   slug: "buckets-attachments",
//       //   image: "/assets/image10.jpeg",
//       //   description: "High-performance attachments enhancing earthmoving productivity.",
//       //   items: ["Rock buckets", "Clamshell buckets", "Tilt buckets", "Screening buckets"]
//       // },
//       // {
//       //   name: "Earth Boring Machines",
//       //   slug: "earth-boring-machines",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Equipment for drilling and earth extraction for utilities and foundations.",
//       //   items: ["Horizontal boring machines", "Drilling rigs", "Pile drilling tools"]
//       // },
//       // {
//       //   name: "Scrapers",
//       //   slug: "scrapers",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Bulk material movers for long-distance earth conveyance.",
//       //   items: ["Elevating scrapers", "Open bowl scrapers", "Pull scraper attachments"]
//       // },
//       // {
//       //   name: "Wheel Dozers",
//       //   slug: "wheel-dozers",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Dozers engineered for faster grading and material transport applications.",
//       //   items: ["Heavy wheel dozers", "Utility wheel dozers", "Landfill wheel dozers"]
//       // },
//       // {
//       //   name: "Site Support Equipment",
//       //   slug: "site-support-machines",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Support machines improving site efficiency and earthmoving workflow.",
//       //   items: ["Telehandlers", "Water tankers", "Fuel bowser carriers"]
//       // },
//       // {
//       //   name: "Track Chains & Undercarriages",
//       //   slug: "undercarriages",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Undercarriage parts built for earthmoving and mining operations.",
//       //   items: ["Track shoes", "Idlers & rollers", "Sprockets", "Complete track systems"]
//       // },
//       {
//         name: "Hydraulic Systems & Spares",
//         slug: "hydraulic-spares",
//         image: "/assets/image12.jpg",
//         description: "Hydraulic components for maintenance and repair of earthmoving fleets.",
//         items: ["Hydraulic pumps", "Control valves", "Seal kits", "Hoses & fittings"]
//       },
//       {
//         name: "Earth Moving Fleet Rental",
//         slug: "earth-moving-rental",
//         image: "/assets/image13.jpg",
//         description: "Heavy machinery rental services for commercial and industrial projects.",
//         items: ["Short-term rental", "Long-term rental", "Operator-assisted machinery"]
//       }
//     ]
//   }
//   ,
//   cathodic_protection: {
//     id: 'cathodic_protection',
//     label: 'Cathodic Protection',
//     icon: Settings,
//     bannerImage: '/assets/image14.jpeg',
//     color: 'bg-orange-100 text-orange-900',
//     categories: [
//       {
//         name: "Sacrificial Anodes",
//         slug: "sacrificial-anodes",
//         image: "/assets/image15.jpg",
//         description: "High-performance anodes used to protect steel infrastructure from corrosion.",
//         items: ["Zinc anodes", "Aluminum anodes", "Magnesium anodes", "Custom shaped anodes"]
//       },
//       // {
//       //   name: "Impressed Current Systems",
//       //   slug: "impressed-current-systems",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Advanced impressed current systems designed for long-term corrosion control.",
//       //   items: ["Transformer rectifiers", "Conductive polymer anodes", "Deep anode systems"]
//       // },
//       // {
//       //   name: "Pipeline Cathodic Protection",
//       //   slug: "pipeline-cp",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Cathodic protection systems engineered for oil, gas, and water pipelines.",
//       //   items: ["Pipeline grounding", "Buried pipeline CP", "Transmission pipeline CP"]
//       // },
//       // {
//       //   name: "Underground Storage Tank CP",
//       //   slug: "ust-cp",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Cathodic protection solutions for hazardous material storage tanks.",
//       //   items: ["Sacrificial tank CP", "ICCP for tanks", "Probe and testing sensors"]
//       // },
//       // {
//       //   name: "Marine Structure CP",
//       //   slug: "marine-structure-cp",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Highly durable corrosion protection for ports, jetties and offshore platforms.",
//       //   items: ["Jetty anodes", "Ship hull anodes", "Offshore anode sleds"]
//       // },
//       // {
//       //   name: "Reinforced Concrete CP",
//       //   slug: "reinforced-concrete-cp",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Concrete corrosion protection for bridges, buildings, and tunnels.",
//       //   items: ["Titanium mesh anodes", "Conductive overlay", "Galvanic point anodes"]
//       // },
//       // {
//       //   name: "Groundbed Systems",
//       //   slug: "groundbed-systems",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Deep and shallow groundbeds for any industrial CP application.",
//       //   items: ["Horizontal groundbeds", "Vertical drill groundbeds", "Linear anode beds"]
//       // },
//       // {
//       //   name: "Monitoring Equipment",
//       //   slug: "cp-monitoring-equipment",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Smart CP monitoring hardware to evaluate protection status.",
//       //   items: ["Remote monitoring units", "CP test stations", "Potential monitoring sensors"]
//       // },
//       // {
//       //   name: "Rectifiers & Power Supplies",
//       //   slug: "cp-rectifiers",
//       //   image: "/assets/image10.jpeg",
//       //   description: "Reliable rectifiers for ICCP systems in harsh industrial environments.",
//       //   items: ["AC/DC power units", "Auto-controlled rectifiers", "Solar rectifiers"]
//       // },
//       {
//         name: "Reference Electrodes",
//         slug: "reference-electrodes",
//         image: "/assets/image16.jpg",
//         description: "CP reference electrodes for precise corrosion analysis and monitoring.",
//         items: ["Cu/CuSO4 electrodes", "Ag/AgCl electrodes", "Permanent and portable probes"]
//       },
//       {
//         name: "Test Stations & Junction Boxes",
//         slug: "cp-test-stations",
//         image: "/assets/image17.jpg",
//         description: "Field testing and isolation components for CP systems.",
//         items: ["Multi-terminal test stations", "Heavy-duty junction boxes", "Test post accessories"]
//       },
//       {
//         name: "Bonding & Isolation Kits",
//         slug: "bonding-isolation",
//         image: "/assets/image4.jpg",
//         description: "Bonding and isolation products for controlled cathodic flow.",
//         items: ["Isolation joints", "Flange insulation kits", "Surge diverters"]
//         // },
//         // {
//         //   name: "Earthing & Grounding",
//         //   slug: "cp-grounding",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Grounding components for safe CP installations.",
//         //   items: ["Copper grounding rods", "Grounding grids", "Exothermic welding kits"]
//         // },
//         // {
//         //   name: "Pipeline Pigging Attachments",
//         //   slug: "pipeline-pigging",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Accessories that help maintain and assess pipeline protection.",
//         //   items: ["Pig launchers", "Pig receivers", "Cleaning pigs"]
//         // },
//         // {
//         //   name: "CP System Accessories",
//         //   slug: "cp-accessories",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Add-on components supporting overall cathodic protection setup.",
//         //   items: ["Cables & connectors", "Cable splices", "Cable protection conduits"]
//         // },
//         // {
//         //   name: "Offshore Anode Retrofits",
//         //   slug: "offshore-anode-retrofits",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Solutions for retrofitting corrosion protection on existing offshore structures.",
//         //   items: ["Clamp-on anodes", "Retrofit sled anodes", "Underwater mounting brackets"]
//         // },
//         // {
//         //   name: "Transformer Rectifier Panels",
//         //   slug: "rectifier-panels",
//         //   image: "/assets/image10.jpeg",
//         //   description: "Industrial CP rectifier panels built for reliability and performance.",
//         //   items: ["Indoor panels", "Outdoor weatherproof panels", "Marine grade panels"]
//         // },
//         // {
//         //   name: "Anode Cable Systems",
//         //   slug: "anode-cable-systems",
//         //   image: "/assets/image10.jpeg",
//         //   description: "High-strength cable solutions for long-distance corrosion protection.",
//         //   items: ["HMWPE copper cables", "Kynar insulated cable", "Jacketed marine cable"]
//       },
//       {
//         name: "Pipeline Rehabilitation Kits",
//         slug: "pipeline-rehab",
//         image: "/assets/image7.jpg",
//         description: "Repair solutions for pipelines losing CP efficiency.",
//         items: ["Wrap repair kits", "Weld repair kits", "Protective barrier coatings"]
//       },
//       {
//         name: "CP Engineering & Consultancy",
//         slug: "cp-consultancy",
//         image: "/assets/image8.jpg",
//         description: "Complete cathodic protection design, installation, and audit services.",
//         items: ["CP design", "Inspection surveys", "System maintenance"]
//       }
//     ]
//   }
//   ,
//   precast_molds: {
//     id: 'precast_molds',
//     label: 'Precast Molds',
//     icon: ShieldCheck,
//     bannerImage: '/assets/image9.jpeg',
//     color: 'bg-orange-100 text-orange-900',
//     categories: [
//       {
//         name: "Precast Slabs",
//         slug: "precast-slabs",
//         image: "/assets/image11.jpg",
//         description: "High–strength precast concrete slabs designed for residential, commercial and industrial structures.",
//         items: ["Hollow Core Slabs", "Solid Slabs", "Composite Slabs", "Prestressed Slabs"]
//       },
//       {
//         name: "Precast Boundary Walls",
//         slug: "precast-boundary-walls",
//         image: "/assets/image12.jpg",
//         description: "Durable modular wall systems for quick perimeter construction.",
//         items: ["Prestressed Panels", "Compound Walls", "Fencing Walls"]
//       },
//       {
//         name: "Precast Staircases",
//         slug: "precast-staircases",
//         image: "/assets/image20.jpg",
//         description: "Factory-finished and perfect-fit stair structures for multi-storey buildings.",
//         items: ["Straight Stairs", "L-Shaped Stairs", "Spiral Stairs"]
//       },
//       // {
//       //   name: "Precast Beams",
//       //   slug: "precast-beams",
//       //   image: "/assets/precast/beams.jpg",
//       //   description: "High-load precast beams suitable for skyscrapers, bridges and industrial infrastructure.",
//       //   items: ["I-Beams", "L-Beams", "Inverted T-Beams", "Box Beams"]
//       // },
//       // {
//       //   name: "Precast Columns",
//       //   slug: "precast-columns",
//       //   image: "/assets/precast/columns.jpg",
//       //   description: "Strong structural columns for seismic-resistant construction.",
//       //   items: ["Round Columns", "Square Columns", "Prestressed Columns"]
//       // },
//       // {
//       //   name: "Precast Manholes",
//       //   slug: "precast-manholes",
//       //   image: "/assets/precast/manholes.jpg",
//       //   description: "Pre-engineered manholes for drainage and sewage solutions.",
//       //   items: ["Circular Manholes", "Rectangular Manholes", "Chamber Rings"]
//       // },
//       // {
//       //   name: "Precast Drainage Systems",
//       //   slug: "precast-drainage-systems",
//       //   image: "/assets/precast/drain.jpg",
//       //   description: "Efficient water discharge systems for highways and smart cities.",
//       //   items: ["U-Drains", "Box Drains", "Kerb Drains"]
//       // },
//       // {
//       //   name: "Precast Road Barriers",
//       //   slug: "precast-road-barriers",
//       //   image: "/assets/precast/barriers.jpg",
//       //   description: "Premium road safety barriers used across expressways and highways.",
//       //   items: ["New Jersey Barriers", "Median Barriers", "Crash Barriers"]
//       // },
//       // {
//       //   name: "Precast Pavers",
//       //   slug: "precast-pavers",
//       //   image: "/assets/precast/pavers.jpg",
//       //   description: "Custom designed paver blocks for sidewalks, landscapes and industrial flooring.",
//       //   items: ["Interlock Pavers", "Grass Pavers", "Shot Blasted Pavers"]
//       // },
//       // {
//       //   name: "Precast Kerbstones",
//       //   slug: "precast-kerbstones",
//       //   image: "/assets/precast/kerb.jpg",
//       //   description: "Kerb blocks for edge protection and roadway segregation.",
//       //   items: ["Straight Kerbs", "Radius Kerbs", "Channel Kerbs"]
//       // },
//       // {
//       //   name: "Bridge Deck Slabs",
//       //   slug: "bridge-deck-slabs",
//       //   image: "/assets/precast/bridge.jpg",
//       //   description: "Heavy-duty slabs designed for long-span bridges and flyovers.",
//       //   items: ["Prestressed Decks", "Composite Decks", "Box Girder Decks"]
//       // },
//       // {
//       //   name: "Precast Tunnel Linings",
//       //   slug: "precast-tunnel-linings",
//       //   image: "/assets/precast/tunnel.jpg",
//       //   description: "Precision mold parts for metro tunnels, mining, and hydro projects.",
//       //   items: ["Segment Rings", "Tunnel Blocks", "Support Liners"]
//       // },
//       // {
//       //   name: "Precast Footpaths",
//       //   slug: "precast-footpaths",
//       //   image: "/assets/precast/footpath.jpg",
//       //   description: "Walkway slabs ideal for commercial, residential and township development.",
//       //   items: ["Footpath Slabs", "Domino Slabs", "Grooved Slabs"]
//       // },
//       // {
//       //   name: "Precast Garden Products",
//       //   slug: "precast-garden-products",
//       //   image: "/assets/precast/garden.jpg",
//       //   description: "Landscape-focused products made with architectural finish.",
//       //   items: ["Benches", "Planters", "Tree Guards"]
//       // },
//       // {
//       //   name: "Precast Septic Tanks",
//       //   slug: "precast-septic-tanks",
//       //   image: "/assets/precast/tanks.jpg",
//       //   description: "Leak-proof and maintenance-friendly tank systems for homes and industries.",
//       //   items: ["Single Chamber", "Double Chamber", "Hybrid Tanks"]
//       // },
//       // {
//       //   name: "Precast Utility Boxes",
//       //   slug: "precast-utility-boxes",
//       //   image: "/assets/precast/utility.jpg",
//       //   description: "Secure utility enclosures for electric, telecom and water networks.",
//       //   items: ["Cable Trench Boxes", "Transformer Boxes", "Switchgear Chambers"]
//       // },
//       {
//         name: "Precast Culverts",
//         slug: "precast-culverts",
//         image: "/assets/image15.jpg",
//         description: "High-load water crossing infrastructure engineered for long service life.",
//         items: ["Box Culverts", "Pipe Culverts", "Arch Culverts"]
//       },
//       {
//         name: "Architectural Precast Panels",
//         slug: "architectural-precast-panels",
//         image: "/assets/image16.jpg",
//         description: "Aesthetic facade panels customized for premium and modern buildings.",
//         items: ["Textured Panels", "Polished Panels", "GRC Panels"]
//       }
//     ]
//   }
//   ,
//   precast_parts: {
//     id: 'precast_parts',
//     label: 'Precast Parts',
//     icon: Leaf,
//     bannerImage: '/assets/image14.jpeg',
//     color: 'bg-orange-100 text-orange-900',
//     categories: [
//       {
//         name: "Shuttering Plates",
//         slug: "shuttering-plates",
//         image: "/assets/image20.jpg",
//         description: "High-strength shuttering plates designed for smooth casting and structural consistency.",
//         items: ["MS Shuttering Plate", "Premium Shuttering Plate", "Formwork Plates"]
//       },
//       {
//         name: "Mould Side Walls",
//         slug: "mould-side-walls",
//         image: "/assets/image4.jpg",
//         description: "Precision-built steel side walls for retaining concrete during moulding operations.",
//         items: ["Adjustable Side Walls", "Fixed Side Walls", "Heavy Side Walls"]
//       },
//       // {
//       //   name: "Lifting Anchors",
//       //   slug: "lifting-anchors",
//       //   image: "/assets/precastParts/anchors.jpg",
//       //   description: "Certified steel anchors designed for safe lifting of precast concrete elements.",
//       //   items: ["Spherical Anchors", "Recess Formers", "Socket Anchors"]
//       // },
//       // {
//       //   name: "Insert Plates",
//       //   slug: "insert-plates",
//       //   image: "/assets/precastParts/insertplates.jpg",
//       //   description: "Embedded plates for structural connectivity and reinforcement systems.",
//       //   items: ["Welded Plates", "Shear Plates", "Bearing Plates"]
//       // },
//       // {
//       //   name: "Joint & Connector Plates",
//       //   slug: "joint-connector-plates",
//       //   image: "/assets/precastParts/connector.jpg",
//       //   description: "Structural connection systems enabling fast onsite assembly.",
//       //   items: ["Shear Connectors", "Beam Connectors", "Bolt Plates"]
//       // },
//       // {
//       //   name: "Grouting Sleeves",
//       //   slug: "grouting-sleeves",
//       //   image: "/assets/precastParts/sleeves.jpg",
//       //   description: "Couplers used to join reinforcement rods during precast assembly.",
//       //   items: ["Mechanical Sleeves", "Epoxy Sleeves", "Threaded Sleeves"]
//       // },
//       // {
//       //   name: "Rubber Seals",
//       //   slug: "rubber-seals",
//       //   image: "/assets/precastParts/seals.jpg",
//       //   description: "Waterproof seals to ensure leak-free precast joints and chambers.",
//       //   items: ["EPDM Seals", "Groove Gaskets", "Round Rubber Rings"]
//       // },
//       // {
//       //   name: "Anchor Bolts",
//       //   slug: "anchor-bolts",
//       //   image: "/assets/precastParts/bolts.jpg",
//       //   description: "Industrial grade bolts manufactured for safe anchoring of precast structures.",
//       //   items: ["J-Type Bolts", "U-Type Bolts", "L-Type Bolts"]
//       // },
//       // {
//       //   name: "Rebar Accessories",
//       //   slug: "rebar-accessories",
//       //   image: "/assets/precastParts/rebar.jpg",
//       //   description: "Parts that enhance the positioning, spacing and holding of reinforcement bars.",
//       //   items: ["Rebar Chairs", "Rebar Spacers", "Rebar End Caps"]
//       // },
//       // {
//       //   name: "Lifting Hooks & Loops",
//       //   slug: "lifting-hooks-loops",
//       //   image: "/assets/precastParts/liftinghooks.jpg",
//       //   description: "Precast hardware for lifting, transportation and alignment of heavy concrete components.",
//       //   items: ["Lifting Loops", "Lifting Hooks", "Swivel Heads"]
//       // },
//       // {
//       //   name: "Mould Base Frames",
//       //   slug: "mould-base-frames",
//       //   image: "/assets/precastParts/baseframe.jpg",
//       //   description: "Foundational steel frameworks supporting mould structure and casting stability.",
//       //   items: ["Fixed Frames", "Adjustable Frames", "Vibrating Frames"]
//       // },
//       // {
//       //   name: "Vibration Pads",
//       //   slug: "vibration-pads",
//       //   image: "/assets/precastParts/vibration.jpg",
//       //   description: "Heavy-duty pads that remove air pockets and improve concrete compaction during moulding.",
//       //   items: ["Bolt-Mount Pads", "Magnetic Pads", "High-Friction Pads"]
//       // },
//       // {
//       //   name: "Mould Fasteners",
//       //   slug: "mould-fasteners",
//       //   image: "/assets/precastParts/fasteners.jpg",
//       //   description: "Key locking and fastening devices for rigidity and airtightness during casting.",
//       //   items: ["Tension Locks", "Quick-Lock Systems", "Clamp Fasteners"]
//       // },
//       // {
//       //   name: "Corner Chamfers",
//       //   slug: "corner-chamfers",
//       //   image: "/assets/precastParts/chamfer.jpg",
//       //   description: "Chamfer components that create edge finishing and prevent concrete cracking.",
//       //   items: ["Steel Chamfers", "Aluminium Chamfers", "Magnetic Chamfers"]
//       // },
//       {
//         name: "Spacer Blocks",
//         slug: "spacer-blocks",
//         image: "/assets/image6.jpg",
//         description: "Cover blocks for maintaining proper distance between reinforcement and mould edges.",
//         items: ["Round Spacers", "Tile Spacers", "Concrete Spacers"]
//       },
//       {
//         name: "Magnetic Formwork Systems",
//         slug: "magnetic-formwork-systems",
//         image: "/assets/image7.jpg",
//         description: "Magnetic locking systems for fast mould setup and dimensional accuracy.",
//         items: ["Magnetic Blocks", "Shuttering Magnets", "Magnetic Angle Systems"]
//         // },
//         // {
//         //   name: "Bearing Pads",
//         //   slug: "bearing-pads",
//         //   image: "/assets/precastParts/bearingpads.jpg",
//         //   description: "Pads that transfer load between precast structures, minimizing stress and vibration.",
//         //   items: ["Neoprene Pads", "Elastomeric Pads", "PTFE Sliding Pads"]
//       },
//       {
//         name: "Pipe Inserts & Connectors",
//         slug: "pipe-inserts-connectors",
//         image: "/assets/image8.jpg",
//         description: "Special pipe connection parts for manholes, chambers and drainage units.",
//         items: ["Bell Inserts", "Groove Couplings", "Pipe Fixing Clamps"]
//       }
//     ]
//   }
//   ,
//   mining: {
//     id: 'mining',
//     label: 'Mining',
//     icon: Sun,
//     bannerImage: '/assets/image18.jpeg',
//     color: 'bg-orange-100 text-orange-900',
//     categories: [
//       {
//         name: "Excavation Machinery",
//         slug: "excavation-machinery",
//         image: "/assets/image20.jpg",
//         description: "High-power machines designed for earth removal and heavy soil displacement.",
//         items: ["Crawler Excavators", "Wheel Excavators", "Mining Shovels"]
//         // },
//         // {
//         //   name: "Drilling Rigs",
//         //   slug: "drilling-rigs",
//         //   image: "/assets/mining/drilling.jpg",
//         //   description: "Specialized rigs for surface and underground drilling applications.",
//         //   items: ["Blast Hole Rigs", "Rotary Drills", "Hydraulic Drilling Rigs"]
//         // },
//         // {
//         //   name: "Crushing Equipment",
//         //   slug: "crushing-equipment",
//         //   image: "/assets/mining/crusher.jpg",
//         //   description: "Machines for size reduction of minerals and mining materials.",
//         //   items: ["Jaw Crushers", "Cone Crushers", "Impact Crushers"]
//         // },
//         // {
//         //   name: "Screening & Separation",
//         //   slug: "screening-separation",
//         //   image: "/assets/mining/screening.jpg",
//         //   description: "Mineral classification equipment for fine and coarse separation.",
//         //   items: ["Vibrating Screens", "Trommel Screens", "Wet Screening Systems"]
//         // },
//         // {
//         //   name: "Conveyor Systems",
//         //   slug: "conveyor-systems",
//         //   image: "/assets/mining/conveyors.jpg",
//         //   description: "Bulk material transportation systems for mines and processing plants.",
//         //   items: ["Belt Conveyors", "Pipe Conveyors", "Stacker Reclaimers"]
//         // },
//         // {
//         //   name: "Underground Mining Vehicles",
//         //   slug: "underground-mining-vehicles",
//         //   image: "/assets/mining/underground.jpg",
//         //   description: "Mobility and material handling vehicles engineered for confined environments.",
//         //   items: ["Load Haul Dump (LHD)", "Underground Trucks", "Utility Vehicles"]
//         // },
//         // {
//         //   name: "Rock Breakers",
//         //   slug: "rock-breakers",
//         //   image: "/assets/mining/rockbreaker.jpg",
//         //   description: "Impact equipment designed to break large stones for further processing.",
//         //   items: ["Hydraulic Rock Breakers", "Pedestal Mounted Breakers", "Breaker Booms"]
//         // },
//         // {
//         //   name: "Blasting Accessories",
//         //   slug: "blasting-accessories",
//         //   image: "/assets/mining/blasting.jpg",
//         //   description: "Tools and parts required for safe and controlled mine blasting.",
//         //   items: ["Detonators", "Blast Mats", "Stemming Plugs"]
//         // },
//         // {
//         // name: "Mineral Processing Plants",
//         // slug: "mineral-processing-plants",
//         // image: "/assets/mining/processing.jpg",
//         // description: "Full-scale plants to process ore and extract valuable minerals.",
//         // items: ["Ore Washing Systems", "Flotation Units", "Grinding Mills"]
//       },
//       {
//         name: "Slurry Handling Systems",
//         slug: "slurry-handling-systems",
//         image: "/assets/image10.jpeg",
//         description: "Pumps and pipelines for transferring abrasive slurry materials.",
//         items: ["Slurry Pumps", "Hydrocyclones", "Thickener Systems"]
//       },
//       {
//         name: "Ventilation Systems",
//         slug: "ventilation-systems",
//         image: "/assets/image11.jpg",
//         description: "Airflow and dust management systems for deep and underground mines.",
//         items: ["Axial Fans", "Ventilation Ducts", "Vortex Fans"]
//       },
//       // {
//       //   name: "Mine Safety Equipment",
//       //   slug: "mine-safety-equipment",
//       //   image: "/assets/mining/safety.jpg",
//       //   description: "Safety systems for personnel protection and emergency response.",
//       //   items: ["Self-Rescuers", "Gas Monitoring Sensors", "Mine Helmets"]
//       // },
//       // {
//       //   name: "Ore Loading Systems",
//       //   slug: "ore-loading-systems",
//       //   image: "/assets/mining/oreloading.jpg",
//       //   description: "Automation equipment to move bulk ore efficiently from pits and tunnels.",
//       //   items: ["Feeders", "Rail Loaders", "Truck Loading Terminals"]
//       // },
//       // {
//       //   name: "Quarry Machinery",
//       //   slug: "quarry-machinery",
//       //   image: "/assets/mining/quarry.jpg",
//       //   description: "Machinery for open-pit mining and aggregate extraction.",
//       //   items: ["Wheel Loaders", "Quarry Dumpers", "Block Cutting Machines"]
//       // },
//       // {
//       //   name: "Mine Dewatering Solutions",
//       //   slug: "mine-dewatering-solutions",
//       //   image: "/assets/mining/dewatering.jpg",
//       //   description: "Water removal systems supporting drainage and flooding prevention.",
//       //   items: ["Submersible Pumps", "Dewatering Pipelines", "High-Pressure Pumps"]
//       // },
//       {
//         name: "Fuel & Lubrication Systems",
//         slug: "fuel-lubrication-systems",
//         image: "/assets/image12.jpg",
//         description: "Automatic lubrication and fuel supply systems for mining fleets.",
//         items: ["Auto Greasing Systems", "Fuel Dispensers", "Oil Distribution Units"]
//       },
//       {
//         name: "Power Supply & Generators",
//         slug: "power-supply-generators",
//         image: "/assets/image13.jpg",
//         description: "Energy solutions designed for high-load continuous mine operation.",
//         items: ["Diesel Generators", "Hybrid Generators", "Power Substations"]
//       },
//       {
//         name: "Mining Automation & IoT",
//         slug: "mining-automation-iot",
//         image: "/assets/image14.jpeg",
//         description: "Digital technologies that boost mine productivity and operational safety.",
//         items: ["Autonomous Haulage", "Equipment Tracking", "AI Monitoring Systems"]
//       }
//     ]
//   }
//   ,
//   Metals: {
//     id: 'metals',
//     label: 'Metals',
//     icon: Droplets,
//     bannerImage: '/assets/image19.jpeg',
//     color: 'bg-orange-100 text-orange-900',
//     categories: [
//       {
//         name: "Steel & Structural Steel",
//         slug: "steel-structural-steel",
//         image: "/assets/image15.jpg",
//         description: "High-strength steels for industrial, fabrication, and infrastructure projects.",
//         items: ["Mild Steel", "Carbon Steel", "TMT Bars", "I-Beams & Channels"]
//       },
//       // {
//       //   name: "Stainless Steel Products",
//       //   slug: "stainless-steel-products",
//       //   image: "/assets/metals/stainless.jpg",
//       //   description: "Rust-proof and high-performance stainless steel for manufacturing and architecture.",
//       //   items: ["SS Sheets & Plates", "SS Pipes & Tubes", "SS Rods & Bars"]
//       // },
//       // {
//       //   name: "Aluminium & Alloys",
//       //   slug: "aluminium-alloys",
//       //   image: "/assets/metals/aluminium.jpg",
//       //   description: "Lightweight and corrosion-resistant aluminium products for transport and aerospace.",
//       //   items: ["Aluminium Profiles", "Aluminium Sheets", "Aluminium Castings"]
//       // },
//       // {
//       //   name: "Copper & Alloys",
//       //   slug: "copper-alloys",
//       //   image: "/assets/metals/copper.jpg",
//       //   description: "High-conductivity copper metals used in electrical and industrial applications.",
//       //   items: ["Copper Rods", "Copper Sheets", "Bronze & Brass Alloys"]
//       // },
//       // {
//       //   name: "Cast Iron Products",
//       //   slug: "cast-iron-products",
//       //   image: "/assets/metals/castiron.jpg",
//       //   description: "High-durability iron products used for automotive, machinery and civil structures.",
//       //   items: ["SG Iron", "Grey Cast Iron", "Ductile Iron Castings"]
//       // },
//       // {
//       //   name: "Forgings",
//       //   slug: "forgings",
//       //   image: "/assets/metals/forgings.jpg",
//       //   description: "Heat-treated forged metal components with superior strength for heavy engineering.",
//       //   items: ["Flanges", "Rings", "Precision Forging Parts"]
//       // },
//       // {
//       //   name: "Metal Sheets & Plates",
//       //   slug: "metal-sheets-plates",
//       //   image: "/assets/metals/sheets.jpg",
//       //   description: "Sheet and plate metals used in fabrication, cutting, and manufacturing.",
//       //   items: ["MS Sheets", "SS Sheets", "Hot Rolled Plates", "Cold Rolled Plates"]
//       // },
//       // {
//       //   name: "Metal Pipes & Tubes",
//       //   slug: "metal-pipes-tubes",
//       //   image: "/assets/metals/pipes.jpg",
//       //   description: "Industrial pipes and tubes for fluids, gas, structure, and machinery.",
//       //   items: ["Seamless Pipes", "ERW Pipes", "Square & Rectangular Tubes"]
//       // },
//       // {
//       //   name: "Metal Bars & Rods",
//       //   slug: "metal-bars-rods",
//       //   image: "/assets/metals/bars.jpg",
//       //   description: "Metal bars and rods used for machining, manufacturing, and tooling.",
//       //   items: ["Round Bars", "Square Bars", "Hex Bars"]
//       // },
//       // {
//       //   name: "Sheets Coil & Strip",
//       //   slug: "sheet-coil-strip",
//       //   image: "/assets/metals/coil.jpg",
//       //   description: "Rolled metal forms for industrial-scale fabrication and production.",
//       //   items: ["HR Coils", "CR Coils", "GP/GC Coils", "Slit Strips"]
//       // },
//       // {
//       //   name: "Metal Wire & Wire Rods",
//       //   slug: "metal-wire-wire-rods",
//       //   image: "/assets/metals/wires.jpg",
//       //   description: "Precision metal wires and rod products used in fasteners and forming.",
//       //   items: ["Binding Wire", "Spring Wire", "Wire Rod Coils"]
//       // },
//       // {
//       //   name: "Non-Ferrous Metals",
//       //   slug: "non-ferrous-metals",
//       //   image: "/assets/metals/nonferrous.jpg",
//       //   description: "Metals excluding iron used for industrial, aerospace, maritime and electrical needs.",
//       //   items: ["Titanium", "Nickel", "Zinc", "Magnesium Alloys"]
//       // },
//       // {
//       //   name: "Metal Scrap Recycling",
//       //   slug: "metal-scrap-recycling",
//       //   image: "/assets/metals/scrap.jpg",
//       //   description: "Recyclable metals used in foundries and smelting operations.",
//       //   items: ["Steel Scrap", "Copper Scrap", "Aluminium Scrap"]
//       // },
//       {
//         name: "Metal Coatings & Surface Treatment",
//         slug: "metal-coatings-surface-treatment",
//         image: "/assets/image16.jpg",
//         description: "Anti-corrosion and strength-enhancing coatings for metal parts.",
//         items: ["Galvanizing", "Powder Coating", "Electroplating"]
//       },
//       {
//         name: "Metal Fasteners",
//         slug: "metal-fasteners",
//         image: "/assets/image17.jpg",
//         description: "High-grade fastening components for industrial and civil applications.",
//         items: ["Nuts & Bolts", "Washers", "High-Tensile Fasteners"]
//       },
//       {
//         name: "Industrial Foundry Raw Materials",
//         slug: "industrial-foundry-raw-materials",
//         image: "/assets/image20.jpg",
//         description: "Primary materials for smelting and molten metal production.",
//         items: ["Ferro Alloys", "Silica Sand", "Pig Iron"]
//       },
//       {
//         name: "Heavy Metal Fabrication Parts",
//         slug: "heavy-metal-fabrication-parts",
//         image: "/assets/image19.jpeg",
//         description: "Custom-fabricated industrial metal parts designed for machinery and infrastructure.",
//         items: ["Plasma-Cut Parts", "Welded Fabrications", "Machined Components"]
//       },
//       {
//         name: "Heat Resistant Alloys",
//         slug: "heat-resistant-alloys",
//         image: "/assets/image18.jpeg",
//         description: "Alloys engineered to withstand extreme temperatures and load conditions.",
//         items: ["Inconel", "Hastelloy", "Duplex / Super-Duplex Grades"]
//       }
//     ]
//   }

// };


// lib/menuData.ts
import { Zap, Factory, Settings, ShieldCheck, Leaf, Sun, Droplets, Gauge, Cog, Anvil, Hammer, Shield, Bolt, Building, Flame, Wrench, Cuboid } from 'lucide-react';
export const menuData = {
  irrigation: {
    id: 'irrigation_products',
    label: 'IRRIGATION PRODUCTS',
    icon: Zap,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "PIPES & FITTINGS",
        slug: "pipes-and-fittings",
        image: "/assets/image1.jpeg",
        description: "High-performance irrigation pipes and fittings built for long-term durability and leak-proof water flow in agricultural and commercial farming applications.",
        items: [
          "HDPE pipes",
          "PVC pipes",
          "Compression fittings",
          "Elbow & tee connectors",
          "End caps & reducers"
        ]
      },
      {
        name: "SPRINKLER SYSTEM",
        slug: "sprinkler-system",
        image: "/assets/image1.jpeg",
        description: "Efficient sprinkler irrigation systems designed to distribute precise water coverage across large farming and landscaping areas.",
        items: [
          "Impact sprinklers",
          "Rain-gun sprinklers",
          "Pop-up sprinklers",
          "Sprinkler stands & risers",
          "Nozzles & spray heads"
        ]
      },
      {
        name: "WATER CONTROL",
        slug: "water-control",
        image: "/assets/image1.jpeg",
        description: "Smart water flow management components designed for precise control, distribution and regulation of irrigation water.",
        items: [
          "Solenoid valves",
          "Gate & butterfly valves",
          "Pressure regulators",
          "Flow meters",
          "Air release valves"
        ]
      },
      {
        name: "PUMPING SOLUTION",
        slug: "pumping-solution",
        image: "/assets/image1.jpeg",
        description: "Reliable pumping systems optimized for agricultural water lifting, high-pressure irrigation and industrial water circulation.",
        items: [
          "Centrifugal pumps",
          "Submersible pumps",
          "Booster pumps",
          "Control panels",
          "Pump protection devices"
        ]
      },
      {
        name: "AGRICULTURE TOOLS & ACCESSORIES",
        slug: "agriculture-tools-and-accessories",
        image: "/assets/image1.jpeg",
        description: "Wide range of agricultural tools and accessories improving field productivity, water usage efficiency and system maintenance.",
        items: [
          "Drip punch tools",
          "Pipe cutters",
          "Filter cleaning tools",
          "Connector tool kits",
          "Flow monitoring gauges"
        ]
      },
      {
        name: "LANDSCAPE & GARDEN",
        slug: "landscape-and-garden",
        image: "/assets/image1.jpeg",
        description: "Irrigation solutions crafted for parks, home gardens, resorts, golf courses and urban landscaping projects.",
        items: [
          "Micro sprinkler systems",
          "Garden drip kits",
          "Planter watering units",
          "Fountain & misting systems",
          "Hose reels & garden sprinklers"
        ]
      },
      {
        name: "INDUSTRIAL & LARGE-SCALE",
        slug: "industrial-and-large-scale",
        image: "/assets/image1.jpeg",
        description: "Heavy-duty irrigation solutions engineered for commercial farming, greenhouses, agro-industries and smart irrigation automation.",
        items: [
          "High-pressure filtration systems",
          "Industrial irrigation controllers",
          "Advanced fertigation units",
          "Automated sensing systems",
          "Large-volume water distribution units"
        ]
      }
    ]
  },
  earth_moving_equipments: {
    id: 'earth_moving_equipments',
    label: 'EARTH MOVING EQUIPMENTS',
    icon: Zap,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "BUCKET TEETH & ADAPTORS",
        slug: "bucket-teeth-and-adaptors",
        image: "/assets/image1.jpeg",
        description: "High-strength bucket teeth and adaptors engineered for superior digging performance and extended wear life.",
        items: [
          "Excavator bucket teeth",
          "Loader bucket teeth",
          "Side cutters & adapters",
          "Wear tips & shanks",
          "Tooth pin & retainer kits"
        ]
      },
      {
        name: "CUTTING EDGES & END BITS",
        slug: "cutting-edges-and-end-bits",
        image: "/assets/image1.jpeg",
        description: "Durable cutting edges and end bits for bulldozers, graders and loaders to deliver smooth and efficient earth cutting.",
        items: [
          "Bolt-on cutting edges",
          "Grader end bits",
          "Dozer cutting blades",
          "Heat-treated serrated edges",
          "Wear protection plates"
        ]
      },
      {
        name: "ROLLARS & SPROCKETS",
        slug: "rollers-and-sprockets",
        image: "/assets/image1.jpeg",
        description: "High-precision rollers and sprockets built to withstand extreme working conditions and heavy operational loads.",
        items: [
          "Top carrier rollers",
          "Bottom track rollers",
          "Drive sprockets",
          "Segment sprockets",
          "Idler wheels"
        ]
      },
      {
        name: "COUPLERS & ATTACHEMENTS",
        slug: "couplers-and-attachments",
        image: "/assets/image1.jpeg",
        description: "Heavy-duty couplers and attachments designed for fast tool change and increased job-site versatility.",
        items: [
          "Quick couplers",
          "Ripper attachments",
          "Hydraulic breakers",
          "Grab buckets & grapples",
          "Auger drilling attachments"
        ]
      },
      {
        name: "HYDRAULIC CYLINDER COMPONENTS",
        slug: "hydraulic-cylinder-components",
        image: "/assets/image1.jpeg",
        description: "Precision-engineered hydraulic cylinder components delivering high power output and smooth motion control.",
        items: [
          "Cylinder tubes & rods",
          "Piston & gland assemblies",
          "Seal kits",
          "Hydraulic sleeves",
          "Chrome-plated shafts"
        ]
      },
      {
        name: "CAB & BODY PARTS",
        slug: "cab-and-body-parts",
        image: "/assets/image1.jpeg",
        description: "High-quality cabin and body components providing durability, operator comfort, and safety on heavy machines.",
        items: [
          "Operator cabins",
          "Seat assemblies",
          "Dashboard consoles",
          "Cabin glasses & panels",
          "Safety guard frames"
        ]
      },
      {
        name: "DRUVE TRAIN COMPONENTS",
        slug: "drive-train-components",
        image: "/assets/image1.jpeg",
        description: "Heavy-duty drive train components engineered for maximum power transmission and long service life in construction machinery.",
        items: [
          "Axles & shafts",
          "Transmission gear sets",
          "Differential assemblies",
          "Planetary gears",
          "Propeller shafts"
        ]
      },
      {
        name: "UNDERCARRIAGE COMPONENTS",
        slug: "undercarriage-components",
        image: "/assets/image1.jpeg",
        description: "Robust undercarriage components designed to withstand rocky, abrasive, and high-impact terrains.",
        items: [
          "Track chains",
          "Track shoes",
          "Idlers & rollers",
          "Track guards",
          "Recoil springs"
        ]
      }
    ]

  },
  cathodic_protection: {
    id: 'cathodic_protection',
    label: 'CATHODIC PROTECTION',
    icon: Settings,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "ZINC & ALUMINIUM CAST ANODES",
        slug: "zinc-aluminium-cast-anodes",
        image: "/assets/image1.jpeg",
        description: "High-purity zinc and aluminium cast anodes designed for long-term corrosion prevention in marine and industrial environments.",
        items: [
          "Zinc slab anodes",
          "Aluminium block anodes",
          "Boat hull anodes",
          "Pipeline cast anodes",
          "Tank & vessel sacrificial anodes"
        ]
      },
      {
        name: "COATED TITANIUM ANODES",
        slug: "coated-titanium-anodes",
        image: "/assets/image1.jpeg",
        description: "Mixed-metal oxide (MMO) coated titanium anodes built for high-performance cathodic protection with minimal maintenance.",
        items: [
          "MMO rod anodes",
          "MMO mesh anodes",
          "Ribbon titanium anodes",
          "Tubular titanium anodes",
          "Disc & plate titanium anodes"
        ]
      },
      {
        name: "MAGNESIUM ANODES",
        slug: "magnesium-anodes",
        image: "/assets/image1.jpeg",
        description: "Premium magnesium anodes designed for cathodic protection in underground and freshwater applications.",
        items: [
          "High potential magnesium anodes",
          "AZ63 magnesium rods",
          "Pre-packaged magnesium anodes",
          "Cast magnesium ingots",
          "Flexible anode assemblies"
        ]
      },
      {
        name: "TRANSFORMERS & RECTIFIERS",
        slug: "transformers-rectifiers",
        image: "/assets/image1.jpeg",
        description: "Reliable transformers and rectifiers engineered to deliver controlled DC output for cathodic protection systems.",
        items: [
          "Transformer rectifier units (TRU)",
          "Digital automatic rectifiers",
          "Outdoor weatherproof rectifiers",
          "Oil-cooled transformer rectifiers",
          "Panel-mounted rectifier systems"
        ]
      },
      {
        name: "JUNCTION BOXES",
        slug: "junction-boxes",
        image: "/assets/image1.jpeg",
        description: "Industrial-grade junction boxes designed for safe and secure connectivity in cathodic protection setups.",
        items: [
          "Test station junction boxes",
          "Current distribution boxes",
          "PCB terminal boxes",
          "FRP & metal junction enclosures",
          "Underground access junction boxes"
        ]
      },
      {
        name: "MONITORING EQUIPMENTS",
        slug: "monitoring-equipments",
        image: "/assets/image1.jpeg",
        description: "Advanced monitoring equipment for tracking, measuring and maintaining optimal cathodic protection levels.",
        items: [
          "Reference electrodes",
          "Remote monitoring units (RMU)",
          "Portable CP survey meters",
          "Potential logging devices",
          "Test station probes"
        ]
      },
      {
        name: "CALES & WIRING SYSTEMS",
        slug: "cales-and-wiring-systems",
        image: "/assets/image1.jpeg",
        description: "Durable cabling and wiring systems engineered for cathodic protection installations in challenging conditions.",
        items: [
          "Anode lead wires",
          "High molecular weight polyethylene cables",
          "Copper–copper sulfate cable",
          "Cable splicing kits",
          "Underground shielding wires"
        ]
      }
    ]

  },
  precast_molds: {
    id: 'precast_molds',
    label: 'PRECAST & MOLDS',
    icon: Cuboid,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "PRECAST CONCRETE MOLDS",
        slug: "precast-concrete-molds",
        image: "/assets/image1.jpeg",
        description: "High-precision molds designed for producing durable and uniform concrete elements for large-scale infrastructure and commercial applications.",
        items: [
          "Slab molds",
          "Beam & column molds",
          "Retaining block molds",
          "Foundation molds",
          "Drainage slab molds"
        ]
      },
      {
        name: "PRECAST ROAD & HIGHWAY MOLDS",
        slug: "precast-road-and-highway-molds",
        image: "/assets/image1.jpeg",
        description: "Specialized molds engineered for constructing safe and long-lasting roads, bridges, and traffic systems.",
        items: [
          "New Jersey barrier molds",
          "Curbstone molds",
          "RCC divider molds",
          "Bridge girder molds",
          "Crash barrier molds"
        ]
      },
      {
        name: "PRECAST PIPE MOLDS",
        slug: "precast-pipe-molds",
        image: "/assets/image1.jpeg",
        description: "High-strength molds for manufacturing RCC and concrete pipes with leak-proof joints and extreme load resistance.",
        items: [
          "RCC hume pipe molds",
          "Box culvert pipe molds",
          "Jack pipe molds",
          "Manhole pipe molds",
          "Tongue & groove joint molds"
        ]
      },
      {
        name: "PRECAST BUILDING COMPONENTS",
        slug: "precast-building-components",
        image: "/assets/image1.jpeg",
        description: "Molds for precast structures used in commercial, industrial and residential building applications.",
        items: [
          "Staircase molds",
          "Wall panel molds",
          "Floor slab molds",
          "Balcony & railing molds",
          "Parapet wall molds"
        ]
      },
      {
        name: "LANDSCAPE & URBAN MOLDS",
        slug: "landscape-and-urban-molds",
        image: "/assets/image1.jpeg",
        description: "Aesthetic molds built for landscape projects and urban beautification with architectural precision.",
        items: [
          "Paving block molds",
          "Planter molds",
          "Tree guard molds",
          "Decorative wall molds",
          "Garden bench molds"
        ]
      },
      {
        name: "UTILITY & MUNICIPAL PRECAST MOLDS",
        slug: "utility-and-municipal-precast-molds",
        image: "/assets/image1.jpeg",
        description: "Heavy-duty molds for public utility components used in municipal and smart-city infrastructure.",
        items: [
          "Manhole cover molds",
          "Drain channel molds",
          "Electric cable trench molds",
          "Sewer chamber molds",
          "Utility vault molds"
        ]
      },
      {
        name: "WALL & BOUNDRY MOLDS",
        slug: "wall-and-boundary-molds",
        image: "/assets/image1.jpeg",
        description: "Molds engineered for manufacturing compound walls and boundary structures with maximum durability.",
        items: [
          "Precast wall panel molds",
          "Post & column molds",
          "Prestressed fencing molds",
          "Boundary gate pillar molds",
          "Textured wall molds"
        ]
      },
      {
        name: "INDUSTRIAL PRECAST MOLDS",
        slug: "industrial-precast-molds",
        image: "/assets/image1.jpeg",
        description: "High-end molds designed for industrial precast products used in factories, warehouses and heavy plants.",
        items: [
          "Machine foundation molds",
          "Cable tray molds",
          "Industrial trench molds",
          "Heavy load slab molds",
          "Factory column & beam molds"
        ]
      },
      {
        name: "AGRICULTURE PRECAST MOLDS",
        slug: "agriculture-precast-molds",
        image: "/assets/image1.jpeg",
        description: "Reliable mold systems for agricultural infrastructure supporting farm automation and irrigation systems.",
        items: [
          "Cow shed molds",
          "Irrigation canal molds",
          "Feed trough molds",
          "Cattle grid molds",
          "Agriculture fencing molds"
        ]
      },
      {
        name: "MODULAR MOLDS SYSTEMS",
        slug: "modular-molds-systems",
        image: "/assets/image1.jpeg",
        description: "Easy-to-assemble modular mold systems that reduce production time and increase productivity for multiple precast applications.",
        items: [
          "Adjustable shuttering systems",
          "Steel modular mold panels",
          "Bolt-lock systems",
          "Quick release frames",
          "Universal mold base frames"
        ]
      },
      {
        name: "MOLDS ACCESSORIES",
        slug: "molds-accessories",
        image: "/assets/image1.jpeg",
        description: "A complete range of precision accessories that improve mold performance and lifespan during precast manufacturing.",
        items: [
          "Lifting anchors",
          "Vibration mechanisms",
          "Rubber gaskets",
          "Rebar positioners",
          "Surface finishing liners"
        ]
      }
    ]

  },
  mining_products: {
    id: 'mining_products',
    label: 'MINING PRODUCTS',
    icon: Sun,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "MINING PRODUCTS",
        slug: "mining-products",
        image: "/assets/image1.jpeg",
        description: "A complete range of rugged mining components engineered for high wear resistance, longer service life and maximum productivity across quarrying and mineral processing operations.",
        items: [
          "Crusher Parts",
          "Screen Panels",
          "Idlers & Rollers",
          "Bits & Drill Rods",
          "Blocks & Wear Parts",
          "Teeth & Adaptors",
          "Utility Components"
        ]
      },
      {
        name: "CRUSHER PARTS",
        slug: "crusher-parts",
        image: "/assets/image1.jpeg",
        description: "Heavy-duty crusher components designed for high-impact crushing environments to ensure uninterrupted production and reduced downtime.",
        items: [
          "Jaw plates",
          "Mantles & concaves",
          "Blow bars & hammers",
          "Side plates & cheek plates",
          "Crusher liners"
        ]
      },
      {
        name: "SCREEN PANELS",
        slug: "screen-panels",
        image: "/assets/image1.jpeg",
        description: "High-efficiency screen panels engineered for superior separation, reduced clogging and longer wear life in material screening applications.",
        items: [
          "Polyurethane screen panels",
          "Rubber screen panels",
          "Trommel screens",
          "Wedge wire screens",
          "Modular screen panels"
        ]
      },
      {
        name: "IDLERS & ROLLERS",
        slug: "idlers-and-rollers",
        image: "/assets/image1.jpeg",
        description: "Reliable conveyor idlers and rollers built to withstand abrasive mining environments and ensure smooth bulk handling operations.",
        items: [
          "Carrying idlers",
          "Impact idlers",
          "Return rollers",
          "Troughing idlers",
          "Guide rollers"
        ]
      },
      {
        name: "BITS & DRILL RODS",
        slug: "bits-and-drill-rods",
        image: "/assets/image1.jpeg",
        description: "Rock-drilling tools made for deep penetration, fast drilling rates and maximum wear resistance across surface and underground mining.",
        items: [
          "Tungsten carbide drill bits",
          "Button bits",
          "DTH hammer bits",
          "Drill rods & extensions",
          "Threaded shank adapters"
        ]
      },
      {
        name: "BLOCKS & WEAR PARTS",
        slug: "blocks-and-wear-parts",
        image: "/assets/image1.jpeg",
        description: "Premium wear-resistant blocks and liners designed to protect mining machinery from extreme abrasion and impact environments.",
        items: [
          "Wear blocks",
          "Chocky bars",
          "Wear buttons",
          "Ceramic liners",
          "Hard-faced plates"
        ]
      },
      {
        name: "TEETH & ADAPTORS",
        slug: "teeth-and-adaptors",
        image: "/assets/image1.jpeg",
        description: "High-strength bucket teeth and adaptors that ensure excellent digging performance, easy replacement and long operational life.",
        items: [
          "Excavator bucket teeth",
          "Loader bucket teeth",
          "Tooth adaptors",
          "Side cutter teeth",
          "Wear tips"
        ]
      },
      {
        name: "UTILITY COMPONENTS",
        slug: "utility-components",
        image: "/assets/image1.jpeg",
        description: "Specialized mining utility components that enhance the efficiency, safety and durability of mining and bulk-handling systems.",
        items: [
          "Fasteners & locking systems",
          "Hydraulic wear components",
          "Lubrication accessories",
          "Hose & pipe clamps",
          "Support brackets & plates"
        ]
      }
    ]

  },
  metals_alloys: {
    id: 'metals_alloys',
    label: 'METALS & ALLOYS',
    icon: Droplets,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "METALS & ALLOYS",
        slug: "metals-and-alloys",
        image: "/assets/image1.jpeg",
        description: "A broad portfolio of engineered metal and alloy products designed for industrial, mechanical and structural applications with superior performance and reliability.",
        items: [
          "Ductile iron castings",
          "High manganese steel parts",
          "Stainless steel components",
          "Alloy steel forged parts",
          "Aluminium & brass components",
          "White iron castings",
          "Copper & bronze precision parts",
          "Electrical component alloys",
          "Metal fabricated items",
          "Pipes, tubes & fittings"
        ]
      },
      {
        name: "DUCTILE IRON CASTINGS",
        slug: "ductile-iron-castings",
        image: "/assets/image1.jpeg",
        description: "Precision ductile iron castings offering superior ductility, fatigue strength and impact resistance for heavy-duty applications.",
        items: [
          "Pump casings",
          "Gearbox housings",
          "Valve bodies",
          "Automotive castings",
          "Pipe fittings castings"
        ]
      },
      {
        name: "HIGH MANGANESE STEEL PARTS",
        slug: "high-manganese-steel-parts",
        image: "/assets/image1.jpeg",
        description: "Extremely wear-resistant manganese steel components developed for high impact and abrasive industrial environments.",
        items: [
          "Crusher liners",
          "Hammers",
          "Chutes & grates",
          "Rail components",
          "Wear plate parts"
        ]
      },
      {
        name: "STAINLESS STEEL COMPONENTS",
        slug: "stainless-steel-components",
        image: "/assets/image1.jpeg",
        description: "Corrosion-resistant stainless steel components designed for hygienic, high-pressure and industrial applications.",
        items: [
          "Food processing parts",
          "Pump impellers",
          "Valve components",
          "Shafts & flanges",
          "Heat exchanger parts"
        ]
      },
      {
        name: "ALLOY STEEL FORGED PARTS",
        slug: "alloy-steel-forged-parts",
        image: "/assets/image1.jpeg",
        description: "High-strength alloy steel forgings engineered to withstand heavy loads, extreme temperatures and repeated stress.",
        items: [
          "Gears & pinions",
          "Crankshafts",
          "Connecting rods",
          "Flange forgings",
          "Industrial shafts"
        ]
      },
      {
        name: "ALUMINIUM & BRASS COMPONENTS",
        slug: "aluminium-and-brass-components",
        image: "/assets/image1.jpeg",
        description: "Lightweight aluminium and brass components widely used in automotive, electrical, construction and precision industries.",
        items: [
          "Automotive housings",
          "Electrical terminals",
          "Heat sink housings",
          "Hydraulic parts",
          "Marine hardware components"
        ]
      },
      {
        name: "WHITE IRON CASTINGS",
        slug: "white-iron-castings",
        image: "/assets/image1.jpeg",
        description: "Ultra wear-resistant white iron castings engineered for abrasion-heavy industries demanding long service life.",
        items: [
          "Liners & lifter bars",
          "Pump sleeves",
          "Grinding mill parts",
          "Chocky bars",
          "Wear tiles"
        ]
      },
      {
        name: "COPPER & BRONZE PRECISION PARTS",
        slug: "copper-and-bronze-precision-parts",
        image: "/assets/image1.jpeg",
        description: "Electrically conductive and corrosion-resistant copper and bronze components built for mechanical and electrical performance.",
        items: [
          "Bushings & bearings",
          "Worm gear wheels",
          "Switchgear parts",
          "Precision connectors",
          "Hydraulic valve inserts"
        ]
      },
      {
        name: "ELECTRICAL COMPONENT ALLOYS",
        slug: "electrical-component-alloys",
        image: "/assets/image1.jpeg",
        description: "Premium electrical-grade alloys for high-efficiency current conduction, heat resistance and long service life.",
        items: [
          "Busbar alloys",
          "Contact terminals",
          "Earthing components",
          "Connector studs",
          "Conductive sleeves"
        ]
      },
      {
        name: "METAL FABRICATED ITEMS",
        slug: "metal-fabricated-items",
        image: "/assets/image1.jpeg",
        description: "Custom fabricated metal components tailored to industrial projects requiring structural accuracy and durability.",
        items: [
          "Welded assemblies",
          "Structural brackets",
          "Base frames",
          "Support stands",
          "Sheet metal enclosures"
        ]
      },
      {
        name: "PIPES, TUBES & FITTINGS",
        slug: "pipes-tubes-and-fittings",
        image: "/assets/image1.jpeg",
        description: "Industrial-grade metal pipes, tubes and fittings designed for fluid handling, HVAC, chemical and mechanical applications.",
        items: [
          "Seamless steel pipes",
          "Stainless steel tubes",
          "Flanged fittings",
          "Threaded pipe fittings",
          "High-pressure elbows & tees"
        ]
      }
    ]
  },
  // fabrication: {
  //     id: 'fabrication',
  //     label: 'FABRICATION',
  //     icon: Wrench,
  //     bannerImage: '/assets/image10.jpeg',
  //     color: 'bg-orange-100 text-orange-900',
  //     categories: []
  // },

  // foundry_equipments: {
  //     id: 'foundry_equipments',
  //     label: 'FOUNDRY EQUIPMENTS',
  //     icon: Factory,
  //     bannerImage: '/assets/image10.jpeg',
  //     color: 'bg-orange-100 text-orange-900',
  //     categories: []
  // },

  // oil_gas_industries_products: {
  //     id: 'oil_gas_industries_products',
  //     label: 'OIL & GAS INDUSTRIES PRODUCTS',
  //     icon: Flame,
  //     bannerImage: '/assets/image10.jpeg',
  //     color: 'bg-orange-100 text-orange-900',
  //     categories: []
  // },

  // construction_infrastructure: {
  //     id: 'construction_infrastructure',
  //     label: 'CONSTRUCTION & INFRASTRUCTURE',
  //     icon: Building,
  //     bannerImage: '/assets/image10.jpeg',
  //     color: 'bg-orange-100 text-orange-900',
  //     categories: []
  // },

  // utility_power_energy: {
  //     id: 'utility_power_energy',
  //     label: 'UTILITY & POWER ENERGY',
  //     icon: Bolt,
  //     bannerImage: '/assets/image10.jpeg',
  //     color: 'bg-orange-100 text-orange-900',
  //     categories: []
  // },

  // defence_aerospace: {
  //     id: 'defence_aerospace',
  //     label: 'DEFENCE & AEROSPACE',
  //     icon: Shield,
  //     bannerImage: '/assets/image10.jpeg',
  //     color: 'bg-orange-100 text-orange-900',
  //     categories: []
  // },

  // custom_manufacturing: {
  //     id: 'custom_manufacturing',
  //     label: 'CUSTOM MANUFACTURING',
  //     icon: Hammer,
  //     bannerImage: '/assets/image10.jpeg',
  //     color: 'bg-orange-100 text-orange-900',
  //     categories: []
  // },

  // forge_shop_products: {
  //     id: 'forge_shop_products',
  //     label: 'FORGE SHOP PRODUCTS',
  //     icon: Anvil,
  //     bannerImage: '/assets/image10.jpeg',
  //     color: 'bg-orange-100 text-orange-900',
  //     categories: []
  // },

  // industrial_machinery: {
  //     id: 'industrial_machinery',
  //     label: 'INDUSTRIAL MACHINERY',
  //     icon: Cog,
  //     bannerImage: '/assets/image10.jpeg',
  //     color: 'bg-orange-100 text-orange-900',
  //     categories: []
  // }

};
export const footerColumns = [
  {
    "id": "corporate",
    "title": "Corporate",
    "links": [
      { "label": "Customer Services", "href": "/footerPages/customer-services" },
      { "label": "Accounts Dept.", "href": "/footerPages/accounts-dept" },
      { "label": "Awards & Achievements", "href": "/footerPages/awards-achievements" },
      { "label": "Leadership Team", "href": "/footerPages/leadership-team" },
      { "label": "Our Values", "href": "/footerPages/our-values" },
      { "label": "Current Events", "href": "/footerPages/current-events" },
      { "label": "Global Presence", "href": "/footerPages/global-presence" },
      { "label": "Executive Committee", "href": "/footerPages/executive-committee" },
      { "label": "Our Foundation", "href": "/footerPages/our-foundation" },
      { "label": "Human Resources", "href": "/footerPages/human-resources" },
      { "label": "Mission & Vision", "href": "/footerPages/mission-vision" },
      { "label": "Monthly Raffle", "href": "/footerPages/monthly-raffle" },
      { "label": "Organizational Structure", "href": "/footerPages/organizational-structure" },
      { "label": "Scholarships", "href": "/footerPages/scholarships" },
      { "label": "Testimonials", "href": "/footerPages/testimonials" },
      { "label": "Our Milestones", "href": "/footerPages/our-milestones" },
      { "label": "Industrial Articles", "href": "/footerPages/industrial-articles" },
      { "label": "Trade Shows", "href": "/footerPages/trade-shows" }
    ]
  },
  {
    "id": "resources",
    "title": "Resources",
    "links": [
      { "label": "Products Pricing", "href": "/footerPages/products-pricing" },
      { "label": "Exports/Imports", "href": "/footerPages/exports-imports" },
      { "label": "Media Managements", "href": "/footerPages/media-managements" },
      { "label": "Animations & Videos", "href": "/footerPages/animations-videos" },
      { "label": "Product Catalogs", "href": "/footerPages/product-catalogs" },
      { "label": "Installation Guide", "href": "/footerPages/installation-guide" },
      { "label": "Data Center", "href": "/footerPages/data-center" },
      { "label": "Sales Team", "href": "/footerPages/sales-team" },
      { "label": "Follow Your Order", "href": "/footerPages/follow-your-order" },
      { "label": "On Going Projects", "href": "/footerPages/on-going-projects" },
      { "label": "Request for Delivery", "href": "/footerPages/request-for-delivery" },
      { "label": "Request for Quote", "href": "/footerPages/request-for-quote" },
      { "label": "Logistics", "href": "/footerPages/logistics" },
      { "label": "Webinars", "href": "/footerPages/webinars" },
      { "label": "Certifications", "href": "/footerPages/certifications" },
      { "label": "Design Resources", "href": "/footerPages/design-resources" },
      { "label": "Compliances", "href": "/footerPages/compliances" },
      { "label": "FAQs", "href": "/footerPages/faqs" }
    ]
  },
  {
    "id": "engineering",
    "title": "Engineering",
    "links": [
      { "label": "Market Analysis", "href": "/footerPages/market-analysis" },
      { "label": "Case Studies", "href": "/footerPages/case-studies" },
      { "label": "Specifications", "href": "/footerPages/specifications" },
      { "label": "Standards", "href": "/footerPages/standards" },
      { "label": "Submittals", "href": "/footerPages/submittals" },
      { "label": "Shop Drawings", "href": "/footerPages/shop-drawings" },
      { "label": "Engineering Drawings", "href": "/footerPages/engineering-drawings" },
      { "label": "Data Sheets", "href": "/footerPages/data-sheets" },
      { "label": "Engineers & Architects", "href": "/footerPages/engineers-architects" },
      { "label": "IT Department", "href": "/footerPages/it-department" },
      { "label": "Innovations", "href": "/footerPages/innovations" },
      { "label": "Customizations", "href": "/footerPages/customizations" },
      { "label": "Quality Control", "href": "/footerPages/quality-control" },
      { "label": "CRM System", "href": "/footerPages/crm-system" },
      { "label": "Manufacturing", "href": "/footerPages/manufacturing" },
      { "label": "Approvals", "href": "/footerPages/approvals" },
      { "label": "Latest Technologies", "href": "/footerPages/latest-technologies" }
    ]
  },
  {
    "id": "product-categories",
    "title": "Product Categories",
    "links": [
      { "label": "Irrigation Products", "href": "/footerPages/irrigation-products" },
      { "label": "Earth Moving Equipments", "href": "/footerPages/earth-moving-equipments" },
      { "label": "Cathodic Protection", "href": "/footerPages/cathodic-protection" },
      { "label": "Precast & Molds", "href": "/footerPages/precast-molds" },
      { "label": "Mining Products", "href": "/footerPages/mining-products" },
      { "label": "Metals & Alloys", "href": "/footerPages/metals-alloys" },
      { "label": "Fabrication", "href": "/footerPages/fabrication" },
      { "label": "Foundry Equipments", "href": "/footerPages/foundry-equipments" },
      { "label": "Oil & Gas Industries Products", "href": "/footerPages/oil-gas-products" },
      { "label": "Construction & Infrastructure", "href": "/footerPages/construction-infrastructure" },
      { "label": "Utility & Power Energy", "href": "/footerPages/utility-power-energy" },
      { "label": "Defence & Aerospace", "href": "/footerPages/defence-aerospace" },
      { "label": "Custom Manufacturing", "href": "/footerPages/custom-manufacturing" },
      { "label": "Forge Shop Products", "href": "/footerPages/forge-shop-products" },
      { "label": "Industrial Machinery", "href": "/footerPages/industrial-machinery" },
      { "label": "Wind & Solar", "href": "/footerPages/wind-solar" }
    ]
  },
  {
    "id": "policies",
    "title": "Policies",
    "links": [
      { "label": "Government Policy", "href": "/footerPages/government-policy" },
      { "label": "Privacy Policy", "href": "/footerPages/privacy-policy" },
      { "label": "Terms & Conditions", "href": "/footerPages/terms-conditions" },
      { "label": "Security & Maintenance", "href": "/footerPages/security-maintenance" },
      { "label": "Credit Application", "href": "/footerPages/credit-application" },
      { "label": "Corporate Social Responsibility", "href": "/footerPages/corporate-social-responsibility" },
      { "label": "Non Disclosure Agreement", "href": "/footerPages/non-disclosure-agreement" },
      { "label": "Approvals", "href": "/footerPages/approvals" },
      { "label": "Return Policy", "href": "/footerPages/return-policy" },
      { "label": "Warranties", "href": "/footerPages/warranties" },
      { "label": "Product Liabilities", "href": "/footerPages/product-liabilities" },
      { "label": "Confidentiality", "href": "/footerPages/confidentiality" },
      { "label": "Sustainability", "href": "/footerPages/sustainability" },
      { "label": "Insurances", "href": "/footerPages/insurances" },
      { "label": "Complaints", "href": "/footerPages/complaints" },
      { "label": "Patents", "href": "/footerPages/patents" }
    ]
  },
  {
    "id": "support-quality",
    "title": "Support & Services & Quality & Compliances",
    "columns": [
      {
        "sectionTitle": "Support & Services",
        "links": [
          { "label": "Technical Support", "href": "/footerPages/technical-support" },
          { "label": "Customer Support", "href": "/footerPages/customer-support" },
          { "label": "Engineering Consultancy", "href": "/footerPages/engineering-consultancy" },
          { "label": "After Sales Services", "href": "/footerPages/after-sales-services" },
          { "label": "Installation Support", "href": "/footerPages/installation-support" },
          { "label": "Custom Support", "href": "/footerPages/custom-support" },
          { "label": "Live Solutions", "href": "/footerPages/live-solutions" }
        ]
      },
      {
        "sectionTitle": "Quality & Compliances",
        "links": [
          { "label": "Chemical Testing", "href": "/footerPages/chemical-testing" },
          { "label": "Physical Testing", "href": "/footerPages/physical-testing" },
          { "label": "Manual Testing", "href": "/footerPages/manual-testing" },
          { "label": "Testing & Inspection", "href": "/footerPages/testing-inspection" },
          { "label": "Material Analysis", "href": "/footerPages/material-analysis" },
          { "label": "Quality Control Process", "href": "/footerPages/quality-control-process" },
          { "label": "Approval & Certification", "href": "/footerPages/approval-certification" }
        ]
      }
    ]
    ,
  }


]