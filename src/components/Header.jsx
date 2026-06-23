import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
    return  <nav className='green darken-1'>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">React Receipt</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/contacts">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
}

export {Header};