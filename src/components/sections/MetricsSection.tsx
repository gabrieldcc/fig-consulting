import { siteContent } from '../../data/siteContent'
import styles from '../../styles/landing.module.css'

export function MetricsSection() {
  return (
    <section className={styles.metricsSection}>
      <div className={styles.container}>
        <div className={styles.metricsGrid}>
          {siteContent.metrics.map((metric) => {
            const Icon = metric.icon

            return (
              <article key={metric.label} className={styles.metricCard} data-reveal>
                <span className={styles.metricEmoji} aria-hidden="true">
                  <Icon size={24} />
                </span>
                <strong>{metric.value}</strong>
                <span className={styles.metricLabel}>{metric.label}</span>
                <p>{metric.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
