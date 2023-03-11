import Hero from './components/hero_comp/Hero'
import NavBar from './components/navigation_comp/NavBar'
import Services from './components/services_comp/Services'
import './scss/main.scss'

const App = () => {
  return (
    <>
      <NavBar />
      <hr />
      <Hero />
      <hr />
      <Services />
    </>
  )
}

export default App
