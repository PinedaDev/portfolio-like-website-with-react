import Hero from './components/hero_comp/Hero'
import NavBar from './components/navigation_comp/NavBar'
import Services from './components/services_comp/Services'
import TechStack from './components/tech-stack_comp/TechStack'
import Blogs from './components/blogs_comp/Blogs'
import './scss/main.scss'
import Contact from './components/contact_comp/Contact'

const App = () => {
  return (
    <>
      <NavBar />
      <hr />
      <Hero />
      <hr />
      <Services />
      <TechStack />
      <Blogs />
      <hr />
      <Contact />
    </>
  )
}

export default App
