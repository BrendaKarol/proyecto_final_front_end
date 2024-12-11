import React, { useState, useMemo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

// Datos simulados de productos
const productosMock = [
  { id: 1, nombre: 'Portal Gun', precio: 100, descripcion: 'Herramienta para viajar entre dimensiones.' },
  { id: 2, nombre: 'Mega Seeds', precio: 50, descripcion: 'Semillas con propiedades especiales.' },
  { id: 3, nombre: 'Plumbus', precio: 25, descripcion: 'Objeto multiuso en todas las casas.' },
  { id: 4, nombre: 'Mr. Meeseeks Box', precio: 200, descripcion: 'Crea un Mr. Meeseeks que cumple deseos.' },
];

export const Productos = () => {
  const { addToCart } = useContext(GlobalContext);
  const [priceRange, setPriceRange] = useState(200); // Rango máximo de precio

  // Filtramos productos con useMemo para optimizar
  const filteredProducts = useMemo(() => {
    return productosMock.filter((prod) => prod.precio <= priceRange);
  }, [priceRange]);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Productos</h1>

      {/* Control del rango de precio */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Filtrar por precio (máximo): </label>
        <input
          type="range"
          min="0"
          max="200"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
        />
        <span> ${priceRange}</span>
      </div>

      <ul>
        {filteredProducts.map((producto) => (
          <li
            key={producto.id}
            style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}
          >
            <h2>{producto.nombre}</h2>
            <p>Precio: ${producto.precio}</p>
            <p>{producto.descripcion}</p>
            <Link to={`/productos/${producto.id}`} style={{ marginRight: '1rem' }}>
              Ver detalles
            </Link>
            <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
