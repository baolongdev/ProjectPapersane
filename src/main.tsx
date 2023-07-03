import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './barbatransiton.css'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ul className="barba__transition">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <App />
  </React.StrictMode>
)
