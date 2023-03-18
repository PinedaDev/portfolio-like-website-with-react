import NavBar from './components/NavigationComp/NavBar';
import Hero from './components/HeroComp/Hero';
import Services from './components/ServicesComp/Services';

import './scss/main.scss'

const App = () => {
  return (
    <>
      <NavBar />
      <hr />
      <Hero />
      <Services />
    </>
  )
}

export default App

  // < NavBar />
  //     <hr />
  //     
  //     <TechStack />
  //     <Blogs />
  //     <hr />
  //     <Contact />
  //     <Footer />