import { siteContent } from '../../data/siteContent'
import styles from '../../styles/landing.module.css'

export function MetricsSection() {
  return (
    <section className={styles.metricsSection}>
      <div className={styles.container}>
        <div className={styles.metricsGrid}>
          {siteContent.metrics.map((metric) => (
            <article key={metric.label} className={styles.metricCard} data-reveal>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
