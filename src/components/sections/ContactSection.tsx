import { ArrowRight, Mail, Phone } from 'lucide-react'
import styles from '../../styles/landing.module.css'

const whatsappUrl =
  'https://wa.me/5511914966135?text=Olá, gostaria de saber como faturar mais usando a FigData como parceira.'

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  if (digits.length <= 2) return digits ? `(${digits}` : ''
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function formatPhoneFromDigits(digits: string) {
  const normalizedDigits = digits.slice(0, 11)

  if (normalizedDigits.length <= 2) return normalizedDigits ? `(${normalizedDigits}` : ''
  if (normalizedDigits.length <= 7) {
    return `(${normalizedDigits.slice(0, 2)}) ${normalizedDigits.slice(2)}`
  }

  return `(${normalizedDigits.slice(0, 2)}) ${normalizedDigits.slice(2, 7)}-${normalizedDigits.slice(7)}`
}

function normalizeEmail(value: string) {
  return value.replace(/\s+/g, '').toLowerCase()
}

export function ContactSection() {
  return (
    <section id="contato" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactLayout}>
          <div className={styles.contactCopy} data-reveal>
            <span className={styles.sectionEyebrow}>Próximo passo</span>
            <h2>Descubra como faturar mais com a FigData</h2>
            <p>
              Converse com a FigData e descubra onde estão os gargalos,
              desperdícios e oportunidades de crescimento do seu negócio.
            </p>

            <div className={styles.contactPoints}>
              <div>
                <Mail size={18} />
                <span>figdata.contato@gmail.com</span>
              </div>
              <div>
                <Phone size={18} />
                <span>+55 (11) 91496-6135</span>
              </div>
            </div>

            <a className={styles.primaryButton} href={whatsappUrl} target="_blank" rel="noreferrer">
              Quero faturar mais
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

              const targetUrl = `https://wa.me/5511914966135?text=${encodeURIComponent(message)}`
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
                inputMode="email"
                onBlur={(event) => {
                  event.currentTarget.value = normalizeEmail(event.currentTarget.value)
                }}
              />
            </div>
            <div className={styles.formRow}>
              <label htmlFor="phone">Celular</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                inputMode="numeric"
                pattern="\(\d{2}\)\s\d{4,5}-\d{4}"
                required
                onInput={(event) => {
                  const input = event.currentTarget
                  const cursorPosition = input.selectionStart ?? input.value.length
                  const digitsBeforeCursor = input.value
                    .slice(0, cursorPosition)
                    .replace(/\D/g, '').length
                  const formattedValue = formatPhone(input.value)

                  input.value = formattedValue

                  let nextCursorPosition = formattedValue.length
                  for (let index = 0, digitsCount = 0; index < formattedValue.length; index += 1) {
                    if (/\d/.test(formattedValue[index])) {
                      digitsCount += 1
                    }

                    if (digitsCount >= digitsBeforeCursor) {
                      nextCursorPosition = index + 1
                      break
                    }
                  }

                  requestAnimationFrame(() => {
                    input.setSelectionRange(nextCursorPosition, nextCursorPosition)
                  })
                }}
                onBlur={(event) => {
                  const input = event.currentTarget
                  input.value = formatPhoneFromDigits(input.value.replace(/\D/g, ''))
                }}
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
                placeholder="Conte brevemente onde sua empresa quer crescer ou o que hoje está travando seus resultados"
              />
            </div>
            <button className={styles.primaryButton} type="submit">
              Quero um diagnóstico para faturar mais
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
