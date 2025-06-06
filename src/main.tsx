import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './styles/darkMode.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ThemeProvider } from './Theme/theme'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
