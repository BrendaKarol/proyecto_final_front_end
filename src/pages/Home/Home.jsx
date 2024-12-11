// src/pages/Home/Home.jsx
import React, { useState } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useFetchCharacters } from '../../hooks/useFetchCharacters';
import { CharacterCard } from '../../components/CharacterCard/CharacterCard';

export const Home = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1); // Estado para manejar la página actual
  const { characters, loading, info } = useFetchCharacters(query, page); // Usamos el hook para obtener info

  const handleSearch = (value) => {
    setQuery(value);
    setPage(1); // Reiniciamos a la primera página cuando se busca algo nuevo
  };

  const handleNextPage = () => {
    if (info?.next) setPage((prevPage) => prevPage + 1); // Avanzar página si existe la siguiente
  };

  const handlePrevPage = () => {
    if (info?.prev) setPage((prevPage) => prevPage - 1); // Retroceder página si existe la anterior
  };

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <h1>Home</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>
          {/* Controles de paginación */}
          <div style={{ marginTop: '1rem' }}>
            <button onClick={handlePrevPage} disabled={!info?.prev}>
              Anterior
            </button>
            <span style={{ margin: '0 1rem' }}>Página {page}</span>
            <button onClick={handleNextPage} disabled={!info?.next}>
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
};
