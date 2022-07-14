import React, { useState } from 'react'
import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        console.log("clicked");
        setToggle(!toggle)
    }
    return (
        <div className='navig'>

            <Link to="/" className='logo'>spencer</Link>
            <svg viewbox="0 0 100 80" width="50" height="50" className='hamburger' onClick={toggleMenu}>
                <rect width="50" height="5" color='white'></rect>
                <rect y="10" width="50" height="5" color='white'></rect>
                <rect y="20" width="50" height="5" color='white'></rect>
            </svg>
            <nav className={toggle ? 'navdisplay' : 'null'}>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'link')} >Home</NavLink></li>
                    <li><NavLink to="/contactPage" className={({ isActive }) => (isActive ? 'active' : 'link')}>contact</NavLink></li>
                    <li><NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : 'link')}>services</NavLink></li>
                    {/* <li><NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : 'link')}>products</NavLink></li> */}
                </ul>

               
                <Link to="/sign-up" className={"me"}><button className="me"> sign up</button></Link>
            </nav>

        </div>
    )
}

export default Navbar

