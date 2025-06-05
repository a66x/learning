import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/style/base.css'
import '@fontsource/montserrat'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
