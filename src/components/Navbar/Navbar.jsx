import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
            </NavLink>
            <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')}>
                Contacto
            </NavLink>
            <NavLink to="/productos" className={({ isActive }) => (isActive ? 'active' : '')}>
                Productos
            </NavLink>
            <NavLink to="/favoritos" className={({ isActive }) => (isActive ? 'active' : '')}>
                Favoritos
            </NavLink>
            <NavLink to="/carrito" className={({ isActive }) => (isActive ? 'active' : '')}>
                Carrito
            </NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
                Dashboard
            </NavLink>
        </nav>
    );
};


