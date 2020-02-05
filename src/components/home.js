const Home = () => (
    <section 
    id="home" 
    className="s-home page-hero target-section" 
    style={{backgroundImage: "url('/images/laptop.webp')"}}
    >
<div className="overlay"></div>
<div className="shadow-overlay"></div>

<div className="home-content">

    <div className="row home-content__main">

        <h3>Hello There</h3>

        <h1>
            I am Rakesh Tagadghar. <br />
            I am a ReactJS Developer.
        </h1>

        <div className="home-content__buttons">
            <a href="#works" className="smoothscroll btn btn--stroke">
                Latest Projects
            </a>
            <a href="#about" className="smoothscroll btn btn--stroke">
                More About Me
            </a>
        </div>

        <div className="home-content__scroll">
            <a href="#about" className="scroll-link smoothscroll">
                <span>Scroll Down</span>
            </a>
        </div>

    </div>

</div>

<ul className="home-social">
    <li>
        <a aria-label="facebook" href="https://www.facebook.com/Rakeshdrocka"><i className="im im-facebook" aria-hidden="true"></i><span>Facebook</span></a>
    </li>
    <li>
        <a aria-label="facebook" href="#"><i className="im im-twitter" aria-hidden="true"></i><span>Twitter</span></a>
    </li>
    <li>
        <a aria-label="instagram" href="#"><i className="im im-instagram" aria-hidden="true"></i><span>Instagram</span></a>
    </li>
    <li>
        <a aria-label="behance" href="#"><i className="im im-behance" aria-hidden="true"></i><span>Behance</span></a>
    </li>
    <li>
        <a aria-label="pinterest" href="#"><i className="im im-pinterest" aria-hidden="true"></i><span>Pinterest</span></a>
    </li>
</ul> 

</section>
)

export default Home;