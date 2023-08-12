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
        <Route path='/Mentions_legales' exact element={<NotFound />} />
        <Route path='/Projets' exact element={<NotFound />} />
        <Route path='/Histoire' exact element={<NotFound />} />
        <Route path='/Reseaux' exact element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
