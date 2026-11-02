// Home.jsx
// Home page of the personal portfolio website.

import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="page home-page">
      <div className="hero">
        <p className="eyebrow">Welcome to my portfolio</p>

        <h1>Jacques Honoré Wendji</h1>

        <h2>Software Development Student</h2>

        <p className="hero-text">
          Welcome to my personal portfolio. This website presents my
          background, education, projects, services, and contact information.
        </p>

        <div className="mission">
          <h3>My Mission</h3>
          <p>
            My mission is to continue developing my software development
            skills and use technology to create practical, reliable, and
            useful solutions.
          </p>
        </div>

        <div className="hero-buttons">
          <Link to="/about" className="button primary-button">
            About Me
          </Link>

          <Link to="/projects" className="button secondary-button">
            View My Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;