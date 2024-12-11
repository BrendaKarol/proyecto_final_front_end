import { types } from './types';

export const globalReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_CART:
       
      if (state.cart.some((item) => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case types.REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
	  
	case types.ADD_FAVORITE:
      // Verifica que no se añadan duplicados
      if (state.favorites.some((fav) => fav.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case types.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };

    default:
      return state;
  }
};
