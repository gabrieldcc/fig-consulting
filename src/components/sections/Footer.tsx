import { ArrowUpRight, Mail, MessageCircleMore } from 'lucide-react'
import logo from '../../assets/figdata-logo-transparent-light.png'
import { siteContent, type NavigationItem } from '../../data/siteContent'
import styles from '../../styles/landing.module.css'

type FooterProps = {
  navigation: NavigationItem[]
}

export function Footer({ navigation }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div>
            <a className={styles.logo} href="#inicio">
              <img
                className={styles.logoImage}
                src={logo}
                alt="FigData Consulting"
              />
            </a>
            <p className={styles.footerText}>
              Consultoria em dados, analytics, BI e inteligência de negócio para
              empresas que querem crescer com mais clareza e menos improviso.
            </p>
          </div>

          <div>
            <h3>Links rápidos</h3>
            <div className={styles.footerLinks}>
              {navigation.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3>Contato</h3>
            <div className={styles.footerLinks}>
              <a href={`mailto:${siteContent.footerLinks.email}`}>
                <Mail size={16} />
                {siteContent.footerLinks.email}
              </a>
              <a href="https://wa.me/5511971234401" target="_blank" rel="noreferrer">
                <MessageCircleMore size={16} />
                {siteContent.footerLinks.whatsapp}
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <ArrowUpRight size={16} />
                {siteContent.footerLinks.linkedin}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
