import { useRef, useState } from 'react'
import { gallery, journeyWords } from '../data'
import './SkinJourney.css'

const galleryAlts = {
  a: 'Entrada do espaço de atendimento de Adriane Silva Estética',
  b: 'Sala de atendimento de Adriane Silva Estética',
  c: 'Resultado real de cliente após o protocolo Cintura Fina',
  d: 'Cliente recebendo o presente de boas-vindas no espaço',
}

const gallerySlides = Object.keys(gallery).map((key) => ({
  key,
  src: gallery[key],
  alt: galleryAlts[key],
}))

export default function SkinJourney() {
  let imgIndex = 0
  const carouselRef = useRef(null)
  const [active, setActive] = useState(0)

  const handleScroll = () => {
    const el = carouselRef.current
    if (!el) return
    const slides = el.querySelectorAll('.journey__slide')
    let closest = 0
    let minDist = Infinity
    slides.forEach((slide, i) => {
      const dist = Math.abs(slide.offsetLeft - el.scrollLeft)
      if (dist < minDist) {
        minDist = dist
        closest = i
      }
    })
    setActive(closest)
  }

  return (
    <section className="journey">
      <div className="journey__container">
        <div className="journey__sticky reveal">
          <div className="badge">
            <span className="badge__dot" />
            <p className="badge__label">Cuidado pensado para você</p>
          </div>

          <div className="journey__words">
            {journeyWords.map((w, i) => {
              if (w.img) {
                imgIndex += 1
                return (
                  <span className={`journey__img journey__img--${imgIndex}`} key={i}>
                    <img src={`/images/adrianesilva/${w.img}`} alt="" />
                  </span>
                )
              }
              return (
                <span className="journey__word" key={i}>
                  {w.t}
                </span>
              )
            })}
          </div>

          <div className="journey__review">
            <div className="journey__rating">
              <img src="/images/adrianesilva/icon-flower.svg" alt="" />
            </div>
            <div className="journey__review-content">
              <p className="journey__review-label">Protocolos próprios, feitos sob medida.</p>
            </div>
          </div>
        </div>

        <div className="journey__gallery">
          <div className="journey__row">
            <div className="journey__media journey__media--a">
              <img
                src={`/images/adrianesilva/${gallery.a}`}
                alt="Entrada do espaço de atendimento de Adriane Silva Estética"
              />
            </div>
            <div className="journey__media journey__media--b">
              <img
                src={`/images/adrianesilva/${gallery.b}`}
                alt="Sala de atendimento de Adriane Silva Estética"
              />
            </div>
          </div>
          <div className="journey__row">
            <div className="journey__media journey__media--c">
              <img
                src={`/images/adrianesilva/${gallery.c}`}
                alt="Resultado real de cliente após o protocolo Cintura Fina"
              />
            </div>
            <div className="journey__media journey__media--d">
              <img
                src={`/images/adrianesilva/${gallery.d}`}
                alt="Cliente recebendo o presente de boas-vindas no espaço"
              />
            </div>
          </div>
        </div>

        <div className="journey__carousel-wrap">
          <div className="journey__carousel" ref={carouselRef} onScroll={handleScroll}>
            {gallerySlides.map((slide) => (
              <div className="journey__slide" key={slide.key}>
                <img src={`/images/adrianesilva/${slide.src}`} alt={slide.alt} />
              </div>
            ))}
          </div>
          <div className="journey__dots">
            {gallerySlides.map((slide, i) => (
              <span
                key={slide.key}
                className={`journey__dot${i === active ? ' is-active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
