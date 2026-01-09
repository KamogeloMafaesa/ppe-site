import ProjectCard from '../components/ProductCard'
import { useState } from "react"
import QuoteModal from '../components/QuoteModal';
import { useCartStore } from '../store/useCartStore';


function Products(){
    const [selectedProduct, setSelectedProduct] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (productName) => {
        setSelectedProduct(productName);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const addItem = useCartStore((state) => state.addItem)

    const products = [
        {
            id: 1,
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
            id: 5,
            name: "Titan Premium Royal Blue Workwear Trouser",
            description: "Flame-reduction overalls designed for tough environments.",
            image: "src/Images/TitanPremiumRoyalBlueWorkwearTrouser.jpg"
        },
        {
            id: 6,
            name: "Work Overalls",
            description: "Flame-reduction overalls designed for tough environments.",
            image: "src/Images/Safety_Jacket.png"
        },

        {
            id: 7,
            name: "Sisi Cate Safety Boot",
            description: "Crafted from premium leather with a steel toe cap and toe bumper, this boot ensures safety in hazardous work environments.",
            image: "src/Images/SisiCateSafetyBoot.jpg"
        },
        
        {
            id: 8,
            name: "Lime Mesh Reflective Vest",
            description: "Hi Visability vest with a cool mesh fabric.",
            image: "src/Images/LimeMeshReflectiveVest.jpg"
        },
        {
            id: 9,
            name: "Hard Hat - Orange",
            description: "Standard issue orange hard hat for protection against falling hazards.",
            image: "src/Images/HardHatOrange.jpg"
        },

    ]
    return(
        <section className="p-10 text-center products-page">
            <h2 className="text-3xl font-semibold text-cyan-900">Our Products</h2>
            <p className="mt-4 text-gray-700">Explore our range of safety equipment for all industries.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center products-container">
                {products.map((item, index) =>(
                    <div className="product-card border rounded-2xl shadow-md p-4 w-72 bg-white hover:shadow-xl transition" key={item.id}>
                        <img className="mx-auto h-48 object-contain duration-300 transform hover:scale-110 peer transition" src={item.image} alt={item.name} />
                        <h3 className="mt-2 text-lg font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                        <button onClick={()=> addItem(item)} className="request-quote-button inline-block mt-4 !bg-amber-400 !text-white text-sm px-4 py-2 font-medium rounded-lg hover:!bg-amber-500 transition">Add to Quote Cart</button>
                       {/* <button className="request-quote-button inline-block mt-4 !bg-amber-400 !text-white text-sm px-4 py-2 font-medium rounded-lg hover:!bg-amber-500 transition" onClick={() => openModal(item.name)}>Request Quote</button>*/}
                    </div>
                   /* <ProjectCard key={product.id} {...product} />*/
                ))}
            </div>

            <QuoteModal
            product={selectedProduct}
            isOpen={isModalOpen}
            onClose={closeModal}
            />

        </section>
    );
}

export default Products;