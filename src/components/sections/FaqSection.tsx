import { siteContent } from '../../data/siteContent'
import styles from '../../styles/landing.module.css'

export function FaqSection() {
  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader} data-reveal>
          <span className={styles.sectionEyebrow}>FAQ</span>
          <h2>Perguntas frequentes sobre a atuação da FIgConsulting</h2>
          <p>
            Reunimos respostas objetivas para acelerar sua avaliação sobre o
            escopo, a dinâmica do diagnóstico e os formatos de projeto.
          </p>
        </div>

        <div className={styles.faqList}>
          {siteContent.faqs.map((item) => (
            <details key={item.question} className={styles.faqItem} data-reveal>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
