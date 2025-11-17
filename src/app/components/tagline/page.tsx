import Image from 'next/image'

const tagLines = [
    {
        id: 1,
        lines: "Be bold. Be powerful. The Futuristic Mega Force.",
        description: "Represents Mega Foundries’ commitment to bold innovation, powerful engineering, and a futuristic vision. It reflects our focus on pioneering technologies, next-generation materials, and advanced manufacturing systems that position us as a global force transforming the future of metal and industrial engineering.",
        imgUrl: "/assets/imagea1.png"
    },
    {
        id: 2,
        lines: "Mega Options. Mega Outcomes.",
        description: "Highlights the extensive variety of products, solutions, and industrial services Mega Foundries offers. From raw materials to advanced manufacturing systems, the company consistently delivers high-value outcomes that exceed expectations through versatility, innovation, and precision engineering.",
        imgUrl: "/assets/image2.png"
    },
    {
        id: 3,
        lines: "A Force to Reckon With.",
        description: "Positions Mega Foundries as a dominant and reliable global leader. This tagline reflects our strong industrial capabilities, consistent product performance, and our established reputation in global markets as a trustworthy and powerful industrial partner.",
        imgUrl: "/assets/image3.png"
    },
    {
        id: 4,
        lines: "Learning Never Ends. Excellence Never Stops.",
        description: "Represents Mega Foundries’ internal culture of continuous learning, modern training, R&D enhancement, skill development, and dedication to industry-leading standards. Excellence is a process, not a destination.",
        imgUrl: "/assets/image4.png"
    },
    {
        id: 5,
        lines: "Always Delivering Beyond Expectations.",
        description: "Emphasizes Mega Foundries’ reputation for exceeding industry standards and client expectations. The company consistently delivers superior quality, innovative solutions, and high-performance engineering across all product lines.",
        imgUrl: "/assets/image5.png"
    },
    {
        id: 6,
        lines: "The Mega Guarantee.",
        description: "Assures customers of long-term durability, reliability, and flawless engineering. The Mega Guarantee symbolizes trust and confidence in the performance, safety, and structural strength of every product.",
        imgUrl: "/assets/image6.png"
    },
    {
        id: 7,
        lines: "Mega Savings. Zero Compromise.",
        description: "Communicates cost-efficiency paired with premium quality. It highlights Mega Foundries’ ability to provide competitive pricing without compromising on material strength, safety, or engineering excellence.",
        imgUrl: "/assets/image7.png"
    },
    {
        id: 8,
        lines: "Boundless Possibilities.",
        description: "Reflects the limitless technological, engineering, and industrial capabilities of Mega Foundries. Whether scaling production or innovating with new materials, the potential for growth is endless.",
        imgUrl: "/assets/image8.png"
    },
    {
        id: 9,
        lines: "Your Vision. Our Undertaking.",
        description: "Shows a client-centered approach where Mega Foundries converts customer concepts into real, functioning industrial solutions. This tagline reflects commitment, precision execution, and a long-term partnership mindset.",
        imgUrl: "/assets/image9.png"
    },
    {
        id: 10,
        lines: "Comforting the Future.",
        description: "Symbolizes the long-term sustainability, safety, and reliability built into Mega Foundries’ engineering processes and product designs—ensuring the future is strong, stable, and secure.",
        imgUrl: "/assets/image10.png"
    },
    {
        id: 11,
        lines: "Manage Your Foundries Seamlessly.",
        description: "Represents modern digital transformation, automation, and operational efficiency. This tagline is ideal for sections covering software systems, dashboards, workflow automation, and digital foundry management.",
        imgUrl: "/assets/image11.png"
    },
    {
        id: 12,
        lines: "Retire the Vintage. Step Into Modern.",
        description: "Encourages industries to upgrade from outdated machinery and legacy systems to advanced, efficient, and future-ready solutions created by Mega Foundries.",
        imgUrl: "/assets/image12.png"
    },
    {
        id: 13,
        lines: "Non-Stop Innovations. Non-Stop Progress.",
        description: "Highlights Mega Foundries’ continuous investment in R&D, new materials, enhanced engineering methods, and innovative industrial solutions that advance global manufacturing standards.",
        imgUrl: "/assets/image13.png"
    },
    {
        id: 14,
        lines: "Always Ahead of the Industry.",
        description: "Positions Mega Foundries as an industry leader in innovation, global expansion, and next-generation engineering. This tagline reflects a future-focused mindset and competitive advantage.",
        imgUrl: "/assets/image14.png"
    },
    {
        id: 15,
        lines: "Our Investment Today, Your Reward Tomorrow.",
        description: "Shows Mega Foundries’ long-term value approach. Every product is engineered to deliver consistent, high-performance results for years or decades—ensuring customers benefit long after installation.",
        imgUrl: "/assets/image15.png"
    },
    {
        id: 16,
        lines: "Price is Right. Commitments Are Everlasting.",
        description: "Reflects transparent pricing, ethical business practices, and commitment to long-term partnerships. Mega Foundries values trust and delivers continuous support throughout the customer lifecycle.",
        imgUrl: "/assets/image16.png"
    },
    {
        id: 17,
        lines: "Mother Earth to Your Dock.",
        description: "Perfect for sourcing and logistics sections. It represents Mega Foundries’ global supply chain strength, where raw materials and products move reliably from international sources directly to client facilities.",
        imgUrl: "/assets/image17.png"
    },
    {
        id: 18,
        lines: "Mega Strength. Mega Standards.",
        description: "Defines the exceptional quality, structural strength, durability, and strict compliance standards that Mega Foundries maintains across all operational and manufacturing processes.",
        imgUrl: "/assets/image18.png"
    },
    {
        id: 19,
        lines: "Crafting the Future With Precision.",
        description: "Emphasizes precise engineering, advanced tools, and meticulous craftsmanship. Every product is designed with future applications and evolving industrial needs in mind.",
        imgUrl: "/assets/image19.png"
    },
    {
        id: 20,
        lines: "Engineering Beyond Boundaries.",
        description: "Reflects global scalability. Mega Foundries designs and manufactures industrial solutions capable of serving international sectors without limitations on geography, complexity, or scale.",
        imgUrl: "/assets/image20.png"
    }
];


const Taglines = () => {
    return (
        // <div className=" mx-auto px-4 sm:px-6 lg:px-26 flex flex-col md:flex-row items-center justify-between md:space-y-0">

        <section className="mx-auto px-4 sm:px-6 lg:px-26 py-10 space-y-12">
            {tagLines.map((item) => (
                <div
                    key={item.id}
                    className={`flex flex-col md:flex-row items-center gap-8 ${item.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                        }`}
                >
                    {/* IMAGE (30px fixed height & width) */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                        <div className="relative" style={{ width: "1000px", height: "200px" }}>
                            <Image
                                src={item.imgUrl}
                                alt={item.lines}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* TEXT */}
                    <div className="w-full md:w-1/2 space-y-2">
                        <h3 className="text-[18px] font-bold text-[#cc2221] leading-tight">
                            {item.lines}
                        </h3>
                        <p className="text-[13px] text-gray-600 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
};
export default Taglines
