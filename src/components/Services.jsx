import React from 'react';
import { MonitorSmartphone, Wrench, ShieldCheck, Download, Code, Cpu } from 'lucide-react';
import SectionMetadata from './SectionMetadata';
import styles from './Services.module.css';

const services = [
  {
    title: 'Soporte Técnico',
    description: 'Asistencia inmediata para resolver cualquier fallo en tus sistemas y equipos, asegurando que tu negocio no se detenga.',
    icon: <MonitorSmartphone size={32} />
  },
  {
    title: 'Reparación de Equipos',
    description: 'Diagnóstico profundo y reparación de partes de hardware para computadoras de escritorio, laptops y servidores.',
    icon: <Wrench size={32} />
  },
  {
    title: 'Mantenimiento Preventivo',
    description: 'Limpieza física y optimización del sistema para prolongar la vida útil de tu hardware y evitar fallos críticos.',
    icon: <ShieldCheck size={32} />
  },
  {
    title: 'Instalación de Software',
    description: 'Configuración e instalación de sistemas operativos, paquetería de ofimática, programas de diseño y herramientas especializadas.',
    icon: <Download size={32} />
  },
  {
    title: 'Desarrollo de Software',
    description: 'Creamos soluciones a la medida o páginas web modernas y escalables que se adaptan perfectamente a tus necesidades comerciales.',
    icon: <Code size={32} />
  },
  {
    title: 'Ensamblaje y Hardware',
    description: 'Armado de computadoras de alto rendimiento para gaming o trabajo profesional con la mejor selección de componentes.',
    icon: <Cpu size={32} />
  }
];

const Services = () => {
  return (
    <section id="services" className={`section-padding ${styles.servicesSection}`} style={{ position: 'relative' }}>
      <SectionMetadata label="UNITS / DEPLOY" position="top-left" />
      <div className="container">
        <div className={styles.header} data-aos="fade-up">
          <h2 className={`${styles.sectionTitle} glitch`}>Nuestros Servicios</h2>
          <p className={styles.sectionSubtitle}>
            Un ecosistema de soluciones tecnológicas diseñadas para maximizar tu productividad y tranquilidad.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${styles.card} glass`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mono-label">[0{index + 1}]</div>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
