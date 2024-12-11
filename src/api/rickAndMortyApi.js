export const getCharacters = async (query = '', page = 1) => {
  const baseUrl = 'https://rickandmortyapi.com/api/character';
  let url = `${baseUrl}/?page=${page}`; // Agregamos el parámetro de página
  if (query) {
    url += `&name=${query}`; // Si hay un query, lo añadimos
  }

  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};
