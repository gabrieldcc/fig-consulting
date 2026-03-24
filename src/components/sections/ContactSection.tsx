import { ArrowRight, Mail, Phone } from 'lucide-react'
import styles from '../../styles/landing.module.css'

export function ContactSection() {
  return (
    <section id="contato" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactLayout}>
          <div className={styles.contactCopy} data-reveal>
            <span className={styles.sectionEyebrow}>Próximo passo</span>
            <h2>Solicite um diagnóstico estratégico</h2>
            <p>
              Converse com a FIgConsulting para entender prioridades analíticas,
              oportunidades de ganho e o melhor formato para iniciar seu projeto.
            </p>

            <div className={styles.contactPoints}>
              <div>
                <Mail size={18} />
                <span>contato@figconsulting.com.br</span>
              </div>
              <div>
                <Phone size={18} />
                <span>+55 (11) 97123-4401</span>
              </div>
            </div>

            <a className={styles.primaryButton} href="mailto:contato@figconsulting.com.br">
              Entrar em contato
              <ArrowRight size={18} />
            </a>
          </div>

          <form
            className={styles.contactForm}
            data-reveal
            onSubmit={(event) => event.preventDefault()}
          >
            <div className={styles.formRow}>
              <label htmlFor="name">Nome</label>
              <input id="name" name="name" type="text" placeholder="Seu nome" />
            </div>
            <div className={styles.formRow}>
              <label htmlFor="email">E-mail corporativo</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="voce@empresa.com"
              />
            </div>
            <div className={styles.formRow}>
              <label htmlFor="company">Empresa</label>
              <input id="company" name="company" type="text" placeholder="Nome da empresa" />
            </div>
            <div className={styles.formRow}>
              <label htmlFor="scope">Descreva seu desafio</label>
              <textarea
                id="scope"
                name="scope"
                rows={5}
                placeholder="Conte brevemente quais dados, indicadores ou decisões você quer estruturar."
              />
            </div>
            <button className={styles.primaryButton} type="submit">
              Solicitar diagnóstico
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
