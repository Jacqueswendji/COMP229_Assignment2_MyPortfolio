// Projects.jsx
// Projects page for the personal portfolio website.

import RestaurantProject from "../assets/RestaurantProject.png";
import JavaEmployeeCalculator from "../assets/JavaEmployeeCalculator.png";
import PythonIntelligentAgent from "../assets/PythonIntelligentAgent.png";

function Projects() {
  return (
    <section className="page projects-page">
      <h1>My Projects</h1>

      <p className="page-introduction">
        Here are some of the software development projects I have worked on
        while developing my programming and problem-solving skills.
      </p>

      <div className="projects-grid">

        <article className="project-card">
          <div className="project-image-placeholder">
            <img src={RestaurantProject} alt="Restaurant Project" />
          </div>

          <h2>The Progress Restaurant Website</h2>

          <p>
            <p>
               My role was to design and develop a restaurant website using HTML,
               CSS, and JavaScript. I created pages for navigation, menu information,
               ordering, location, and contact information. The outcome was a
               functional multi-page restaurant website with an organized and
               user-friendly interface.
            </p>
          </p>

          <p>
            <strong>Technologies:</strong> HTML, CSS, JavaScript
          </p>
        </article>

        <article className="project-card">
          <div className="project-image-placeholder">
            <img src={JavaEmployeeCalculator} alt="Java Employee Calculator" />
          </div>

          <h2>Java Employee Calculator</h2>

          <p>
            <p>
              My role was to develop and test a Java application using
              object-oriented programming concepts. I implemented salary
              calculations, methods, arrays, and method overloading. The final
              application successfully calculates the average employee salary,
              employee bonuses, and the total number of employees.
            </p>
          </p>

          <p>
            <strong>Technologies:</strong> Java, Eclipse
          </p>
        </article>

        <article className="project-card">
          <div className="project-image-placeholder">
            <img src={PythonIntelligentAgent} alt="Python Intelligent Agent" />
          </div>

          <h2>Python Intelligent Agent</h2>

        <p>
          My role was to modify and test a simple reflex agent in Python.
          I added people and food to the environment and implemented behavior
          that allows the agent to move, eat, drink, and bark when it encounters
          a person. The final program successfully performed the expected actions
          during an 18-step simulation.
        </p>

<p>
  <strong>Technologies:</strong> Python
</p>
        </article>

      </div>
    </section>
  );
}

export default Projects;