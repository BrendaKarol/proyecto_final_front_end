// src/components/CharacterCard/CharacterCard.jsx
import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

export const CharacterCard = ({ character }) => {
  const { addToFavorites, favorites } = useContext(GlobalContext);
  const isFavorite = favorites.some((fav) => fav.id === character.id);

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '4px' }}>
      <img src={character.image} alt={character.name} width="100" />
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <button onClick={() => addToFavorites(character)} disabled={isFavorite}>
        {isFavorite ? 'Ya en favoritos' : 'Agregar a favoritos'}
      </button>
    </div>
  );
};
