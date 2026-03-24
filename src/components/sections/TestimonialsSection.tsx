import { Quote } from 'lucide-react'
import { siteContent } from '../../data/siteContent'
import styles from '../../styles/landing.module.css'

export function TestimonialsSection() {
  return (
    <section id="cases" className={styles.darkSectionAlt}>
      <div className={styles.container}>
        <div className={styles.sectionHeader} data-reveal>
          <span className={styles.sectionEyebrow}>Cases e depoimentos</span>
          <h2>Resultados percebidos na rotina de gestão e na leitura do negócio</h2>
          <p>
            Quando os dados passam a conversar com a estratégia, a operação ganha
            clareza, previsibilidade e velocidade de resposta.
          </p>
        </div>

        <div className={styles.testimonialGrid}>
          {siteContent.testimonials.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.company}`}
              className={styles.testimonialCard}
              data-reveal
            >
              <Quote size={28} />
              <p>{testimonial.quote}</p>
              <div>
                <strong>{testimonial.name}</strong>
                <span>
                  {testimonial.role} • {testimonial.company}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
