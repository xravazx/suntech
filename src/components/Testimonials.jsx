import React from 'react';
import { User, ShieldCheck, Zap } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Carlos Mendoza',
    company: 'Logística Regional',
    text: 'La recuperación de nuestros servidores fue inmediata. El soporte técnico más eficiente que hemos contratado.',
    icon: <ShieldCheck size={24} />
  },
  {
    name: 'Ana García',
    company: 'Studio Creativo',
    text: 'SISTEMA OPTIMIZADO: Mi estación de trabajo vuela. El mantenimiento preventivo realmente marcó la diferencia.',
    icon: <Zap size={24} />
  },
  {
    name: 'Roberto Silva',
    company: 'Fintech Solutions',
    text: 'Excelente desarrollo de software. Entendieron nuestras necesidades técnicas desde el primer día.',
    icon: <User size={24} />
  }
];

const Testimonials = () => {
  return (
    <section className={`section-padding ${styles.testimonialsSection}`}>
      <div className="container">
        <div className={styles.header} data-aos="fade-up">
          <span className="mono-label">Feedback del Sistema</span>
          <h2 className={styles.title}>Historias de Éxito</h2>
        </div>

        <div className={styles.logContainer}>
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className={styles.logCard}
              data-aos="fade-left"
              data-aos-delay={index * 150}
            >
              <div className={styles.logHeader}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <div className={styles.logMeta}>
                  <span className={styles.userName}>{item.name}</span>
                  <span className={styles.userCompany}>{item.company}</span>
                </div>
                <div className={styles.statusDot}></div>
              </div>
              <div className={styles.logBody}>
                <p className={styles.text}>"{item.text}"</p>
              </div>
              <div className={styles.logFooter}>
                <span className={styles.timestamp}>TIMESTAMP: {new Date().toLocaleDateString()}</span>
                <span className={styles.verified}>VERIFIED_USER</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
