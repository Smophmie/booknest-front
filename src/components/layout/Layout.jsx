// src/components/layout/Layout.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

// On importe toutes les pages
import Home from '../../pages/Home';
import Library from '../../pages/Library';
import Users from '../../pages/Users';

function Layout() {
  return (
    <div style={styles.body} className='bg-gray-900 text-white'>
      <Router>
        <Sidebar />
          <div style={styles.wrapper}>
            <Header />
            <main >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/library" element={<Library />} />
              </Routes>
            </main>
            <Footer />
          </div>
      </Router>
    </div>
  );
}

const styles = {
  body: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
  },
};

export default Layout;