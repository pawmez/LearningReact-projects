import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter, FaFacebook } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height; //checking the height
    // console.log(linksHeight) check the console for an object!
    if(showLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  },[showLinks])

  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo"/>
        <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
      
      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const {id, url, text} = link; //destructure
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
           
      <ul className="social-icons">
        {social.map((soc) => {
          const {id, url, icon} = soc;
          return (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
          );
        })}
      </ul>
    </div>
  </nav>
}

export default Navbar
