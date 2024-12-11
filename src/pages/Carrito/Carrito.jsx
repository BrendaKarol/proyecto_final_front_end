// src/pages/Carrito/Carrito.jsx
import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

export const Carrito = () => {
  const { cart, removeFromCart } = useContext(GlobalContext);

  if (!cart.length) return <p>No hay productos en el carrito.</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Carrito de Compras</h1>
      {cart.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem', borderRadius: '8px' }}>
          <h3>{item.nombre}</h3>
          <p>Precio: ${item.precio}</p>
          <button onClick={() => removeFromCart(item.id)}>Quitar del carrito</button>
        </div>
      ))}
    </div>
  );
};
