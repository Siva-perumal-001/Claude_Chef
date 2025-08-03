import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/index.css'
import Header from './Components/Header.jsx'
import Content from './Components/Content'
import Count from './practice_files/Counter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Content />
  </StrictMode>,
)
