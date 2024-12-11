import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Productos } from './Productos';
import { GlobalContext } from '../../context/GlobalContext';

test('Filtra productos según el rango de precio', () => {
  const mockAddToCart = jest.fn();
  const value = {
    addToCart: mockAddToCart,
    cart: [],
  };

  render(
    <GlobalContext.Provider value={value}>
      <MemoryRouter>
        <Productos />
      </MemoryRouter>
    </GlobalContext.Provider>
  );

  // Verifica que todos los productos estén presentes inicialmente
  expect(screen.getByText('Portal Gun')).toBeInTheDocument();
  expect(screen.getByText('Mega Seeds')).toBeInTheDocument();
  expect(screen.getByText('Plumbus')).toBeInTheDocument();
  expect(screen.getByText('Mr. Meeseeks Box')).toBeInTheDocument();

  // Cambiar el rango de precio a 50
  const rangeInput = screen.getByRole('slider');
  fireEvent.change(rangeInput, { target: { value: 50 } });

  // Verifica que solo los productos dentro del rango estén presentes
  expect(screen.queryByText('Portal Gun')).not.toBeInTheDocument();
  expect(screen.getByText('Mega Seeds')).toBeInTheDocument();
  expect(screen.getByText('Plumbus')).toBeInTheDocument();
  expect(screen.queryByText('Mr. Meeseeks Box')).not.toBeInTheDocument();
});
