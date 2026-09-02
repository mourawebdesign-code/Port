import { useEffect, useState } from 'react'
import { CONTACT } from '../data'
import './Navbar.css'

const LINKS = [
  { label: 'Início', href: '#top' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: CONTACT.whatsappHref, external: true },
]

function NavLinks({ active, onNavigate }) {
  return (
    <>
      {LINKS.map((l, i) => (
        <a
          key={l.label}
          href={l.href}
          className={`nav__link${i === active ? ' is-active' : ''}`}
          target={l.external ? '_blank' : undefined}
          rel={l.external ? 'noopener noreferrer' : undefined}
          onClick={onNavigate}
        >
          {l.label}
        </a>
      ))}
    </>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => window.innerWidth > 809 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="nav-sticky" id="top">
      <header className="nav">
        <nav className="nav__container">
          <div className="nav__links">
            <div className="nav__links-inner">
              <NavLinks active={0} />
            </div>
          </div>

          <div className="nav__logo">
            <a href="#top">
              <img
                src="/images/espaco-delas/logo-espaco-delas.png"
                alt="Espaço Delas — Andreza Lima"
                width="172"
                height="57"
              />
            </a>
          </div>

          <div className="nav__actions">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon nav__cta"
            >
              <span className="btn-icon__box">
                <img src="/images/espaco-delas/icon-nav-star.svg" alt="" />
              </span>
              <span className="btn-icon__label">
                <span className="nav__cta-full">Agende sua avaliação</span>
                <span className="nav__cta-short">Agendar</span>
              </span>
            </a>
            <button
              className={`nav__burger${open ? ' is-open' : ''}`}
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="nav__burger-bar nav__burger-bar--top" />
              <span className="nav__burger-bar nav__burger-bar--bottom" />
            </button>
          </div>

          <div className={`nav__panel${open ? ' is-open' : ''}`}>
            <div className="nav__panel-inner">
              <NavLinks active={0} onNavigate={() => setOpen(false)} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
