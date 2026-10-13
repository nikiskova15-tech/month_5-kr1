
import { createBrowserRouter, Navigate } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import FavoritesPage from './pages/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage';

import { getRecipes, getRecipe } from './api/api';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage />, loader: getRecipes },
            { path: 'recipes/:id', element: <RecipePage />, loader: getRecipe, errorElement: <NotFoundPage /> },
            { path: 'favorites', element: <FavoritesPage /> },
            { path: '*', element: <NotFoundPage /> }
        ]
    }
]);

export default router;
