import React from 'react';
import './navbar.css'
import logo from '../../assets/images/Logo.svg'
const Navbar = () => {
    return (
        <nav className='nav-container'>
            <img src={logo} alt="Logo" />
            <ul>
                <li><a href="/order">Order</a></li>
                <li><a href="/order-review">Order Review</a></li>
                <li><a href="/manage-inventory">Manage Inventory</a></li>
                <li><a href="/login">login</a></li>

            </ul>
        </nav>
    );
};

export default Navbar;