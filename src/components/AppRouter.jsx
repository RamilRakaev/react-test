import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/UI/Navbar/Navbar';
import Posts from '../pages/Posts';
import { routes } from '../router';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                { routes.map(route => 
                    <Route
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                        element={route.component}
                    />
                )}
                <Route path="*" elementk={<Posts />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;