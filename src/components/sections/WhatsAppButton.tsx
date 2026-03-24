import { MessageCircleMore } from 'lucide-react'
import styles from '../../styles/landing.module.css'

export function WhatsAppButton() {
  return (
    <a
      className={styles.whatsButton}
      href="https://wa.me/5511971234401"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a FIgConsulting no WhatsApp"
    >
      <MessageCircleMore size={22} />
    </a>
  )
}
