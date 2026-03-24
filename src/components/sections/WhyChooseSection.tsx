import { siteContent } from '../../data/siteContent'
import styles from '../../styles/landing.module.css'

export function WhyChooseSection() {
  return (
    <section className={styles.whySection}>
      <div className={styles.container}>
        <div className={styles.whyLayout}>
          <div className={styles.whyIntro} data-reveal>
            <span className={styles.sectionEyebrow}>Por que escolher a FIgConsulting</span>
            <h2>Autoridade consultiva com execução prática e leitura estratégica</h2>
            <p>
              Nosso trabalho combina método, profundidade técnica e linguagem de
              negócio para que a liderança tenha dados confiáveis, decisões
              defensáveis e entregas que realmente entram em operação.
            </p>

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
