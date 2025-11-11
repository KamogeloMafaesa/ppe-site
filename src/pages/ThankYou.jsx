import { Link } from "react-router-dom"


function ThankYou(){
    return(
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-md max-w-md">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Thank You!
        </h1>
        <p className="text-gray-700 mb-6">
          Your quote request has been received.  
          Our team will review it and get back to you shortly.
        </p>
        <Link
          to="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-lg transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
    )
}

export default ThankYou;