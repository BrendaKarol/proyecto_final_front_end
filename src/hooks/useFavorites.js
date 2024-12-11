import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const useFavorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(GlobalContext)
  return { favorites, addToFavorites, removeFromFavorites }
}
