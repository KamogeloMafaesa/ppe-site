import ProjectCard from '../components/ProductCard'


function Products(){
    const products = [
        {
            id:1,
            name: " Green Nitrile Chemical Gloves",
            description: "Durable, powder-freegloves for industrial and mechanical use.",
            image: "src/Images/GreenNitrileChemicalGloves.jpg"
        },
        
        {
            id:2,
            name: "uvex i-lite Safety Glasses",
            description: "Anti-fog, scratch-resistant safety eyewear.",
            image: "src/Images/uvex i-litesafetyglasses.png"
        },
        {
            id:3,
            name: "Disposable Plastic Apron Pack 100",
            description: "Lightwight waterproof multi-purpose aprons.",
            image: "src/Images/DisposablePlasticApronPack100.jpg"
        },

        {
            id:4,
            name: "Titan Premium Royal Blue Workwear Jacket",
            description: "Flame-reduction overalls designed for tough environments.",
            image: "src/Images/TitanPremiumRoyalBlueWorkwearJacket.jpg"
        },
        
        {
            id:5,
            name: "Titan Premium Royal Blue Workwear Trouser",
            description: "Flame-reduction overalls designed for tough environments.",
            image: "src/Images/TitanPremiumRoyalBlueWorkwearTrouser.jpg"
        },
        {
            id:6,
            name: "Work Overalls",
            description: "Flame-reduction overalls designed for tough environments.",
            image: "src/Images/Safety_Jacket.png"
        },

        {
            id:7,
            name: "Sisi Cate Safety Boot",
            description: "Crafted from premium leather with a steel toe cap and toe bumper, this boot ensures safety in hazardous work environments.",
            image: "src/Images/SisiCateSafetyBoot.jpg"
        },
        
        {
            id:8,
            name: "Lime Mesh Reflective Vest",
            description: "Hi Visability vest with a cool mesh fabric.",
            image: "src/Images/LimeMeshReflectiveVest.jpg"
        },
        {
            id:9,
            name: "Hard Hat - Orange",
            description: "Standard issue orange hard hat for protection against falling hazards.",
            image: "src/Images/HardHatOrange.jpg"
        },

    ]
    return(
        <section className="p-10 text-center">
            <h2 className="text-3xl font-semibold text-cyan-900">Our Products</h2>
            <p className="mt-4 text-gray-700">Explore our range of safety equipment for all industries.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                {products.map((product) =>(
                    <ProjectCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
}

export default Products;