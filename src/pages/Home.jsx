import glasses from '../Images/glasses.jpg'
import gloves from '../Images/gloves.jpg'
import jacket from '../Images/Safety_Jacket.png'
import backGround from '../Images/heroImage.jpg'
import { Link } from "react-router-dom"


function Home(){
    return(
    <div >
        <section className="w-full min-h-screen bg-cover bg-center relative"style= {{ backgroundImage: `url(${backGround})`}} > 
  
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Hero content */}
        <div className="relative w-full">
            <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6">
            <div className="max-w-7xl text-center">
            <h1 className="text-2xl sm:text-5xl md:text-5xl font-bold text-white leading-tight">Welcome to Mafaesa Trading Enterprise </h1>
            <p className="mt-4 text-sm sm:text-base text-white/90">Your trusted partner for your safety gear and protective equipment.</p>
           <br /> <Link to ="/Products" className="inline-block mt-6 bg-amber-400 text-white px-6 py-3 font-medium rounded-lg hover:bg-amber-500 text-cyan-700 transition">
                View Our Products</Link> 
        </div>
        </div>
        </div>
        </section>

        <section className="py-16 bg-white">
            <h2 className="text-2xl font-semibold text-center text-cyan-900 mb-8">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 sm:px-6">
                <div className="p-6 border rounded-lg shadow hover:shadow-xl transition">
                    <img src={gloves} alt="Safety Item" className="mx-auto h-40 object-contain duration-300 transform hover:scale-125 peer transition" />
                    <h3 className="mt-4 text-lg font-semibold">Safety Gloves</h3>
                    <p className="text-gray-600 text-sm mt-2">Durable gloves for industrial protection.</p>
                </div>
                
                <div className="p-6 border rounded-lg shadow hover:shadow-xl transition">
                    <img src={glasses} alt="Safety Item" className="mx-auto h-40 object-contain duration-300 transform hover:scale-125 peer transition" />
                    <h3 className="mt-4 text-lg font-semibold">Safety Glasses</h3>
                    <p className="text-gray-600 text-sm mt-2">Clear vision. Complete protection.</p>
                </div>

                <div className="p-6 !border rounded-lg shadow hover:shadow-xl transition">
                    <img src={jacket} alt="Safety Item" className="mx-auto h-40 object-contain duration-300 transform hover:scale-110 peer transition" />
                    <h3 className="mt-4 text-lg font-semibold">Safety Jacket</h3>
                    <p className="text-gray-600 text-sm mt-2">Safety gear is always in style.</p>
                </div>
            </div>
        </section>

    </div>
    );
}

export default Home;