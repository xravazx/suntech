import styles from './Showcase.module.css';

const projects = [
  {
    id: 'PRJ-001',
    title: 'Ensamblado de un Equipo',
    status: 'COMPLETE',
    category: 'HARDWARE',
    description: 'Ensamblado profesional de estaciones de trabajo de alto rendimiento.',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'PRJ-002',
    title: 'Desarrollo de Software',
    status: 'IN_PRODUCTION',
    category: 'SOFTWARE',
    description: 'Interfaces personalizadas para sistemas de control.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'PRJ-003',
    title: 'Mantenimiento Avanzado',
    status: 'OPTIMIZED',
    category: 'HARDWARE',
    description: 'Recuperación y blindaje de estaciones de trabajo.',
    image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=2000&auto=format&fit=crop'
  }
];

const Showcase = () => {
  return (
    <section id="work" className={`section-padding ${styles.showcaseSection}`}>
      <div className="container">
        <div className={styles.header} data-aos="fade-up">
          <span className="mono-label">Nuestros Trabajos</span>
          <h2 className={styles.title}>Showcase de Soluciones</h2>
        </div>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={styles.projectCard}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.image} />
                <div className={styles.overlay}>
                  <div className={styles.meta}>
                    <span className={styles.id}>{project.id}</span>
                    <span className={styles.status}>{project.status}</span>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
