import { Routes, Route, BrowserRouter } from 'react-router-dom';

// import default css
import './App.css'

// import static element
import Header from './fixed/header/Header';
import Footer from './fixed/footer/Footer';

// import pages
import Home from './pages/Home';
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Mentions_legales' exact element={<Home />} />
        <Route path='/Projets' exact element={<Home />} />
        <Route path='/Histoire' exact element={<Home />} />
        <Route path='/Reseaux' exact element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
