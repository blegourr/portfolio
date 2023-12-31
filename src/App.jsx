import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// import default css
import './App.css'

// import static element
import Header from './fixed/header/Header';
import Footer from './fixed/footer/Footer';

// import pages
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import Projet from './pages/Projet';
import Mayocompagnie_bank from  './pages/Mayocompagnie_bank'
import Portfolio from './pages/Portfolio';

function App() {
  const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  }

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Mentions_legales' exact element={<NotFound />} />
        <Route path='/Projets' exact element={<Projet />} />
        <Route path='/Histoire' exact element={<NotFound />} />
        <Route path='/Reseaux' exact element={<NotFound />} />
        <Route path='/Mayocompagnie_bank' exact element={<Mayocompagnie_bank />} />
        <Route path='/Portfolio' exact element={<Portfolio/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
