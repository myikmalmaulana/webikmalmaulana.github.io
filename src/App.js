import logo from './logo.svg';
import './App.css';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Product = lazy(() => import('./Product'));
const Features = lazy(() => import('./Features'));
const Aboutme = lazy(() => import('./Aboutme'));
const Navbar = lazy(() => import('./Navbar'));

function App() {
  return (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/About me" element={<Aboutme />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </Suspense>
  </Router>
  );
}

export default App;