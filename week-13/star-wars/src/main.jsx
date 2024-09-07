import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StarshipContextProvider } from './Context/StarshipContext.jsx'

createRoot(document.getElementById('root')).render(
  <StarshipContextProvider>
  <App />
  </StarshipContextProvider>
)
