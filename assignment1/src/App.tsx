import NavBar from './components/NavigationComp/NavBar';
import Hero from './components/HeroComp/Hero';
import Services from './components/ServicesComp/Services';
import TechStack from './components/TechStackComp/TechStack';
import Blogs from './components/BlogsComp/Blogs';

import './scss/main.scss'

const App = () => {
  return (
    <>
      <NavBar />
      <hr />
      <Hero />
      <Services />
      <TechStack />
      <Blogs />
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