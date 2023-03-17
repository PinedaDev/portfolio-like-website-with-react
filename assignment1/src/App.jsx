import NavBar from './components/NavigationComp/NavBar'
import Hero from './components/HeroComp/Hero'
import Services from './components/HeroComp/Hero'
import TechStack from './components/TechStackComp/TechStack'
import Blogs from './components/BlogsComp/Blogs'
import Contact from './components/ContactComp/Contact'
import Footer from './components/FooterComp/Footer'
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
      <Blogs />
      <hr />
      <Contact />
      <Footer />
    </>
  )
}

export default App
