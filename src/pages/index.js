import Header from '../components/header';
import Footer from '../components/footer';
import Home from '../components/home';
import About from '../components/about';
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
    <Blog />
    <Cta />
    <Stats />
    <Contact />
    <Footer />
    </>
    )
}
  
  export default HomePage