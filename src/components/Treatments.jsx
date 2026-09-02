import { useCallback, useRef, useState } from 'react'
import { CONTACT, treatments } from '../data'
import './Treatments.css'

export default function Treatments() {
  const [open, setOpen] = useState(null)
  const panels = useRef([])

  const setPanel = useCallback((i) => (el) => {
    panels.current[i] = el
  }, [])

  const panelHeight = (i) => {
    const el = panels.current[i]
    return el ? el.scrollHeight : 0
  }

  return (
    <section className="services" id="tratamentos">
      <div className="services__container">
        <div className="services__title reveal">
          <div className="badge">
            <span className="badge__dot" />
            <p className="badge__label">tratamentos</p>
          </div>
          <h2 className="services__heading">Cuidados pensados para o seu corpo.</h2>
        </div>

        <div className="services__accordion reveal">
          {treatments.map((t, i) => {
            const isOpen = open === i
            return (
              <div
                className={`acc__item${isOpen ? ' is-open' : ''}`}
                key={t.slug}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <div className="acc__question">
                  <div className="acc__top">
                    <div className="acc__left">
                      <span className="acc__icon">
                        <img src={`/images/espaco-delas/${t.icon}`} alt="" />
                      </span>
                      <h2 className="acc__title">{t.title}</h2>
                    </div>
                    <div className="acc__right">
                      <p className="acc__desc">{t.description}</p>
                      <a
                        className="acc__button"
                        href={CONTACT.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Saiba mais</span>
                      </a>
                    </div>
                  </div>
                  <button
                    className="acc__switcher"
                    aria-label={isOpen ? 'Fechar' : 'Abrir'}
                    aria-expanded={isOpen}
                  >
                    <span className="acc__bar acc__bar--h" />
                    <span className="acc__bar acc__bar--v" />
                  </button>
                </div>

                <div className="acc__preview" aria-hidden="true">
                  <img
                    src={`/images/espaco-delas/treatments/${t.image}`}
                    alt=""
                    loading="lazy"
                  />
                </div>

                <div
                  className="acc__answer"
                  style={{ height: isOpen ? `${panelHeight(i)}px` : 0 }}
                >
                  <div className="acc__answer-inner" ref={setPanel(i)}>
                    <div className="acc__media">
                      <img
                        src={`/images/espaco-delas/treatments/${t.image}`}
                        alt={`${t.title} — Espaço Delas`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
