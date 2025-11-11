
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import './App.css'
import ThankYou from './pages/ThankYou'

function App() {
  return (
   <div className="flex flex-col min-h-screen">
    <main>
    <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Products" element={<Products />}/>
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path='/ThankYou' element={<ThankYou />} />
        </Routes>
      </main>
    <Footer/>
     
   </div>
  
  )
}

export default App
