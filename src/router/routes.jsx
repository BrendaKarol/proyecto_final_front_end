// src/router/routes.jsx
import React from 'react';
import { Home } from '../pages/Home/Home';
import { Contacto } from '../pages/Contacto/Contacto';
import { Productos } from '../pages/Productos/Productos';
import { Favoritos } from '../pages/Favoritos/Favoritos';
import { Carrito } from '../pages/Carrito/Carrito';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { NotFound } from '../pages/NotFound/NotFound';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/contacto', element: <Contacto /> },
  { path: '/productos', element: <Productos /> },
  { path: '/favoritos', element: <Favoritos /> },
  { path: '/carrito', element: <Carrito /> },
  { path: '/dashboard', element: <Dashboard /> }, // Ruta para el Dashboard
  { path: '*', element: <NotFound /> },
];
