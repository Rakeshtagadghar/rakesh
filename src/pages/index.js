import Header from '../components/header';
import Footer from '../components/footer';
import Home from '../components/home';
import About from '../components/about';
import Works from '../components/works';
import Testimonials from '../components/testimonials';
import Blog from '../components/blog';
import Cta from '../components/cta';
import Stats from '../components/stats';
import Contact from '../components/contact';

function HomePage() {
    return (
    <>
    <Header />
    <Home />
    <About />
    <Works />
    <Testimonials />
    <Blog />
    <Cta />
    <Stats />
    <Contact />
    <Footer />
  
    </>
    )
}
  
  export default HomePage