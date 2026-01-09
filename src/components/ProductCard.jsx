import { Link } from "react-router-dom"
import { useCartStore } from "../store/useCartStore"


function ProductCard({id, name, description, image}){
    const addItem = useCartStore((s) => s.addItem)
    
    const handleAdd = () => {
        addItem({id, name, description, image})
    }

    return(
        <div className="product-card flex flex-col justify-between border rounded-2xl shadow-md p-4 w-72 bg-white hover:shadow-xl transition">
          <div>
             <img src={image} alt={name} className="mx-auto h-48 object-contain duration-300 transform hover:scale-110 peer transition"/> {/*"w-full h-48 object-contain mb-3" />*/}
            <h3 className="mt-2 text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-600 text-sm mt-2">{description}</p>
           {/* <Link to="/Contact" className="inline-block mt-4 !bg-amber-400 !text-white text-sm px-4 py-2 font-medium rounded-lg hover:!bg-amber-500 transition">Request Quote</Link>
*/}
</div>
            <div className="mt-4 flex justify-between items-center">
                <button onClick={handleAdd} className="bg-yellow-500 text-white text-sm font-semibold py-2 px4 rounded-lg hover:bg-yellow-600 transition">
                    Add to Quote Cart

                </button>
                <Link to ={`/products/${id}`} className= "text-sm text-blue-600 hover:underline">Details</Link>

            </div>
        </div>
    )

}

export default ProductCard;