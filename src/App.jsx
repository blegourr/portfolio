import { Routes, Route, BrowserRouter } from 'react-router-dom';

// import default css
import './App.css'

// import static element
import Header from './fixed/header/header';
import Footer from './fixed/footer/footer';

// import pages
import Home from './pages/Home';
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
