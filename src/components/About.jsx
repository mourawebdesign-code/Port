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
                src="/images/espaco-delas/doutora.jpg"
                alt="Andreza Lima, Espaço Delas"
              />
              <div className="approach__caption">
                <div className="approach__info">
                  <div className="approach__info-overlay" />
                  <div className="approach__info-content">
                    <h2 className="approach__name">Andreza Lima</h2>
                    <p className="approach__role">Fundadora do Espaço Delas</p>
                  </div>
                  <span className="approach__info-icon">
                    <img src="/images/espaco-delas/icon-badge.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>

            <div className="approach__right reveal">
              <div className="approach__title">
                <div className="badge">
                  <span className="badge__dot" />
                  <p className="badge__label">O Espaço Delas</p>
                </div>
                <h2 className="approach__heading">Um espaço criado para cuidar de você.</h2>
                <p className="approach__lead">
                  Aqui, cada cliente é acolhida e cuidada com dedicação verdadeira — em
                  atendimentos que começam sempre por uma avaliação personalizada.
                </p>
              </div>

              <div className="approach__list">
                {approachList.map((item) => (
                  <div className="approach__item" key={item.text}>
                    <span className="approach__item-box">
                      <img src={`/images/espaco-delas/${item.icon}`} alt="" />
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
                    <img src="/images/espaco-delas/icon-arrow.svg" alt="" />
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
