import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <h1 className={`${styles.title} animate-fade-in`}>
            Potencia tu tecnología. <br />
            <span className={styles.highlight}>Simplifica tu futuro.</span>
          </h1>
          <p className={`${styles.subtitle} animate-fade-in`}>
            NYXUS ofrece soluciones especializadas en soporte técnico, reparación de hardware, mantenimiento y desarrollo de software a medida.
          </p>
          <div className={`${styles.actions} animate-fade-in`}>
            <a href="#services" className={styles.primaryBtn}>Explorar Servicios</a>
            <a href="#contact" className={styles.secondaryBtn}>Contactar Soporte</a>
          </div>
        </div>
      </div>
      <div className={styles.glow}></div>
    </section>
  );
};

export default Hero;
