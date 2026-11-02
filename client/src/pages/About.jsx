// About.jsx
// About Me page for the personal portfolio website.
import MyPicture from "../assets/MyPicture.jpg";
function About() {
  return (
    <section className="page about-page">
      <h1>About Me</h1>

      <div className="about-content">
        <div className="about-photo">
          {/* Personal photo will be added here */}
          <div className="photo-container">
            <img src={MyPicture} alt="Personal Photo" />
          </div>
        </div>

        <div className="about-text">
          <h2>Jacques Honoré Wendji</h2>

          <p>
            I am a Software Development student with a strong interest in
            software engineering, web development, artificial intelligence,
            and business technology.
          </p>

          <p>
            I enjoy learning how modern software applications are designed
            and developed. My goal is to continue improving my programming
            and problem-solving skills while building practical software
            solutions.
          </p>

          <p>
            Through my studies and personal projects, I am developing
            experience with technologies such as JavaScript, React, Python,
            Java, databases, and web application development.
          </p>

          <a
            href="/Jacques_Honore_Wendji_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button primary-button"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;