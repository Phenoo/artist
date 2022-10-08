import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Exhibition from './pages/Exhibition'
import Single from './pages/Single'

import Navigation from './components/Navigation'
import Footer from './components/Footer'

import './styles/style.scss';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="/work/:slug" element={<Single />} />
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
