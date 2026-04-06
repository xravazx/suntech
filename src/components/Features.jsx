import React from 'react';
import { Zap, Shield, HeadphonesIcon } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    title: 'Soluciones Rápidas',
    description: 'Sabemos que el tiempo es dinero. Ofrecemos diagnósticos y reparaciones en tiempo récord sin sacrificar calidad.',
    icon: <Zap size={24} />
  },
  {
    title: 'Precios Transparentes',
    description: 'Sin costos ocultos. Te informamos claramente sobre los componentes a cambiar o los alcances del desarrollo.',
    icon: <Shield size={24} />
  },
  {
    title: 'Atención Personalizada',
    description: 'Cada cliente es único. Escuchamos tus problemas técnicos para brindarte la mejor solución posible a tu medida.',
    icon: <HeadphonesIcon size={24} />
  }
];

const Features = () => {
  return (
    <section id="features" className={`section-padding ${styles.featuresSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Por qué elegir NYXUS</h2>
          <p className={styles.subtitle}>
            Nuestro compromiso es ofrecer un servicio premium con componentes de la más alta calidad y un código robusto.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((item, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.icon}>{item.icon}</div>
              <div>
                <h4 className={styles.featureTitle}>{item.title}</h4>
                <p className={styles.featureDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
