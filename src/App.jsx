import { ScrollProgress } from './components/Effects'
import { Navbar, Hero, Marquee, Stats, Services, Gallery, Packages, Reviews, Contact, Footer } from './components/Sections'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Gallery />
      <Packages />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}
