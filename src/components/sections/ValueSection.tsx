import { siteContent } from '../../data/siteContent'
import styles from '../../styles/landing.module.css'

export function ValueSection() {
  return (
    <section id="beneficios" className={styles.valueSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader} data-reveal>
          <span className={styles.sectionEyebrow}>Proposta de valor</span>
          <h2>Transformamos dados em crescimento previsível</h2>
          <p>
            Organizamos informações, conectamos indicadores e traduzimos dados
            em decisões estratégicas para que sua empresa opere com mais clareza,
            foco e capacidade de execução.
          </p>
        </div>

        <div className={styles.valueGrid}>
          {siteContent.benefits.map((benefit) => (
            <article key={benefit.title} className={styles.valueCard} data-reveal>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
