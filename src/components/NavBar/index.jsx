import CartWidget from "../CartWidget";
import "./navbar.css"

function NavBar () {
    return (
    <div className="navbar">
        <ul>
            <li>
                <button>Mouse</button>
            </li>
            <li>
                <button>Teclado</button>
            </li>
        </ul>
        <CartWidget />
    </div>
    ); 
}

export default NavBar;