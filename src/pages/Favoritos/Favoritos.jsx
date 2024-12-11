import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

export const Favoritos = () => {
  const { favorites, removeFromFavorites } = useContext(GlobalContext)

  if(!favorites.length) return <p>No tienes favoritos aún</p>

  return (
    <div style={{padding:'1rem'}}>
      <h1>Favoritos</h1>
      {favorites.map(fav => (
        <div key={fav.id} style={{border:'1px solid #ccc', margin:'1rem', padding:'1rem'}}>
          <img src={fav.image} alt={fav.name} width="100"/>
          <h3>{fav.name}</h3>
          <button onClick={() => removeFromFavorites(fav.id)}>Quitar de favoritos</button>
        </div>
      ))}
    </div>
  )
}
