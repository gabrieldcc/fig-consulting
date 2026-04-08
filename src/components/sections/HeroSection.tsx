import { useEffect, useRef, useState } from 'react'
import { ArrowRight, BarChart3, CheckCircle2, ShieldCheck } from 'lucide-react'
import copilotLogo from '../../assets/Copilot-Logo.png'
import fabricLogo from '../../assets/fabric-logo.png'
import powerBiLogo from '../../assets/Power-BI-Logo.png'
import { siteContent } from '../../data/siteContent'
import styles from '../../styles/landing.module.css'

const whatsappUrl =
  'https://wa.me/5511914966135?text=Olá, gostaria de saber como faturar mais usando a FigData como parceira.'

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
  const chartRef = useRef<HTMLDivElement>(null)
  const [isChartVisible, setIsChartVisible] = useState(false)

  useEffect(() => {
    const chartElement = chartRef.current

    if (!chartElement) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsChartVisible(entry.isIntersecting)
      },
      { threshold: 0.45 },
    )

    observer.observe(chartElement)

    return () => observer.disconnect()
  }, [])

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
              Chega de achismo. Aumente seu faturamento com dados, IA e
              informações em tempo real.
            </h1>
            <p className={styles.heroLead}>
              A FigData transforma dados dispersos em decisões mais rápidas,
              operações mais lucrativas e crescimento previsível.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href={whatsappUrl} target="_blank" rel="noreferrer">
                Falar com um especialista
                <ArrowRight size={18} />
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
              <div ref={chartRef} className={styles.dashboardCard}>
                <div className={styles.dashboardHeader}>
                  <span>Visão executiva</span>
                  <BarChart3 size={18} />
                </div>
                <div className={styles.chartArea}>
                  <div
                    className={`${styles.chartBars} ${isChartVisible ? styles.chartBarsAnimated : ''}`}
                  >
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
                    <strong>99,8%</strong>
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
