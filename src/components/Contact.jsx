import { useState } from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Iniciando envío via WhatsApp...');
    setStatus('loading');
    
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Formatear el mensaje para WhatsApp
    const text = `Hola Sun Technology! 👋\n\nMi nombre es: *${name}*\nCorreo: *${email}*\n\nConsulta:\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/529841586045?text=${encodedText}`;
    
    try {
      // Simular un pequeño retraso para la experiencia de usuario
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setStatus('success');
        form.reset();
      }, 1000);
    } catch (error) {
      console.error('Error al redirigir a WhatsApp:', error);
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
                ¡Redirigiendo a WhatsApp! Por favor, envía el mensaje en la ventana que se abrirá.
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
