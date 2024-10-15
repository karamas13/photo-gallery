import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import BannerPage from './pages/BannerPage'
import HomePage from './pages/HomePage';

const router = createBrowserRouter( [
  {
    path: '/',
    element: <BannerPage />
  },
  {
    path: '/HomePage',
    element: <HomePage />
  }

] );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
