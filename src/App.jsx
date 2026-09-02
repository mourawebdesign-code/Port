import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkinJourney from './components/SkinJourney'
import Treatments from './components/Treatments'
import About from './components/About'

export default function App() {
  /* Reference behaviour: the hero blocks animate on load, everything else on enter. */
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.reveal'))
    const inHero = (el) => !!el.closest('.hero')

    /* requestAnimationFrame is throttled to near-zero in background tabs
       (e.g. a link opened in a new tab the user hasn't switched to yet),
       which would leave the hero stuck at opacity 0 until they tab over.
       setTimeout keeps firing regardless of tab visibility. */
    const timer = setTimeout(() => {
      nodes.filter(inHero).forEach((el) => el.classList.add('is-in'))
    }, 50)

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0 }
    )
    const watched = nodes.filter((el) => !inHero(el))
    watched.forEach((el) => io.observe(el))

    /* Safety net: a very fast scroll (fling, keyboard End, a huge wheel
       jump) can move an element from "below the fold" to "above the fold"
       between two rendered frames without IntersectionObserver ever
       reporting it as intersecting, leaving it stuck at opacity 0.001
       forever. On every scroll/resize, force-reveal anything whose top has
       already reached the viewport, regardless of whether IO caught it. */
    let ticking = false
    const sweep = () => {
      ticking = false
      const vh = window.innerHeight
      watched.forEach((el) => {
        if (el.classList.contains('is-in')) return
        if (el.getBoundingClientRect().top <= vh) {
          el.classList.add('is-in')
          io.unobserve(el)
        }
      })
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(sweep)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    sweep()

    return () => {
      clearTimeout(timer)
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkinJourney />
        <Treatments />
        <About />
      </main>
    </>
  )
}
