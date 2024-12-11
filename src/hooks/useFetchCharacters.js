// src/hooks/useFetchCharacters.js
import { useState, useEffect, useCallback } from 'react';
import { getCharacters } from '../api';

export const useFetchCharacters = (query = '', page = 1) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(null); 

  const fetchData = useCallback(async () => {
    setLoading(true);
    const data = await getCharacters(query, page); 
    setCharacters(data.results || []);
    setInfo(data.info || null); 
    setLoading(false);
  }, [query, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { characters, loading, info };
};
