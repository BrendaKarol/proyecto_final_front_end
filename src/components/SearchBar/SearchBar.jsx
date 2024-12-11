import React, { useState } from 'react'

export const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('')
  
  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(inputValue)
  }

  return (
    <form onSubmit={handleSearch} style={{display:'flex', gap:'0.5rem'}}>
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  )
}
