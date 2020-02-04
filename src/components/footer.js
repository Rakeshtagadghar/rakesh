const Footer = () => (
    <footer>
        <div className="row">
            <div className="col-full">

                <div className="footer-logo">
                    <a className="footer-site-logo" href="#0"><img src="/images/logo.png" alt="Homepage" /></a>
                </div>

                <ul className="footer-social">
                    <li><a href="#0">
                        <i className="im im-facebook" aria-hidden="true" aria-label="facebook"></i>
                        <span>Facebook</span>
                    </a></li>
                    <li><a href="#0">
                        <i className="im im-twitter" aria-hidden="true" aria-label="twitter"></i>
                        <span>Twitter</span>
                    </a></li>
                    <li><a href="#0">
                        <i className="im im-instagram" aria-hidden="true" aria-label="instagram"></i>
                        <span>Instagram</span>
                    </a></li>
                    <li><a href="#0">
                        <i className="im im-behance" aria-hidden="true" aria-label="behance"></i>
                        <span>Behance</span>
                    </a></li>
                    <li><a href="#0">
                        <i className="im im-pinterest" aria-hidden="true" aria-label="pinterest"></i>
                        <span>Pinterest</span>
                    </a></li>
                </ul>
                    
            </div>
        </div>

        <div className="row footer-bottom">

            <div className="col-twelve">
                <div className="copyright">
                    <span>© Copyright Hola 2017</span> 
                    <span>Design by <a href="https://www.styleshout.com/">styleshout</a></span>	
                </div>

                <div className="go-top">
                <a className="smoothscroll" title="Back to Top" href="#top"><i className="im im-arrow-up" aria-hidden="true"></i></a>
                </div>
            </div>

        </div>

    </footer>
)

export default Footer