import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollReveal from 'scrollreveal';
import { publicRoutes } from './routes'
import Landing from './pages/Landing/Landing';
import Libary from './pages/Bookflix/Bookflix';
import "./App.css";
function App() {

  return (
    <Router>
      <div className='App'>
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Page = route.compnent
              return <Route key={index} path={route.path} element={<Page />} />
            })
          }
        </Routes>
      </div>
    </Router>
  )
}
export default App;