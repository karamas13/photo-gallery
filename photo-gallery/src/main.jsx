import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import BannerPage from './pages/BannerPage';
import HomePage from './pages/HomePage';
import Ecosystem from './pages/Ecosystem';
import Concerts from './pages/Concerts';
import MealsnShips from './pages/MealsnShips';
import Individuals from './pages/Individuals';
 
const router = createBrowserRouter( [
  {
    path: '/',
    element: <BannerPage  />
  },
  {
    path: '/HomePage',
    element: <HomePage />
  },
  {
    path: '/Ecosystem',
    element: <Ecosystem />
  },
  {
    path: '/Concerts',
    element: <Concerts />
  },
  {
    path: '/MealsnShips',
    element: <MealsnShips />
  },
  {
    path: '/Individuals',
    element: <Individuals />
  },

] );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider   router={router} />
  </StrictMode>,
)
