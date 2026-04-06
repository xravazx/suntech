import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>Nyxus</div>
          <p className={styles.description}>
            Excelencia en servicios de TI, soporte técnico avanzado y desarrollo de software para potenciar tu negocio.
          </p>
        </div>
        
        <div className={styles.links}>
          <div className={styles.linkColumn}>
            <h4>Servicios</h4>
            <a href="#">Soporte Técnico</a>
            <a href="#">Mantenimiento</a>
            <a href="#">Desarrollo Web</a>
          </div>
          <div className={styles.linkColumn}>
            <h4>Empresa</h4>
            <a href="#">Nosotros</a>
            <a href="#">Contacto</a>
            <a href="#">Privacidad</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Nyxus. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
