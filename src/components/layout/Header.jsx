// src/components/layout/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <h1>Mon Intranet</h1>
      <nav style={styles.nav}>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#eee',
    padding: '1rem',
    borderBottom: '1px solid #ccc'
  },
  nav: {
    marginTop: '1rem',
    display: 'flex',
    gap: '1rem'
  }
};

export default Header;
