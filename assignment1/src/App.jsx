import NavBar from './layouts/navigation/NavBar'
import Hero from './layouts/hero/Hero'
// import Services from './components/services_comp/Services'
// import TechStack from './components/tech-stack_comp/TechStack'
// import Blogs from './components/blogs_comp/Blogs'
// import Contact from './components/contact_comp/Contact'
// import Footer from './components/footer/Footer'
import './scss/main.scss'

const App = () => {
  return (
    <>
      <NavBar />
      <hr />
      <Hero />
      {/* 
      <hr />
      <Services />
      <TechStack />
      <Blogs />
      <hr />
      <Contact />
      <Footer /> */}
    </>
  )
}

export default App
