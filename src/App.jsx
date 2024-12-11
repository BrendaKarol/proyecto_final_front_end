import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalContext'
import { AppRouter } from './router/AppRouter'
import './styles/globals.css'

export const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </GlobalProvider>
  )
}
