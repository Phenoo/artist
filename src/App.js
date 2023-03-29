import React, { useEffect, useState } from "react";

import { Route, Routes, useLocation } from 'react-router-dom';

import Main from './pages/Main'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Exhibition from './pages/Exhibition'
import Single from './pages/Single'
import Shop from './pages/Shop'

import Navigation from './components/Navigation'
import Footer from './components/Footer'

import { AnimatePresence } from "framer-motion";

import MainLoader from './components/MainLoader'


import './styles/style.scss';
import ShopSingle from "./pages/ShopSingle";
import { Toaster } from "react-hot-toast";
import Checkout from "./pages/Checkout";

import {
  motion,
  useScroll,
  useSpring
} from "framer-motion";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, []);

  
  if(loading){
    return <MainLoader />
  }

  return (
    <>
      <Navigation />
      <Toaster />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/check" element={<Checkout />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/work/:slug" element={<Single />} />
          <Route path="/shops/:slug" element={<ShopSingle />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </AnimatePresence>
      
      <motion.div className="progress" style={{ scaleX }} />
      <Footer />
    </>
  );
}

export default App;
