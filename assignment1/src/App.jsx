import NavBar from './layouts/navigation/NavBar'
import Hero from './layouts/hero/Hero'
import Services from './layouts/services/Services'
import TechStack from './layouts/tech-stack/TechStack'
import Blogs from './layouts/blogs/Blogs'
// import Contact from './components/contact_comp/Contact'
// import Footer from './components/footer/Footer'
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
      {/* 
      <hr />
      <Contact />
      <Footer /> */}
    </>
  )
}

export default App
