import React from 'react';
import { FaMoon } from 'react-icons/fa';

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__brand">
      <FaMoon className="brand__moon" aria-hidden="true" />
      <span className="brand__name">Mai</span>
      <span className="brand__surname">Mazlan</span>
    </div>
    <p className="site-footer__quote">“Some things are worth staying up for.”</p>
    <p className="site-footer__copy">© 2026 Mai. All rights reserved.</p>
  </footer>
);

export default Footer;
