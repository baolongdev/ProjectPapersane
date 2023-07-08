import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollReveal from 'scrollreveal';
import { publicRoutes } from './routes'
import Landing from './pages/Landing/Landing';
import "./App.css";
import { gsap } from 'gsap';
function App() {
  // useEffect(() => {
  //   var t1 = gsap.timeline();

  //   const Load = async () => {
  //     t1.to('ul.barba__transition li', {
  //       duration: 0.5,
  //       scaleY: 0,
  //       transformOrigin: "bottom left",
  //       stagger: 0.2
  //     });
  //     // await t1.finished();
  //   };
  //   const handlePageLoad = () => {
  //     // Call Load when entering a new page
  //     Load();
  //   };

  //   // Add event listeners for page transitions
  //   window.addEventListener("load", handlePageLoad);

  //   return () => {
  //     // Clean up event listeners
  //     window.removeEventListener("load", handlePageLoad);
  //     t1.revert();
  //   };
  // }, []);
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