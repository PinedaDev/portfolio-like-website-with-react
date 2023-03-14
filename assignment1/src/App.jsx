import NavBar from './layouts/Navigation/NavBar'
import Hero from './layouts/Hero/Hero'
import Services from './layouts/Services/Services'
import TechStack from './layouts/TechStack/TechStack'
import Blogs from './layouts/Blogs/Blogs'
import Contact from './layouts/Contact/Contact'
import Footer from './layouts/Footer/Footer'
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
