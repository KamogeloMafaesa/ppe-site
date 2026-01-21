import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react'
import Logo from '../Images/Logo.svg'
import { useCartStore } from '../store/useCartStore'



function Header(){
const items = useCartStore((s) => s.items)

const count = items.reduce((sum, i) => sum + i.quantity, 0)

const [menuOpen, setMenuOpen] = useState(false);

 const navLinkStyles = ({ isActive }) =>
    isActive ? '!text-amber-400 font-semibold': '!text-cyan-950 hover:!text-cyan-900'

    return(
        
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-20 ">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 logo "><img src={Logo} alt="Mafaesa Trading Enterprise Logo." className="h-20" /></Link>

                    {/* Navigation Bar */}
                <nav className="hidden md:flex items-center gap-6">
                    <NavLink to="/"className={navLinkStyles}>Home</NavLink>
                    <NavLink to="/Products"className={navLinkStyles}>Products</NavLink>
                    <NavLink to="/About"className={navLinkStyles}>About</NavLink>
                    <NavLink to="/Contact"className={navLinkStyles}>Contact</NavLink>
                   
                   {/*Cart icon*/}
                   <Link to="/cart" className="relative inline-flex items-center px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-800" viewBox= "0 0 20 20" fill="currentColor">
                   <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                    {count > 0  && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{count}</span>
                    )}
                    </Link>
                </nav>

                {/*Hamburger menu for mobile*/}
                <button onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-gray-100" aria-label="Open menu">
                <svg className="h-6 w-6 text-cyan-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                     d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
                </button>
            </div>

            {/*Mobile menu*/}
            {menuOpen && (
                <div className="md:hidden bg-white border-t shadow-sm">
                    <nav className="flex flex-col px-4 py-4 space-y-4">
                        <NavLink onClick={() => setMenuOpen(false)} to="/" className={navLinkStyles}>Home</NavLink>
                        <NavLink onClick={() => setMenuOpen(false)} to="/Products" className={navLinkStyles}>Products</NavLink>
                        <NavLink onClick={() => setMenuOpen(false)} to="/About" className={navLinkStyles}>About</NavLink>
                        <NavLink onClick={() => setMenuOpen(false)} to="/Contact" className={navLinkStyles}>Contact</NavLink>
                    
                    <Link onClick={() => setMenuOpen(false)}
                        to="/cart" className="inline-flex items-center gap-2 text-cyan-950">
                            Cart
                            {count > 0 && (
                                <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                                    {count}
                                </span>
                            )}
                        </Link>
                    
                    </nav>
                </div>
            )}
        </header>
        
    );
}

export default Header;