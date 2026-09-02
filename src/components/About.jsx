import { CONTACT, approachList } from '../data'
import './About.css'

export default function About() {
  return (
    <section className="approach" id="sobre">
      <div className="approach__bg">
        <div className="approach__container">
          <div className="approach__grid">
            <div className="approach__left reveal">
              <img
                className="approach__photo"
                src="/images/adrianesilva/about-adriane-escritorio.jpg"
                alt="Adriane Silva, esteticista, em seu espaço de atendimento"
              />
              <div className="approach__caption">
                <div className="approach__info">
                  <div className="approach__info-overlay" />
                  <div className="approach__info-content">
                    <h2 className="approach__name">Adriane Silva</h2>
                    <p className="approach__role">Esteticista</p>
                  </div>
                  <span className="approach__info-icon">
                    <img src="/images/adrianesilva/icon-badge.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>

            <div className="approach__right reveal">
              <div className="approach__title">
                <div className="badge">
                  <span className="badge__dot" />
                  <p className="badge__label">Sobre a Adriane</p>
                </div>
                <h2 className="approach__heading">Mais de 10 anos cuidando de cada corpo.</h2>
                <p className="approach__lead">
                  Esteticista e criadora dos protocolos Cintura Fina e Lipodetox — cada
                  atendimento começa com uma avaliação personalizada para o seu objetivo.
                </p>
              </div>

              <div className="approach__list">
                {approachList.map((item) => (
                  <div className="approach__item" key={item.text}>
                    <span className="approach__item-box">
                      <img src={`/images/adrianesilva/${item.icon}`} alt="" />
                    </span>
                    <p className="approach__item-text">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="approach__cta-wrap">
                <a
                  className="btn-primary approach__cta"
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn-icon__box">
                    <img src="/images/adrianesilva/icon-arrow.svg" alt="" />
                  </span>
                  <span className="btn-icon__label">Agende sua avaliação</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
