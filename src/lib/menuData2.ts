// lib/menuData.ts
import { Zap, Factory, Settings, ShieldCheck, Leaf, Sun, Droplets, Gauge } from 'lucide-react';

export const menuData = {
  irrigation: {
    id: 'irrigation_products',
    label: 'Irrigation Products',
    icon: Zap,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "Drip Irrigation Systems",
        slug: "drip-irrigation-systems",
        image: "/assets/image1.jpeg",
        description: "Precision watering systems designed for agriculture and horticulture with minimal water wastage.",
        items: ["Drip lines", "Inline laterals", "Emitters", "Pressure-compensating emitters"]
        // },
        // {
        //   name: "Sprinkler Irrigation Systems",
        //   slug: "sprinkler-irrigation-systems",
        //   image: "/assets/image10.jpeg",
        //   description: "Uniform water distribution models suitable for lawns, farms, and large cultivation areas.",
        //   items: ["Impact sprinklers", "Gear sprinklers", "Center pivot sprinklers", "Gun sprinklers"]
        // },
        // {
        //   name: "Irrigation Pumps",
        //   slug: "irrigation-pumps",
        //   image: "/assets/image10.jpeg",
        //   description: "Reliable pumping solutions for agricultural and industrial irrigation workflows.",
        //   items: ["Centrifugal pumps", "Submersible pumps", "Solar irrigation pumps", "Jet pumps"]
        // },
        // {
        //   name: "PVC & HDPE Pipes",
        //   slug: "pvc-hdpe-pipes",
        //   image: "/assets/image10.jpeg",
        //   description: "High-durability pipes for water supply distribution across farms and agricultural setups.",
        //   items: ["PVC pipes", "HDPE pipes", "LDPE pipes", "Pipe fittings"]
        // },
        // {
        //   name: "Irrigation Control Valves",
        //   slug: "irrigation-control-valves",
        //   image: "/assets/image10.jpeg",
        //   description: "Flow-regulating valves for manual and automated irrigation applications.",
        //   items: ["Solenoid valves", "Pressure reducing valves", "Ball valves", "Control filters"]
        // },
        // {
        //   name: "Filtration Systems",
        //   slug: "filtration-systems",
        //   image: "/assets/image10.jpeg",
        //   description: "Filters ensuring particulate-free water supply in drip and sprinkler systems.",
        //   items: ["Screen filters", "Disc filters", "Media filters", "Hydrocyclone separators"]
        // },
        // {
        //   name: "Agricultural Water Storage",
        //   slug: "agricultural-water-storage",
        //   image: "/assets/image10.jpeg",
        //   description: "Storage solutions for irrigation including tanks, reservoirs and modular units.",
        //   items: ["Water tanks", "Flexi tanks", "HDPE lined storage pits", "Reservoir liners"]
        // },
        // {
        //   name: "Fertilizer & Chemical Injectors",
        //   slug: "fertilizer-injectors",
        //   image: "/assets/image10.jpeg",
        //   description: "Devices to inject nutrients and agro-chemicals into water distribution systems.",
        //   items: ["Venturi injectors", "Dosing pumps", "Fertigation tanks", "Nutrient mixers"]
        // },
        // {
        //   name: "Greenhouse Irrigation Equipment",
        //   slug: "greenhouse-irrigation",
        //   image: "/assets/image10.jpeg",
        //   description: "Climate-controlled irrigation tools for protected agriculture.",
        //   items: ["Misting systems", "Fogging nozzles", "Capillary mats", "Automation timers"]
        // },
        // {
        //   name: "Smart Irrigation Controllers",
        //   slug: "smart-irrigation-controllers",
        //   image: "/assets/image10.jpeg",
        //   description: "IoT-based controllers for water-saving and automatic irrigation scheduling.",
        //   items: ["Wi-Fi irrigation controllers", "Moisture sensors", "Weather-based control units"]
        // },
        // {
        //   name: "Canal & Surface Irrigation Tools",
        //   slug: "canal-surface-irrigation",
        //   image: "/assets/image10.jpeg",
        //   description: "Solutions designed for open-flow irrigation without pipelines.",
        //   items: ["Canal gates", "Channel meters", "Flow level regulators", "Check structures"]
        // },
        // {
        //   name: "Landscape Irrigation Systems",
        //   slug: "landscape-irrigation-systems",
        //   image: "/assets/image10.jpeg",
        //   description: "Urban and residential irrigation products for lawns, parks, and sports grounds.",
        //   items: ["Pop-up sprinklers", "Rotor sprinklers", "Drippers for landscaping"]
        // },
        // {
        //   name: "Micro Irrigation Accessories",
        //   slug: "micro-irrigation-accessories",
        //   image: "/assets/image10.jpeg",
        //   description: "Fine-scale irrigation tools for nurseries and commercial plantations.",
        //   items: ["Microtubes", "Barb fittings", "Micro sprayers", "Inline connectors"]
        // },
        // {
        //   name: "Soil Moisture Management Systems",
        //   slug: "soil-moisture-management",
        //   image: "/assets/image10.jpeg",
        //   description: "Solutions to monitor and optimize soil moisture for maximum yield.",
        //   items: ["Moisture probes", "Soil sensors", "Data logging systems"]
        // },
        // {
        //   name: "Rainwater Harvesting Systems",
        //   slug: "rainwater-harvesting-systems",
        //   image: "/assets/image10.jpeg",
        //   description: "Systems designed to collect and store rainwater for irrigation use.",
        //   items: ["Gutter filtration units", "Percolation pits", "Rainwater tanks"]
        // },
        // {
        //   name: "Irrigation Fittings & Joints",
        //   slug: "irrigation-fittings-joints",
        //   image: "/assets/image10.jpeg",
        //   description: "Connectors and adaptors for irrigation pipeline networks.",
        //   items: ["Elbows", "Tees", "Joiners", "End caps"]
      },
      {
        name: "Solar Irrigation Systems",
        slug: "solar-irrigation-systems",
        image: "/assets/image2.jpeg",
        description: "Energy-efficient solar-based irrigation pumping and automation setups.",
        items: ["Solar pump kits", "Solar charge controllers", "Remote monitoring units"]
      },
      {
        name: "Irrigation Tools & Accessories",
        slug: "irrigation-tools-accessories",
        image: "/assets/image3.jpeg",
        description: "Maintenance accessories for repairing and optimizing irrigation installations.",
        items: ["Punch tools", "Pipe cutters", "Repair couplers", "Distribution manifolds"]
      },
      {
        name: "Agronomy & Field Survey Equipment",
        slug: "agronomy-survey-equipment",
        image: "/assets/image4.jpg",
        description: "Yield-enhancing tools for field study and agricultural optimization.",
        items: ["Laser land levelers", "Weather stations", "Nutrient meters"]
      },
      {
        name: "Irrigation Project Contracting",
        slug: "irrigation-contracting",
        image: "/assets/image5.jpeg",
        description: "Turnkey execution services for irrigation infrastructure projects.",
        items: ["Drip installation projects", "Sprinkler project execution", "Pipeline network design"]
      }
    ]
  }
  ,
  earth_moving: {
    id: 'earth_moving',
    label: 'Earth Moving',
    icon: Factory,
    bannerImage: '/assets/image14.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "Excavators",
        slug: "excavators",
        image: "/assets/image6.jpg",
        description: "Large-scale excavators for trenching, mining, construction and demolition applications.",
        items: ["Crawler excavators", "Mini excavators", "Long-reach excavators", "Hydraulic breakers"]
      },
      {
        name: "Wheel Loaders",
        slug: "wheel-loaders",
        image: "/assets/image7.jpg",
        description: "Heavy-duty loaders designed to transport bulk earth and aggregates efficiently.",
        items: ["Heavy wheel loaders", "Compact loaders", "Loader buckets", "Log grapples"]
      },
      {
        name: "Backhoe Loaders",
        slug: "backhoe-loaders",
        image: "/assets/image8.jpg",
        description: "Multi-purpose earthmovers combining digging and loading capabilities.",
        items: ["Construction backhoes", "Agriculture backhoes", "Extendable booms"]
      },
      {
        name: "Bulldozers",
        slug: "bulldozers",
        image: "/assets/image9.jpeg",
        description: "Powerful dozers for leveling, grading and pushing heavy earth materials.",
        items: ["Crawler dozers", "Mini dozers", "Swamp dozers", "Ripper attachments"]
      },
      {
        name: "Motor Graders",
        slug: "motor-graders",
        image: "/assets/image10.jpeg",
        description: "Precision grading machines for road construction and land leveling.",
        items: ["Articulated graders", "Rigid frame graders", "Precision blade control systems"]
      },
      {
        name: "Skid Steer Loaders",
        slug: "skid-steer-loaders",
        image: "/assets/image11.jpg",
        description: "Compact loaders designed for use in confined construction spaces.",
        items: ["Standard skid steers", "Track skid steers", "Augers & trenchers"]
      },
      // {
      //   name: "Dump Trucks",
      //   slug: "dump-trucks",
      //   image: "/assets/image10.jpeg",
      //   description: "Hauling and transport vehicles for earth, aggregates, and ores.",
      //   items: ["Articulated dump trucks", "Rigid dumpers", "Off-highway trucks"]
      // },
      // {
      //   name: "Trenchers",
      //   slug: "trenchers",
      //   image: "/assets/image10.jpeg",
      //   description: "Machines used for pipe, sewage, and cable trench excavation.",
      //   items: ["Chain trenchers", "Wheel trenchers", "Micro trenchers"]
      // },
      // {
      //   name: "Compactors & Rollers",
      //   slug: "compactors-rollers",
      //   image: "/assets/image10.jpeg",
      //   description: "Soil and asphalt compaction equipment for site preparation and road works.",
      //   items: ["Single drum rollers", "Tandem rollers", "Vibratory compactors"]
      // },
      // {
      //   name: "Crawler Carriers",
      //   slug: "crawler-carriers",
      //   image: "/assets/image10.jpeg",
      //   description: "Tracked carriers capable of transporting payloads across rough terrains.",
      //   items: ["Tracked dumpers", "Rubber track carriers", "Utility crawler chassis"]
      // },
      // {
      //   name: "Rock Breakers & Hammers",
      //   slug: "rock-breakers",
      //   image: "/assets/image10.jpeg",
      //   description: "Attachments for breaking rock, reinforced concrete and mining extraction.",
      //   items: ["Hydraulic hammers", "Chisel tools", "Vibration damped breakers"]
      // },
      // {
      //   name: "Rippers & Scarifiers",
      //   slug: "rippers-scarifiers",
      //   image: "/assets/image10.jpeg",
      //   description: "Soil ripping tools designed for hard and compact terrain.",
      //   items: ["Single shank rippers", "Multi-shank rippers", "Rear-frame ripper kits"]
      // },
      // {
      //   name: "Buckets & Attachments",
      //   slug: "buckets-attachments",
      //   image: "/assets/image10.jpeg",
      //   description: "High-performance attachments enhancing earthmoving productivity.",
      //   items: ["Rock buckets", "Clamshell buckets", "Tilt buckets", "Screening buckets"]
      // },
      // {
      //   name: "Earth Boring Machines",
      //   slug: "earth-boring-machines",
      //   image: "/assets/image10.jpeg",
      //   description: "Equipment for drilling and earth extraction for utilities and foundations.",
      //   items: ["Horizontal boring machines", "Drilling rigs", "Pile drilling tools"]
      // },
      // {
      //   name: "Scrapers",
      //   slug: "scrapers",
      //   image: "/assets/image10.jpeg",
      //   description: "Bulk material movers for long-distance earth conveyance.",
      //   items: ["Elevating scrapers", "Open bowl scrapers", "Pull scraper attachments"]
      // },
      // {
      //   name: "Wheel Dozers",
      //   slug: "wheel-dozers",
      //   image: "/assets/image10.jpeg",
      //   description: "Dozers engineered for faster grading and material transport applications.",
      //   items: ["Heavy wheel dozers", "Utility wheel dozers", "Landfill wheel dozers"]
      // },
      // {
      //   name: "Site Support Equipment",
      //   slug: "site-support-machines",
      //   image: "/assets/image10.jpeg",
      //   description: "Support machines improving site efficiency and earthmoving workflow.",
      //   items: ["Telehandlers", "Water tankers", "Fuel bowser carriers"]
      // },
      // {
      //   name: "Track Chains & Undercarriages",
      //   slug: "undercarriages",
      //   image: "/assets/image10.jpeg",
      //   description: "Undercarriage parts built for earthmoving and mining operations.",
      //   items: ["Track shoes", "Idlers & rollers", "Sprockets", "Complete track systems"]
      // },
      {
        name: "Hydraulic Systems & Spares",
        slug: "hydraulic-spares",
        image: "/assets/image12.jpg",
        description: "Hydraulic components for maintenance and repair of earthmoving fleets.",
        items: ["Hydraulic pumps", "Control valves", "Seal kits", "Hoses & fittings"]
      },
      {
        name: "Earth Moving Fleet Rental",
        slug: "earth-moving-rental",
        image: "/assets/image13.jpg",
        description: "Heavy machinery rental services for commercial and industrial projects.",
        items: ["Short-term rental", "Long-term rental", "Operator-assisted machinery"]
      }
    ]
  }
  ,
  cathodic_protection: {
    id: 'cathodic_protection',
    label: 'Cathodic Protection',
    icon: Settings,
    bannerImage: '/assets/image14.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "Sacrificial Anodes",
        slug: "sacrificial-anodes",
        image: "/assets/image15.jpg",
        description: "High-performance anodes used to protect steel infrastructure from corrosion.",
        items: ["Zinc anodes", "Aluminum anodes", "Magnesium anodes", "Custom shaped anodes"]
      },
      // {
      //   name: "Impressed Current Systems",
      //   slug: "impressed-current-systems",
      //   image: "/assets/image10.jpeg",
      //   description: "Advanced impressed current systems designed for long-term corrosion control.",
      //   items: ["Transformer rectifiers", "Conductive polymer anodes", "Deep anode systems"]
      // },
      // {
      //   name: "Pipeline Cathodic Protection",
      //   slug: "pipeline-cp",
      //   image: "/assets/image10.jpeg",
      //   description: "Cathodic protection systems engineered for oil, gas, and water pipelines.",
      //   items: ["Pipeline grounding", "Buried pipeline CP", "Transmission pipeline CP"]
      // },
      // {
      //   name: "Underground Storage Tank CP",
      //   slug: "ust-cp",
      //   image: "/assets/image10.jpeg",
      //   description: "Cathodic protection solutions for hazardous material storage tanks.",
      //   items: ["Sacrificial tank CP", "ICCP for tanks", "Probe and testing sensors"]
      // },
      // {
      //   name: "Marine Structure CP",
      //   slug: "marine-structure-cp",
      //   image: "/assets/image10.jpeg",
      //   description: "Highly durable corrosion protection for ports, jetties and offshore platforms.",
      //   items: ["Jetty anodes", "Ship hull anodes", "Offshore anode sleds"]
      // },
      // {
      //   name: "Reinforced Concrete CP",
      //   slug: "reinforced-concrete-cp",
      //   image: "/assets/image10.jpeg",
      //   description: "Concrete corrosion protection for bridges, buildings, and tunnels.",
      //   items: ["Titanium mesh anodes", "Conductive overlay", "Galvanic point anodes"]
      // },
      // {
      //   name: "Groundbed Systems",
      //   slug: "groundbed-systems",
      //   image: "/assets/image10.jpeg",
      //   description: "Deep and shallow groundbeds for any industrial CP application.",
      //   items: ["Horizontal groundbeds", "Vertical drill groundbeds", "Linear anode beds"]
      // },
      // {
      //   name: "Monitoring Equipment",
      //   slug: "cp-monitoring-equipment",
      //   image: "/assets/image10.jpeg",
      //   description: "Smart CP monitoring hardware to evaluate protection status.",
      //   items: ["Remote monitoring units", "CP test stations", "Potential monitoring sensors"]
      // },
      // {
      //   name: "Rectifiers & Power Supplies",
      //   slug: "cp-rectifiers",
      //   image: "/assets/image10.jpeg",
      //   description: "Reliable rectifiers for ICCP systems in harsh industrial environments.",
      //   items: ["AC/DC power units", "Auto-controlled rectifiers", "Solar rectifiers"]
      // },
      {
        name: "Reference Electrodes",
        slug: "reference-electrodes",
        image: "/assets/image16.jpg",
        description: "CP reference electrodes for precise corrosion analysis and monitoring.",
        items: ["Cu/CuSO4 electrodes", "Ag/AgCl electrodes", "Permanent and portable probes"]
      },
      {
        name: "Test Stations & Junction Boxes",
        slug: "cp-test-stations",
        image: "/assets/image17.jpg",
        description: "Field testing and isolation components for CP systems.",
        items: ["Multi-terminal test stations", "Heavy-duty junction boxes", "Test post accessories"]
      },
      {
        name: "Bonding & Isolation Kits",
        slug: "bonding-isolation",
        image: "/assets/image4.jpg",
        description: "Bonding and isolation products for controlled cathodic flow.",
        items: ["Isolation joints", "Flange insulation kits", "Surge diverters"]
        // },
        // {
        //   name: "Earthing & Grounding",
        //   slug: "cp-grounding",
        //   image: "/assets/image10.jpeg",
        //   description: "Grounding components for safe CP installations.",
        //   items: ["Copper grounding rods", "Grounding grids", "Exothermic welding kits"]
        // },
        // {
        //   name: "Pipeline Pigging Attachments",
        //   slug: "pipeline-pigging",
        //   image: "/assets/image10.jpeg",
        //   description: "Accessories that help maintain and assess pipeline protection.",
        //   items: ["Pig launchers", "Pig receivers", "Cleaning pigs"]
        // },
        // {
        //   name: "CP System Accessories",
        //   slug: "cp-accessories",
        //   image: "/assets/image10.jpeg",
        //   description: "Add-on components supporting overall cathodic protection setup.",
        //   items: ["Cables & connectors", "Cable splices", "Cable protection conduits"]
        // },
        // {
        //   name: "Offshore Anode Retrofits",
        //   slug: "offshore-anode-retrofits",
        //   image: "/assets/image10.jpeg",
        //   description: "Solutions for retrofitting corrosion protection on existing offshore structures.",
        //   items: ["Clamp-on anodes", "Retrofit sled anodes", "Underwater mounting brackets"]
        // },
        // {
        //   name: "Transformer Rectifier Panels",
        //   slug: "rectifier-panels",
        //   image: "/assets/image10.jpeg",
        //   description: "Industrial CP rectifier panels built for reliability and performance.",
        //   items: ["Indoor panels", "Outdoor weatherproof panels", "Marine grade panels"]
        // },
        // {
        //   name: "Anode Cable Systems",
        //   slug: "anode-cable-systems",
        //   image: "/assets/image10.jpeg",
        //   description: "High-strength cable solutions for long-distance corrosion protection.",
        //   items: ["HMWPE copper cables", "Kynar insulated cable", "Jacketed marine cable"]
      },
      {
        name: "Pipeline Rehabilitation Kits",
        slug: "pipeline-rehab",
        image: "/assets/image7.jpg",
        description: "Repair solutions for pipelines losing CP efficiency.",
        items: ["Wrap repair kits", "Weld repair kits", "Protective barrier coatings"]
      },
      {
        name: "CP Engineering & Consultancy",
        slug: "cp-consultancy",
        image: "/assets/image8.jpg",
        description: "Complete cathodic protection design, installation, and audit services.",
        items: ["CP design", "Inspection surveys", "System maintenance"]
      }
    ]
  }
  ,
  precast_molds: {
    id: 'precast_molds',
    label: 'Precast Molds',
    icon: ShieldCheck,
    bannerImage: '/assets/image9.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "Precast Slabs",
        slug: "precast-slabs",
        image: "/assets/image11.jpg",
        description: "High–strength precast concrete slabs designed for residential, commercial and industrial structures.",
        items: ["Hollow Core Slabs", "Solid Slabs", "Composite Slabs", "Prestressed Slabs"]
      },
      {
        name: "Precast Boundary Walls",
        slug: "precast-boundary-walls",
        image: "/assets/image12.jpg",
        description: "Durable modular wall systems for quick perimeter construction.",
        items: ["Prestressed Panels", "Compound Walls", "Fencing Walls"]
      },
      {
        name: "Precast Staircases",
        slug: "precast-staircases",
        image: "/assets/image20.jpg",
        description: "Factory-finished and perfect-fit stair structures for multi-storey buildings.",
        items: ["Straight Stairs", "L-Shaped Stairs", "Spiral Stairs"]
      },
      // {
      //   name: "Precast Beams",
      //   slug: "precast-beams",
      //   image: "/assets/precast/beams.jpg",
      //   description: "High-load precast beams suitable for skyscrapers, bridges and industrial infrastructure.",
      //   items: ["I-Beams", "L-Beams", "Inverted T-Beams", "Box Beams"]
      // },
      // {
      //   name: "Precast Columns",
      //   slug: "precast-columns",
      //   image: "/assets/precast/columns.jpg",
      //   description: "Strong structural columns for seismic-resistant construction.",
      //   items: ["Round Columns", "Square Columns", "Prestressed Columns"]
      // },
      // {
      //   name: "Precast Manholes",
      //   slug: "precast-manholes",
      //   image: "/assets/precast/manholes.jpg",
      //   description: "Pre-engineered manholes for drainage and sewage solutions.",
      //   items: ["Circular Manholes", "Rectangular Manholes", "Chamber Rings"]
      // },
      // {
      //   name: "Precast Drainage Systems",
      //   slug: "precast-drainage-systems",
      //   image: "/assets/precast/drain.jpg",
      //   description: "Efficient water discharge systems for highways and smart cities.",
      //   items: ["U-Drains", "Box Drains", "Kerb Drains"]
      // },
      // {
      //   name: "Precast Road Barriers",
      //   slug: "precast-road-barriers",
      //   image: "/assets/precast/barriers.jpg",
      //   description: "Premium road safety barriers used across expressways and highways.",
      //   items: ["New Jersey Barriers", "Median Barriers", "Crash Barriers"]
      // },
      // {
      //   name: "Precast Pavers",
      //   slug: "precast-pavers",
      //   image: "/assets/precast/pavers.jpg",
      //   description: "Custom designed paver blocks for sidewalks, landscapes and industrial flooring.",
      //   items: ["Interlock Pavers", "Grass Pavers", "Shot Blasted Pavers"]
      // },
      // {
      //   name: "Precast Kerbstones",
      //   slug: "precast-kerbstones",
      //   image: "/assets/precast/kerb.jpg",
      //   description: "Kerb blocks for edge protection and roadway segregation.",
      //   items: ["Straight Kerbs", "Radius Kerbs", "Channel Kerbs"]
      // },
      // {
      //   name: "Bridge Deck Slabs",
      //   slug: "bridge-deck-slabs",
      //   image: "/assets/precast/bridge.jpg",
      //   description: "Heavy-duty slabs designed for long-span bridges and flyovers.",
      //   items: ["Prestressed Decks", "Composite Decks", "Box Girder Decks"]
      // },
      // {
      //   name: "Precast Tunnel Linings",
      //   slug: "precast-tunnel-linings",
      //   image: "/assets/precast/tunnel.jpg",
      //   description: "Precision mold parts for metro tunnels, mining, and hydro projects.",
      //   items: ["Segment Rings", "Tunnel Blocks", "Support Liners"]
      // },
      // {
      //   name: "Precast Footpaths",
      //   slug: "precast-footpaths",
      //   image: "/assets/precast/footpath.jpg",
      //   description: "Walkway slabs ideal for commercial, residential and township development.",
      //   items: ["Footpath Slabs", "Domino Slabs", "Grooved Slabs"]
      // },
      // {
      //   name: "Precast Garden Products",
      //   slug: "precast-garden-products",
      //   image: "/assets/precast/garden.jpg",
      //   description: "Landscape-focused products made with architectural finish.",
      //   items: ["Benches", "Planters", "Tree Guards"]
      // },
      // {
      //   name: "Precast Septic Tanks",
      //   slug: "precast-septic-tanks",
      //   image: "/assets/precast/tanks.jpg",
      //   description: "Leak-proof and maintenance-friendly tank systems for homes and industries.",
      //   items: ["Single Chamber", "Double Chamber", "Hybrid Tanks"]
      // },
      // {
      //   name: "Precast Utility Boxes",
      //   slug: "precast-utility-boxes",
      //   image: "/assets/precast/utility.jpg",
      //   description: "Secure utility enclosures for electric, telecom and water networks.",
      //   items: ["Cable Trench Boxes", "Transformer Boxes", "Switchgear Chambers"]
      // },
      {
        name: "Precast Culverts",
        slug: "precast-culverts",
        image: "/assets/image15.jpg",
        description: "High-load water crossing infrastructure engineered for long service life.",
        items: ["Box Culverts", "Pipe Culverts", "Arch Culverts"]
      },
      {
        name: "Architectural Precast Panels",
        slug: "architectural-precast-panels",
        image: "/assets/image16.jpg",
        description: "Aesthetic facade panels customized for premium and modern buildings.",
        items: ["Textured Panels", "Polished Panels", "GRC Panels"]
      }
    ]
  }
  ,
  precast_parts: {
    id: 'precast_parts',
    label: 'Precast Parts',
    icon: Leaf,
    bannerImage: '/assets/image14.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "Shuttering Plates",
        slug: "shuttering-plates",
        image: "/assets/image20.jpg",
        description: "High-strength shuttering plates designed for smooth casting and structural consistency.",
        items: ["MS Shuttering Plate", "Premium Shuttering Plate", "Formwork Plates"]
      },
      {
        name: "Mould Side Walls",
        slug: "mould-side-walls",
        image: "/assets/image4.jpg",
        description: "Precision-built steel side walls for retaining concrete during moulding operations.",
        items: ["Adjustable Side Walls", "Fixed Side Walls", "Heavy Side Walls"]
      },
      // {
      //   name: "Lifting Anchors",
      //   slug: "lifting-anchors",
      //   image: "/assets/precastParts/anchors.jpg",
      //   description: "Certified steel anchors designed for safe lifting of precast concrete elements.",
      //   items: ["Spherical Anchors", "Recess Formers", "Socket Anchors"]
      // },
      // {
      //   name: "Insert Plates",
      //   slug: "insert-plates",
      //   image: "/assets/precastParts/insertplates.jpg",
      //   description: "Embedded plates for structural connectivity and reinforcement systems.",
      //   items: ["Welded Plates", "Shear Plates", "Bearing Plates"]
      // },
      // {
      //   name: "Joint & Connector Plates",
      //   slug: "joint-connector-plates",
      //   image: "/assets/precastParts/connector.jpg",
      //   description: "Structural connection systems enabling fast onsite assembly.",
      //   items: ["Shear Connectors", "Beam Connectors", "Bolt Plates"]
      // },
      // {
      //   name: "Grouting Sleeves",
      //   slug: "grouting-sleeves",
      //   image: "/assets/precastParts/sleeves.jpg",
      //   description: "Couplers used to join reinforcement rods during precast assembly.",
      //   items: ["Mechanical Sleeves", "Epoxy Sleeves", "Threaded Sleeves"]
      // },
      // {
      //   name: "Rubber Seals",
      //   slug: "rubber-seals",
      //   image: "/assets/precastParts/seals.jpg",
      //   description: "Waterproof seals to ensure leak-free precast joints and chambers.",
      //   items: ["EPDM Seals", "Groove Gaskets", "Round Rubber Rings"]
      // },
      // {
      //   name: "Anchor Bolts",
      //   slug: "anchor-bolts",
      //   image: "/assets/precastParts/bolts.jpg",
      //   description: "Industrial grade bolts manufactured for safe anchoring of precast structures.",
      //   items: ["J-Type Bolts", "U-Type Bolts", "L-Type Bolts"]
      // },
      // {
      //   name: "Rebar Accessories",
      //   slug: "rebar-accessories",
      //   image: "/assets/precastParts/rebar.jpg",
      //   description: "Parts that enhance the positioning, spacing and holding of reinforcement bars.",
      //   items: ["Rebar Chairs", "Rebar Spacers", "Rebar End Caps"]
      // },
      // {
      //   name: "Lifting Hooks & Loops",
      //   slug: "lifting-hooks-loops",
      //   image: "/assets/precastParts/liftinghooks.jpg",
      //   description: "Precast hardware for lifting, transportation and alignment of heavy concrete components.",
      //   items: ["Lifting Loops", "Lifting Hooks", "Swivel Heads"]
      // },
      // {
      //   name: "Mould Base Frames",
      //   slug: "mould-base-frames",
      //   image: "/assets/precastParts/baseframe.jpg",
      //   description: "Foundational steel frameworks supporting mould structure and casting stability.",
      //   items: ["Fixed Frames", "Adjustable Frames", "Vibrating Frames"]
      // },
      // {
      //   name: "Vibration Pads",
      //   slug: "vibration-pads",
      //   image: "/assets/precastParts/vibration.jpg",
      //   description: "Heavy-duty pads that remove air pockets and improve concrete compaction during moulding.",
      //   items: ["Bolt-Mount Pads", "Magnetic Pads", "High-Friction Pads"]
      // },
      // {
      //   name: "Mould Fasteners",
      //   slug: "mould-fasteners",
      //   image: "/assets/precastParts/fasteners.jpg",
      //   description: "Key locking and fastening devices for rigidity and airtightness during casting.",
      //   items: ["Tension Locks", "Quick-Lock Systems", "Clamp Fasteners"]
      // },
      // {
      //   name: "Corner Chamfers",
      //   slug: "corner-chamfers",
      //   image: "/assets/precastParts/chamfer.jpg",
      //   description: "Chamfer components that create edge finishing and prevent concrete cracking.",
      //   items: ["Steel Chamfers", "Aluminium Chamfers", "Magnetic Chamfers"]
      // },
      {
        name: "Spacer Blocks",
        slug: "spacer-blocks",
        image: "/assets/image6.jpg",
        description: "Cover blocks for maintaining proper distance between reinforcement and mould edges.",
        items: ["Round Spacers", "Tile Spacers", "Concrete Spacers"]
      },
      {
        name: "Magnetic Formwork Systems",
        slug: "magnetic-formwork-systems",
        image: "/assets/image7.jpg",
        description: "Magnetic locking systems for fast mould setup and dimensional accuracy.",
        items: ["Magnetic Blocks", "Shuttering Magnets", "Magnetic Angle Systems"]
        // },
        // {
        //   name: "Bearing Pads",
        //   slug: "bearing-pads",
        //   image: "/assets/precastParts/bearingpads.jpg",
        //   description: "Pads that transfer load between precast structures, minimizing stress and vibration.",
        //   items: ["Neoprene Pads", "Elastomeric Pads", "PTFE Sliding Pads"]
      },
      {
        name: "Pipe Inserts & Connectors",
        slug: "pipe-inserts-connectors",
        image: "/assets/image8.jpg",
        description: "Special pipe connection parts for manholes, chambers and drainage units.",
        items: ["Bell Inserts", "Groove Couplings", "Pipe Fixing Clamps"]
      }
    ]
  }
  ,
  mining: {
    id: 'mining',
    label: 'Mining',
    icon: Sun,
    bannerImage: '/assets/image18.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "Excavation Machinery",
        slug: "excavation-machinery",
        image: "/assets/image20.jpg",
        description: "High-power machines designed for earth removal and heavy soil displacement.",
        items: ["Crawler Excavators", "Wheel Excavators", "Mining Shovels"]
        // },
        // {
        //   name: "Drilling Rigs",
        //   slug: "drilling-rigs",
        //   image: "/assets/mining/drilling.jpg",
        //   description: "Specialized rigs for surface and underground drilling applications.",
        //   items: ["Blast Hole Rigs", "Rotary Drills", "Hydraulic Drilling Rigs"]
        // },
        // {
        //   name: "Crushing Equipment",
        //   slug: "crushing-equipment",
        //   image: "/assets/mining/crusher.jpg",
        //   description: "Machines for size reduction of minerals and mining materials.",
        //   items: ["Jaw Crushers", "Cone Crushers", "Impact Crushers"]
        // },
        // {
        //   name: "Screening & Separation",
        //   slug: "screening-separation",
        //   image: "/assets/mining/screening.jpg",
        //   description: "Mineral classification equipment for fine and coarse separation.",
        //   items: ["Vibrating Screens", "Trommel Screens", "Wet Screening Systems"]
        // },
        // {
        //   name: "Conveyor Systems",
        //   slug: "conveyor-systems",
        //   image: "/assets/mining/conveyors.jpg",
        //   description: "Bulk material transportation systems for mines and processing plants.",
        //   items: ["Belt Conveyors", "Pipe Conveyors", "Stacker Reclaimers"]
        // },
        // {
        //   name: "Underground Mining Vehicles",
        //   slug: "underground-mining-vehicles",
        //   image: "/assets/mining/underground.jpg",
        //   description: "Mobility and material handling vehicles engineered for confined environments.",
        //   items: ["Load Haul Dump (LHD)", "Underground Trucks", "Utility Vehicles"]
        // },
        // {
        //   name: "Rock Breakers",
        //   slug: "rock-breakers",
        //   image: "/assets/mining/rockbreaker.jpg",
        //   description: "Impact equipment designed to break large stones for further processing.",
        //   items: ["Hydraulic Rock Breakers", "Pedestal Mounted Breakers", "Breaker Booms"]
        // },
        // {
        //   name: "Blasting Accessories",
        //   slug: "blasting-accessories",
        //   image: "/assets/mining/blasting.jpg",
        //   description: "Tools and parts required for safe and controlled mine blasting.",
        //   items: ["Detonators", "Blast Mats", "Stemming Plugs"]
        // },
        // {
        // name: "Mineral Processing Plants",
        // slug: "mineral-processing-plants",
        // image: "/assets/mining/processing.jpg",
        // description: "Full-scale plants to process ore and extract valuable minerals.",
        // items: ["Ore Washing Systems", "Flotation Units", "Grinding Mills"]
      },
      {
        name: "Slurry Handling Systems",
        slug: "slurry-handling-systems",
        image: "/assets/image10.jpeg",
        description: "Pumps and pipelines for transferring abrasive slurry materials.",
        items: ["Slurry Pumps", "Hydrocyclones", "Thickener Systems"]
      },
      {
        name: "Ventilation Systems",
        slug: "ventilation-systems",
        image: "/assets/image11.jpg",
        description: "Airflow and dust management systems for deep and underground mines.",
        items: ["Axial Fans", "Ventilation Ducts", "Vortex Fans"]
      },
      // {
      //   name: "Mine Safety Equipment",
      //   slug: "mine-safety-equipment",
      //   image: "/assets/mining/safety.jpg",
      //   description: "Safety systems for personnel protection and emergency response.",
      //   items: ["Self-Rescuers", "Gas Monitoring Sensors", "Mine Helmets"]
      // },
      // {
      //   name: "Ore Loading Systems",
      //   slug: "ore-loading-systems",
      //   image: "/assets/mining/oreloading.jpg",
      //   description: "Automation equipment to move bulk ore efficiently from pits and tunnels.",
      //   items: ["Feeders", "Rail Loaders", "Truck Loading Terminals"]
      // },
      // {
      //   name: "Quarry Machinery",
      //   slug: "quarry-machinery",
      //   image: "/assets/mining/quarry.jpg",
      //   description: "Machinery for open-pit mining and aggregate extraction.",
      //   items: ["Wheel Loaders", "Quarry Dumpers", "Block Cutting Machines"]
      // },
      // {
      //   name: "Mine Dewatering Solutions",
      //   slug: "mine-dewatering-solutions",
      //   image: "/assets/mining/dewatering.jpg",
      //   description: "Water removal systems supporting drainage and flooding prevention.",
      //   items: ["Submersible Pumps", "Dewatering Pipelines", "High-Pressure Pumps"]
      // },
      {
        name: "Fuel & Lubrication Systems",
        slug: "fuel-lubrication-systems",
        image: "/assets/image12.jpg",
        description: "Automatic lubrication and fuel supply systems for mining fleets.",
        items: ["Auto Greasing Systems", "Fuel Dispensers", "Oil Distribution Units"]
      },
      {
        name: "Power Supply & Generators",
        slug: "power-supply-generators",
        image: "/assets/image13.jpg",
        description: "Energy solutions designed for high-load continuous mine operation.",
        items: ["Diesel Generators", "Hybrid Generators", "Power Substations"]
      },
      {
        name: "Mining Automation & IoT",
        slug: "mining-automation-iot",
        image: "/assets/image14.jpeg",
        description: "Digital technologies that boost mine productivity and operational safety.",
        items: ["Autonomous Haulage", "Equipment Tracking", "AI Monitoring Systems"]
      }
    ]
  }
  ,
  Metals: {
    id: 'metals',
    label: 'Metals',
    icon: Droplets,
    bannerImage: '/assets/image19.jpeg',
    color: 'bg-orange-100 text-orange-900',
    categories: [
      {
        name: "Steel & Structural Steel",
        slug: "steel-structural-steel",
        image: "/assets/image15.jpg",
        description: "High-strength steels for industrial, fabrication, and infrastructure projects.",
        items: ["Mild Steel", "Carbon Steel", "TMT Bars", "I-Beams & Channels"]
      },
      // {
      //   name: "Stainless Steel Products",
      //   slug: "stainless-steel-products",
      //   image: "/assets/metals/stainless.jpg",
      //   description: "Rust-proof and high-performance stainless steel for manufacturing and architecture.",
      //   items: ["SS Sheets & Plates", "SS Pipes & Tubes", "SS Rods & Bars"]
      // },
      // {
      //   name: "Aluminium & Alloys",
      //   slug: "aluminium-alloys",
      //   image: "/assets/metals/aluminium.jpg",
      //   description: "Lightweight and corrosion-resistant aluminium products for transport and aerospace.",
      //   items: ["Aluminium Profiles", "Aluminium Sheets", "Aluminium Castings"]
      // },
      // {
      //   name: "Copper & Alloys",
      //   slug: "copper-alloys",
      //   image: "/assets/metals/copper.jpg",
      //   description: "High-conductivity copper metals used in electrical and industrial applications.",
      //   items: ["Copper Rods", "Copper Sheets", "Bronze & Brass Alloys"]
      // },
      // {
      //   name: "Cast Iron Products",
      //   slug: "cast-iron-products",
      //   image: "/assets/metals/castiron.jpg",
      //   description: "High-durability iron products used for automotive, machinery and civil structures.",
      //   items: ["SG Iron", "Grey Cast Iron", "Ductile Iron Castings"]
      // },
      // {
      //   name: "Forgings",
      //   slug: "forgings",
      //   image: "/assets/metals/forgings.jpg",
      //   description: "Heat-treated forged metal components with superior strength for heavy engineering.",
      //   items: ["Flanges", "Rings", "Precision Forging Parts"]
      // },
      // {
      //   name: "Metal Sheets & Plates",
      //   slug: "metal-sheets-plates",
      //   image: "/assets/metals/sheets.jpg",
      //   description: "Sheet and plate metals used in fabrication, cutting, and manufacturing.",
      //   items: ["MS Sheets", "SS Sheets", "Hot Rolled Plates", "Cold Rolled Plates"]
      // },
      // {
      //   name: "Metal Pipes & Tubes",
      //   slug: "metal-pipes-tubes",
      //   image: "/assets/metals/pipes.jpg",
      //   description: "Industrial pipes and tubes for fluids, gas, structure, and machinery.",
      //   items: ["Seamless Pipes", "ERW Pipes", "Square & Rectangular Tubes"]
      // },
      // {
      //   name: "Metal Bars & Rods",
      //   slug: "metal-bars-rods",
      //   image: "/assets/metals/bars.jpg",
      //   description: "Metal bars and rods used for machining, manufacturing, and tooling.",
      //   items: ["Round Bars", "Square Bars", "Hex Bars"]
      // },
      // {
      //   name: "Sheets Coil & Strip",
      //   slug: "sheet-coil-strip",
      //   image: "/assets/metals/coil.jpg",
      //   description: "Rolled metal forms for industrial-scale fabrication and production.",
      //   items: ["HR Coils", "CR Coils", "GP/GC Coils", "Slit Strips"]
      // },
      // {
      //   name: "Metal Wire & Wire Rods",
      //   slug: "metal-wire-wire-rods",
      //   image: "/assets/metals/wires.jpg",
      //   description: "Precision metal wires and rod products used in fasteners and forming.",
      //   items: ["Binding Wire", "Spring Wire", "Wire Rod Coils"]
      // },
      // {
      //   name: "Non-Ferrous Metals",
      //   slug: "non-ferrous-metals",
      //   image: "/assets/metals/nonferrous.jpg",
      //   description: "Metals excluding iron used for industrial, aerospace, maritime and electrical needs.",
      //   items: ["Titanium", "Nickel", "Zinc", "Magnesium Alloys"]
      // },
      // {
      //   name: "Metal Scrap Recycling",
      //   slug: "metal-scrap-recycling",
      //   image: "/assets/metals/scrap.jpg",
      //   description: "Recyclable metals used in foundries and smelting operations.",
      //   items: ["Steel Scrap", "Copper Scrap", "Aluminium Scrap"]
      // },
      {
        name: "Metal Coatings & Surface Treatment",
        slug: "metal-coatings-surface-treatment",
        image: "/assets/image16.jpg",
        description: "Anti-corrosion and strength-enhancing coatings for metal parts.",
        items: ["Galvanizing", "Powder Coating", "Electroplating"]
      },
      {
        name: "Metal Fasteners",
        slug: "metal-fasteners",
        image: "/assets/image17.jpg",
        description: "High-grade fastening components for industrial and civil applications.",
        items: ["Nuts & Bolts", "Washers", "High-Tensile Fasteners"]
      },
      {
        name: "Industrial Foundry Raw Materials",
        slug: "industrial-foundry-raw-materials",
        image: "/assets/image20.jpg",
        description: "Primary materials for smelting and molten metal production.",
        items: ["Ferro Alloys", "Silica Sand", "Pig Iron"]
      },
      {
        name: "Heavy Metal Fabrication Parts",
        slug: "heavy-metal-fabrication-parts",
        image: "/assets/image19.jpeg",
        description: "Custom-fabricated industrial metal parts designed for machinery and infrastructure.",
        items: ["Plasma-Cut Parts", "Welded Fabrications", "Machined Components"]
      },
      {
        name: "Heat Resistant Alloys",
        slug: "heat-resistant-alloys",
        image: "/assets/image18.jpeg",
        description: "Alloys engineered to withstand extreme temperatures and load conditions.",
        items: ["Inconel", "Hastelloy", "Duplex / Super-Duplex Grades"]
      }
    ]
  }

};