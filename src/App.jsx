
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import ThankYou from './pages/ThankYou'
import Cart from './pages/Cart'
import './App.css'


function App() {
  return (
   <div className="flex flex-col min-h-screen">
    <Header/>
    <main className="flex-grow w-full">
  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Products" element={<Products />}/>
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>

      </main>
    <Footer/>
     
   </div>
  
  )
}

export default App
