import {Link, NavLink} from 'react-router-dom'


function Header(){
 const navLinkStyles = ({ isActive }) =>
    isActive ? 'text-blue-600 font-semibold': 'text-gray-700 hover:text-blue-500'

    return(
        <main>
        <header className="bg-white shadow-sm">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link to="/" className="text-2xl font-bold text-blue-600">Mafaesa Trading Enterprise.</Link>
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