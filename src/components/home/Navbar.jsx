import './css/navbar.css';
import { UilSearch } from '@iconscout/react-unicons'
import { UilShoppingBag } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'

const Navbar = () =>
{
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <h1>SWEET DREAMS</h1>
            </div>
            <div className="navbar-links">
                <ul>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                    <li>Tienda</li>
                </ul>
            </div>
            <div className="navbar-options">
                <UilSearch />
                <UilShoppingBag />
                <UilUser />
            </div>
        </div>
    );
}

export default Navbar;