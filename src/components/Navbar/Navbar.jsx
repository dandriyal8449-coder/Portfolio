import React, { useRef, useState } from 'react'
import './Navbar.css'
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";



const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [menuIcon, setMenuIcon] = useState(false)
  const menuRef = useRef()

  const openMenu = () =>{
    menuRef.current.style.right = "0"
    setMenuIcon(!menuIcon)
  }

  const closeMenu = () =>{
    menuRef.current.style.right = "-350px"
    setMenuIcon(!menuIcon)
  }


  return (
    <header  className='header'>
        <nav className='navbar'>
            <h2>PORT<span>FOLIO</span></h2>
            {
              menuIcon ?
              <span className='menu-close-icon' onClick={closeMenu}><RxCross2 /></span>:
              <span onClick={openMenu} className='menu-open-icon' ><MdMenu/></span>
            }
                

            <ul ref={menuRef} className='nav-menu'>
                <li><a href="#home"><p onClick={()=>setMenu("home")}>Home</p></a>{menu==="home" ? <hr/> : <></>}</li>
                <li><a href="#about"><p onClick={()=>setMenu("about")}>About Me</p></a>{menu==="about" ? <hr/> : <></>}</li>
                <li><a href="#services"><p onClick={()=>setMenu("services")}>Services</p></a>{menu==="services" ? <hr/> : <></>}</li>
                <li><a href="#project"><p onClick={()=>setMenu("portfolio")}>Portfolio</p></a>{menu==="portfolio" ? <hr/> : <></>}</li>
                <li><a href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></a>{menu==="contact" ? <hr/> : <></>}</li>
            </ul>

            <div className='nav-contact'>
                Connect With Me
            </div>
        </nav>
    </header>
  )
}

export default Navbar