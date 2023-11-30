import React from 'react';
import { useState } from "react";
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../assets/logo2.PNG'
export default function Header() {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <header>
            <div className='navbar'>
        <img src={logo} alt="Logo" />

        <ul className='navbar-links'>
            <li><a href='/'>Trang chủ</a></li>
            <li><a href='/search-ticket'>Tra cứu</a></li>
            <li><a href='/explore'>Khám phá</a></li>
            <li><a href='/about-us'>Về chúng tôi</a></li>
        </ul>

        <div className='navbar-login'>
            <a href='/sign-in'>Đăng nhập</a>
            <div></div>
            <a href='/sign-up'>Đăng ký</a>
        </div>
        </div>
            <div className="header-body main-color">
                <img className="header-image" src="/Images/Plane.png" />
            </div>
        </header>
    )
}