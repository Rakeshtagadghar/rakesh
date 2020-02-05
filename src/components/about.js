const About = () => (
  <section id="about" className="s-about target-section">
    <div className="row narrow section-intro has-bottom-sep">
      <div className="col-full text-center">
        <h3>About</h3>
        <h1>Rakesh Tagadghar</h1>
        <p className="lead">I enjoy frontend software programming</p>
      </div>
    </div>

    <div className="row about-content">
      <div className="col-six tab-full left">
        <h3>Howdy!</h3>
        <ul>
          <li>
            <p>Developing new user-facing features using React.js</p>
          </li>
          <li>
            <p>
              Building reusable components and front-end libraries for future
              use.
            </p>
          </li>
          <li>
            <p>
              Optimizing components for maximum performance across a vast array
              of web-capable devices and browsers
            </p>
          </li>
          <li>
            <p>Formik & Yup librabries for forms handling</p>
          </li>
          <li>
            <p>Excellent in developing PWA apps </p>
          </li>
          <li>
            <p>Authentication using Json Webtoken and OAuth2 </p>
          </li>
          <li>
            <p>SEO optimization for apps </p>
          </li>
        </ul>
      </div>

      <div className="col-six tab-full right">
        <h3>I've Got Some skills.</h3>

        <ul className="skill-bars">
          <li>
            <div className="progress percent95">
              <span>95%</span>
            </div>
            <strong>React</strong>
          </li>
          <li>
            <div className="progress percent75">
              <span>75%</span>
            </div>
            <strong>NextJs</strong>
          </li>
          <li>
            <div className="progress percent90">
              <span>90%</span>
            </div>
            <strong>HTML5</strong>
          </li>
          <li>
            <div className="progress percent85">
              <span>85%</span>
            </div>
            <strong>CSS3</strong>
          </li>
          <li>
            <div className="progress percent70">
              <span>70%</span>
            </div>
            <strong>JQuery</strong>
          </li>
          <li>
            <div className="progress percent75">
              <span>75%</span>
            </div>
            <strong>React Native JS</strong>
          </li>
        </ul>
      </div>
    </div>

    <div className="row about-content about-content--buttons">
      <div className="col-six tab-full left">
        <a href="#0" className="btn btn--primary full-width">
          Download My CV
        </a>
      </div>
      <div className="col-six tab-full right">
        <a href="#0" className="btn full-width">
          Hire Me Now
        </a>
      </div>
    </div>

    <div className="row about-content about-content--timeline">
      <div className="col-full text-center">
        <h3>My Work Experience.</h3>
      </div>

     
        <div className="timeline">
          <div className="timeline__block">
            <div className="timeline__bullet"></div>
            <div className="timeline__header">
              <p className="timeline__timeframe">May 2018 - July 2019</p>
              <h3>IEsoft Technologies</h3>
              <h5>Software Engineer</h5>
            </div>
            <div className="timeline__desc">
              <p>
                Worked on various projects from Jquery to ionic framework and
                little bit of ReactJs
              </p>
            </div>
          </div>

          <div className="timeline__block">
            <div className="timeline__bullet"></div>
            <div className="timeline__header">
              <p className="timeline__timeframe">July 2019 - Oct 2019</p>
              <h3>Cashapona Technologies Limited</h3>
              <h5>Software Engineer</h5>
            </div>
            <div className="timeline__desc">
              <p>Worked on FNZ TA project which is written in ReactJs </p>
            </div>
          </div>
        

     
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <p className="timeline__timeframe">Oct 2019 - Present</p>
                <h3>DLTApps UK</h3>
                <h5>Software Engineer</h5>
              </div>
              <div className="timeline__desc">
                <p>
                  Worked on FNZ ChainClear project, The world's first production
                  blockchain ecosystem for the asset management industry
                </p>
              </div>
            </div>
          </div>
        </div>
      
    
  </section>
);

export default About;
