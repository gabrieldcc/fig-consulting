import { ArrowRight, BarChart3, CheckCircle2, Play, ShieldCheck } from 'lucide-react'
import copilotLogo from '../../assets/Copilot-Logo.png'
import fabricLogo from '../../assets/fabric-logo.png'
import powerBiLogo from '../../assets/Power-BI-Logo.png'
import { siteContent } from '../../data/siteContent'
import styles from '../../styles/landing.module.css'

function BadgeLogo({ logo }: { logo: string }) {
  if (logo === 'powerbi') {
    return (
      <span className={styles.badgeLogo} aria-hidden="true">
        <img className={styles.badgeLogoImage} src={powerBiLogo} alt="" />
      </span>
    )
  }

  if (logo === 'fabric') {
    return (
      <span className={styles.badgeLogo} aria-hidden="true">
        <img className={styles.badgeLogoImage} src={fabricLogo} alt="" />
      </span>
    )
  }

  if (logo === 'copilot') {
    return (
      <span className={styles.badgeLogo} aria-hidden="true">
        <img className={styles.badgeLogoImage} src={copilotLogo} alt="" />
      </span>
    )
  }

  return null
}

export function HeroSection() {
  return (
    <section id="inicio" className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent} data-reveal>
            <div className={styles.kicker}>
              <ShieldCheck size={16} />
              <span>Consultoria premium em análise de dados, IA e Inteligência de Negócio</span>
            </div>
            <h1>
              Chega de achismo, aumente seu faturamento analisando dados
              confiáveis e estratégicos.
            </h1>
            <p className={styles.heroLead}>
              A FigData transforma dados dispersos em visibilidade
              gerencial, prioridades claras e evolução real de performance.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#contato">
                Falar com um especialista
                <ArrowRight size={18} />
              </a>
              <a className={styles.secondaryButton} href="#servicos">
                <Play size={16} />
                Ver soluções
              </a>
            </div>

            <div className={styles.badgeList} aria-label="Especialidades">
              {siteContent.badges.map((badge) => (
                <span key={badge.label} className={styles.badge}>
                  {badge.logo ? (
                    <BadgeLogo logo={badge.logo} />
                  ) : null}
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.heroVisualWrap} data-reveal>
            <div className={styles.heroVisual}>
              <div className={styles.dashboardCard}>
                <div className={styles.dashboardHeader}>
                  <span>Visão executiva</span>
                  <BarChart3 size={18} />
                </div>
                <div className={styles.chartArea}>
                  <div className={styles.chartBars}>
                    <span style={{ height: '34%' }} />
                    <span style={{ height: '54%' }} />
                    <span style={{ height: '68%' }} />
                    <span style={{ height: '50%' }} />
                    <span style={{ height: '84%' }} />
                    <span style={{ height: '76%' }} />
                  </div>
                  <div className={styles.chartLine}>
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className={styles.statRow}>
                  <div>
                    <strong>+55</strong>
                    <span>dashboards entregues</span>
                  </div>
                  <div>
                    <strong>98%</strong>
                    <span>satisfação consultiva</span>
                  </div>
                </div>
              </div>

              <div className={styles.floatingInsight}>
                <strong>Selo FIg</strong>
                <span>Consultoria orientada por dados e IA</span>
              </div>

              <div className={styles.miniPanel}>
                {siteContent.heroHighlights.map((item) => (
                  <div key={item} className={styles.miniPanelItem}>
                    <CheckCircle2 size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
