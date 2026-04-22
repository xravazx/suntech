import { useState } from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Iniciando envío de formulario...');
    setStatus('loading');
    
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/mqaeajob', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const result = await response.json();
      console.log('Respuesta de Formspree:', result);
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        console.error('Error en la respuesta:', result);
        setStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={`section-padding ${styles.contactSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.info} data-aos="fade-right">
          <h2 className={styles.title}>¿Listo para optimizar tu sistema?</h2>
          <p className={styles.subtitle}>
            Ya sea que necesites una reparación urgente, mantenimiento o el desarrollo de una nueva aplicación, estamos aquí para ayudarte.
          </p>
          
          <div className={styles.contactMethods}>
            <a href="mailto:SunTechnologySystems@outlook.com" className={styles.method}>
              <div className={styles.methodIcon}><Mail size={20} /></div>
              <span>SunTechnologySystems@outlook.com</span>
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
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" placeholder="Tu nombre o empresa" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">¿En qué podemos ayudarte?</label>
              <textarea id="message" name="message" rows="4" placeholder="Describe brevemente el problema o proyecto..." required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
              {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            
            {status === 'success' && (
              <div className={`${styles.statusMessage} ${styles.success}`}>
                ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
              </div>
            )}
            {status === 'error' && (
              <div className={`${styles.statusMessage} ${styles.error}`}>
                Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctanos por WhatsApp.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
