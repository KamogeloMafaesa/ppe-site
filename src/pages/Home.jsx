import glasses from '../Images/glasses.jpg'
import gloves from '../Images/gloves.jpg'
import jacket from '../Images/Safety_Jacket.png'


function Home(){
    return(
    <div>
        <section className="bg-blue-50 p-20 text-center">
            <h1 className="text-4xl font-bold text-blue-600">Welcome to Mafaesa Trading Enterprise </h1>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">Your trusted partner for your safety gear and protective equipment.</p>
            <button className="mt-6 !bg-blue-600 text-white px-6 py-3 rounded-lg hover:!bg-blue-700 transition">View Our Products</button> 
        </section>

        <section className="py-16 bg-white">
            <h2 className="text-2xl font-semibold text-center text-blue-500 mb-8">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                    <img src={gloves} alt="Safety Item" className="mx-auto h-40 object-contain duration-300 transform hover:scale-125 peer transition" />
                    <h3 className="mt-4 text-lg font-semibold">Safety Gloves</h3>
                    <p className="text-gray-600 text-sm mt-2">Durable gloves for industrial protection.</p>
                </div>
                
                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                    <img src={glasses} alt="Safety Item" className="mx-auto h-40 object-contain duration-300 transform hover:scale-125 peer transition" />
                    <h3 className="mt-4 text-lg font-semibold">Safety Glasses</h3>
                    <p className="text-gray-600 text-sm mt-2">Clear vision. Complete protection.</p>
                </div>

                <div className="p-6 !border rounded-lg shadow hover:shadow-lg transition">
                    <img src={jacket} alt="Safety Item" className="mx-auto h-40 object-contain duration-300 transform hover:scale-125 peer transition" />
                    <h3 className="mt-4 text-lg font-semibold">Safety Jacket</h3>
                    <p className="text-gray-600 text-sm mt-2">Safety gear is always in style.</p>
                </div>
            </div>
        </section>

    </div>
    );
}

export default Home;