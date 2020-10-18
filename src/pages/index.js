import Header from '../components/header';
import Footer from '../components/footer';
import Home from '../components/home';
import About from '../components/about';
import Blog from '../components/blog';
import Cta from '../components/cta';
import Stats from '../components/stats';
import Contact from '../components/contact';
// import { initGA, logPageView } from '../utils/analytics'
// import { useEffect } from 'react';


function HomePage() {

  // useEffect(() => {
  //   if (!window.GA_INITIALIZED) {
  //     initGA()
  //     window.GA_INITIALIZED = true
  //   }
  //   logPageView()
  // }, [])
    return (
    <>
    <Header />
    <Home />
    <About />
    {/* <Blog /> */}
    {/* <Cta /> */}
    {/* <Stats /> */}
    <Contact />
    <Footer />
    </>
    )
}
  
  export default HomePage