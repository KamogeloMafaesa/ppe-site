import {Link, NavLink} from 'react-router-dom'
import Logo from '../Images/Logo.svg'


function Header(){
 const navLinkStyles = ({ isActive }) =>
    isActive ? '!text-amber-400 font-semibold': '!text-cyan-950 hover:!text-cyan-900'

    return(
        <main>
        <header className="bg-white shadow-sm">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link to="/" className="text-2xl font-bold text-blue-600"><img src={Logo} alt="Mafaesa Trading Enterprise Logo." className="w-100 h-25" /></Link>

                <nav className="space-x-6">
                    <NavLink to="/"className={navLinkStyles}>Home</NavLink>
                    <NavLink to="/Products"className={navLinkStyles}>Products</NavLink>
                    <NavLink to="/About"className={navLinkStyles}>About</NavLink>
                    <NavLink to="/Contact"className={navLinkStyles}>Contact</NavLink>
                </nav>
            </div>
        </header>
        </main>
    );
}

export default Header;