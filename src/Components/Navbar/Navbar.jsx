import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/theme_pattern.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

export const Navbar = () => {
  const [menu, setMenu] = useState("hero");
  const menuRef = useRef(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
  };

  return (
    <div className='navbar' id='navbar'>
      <div className="logo">
        <h1>Shivam</h1>
        <img src={logo} alt="" />
      </div>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul className='nav-menu' ref={menuRef}>
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
        <li>
          <AnchorLink className='anchor-link' href='#hero'>
            <p onClick={() => setMenu("hero")}>Home</p>
          </AnchorLink>
          {menu === "hero" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt='' />}
        </li>
      </ul>
      <AnchorLink className='anchor-link' offset={50} href='#contact'><div className='nav-connect'>
        Connect with Me
      </div></AnchorLink>
    </div>
  );
};

export default Navbar;
