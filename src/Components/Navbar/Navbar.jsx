import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="header">
                <a href="/">
                    <span className="singh1">SINGH D.</span>
                    <span className="singh2">SINGH D.</span>
                </a>
            </div>

            <ul className="nav-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/work">Work</Link>
                </li>
                <li>
                    <Link to="/connect">Connect</Link>
                </li>
            </ul>
        </div>
    );
}
