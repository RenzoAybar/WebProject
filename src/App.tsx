import './App.css'
import './styles/darkMode.css'
import { HomePage } from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'
import { ThemeProvider } from './Theme/theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className='min-h-screen'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/recuperar-contrasena" element={<RegisterPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
