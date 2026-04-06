import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} glass`}>
      <div className={`container ${styles.headerContent}`}>
        <div className={styles.logo}>Nyxus</div>
        <nav className={styles.nav}>
          <a href="#hero">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#features">Tecnología</a>
          <a href="#contact" className={styles.contactBtn}>Contactar</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
