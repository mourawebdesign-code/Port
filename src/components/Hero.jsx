import { CONTACT } from '../data'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__bg">
          <img
            className="hero__photo"
            src="/images/adrianesilva/hero-adriane-atendimento.png"
            alt="Adriane Silva, esteticista, durante atendimento"
          />
          <div className="hero__overlay" />

          <div className="hero__top">
            <div className="reveal hero__eyebrow-wrap" style={{ '--reveal-delay': '0.1s' }}>
              <p className="hero__eyebrow">Adriane Silva · Esteticista</p>
            </div>
            <div className="reveal" style={{ '--reveal-delay': '0.2s' }}>
              <h1 className="hero__title">
                Cuidado corporal com{' '}
                <br className="hero__title-break" />
                resultado que se vê.
              </h1>
            </div>
            <div className="reveal hero__lead-wrap" style={{ '--reveal-delay': '0.3s' }}>
              <p className="hero__lead">
                Cintura Fina, Lipodetox e Drenagem Linfática — protocolos{' '}
                <br className="hero__lead-break" />
                próprios, com mais de 10 anos de experiência.
              </p>
            </div>
          </div>

          <div className="hero__bottom reveal" style={{ '--reveal-delay': '0.5s' }}>
            <div className="hero__stage">
              <div className="hero__cta-slot">
                <div className="hero__round" />
                <div className="hero__shape hero__shape--left">
                  <img src="/images/adrianesilva/shape-left.svg" alt="" />
                </div>
                <div className="hero__shape hero__shape--right">
                  <img src="/images/adrianesilva/shape-right.svg" alt="" />
                </div>
                <a
                  className="hero__cta"
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="hero__cta-icon" src="/images/adrianesilva/icon-flower.svg" alt="" />
                  <p className="hero__cta-label">Agendar Avaliação</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
