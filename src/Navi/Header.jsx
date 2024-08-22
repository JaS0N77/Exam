import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/cars">Cars</Link>
                    </li>
                    <li>
                        <Link to="/add-car">Add Car</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
