import { Link } from "react-router-dom";
import "./navbar.css";
import { SocialIcon } from 'react-social-icons'

const Navbar = () => {
    function ToggleNavBar() {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        //Animate Links
            navLinks.classList.toggle("open");
            links.forEach(link => {
                link.classList.toggle("fade");
            });

            //Hamburger Animation
            hamburger.classList.toggle("toggle");
    }

    return (
        <>
        <nav>
            <div className="logo">
                <img src="logo.svg" alt="Logo Image" />
            </div>
            <div className="hamburger" onClick={()=>ToggleNavBar()}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className="nav-links" >
                <li><Link to='/corsi' onClick={() => ToggleNavBar()}>Corsi</Link></li>
                <li><Link to="/dharma" onClick={() => ToggleNavBar()}>Il centro Dharma</Link></li>
                <li><Link to='/scuole' onClick={() => ToggleNavBar()}>Scuole</Link></li>
                <li><Link to="/eventi" onClick={() => ToggleNavBar()}>Eventi</Link></li>
                <li><Link to="/bharavi" onClick={() => ToggleNavBar()}>Bharavi</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;