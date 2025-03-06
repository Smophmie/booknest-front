// src/components/layout/Layout.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

// On importe toutes les pages
import Home from '../../pages/Home';
import About from '../../pages/About';
import Library from '../../pages/Library';
import Login from '../../pages/Login';

function Layout() {
  return (
    <Router>
      <Header />
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/library" element={<Library />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

const styles = {
  main: {
    padding: '1rem',
    minHeight: '70vh',
    maxWidth: '1200px',
    margin: '0 auto',
  },
};

export default Layout;
