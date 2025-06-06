import './App.css'
import './styles/darkMode.css'
import { HomePage } from './pages/HomePage'
import { ThemeProvider } from './Theme/theme'

function App() {
  return (
    <ThemeProvider>
      <div className='min-h-screen'>
        <HomePage/>
      </div>
    </ThemeProvider>
  )
}

export default App
