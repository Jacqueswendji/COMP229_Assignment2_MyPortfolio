// Services.jsx
// Services page for the personal portfolio website.

function Services() {
  return (
    <section className="page services-page">
      <h1>Services</h1>

      <p className="page-introduction">
        I am developing skills in software and web development that allow
        me to create practical technology solutions.
      </p>

      <div className="services-grid">
        <article className="service-card">
          <h2>Web Development</h2>

          <p>
            Development of responsive and user-friendly websites using
            modern web technologies.
          </p>

          <p>
            <strong>Technologies:</strong> HTML, CSS, JavaScript, React
          </p>
        </article>

        <article className="service-card">
          <h2>Software Development</h2>

          <p>
            Development of software applications using programming,
            object-oriented design, and problem-solving techniques.
          </p>

          <p>
            <strong>Technologies:</strong> Java, Python
          </p>
        </article>

        <article className="service-card">
          <h2>Application Development</h2>

          <p>
            Design and development of practical applications while
            continuing to expand my knowledge of software engineering
            and modern development practices.
          </p>

          <p>
            <strong>Focus:</strong> Web Applications, Databases,
            Software Design
          </p>
        </article>
      </div>
    </section>
  );
}

export default Services;