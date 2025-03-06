// src/components/layout/Footer.jsx

import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2023 - Mon Intranet</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#eee',
    padding: '1rem',
    borderTop: '1px solid #ccc',
    textAlign: 'center'
  },
};

export default Footer;
