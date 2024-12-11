// src/pages/Dashboard/Dashboard.jsx
import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

export const Dashboard = () => {
  const { favorites, cart } = useContext(GlobalContext);

  // Calcular el total de precios en el carrito
  const totalCartPrice = cart.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <h1>Dashboard</h1>
      <p>Resumen de la aplicación</p>

      {/* Estadísticas */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '200px' }}>
          <h2>Favoritos</h2>
          <p>{favorites.length} personajes</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '200px' }}>
          <h2>Carrito</h2>
          <p>{cart.length} productos</p>
          <p>Total: ${totalCartPrice}</p>
        </div>
      </div>

      {/* Listas resumidas */}
      <div style={{ marginTop: '2rem' }}>
        <h3>Personajes Favoritos</h3>
        {favorites.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {favorites.map((fav) => (
              <li key={fav.id} style={{ marginBottom: '1rem' }}>
                <img src={fav.image} alt={fav.name} width="50" style={{ marginRight: '1rem' }} />
                {fav.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tienes personajes favoritos aún.</p>
        )}

        <h3>Productos en el Carrito</h3>
        {cart.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: '1rem' }}>
                {item.nombre} - ${item.precio}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tienes productos en el carrito aún.</p>
        )}
      </div>
    </div>
  );
};
