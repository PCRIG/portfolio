import "./homePage.css";

const emailIcon = require("../../asserts/icons/emailIcon.svg").default;
const linkedInIcon = require("../../asserts/icons/linkedInIcon.svg").default;
const githubIcon = require("../../asserts/icons/githubIcon.svg").default;

const html5Icon = require("../../asserts/icons/html5.svg").default;
const cssIcon = require("../../asserts/icons/css.svg").default;
const jsIcon = require("../../asserts/icons/js.svg").default;
const reactIcon = require("../../asserts/icons/react.svg").default;
const nodeJsIcon = require("../../asserts/icons/nodeJs.svg").default;

const HomePage = () => {
  return (
    <>
      <nav id="navBar">
        <p>PCRIG</p>
        <ul id="navList">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Venture</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main>
        <section id="homeSection">
          <div id="homeDiv">
            <div id="homeAboutContainer">
              <div id="homeAboutContent">
                <h1>Full-Stack Developer</h1>
                <span>
                  Hi, I'm Venubalan T. A passionate Full-Stack Developer based
                  in Tamilnadu, India. 📍
                </span>
                <div id="profileSocialIconDiv">
                  <img src={emailIcon} alt="gitHub icon" />
                  <img src={linkedInIcon} alt="gitHub icon" />
                  <img src={githubIcon} alt="gitHub icon" />
                </div>
              </div>
              <div id="homeProfileImgDiv"></div>
            </div>
            <div id="homeTechStackContainer">
              <span>Tech Stack</span>
              <ul id="techStackList">
                <li>
                  <img src={html5Icon} alt="Html5" />
                </li>
                <li>
                  <img src={cssIcon} alt="CSS" />
                </li>
                <li>
                  <img src={jsIcon} alt="JavaScript" />
                </li>
                <li>
                  <img src={reactIcon} alt="ReactJs" />
                </li>
                <li>
                  <img src={nodeJsIcon} alt="nodejs" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="aboutSection">
          <div id="">img sec</div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
