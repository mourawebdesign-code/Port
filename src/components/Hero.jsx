import { CONTACT } from '../data'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__bg">
          <img
            className="hero__photo"
            src="/images/espaco-delas/hero-ambiente.jpg"
            alt="Ambiente do Espaço Delas, com vista para o mar"
          />
          <div className="hero__overlay" />

          <div className="hero__top">
            <div className="reveal hero__eyebrow-wrap" style={{ '--reveal-delay': '0.1s' }}>
              <p className="hero__eyebrow">Espaço Delas · Andreza Lima</p>
            </div>
            <div className="reveal" style={{ '--reveal-delay': '0.2s' }}>
              <h1 className="hero__title">Estética feita para valorizar suas curvas.</h1>
            </div>
            <div className="reveal hero__lead-wrap" style={{ '--reveal-delay': '0.3s' }}>
              <p className="hero__lead">
                Drenagem linfática, modelagem corporal e o protocolo Delas{' '}
                <br className="hero__lead-break" />
                Sculpt Touch — cuidado personalizado para cada corpo.
              </p>
            </div>
          </div>

          <div className="hero__bottom reveal" style={{ '--reveal-delay': '0.5s' }}>
            <div className="hero__stage">
              <div className="hero__cta-slot">
                <div className="hero__round" />
                <div className="hero__shape hero__shape--left">
                  <img src="/images/espaco-delas/shape-left.svg" alt="" />
                </div>
                <div className="hero__shape hero__shape--right">
                  <img src="/images/espaco-delas/shape-right.svg" alt="" />
                </div>
                <a
                  className="hero__cta"
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="hero__cta-icon" src="/images/espaco-delas/icon-flower.svg" alt="" />
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
