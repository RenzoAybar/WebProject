import './App.css'
import './styles/darkMode.css'
import { HomePage } from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'
import { ThemeProvider } from './Theme/theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RootLayout } from './Layout/RootLayout'
import { TerminosCondicionesPage } from './pages/TerminosCondicionesPage'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <RootLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/recuperar-contrasena" element={<RegisterPage />} />
            <Route path="/terminos-y-condiciones" element={<TerminosCondicionesPage />} />
          </Routes>
        </RootLayout>
      </Router>
    </ThemeProvider>
  )
}

export default App
