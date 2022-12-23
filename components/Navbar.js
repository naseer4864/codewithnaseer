import Link from "next/link";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";


const Nvabar = () => {
    const [isMobile, setIsmobile]=React.useState(false)
    return ( 
        <div className="container">
            <div className="logo">NaseerCODE.</div>
            <nav className={isMobile ? "nav-link-mobile" : "navbar-links"} onClick={() => setIsmobile(! isMobile)}>
                <Link href="/" className="nav-home">HOME</Link>
                <Link href="/techs" className="nav-stack">HTML</Link>
                <Link href="/css" className="nav-stack">CSS</Link>
                <Link href="/javascript" className="nav-stack">JAVASCRIPT</Link>
                <Link href="/contacts" className="nav-contacts">CONTACTS</Link>
            </nav>
            <div className="mobile-menu-icon" onClick={()=> setIsmobile(! isMobile)}>
                {isMobile ?  <FontAwesomeIcon icon={faXmark}  className="xmark"/> : <FontAwesomeIcon icon={faBars} className="fbars"/>}
            </div>
        </div>
     );
}
 
export default Nvabar;