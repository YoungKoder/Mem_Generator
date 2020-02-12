import React from "react";

import "./navbar.css";


const Navbar = ()=>{
    return(
        <nav className="navbar mynavbar navbar-dark bg-primary">
            <img src="https://www.stickpng.com/assets/images/588359a32c9eb99faafea8bc.png" alt="logo"/>
            <a className="navbar-brand"><h1>Mem generator</h1></a>
        </nav>
    )
}

export default Navbar;