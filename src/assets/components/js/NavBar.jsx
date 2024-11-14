import React from "react"
import logo from "../../images/logo.svg"
import { NavLink } from "react-router-dom";
import { useState } from "react";



export default function NavBar () {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const body = document.body    
  
  function toggle() {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);   
   }

   body.className = `${isMenuOpen ? 'open noscroll' : ''}`

    return(
        <>

        <div className="overlay has-fade"></div>
          
          <header className='header'>

        <nav className="nav row">

            <div className="nav__logo">
            <a href="#">
                <img src={logo} alt="" />
            </a>
            </div>
        
              <ul className="nav__links">
                <li>
                  <NavLink to="/" onClick={toggle}>Episode</NavLink>
                  </li>
                <li>
                 <NavLink to="/about" onClick={toggle}>About</NavLink>
                  </li>
                <li>
                  <NavLink to="/more" onClick={toggle}>More</NavLink>
                  </li>
            </ul>   
        

            <div className="nav__cta">
                 <button className='btn secondary'>RECENT EPISODE</button>
                 <button className='btn primary'>SUBSCRIBE</button>
            </div>



            
        <a className="nav__hamburger" href="#" onClick={toggle}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        


        </nav>

          </header>


        </>
    )
}