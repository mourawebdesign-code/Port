import { useRef, useState } from 'react'
import { gallery, journeyWords } from '../data'
import './SkinJourney.css'

const galleryAlts = {
  a: 'Sessão de ventosaterapia no Espaço Delas',
  b: 'Massagem modeladora sendo aplicada nas pernas no Espaço Delas',
  c: 'Detalhe do resultado Delas Sculpt Touch',
  d: 'Antes e depois de tratamento facial no Espaço Delas',
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
                    <img src={`/images/espaco-delas/${w.img}`} alt="" />
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
              <img src="/images/espaco-delas/icon-flower.svg" alt="" />
            </div>
            <div className="journey__review-content">
              <p className="journey__review-label">Resultados que você pode ver.</p>
            </div>
          </div>
        </div>

        <div className="journey__gallery">
          <div className="journey__row">
            <div className="journey__media journey__media--a">
              <img
                src={`/images/espaco-delas/${gallery.a}`}
                alt="Sessão de ventosaterapia no Espaço Delas"
              />
            </div>
            <div className="journey__media journey__media--b">
              <img
                src={`/images/espaco-delas/${gallery.b}`}
                alt="Massagem modeladora sendo aplicada nas pernas no Espaço Delas"
              />
            </div>
          </div>
          <div className="journey__row">
            <div className="journey__media journey__media--c">
              <img
                src={`/images/espaco-delas/${gallery.c}`}
                alt="Detalhe do resultado Delas Sculpt Touch"
              />
            </div>
            <div className="journey__media journey__media--d">
              <img
                src={`/images/espaco-delas/${gallery.d}`}
                alt="Antes e depois de tratamento facial no Espaço Delas"
              />
            </div>
          </div>
        </div>

        <div className="journey__carousel-wrap">
          <div className="journey__carousel" ref={carouselRef} onScroll={handleScroll}>
            {gallerySlides.map((slide) => (
              <div className="journey__slide" key={slide.key}>
                <img src={`/images/espaco-delas/${slide.src}`} alt={slide.alt} />
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
