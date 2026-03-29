import whatsappLogo from '../../assets/whatsapp-logo.png'
import styles from '../../styles/landing.module.css'

export function WhatsAppButton() {
  return (
    <a
      className={styles.whatsButton}
      href="https://wa.me/5511943039815?text=Olá, gostaria de saber mais sobre os serviços da FigData Consulting."
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a FIgConsulting no WhatsApp"
    >
      <img
        className={styles.whatsButtonIcon}
        src={whatsappLogo}
        alt="WhatsApp"
      />
    </a>
  )
}
