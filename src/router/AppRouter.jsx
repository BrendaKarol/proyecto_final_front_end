// src/router/AppRouter.jsx
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';

export const AppRouter = () => {
    const routing = useRoutes(routes);
    return (
        <>
            <Navbar />
            <div style={{ paddingTop: '60px' }}>{}
                {routing}
            </div>
            <Footer />
        </>
    );
};
