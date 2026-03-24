import { siteContent } from '../../data/siteContent'
import styles from '../../styles/landing.module.css'

export function ServicesSection() {
  return (
    <section id="servicos" className={styles.darkSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader} data-reveal>
          <span className={styles.sectionEyebrow}>Serviços</span>
          <h2>Estrutura analítica para decisões melhores em todas as frentes</h2>
          <p>
            Da organização das bases à visualização executiva, criamos uma
            jornada analítica capaz de sustentar crescimento, eficiência e
            inteligência de negócio.
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {siteContent.services.map((service) => {
            const Icon = service.icon

            return (
              <article key={service.title} className={styles.serviceCard} data-reveal>
                <div className={styles.serviceIcon}>
                  <Icon size={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
