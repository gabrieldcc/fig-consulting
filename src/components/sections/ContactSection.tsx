import { ArrowRight, Mail, Phone } from 'lucide-react'
import styles from '../../styles/landing.module.css'

const whatsappUrl =
  'https://wa.me/5511943039815?text=Olá, gostaria de saber como faturar mais usando a FigData como parceira.'

export function ContactSection() {
  return (
    <section id="contato" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactLayout}>
          <div className={styles.contactCopy} data-reveal>
            <span className={styles.sectionEyebrow}>Próximo passo</span>
            <h2>Solicite um diagnóstico estratégico</h2>
            <p>
              Converse com a FigData para entender prioridades analíticas,
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

            <a className={styles.primaryButton} href={whatsappUrl} target="_blank" rel="noreferrer">
              Entrar em contato
              <ArrowRight size={18} />
            </a>
          </div>

          <form
            className={styles.contactForm}
            data-reveal
            onSubmit={(event) => {
              event.preventDefault()
              const formData = new FormData(event.currentTarget)
              const name = String(formData.get('name') ?? '').trim()
              const email = String(formData.get('email') ?? '').trim()
              const phone = String(formData.get('phone') ?? '').trim()
              const company = String(formData.get('company') ?? '').trim()
              const scope = String(formData.get('scope') ?? '').trim()

              const message = [
                'Olá, gostaria de saber como faturar mais usando a FigData como parceira.',
                '',
                `Nome: ${name}`,
                `Empresa: ${company}`,
                `Celular: ${phone}`,
                `E-mail: ${email || 'Não informado'}`,
                `Realidade do negócio: ${scope || 'Não informado'}`,
              ].join('\n')

              const targetUrl = `https://wa.me/5511943039815?text=${encodeURIComponent(message)}`
              window.open(targetUrl, '_blank', 'noopener,noreferrer')
            }}
          >
            <div className={styles.formRow}>
              <label htmlFor="name">Nome</label>
              <input id="name" name="name" type="text" placeholder="Seu nome" required />
            </div>
            <div className={styles.formRow}>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="voce@empresa.com"
              />
            </div>
            <div className={styles.formRow}>
              <label htmlFor="phone">Celular</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                required
              />
            </div>
            <div className={styles.formRow}>
              <label htmlFor="company">Empresa</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Nome da empresa"
                required
              />
            </div>
            <div className={styles.formRow}>
              <label htmlFor="scope">Descreva seu desafio</label>
              <textarea
                id="scope"
                name="scope"
                rows={5}
                placeholder="Conte brevemente sua realidade"
              />
            </div>
            <button className={styles.primaryButton} type="submit">
              Solicitar diagnóstico para faturar mais
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
