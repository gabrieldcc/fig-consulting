import { siteContent } from '../../data/siteContent'
import styles from '../../styles/landing.module.css'

export function WhyChooseSection() {
  return (
    <section className={styles.whySection}>
      <div className={styles.container}>
        <div className={styles.whyLayout}>
          <div className={styles.whyIntro} data-reveal>
            <span className={styles.sectionEyebrow}>Por que escolher a FigData</span>
            <h2>A FigData entra para aumentar resultado, não só para entregar dashboard.</h2>

            <div className={styles.authorityCards}>
              {siteContent.authority.map((item) => {
                const Icon = item.icon

                return (
                  <div key={item.title} className={styles.authorityCard}>
                    <Icon size={18} />
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className={styles.differentialGrid}>
            {siteContent.differentiators.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className={styles.differentialCard}
                  data-reveal
                >
                  <Icon size={20} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
