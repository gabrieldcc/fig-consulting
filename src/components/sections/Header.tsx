import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import logo from '../../assets/figdata-logo-transparent-light.png'
import { type NavigationItem } from '../../data/siteContent'
import styles from '../../styles/landing.module.css'

type HeaderProps = {
  navigation: NavigationItem[]
}

export function Header({ navigation }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}
    >
      <div className={styles.container}>
        <a
          className={styles.logo}
          href="#inicio"
          aria-label="FigData Consulting"
        >
          <img
            className={styles.logoImage}
            src={logo}
            alt="FigData Consulting"
          />
        </a>

        <button
          className={styles.mobileMenuButton}
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          id="main-navigation"
          className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className={styles.navCta}
            href="#contato"
            onClick={() => setIsOpen(false)}
          >
            Solicitar diagnóstico
          </a>
        </nav>
      </div>
    </header>
  )
}
