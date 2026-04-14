import React from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={`section-padding ${styles.contactSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.info} data-aos="fade-right">
          <h2 className={styles.title}>¿Listo para optimizar tu sistema?</h2>
          <p className={styles.subtitle}>
            Ya sea que necesites una reparación urgente, mantenimiento o el desarrollo de una nueva aplicación, estamos aquí para ayudarte.
          </p>
          
          <div className={styles.contactMethods}>
            <a href="mailto:soporte@suntechsystem.com" className={styles.method}>
              <div className={styles.methodIcon}><Mail size={20} /></div>
              <span>soporte@suntechsystem.com</span>
            </a>
            <a href="tel:+529841586045" className={styles.method}>
              <div className={styles.methodIcon}><Phone size={20} /></div>
              <span>Llamar por teléfono</span>
            </a>
            <a href="https://wa.me/529841586045" target="_blank" rel="noopener noreferrer" className={`${styles.method} ${styles.whatsapp}`}>
              <div className={styles.methodIcon}><MessageCircle size={20} /></div>
              <span>Chat por WhatsApp</span>
            </a>
          </div>
        </div>

        <div className={`${styles.formWrapper} glass`} data-aos="fade-left" data-aos-delay="200">
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" placeholder="Tu nombre o empresa" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" placeholder="tucorreo@ejemplo.com" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">¿En qué podemos ayudarte?</label>
              <textarea id="message" rows="4" placeholder="Describe brevemente el problema o proyecto..."></textarea>
            </div>
            <button type="button" className={styles.submitBtn}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
