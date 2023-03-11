import Hero from './components/hero_comp/Hero'
import NavBar from './components/navigation_comp/NavBar'
import Services from './components/services_comp/Services'
import TechStack from './components/tech-stack_comp/TechStack'
import './scss/main.scss'

const App = () => {
  return (
    <>
      <NavBar />
      <hr />
      <Hero />
      <hr />
      <Services />
      <TechStack />
    </>
  )
}

export default App
