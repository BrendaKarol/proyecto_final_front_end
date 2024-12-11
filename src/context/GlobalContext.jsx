import React, { createContext, useReducer } from 'react';
import { globalReducer } from './globalReducer';
import { types } from './types';

const initialState = {
  favorites: [],
  cart: [],  
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  // Función para agregar al carrito
  const addToCart = (product) => {
    dispatch({ type: types.ADD_CART, payload: product });
  };

  // Función para quitar del carrito
  const removeFromCart = (id) => {
    dispatch({ type: types.REMOVE_CART, payload: id });
  };
  
  // Función para agregar a favoritos
  const addToFavorites = (character) => {
    dispatch({ type: types.ADD_FAVORITE, payload: character });
  };

  // Función para quitar de favoritos
  const removeFromFavorites = (id) => {
    dispatch({ type: types.REMOVE_FAVORITE, payload: id });
  };

  const value = {
    favorites: state.favorites,
    cart: state.cart,
    addToCart,
    removeFromCart,
	addToFavorites,
    removeFromFavorites,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
