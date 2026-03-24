import { siteContent } from '../../data/siteContent'
import styles from '../../styles/landing.module.css'

export function MethodologySection() {
  return (
    <section id="metodologia" className={styles.methodSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader} data-reveal>
          <span className={styles.sectionEyebrow}>Metodologia</span>
          <h2>Uma jornada clara para estruturar, implementar e evoluir</h2>
          <p>
            Trabalhamos em ciclos enxutos, com entregas objetivas e acompanhamento
            próximo para transformar dados em rotina de gestão.
          </p>
        </div>

        <div className={styles.timeline}>
          {siteContent.methodology.map((step, index) => (
            <article key={step.title} className={styles.timelineCard} data-reveal>
              <span className={styles.timelineIndex}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
