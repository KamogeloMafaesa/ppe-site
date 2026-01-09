import ProjectCard from '../components/ProductCard'
import { useState } from "react"
import QuoteModal from '../components/QuoteModal';
import { useCartStore } from '../store/useCartStore';


{/*Images */}
import greenGloves from '../Images/GreenNitrileChemicalGloves.jpg'
import safetyGlasses from '../Images/uvex i-litesafetyglasses.png'
import Apron from '../Images/DisposablePlasticApronPack100.jpg'
import BlueJacket from '../Images/TitanPremiumRoyalBlueWorkwearJacket.jpg'
import BlueTrouser from '../Images/TitanPremiumRoyalBlueWorkwearTrouser.jpg'
import Overall from '../Images/Safety_Jacket.png'
import SafetyBoots from '../Images/SisiCateSafetyBoot.jpg'
import LimeMeshVest from '../Images/LimeMeshReflectiveVest.jpg'
import HardHat from '../Images/HardHatOrange.jpg'

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
            image: greenGloves
            
            
        },
        
        {
            id:2,
            name: "uvex i-lite Safety Glasses",
            description: "Anti-fog, scratch-resistant safety eyewear.",
            image: safetyGlasses
        },
        {
            id:3,
            name: "Disposable Plastic Apron Pack 100",
            description: "Lightwight waterproof multi-purpose aprons.",
            image: Apron
        },

        {
            id:4,
            name: "Titan Premium Royal Blue Workwear Jacket",
            description: "Flame-reduction overalls designed for tough environments.",
            image: BlueJacket
        },
        
        {
            id: 5,
            name: "Titan Premium Royal Blue Workwear Trouser",
            description: "Flame-reduction overalls designed for tough environments.",
            image: BlueTrouser
        },
        {
            id: 6,
            name: "Work Overalls",
            description: "Flame-reduction overalls designed for tough environments.",
            image: Overall
        },

        {
            id: 7,
            name: "Sisi Cate Safety Boot",
            description: "Crafted from premium leather with a steel toe cap and toe bumper, this boot ensures safety in hazardous work environments.",
            image: SafetyBoots
        },
        
        {
            id: 8,
            name: "Lime Mesh Reflective Vest",
            description: "Hi Visability vest with a cool mesh fabric.",
            image: LimeMeshVest
        },
        {
            id: 9,
            name: "Hard Hat - Orange",
            description: "Standard issue orange hard hat for protection against falling hazards.",
            image: HardHat
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