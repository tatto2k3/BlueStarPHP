import React from 'react';
import { useState } from "react";
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo2.PNG'
import './HeaderReview.css';
export default function HeaderReview() {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
        <img src={logo} alt="Logo" />

        <ul className='navbar-links'>
            <li><a href='/'>Trang chủ</a></li>
            <li><a href='/search-ticket'>Tra cứu</a></li>
            <li><a href='/explore'>Khám phá</a></li>
            <li><a href='/about-us'>Về chúng tôi</a></li>
        </ul>

        <div className='navbar-login'>
            <a href='/sigin-in'>Đăng nhập</a>
            <div></div>
            <a href='/sign-up'>Đăng ký</a>
        </div>

        {/*<div className='navbar-smallscreen'>
            <GiHamburgerMenu color='#fff' fontSize={27} onClick={() =>{setToggleMenu(true)}} />

            {toggleMenu && (

            <div className='navbar-smallscreen_overlay flex__center'>
              <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => {setToggleMenu(false)}} />

              <ul className='navbar-smallscreen-links'>
                <li><a href='#home' onClick={() => {setToggleMenu(false)}}>Home</a></li>
                <li><a href='#aboutus' onClick={() => {setToggleMenu(false)}}>About</a></li>
                <li><a href='#services' onClick={() => {setToggleMenu(false)}}>Services</a></li>
                <li><a href='#prevention' onClick={() => {setToggleMenu(false)}}>prevention</a></li>
                <li><a href='#contact' onClick={() => {setToggleMenu(false)}}>contact</a></li>
              </ul>

            </div>
            )}
            


        </div>
        */}
    </div>
  )
}