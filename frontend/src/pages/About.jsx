import "../styless/About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1 className="about-title">About TravelBharat</h1>
        <p>
          TravelBharat is a centralized tourism information platform that helps
          users explore India state-wise and city-wise with details about places,
         food, culture, heritage and best time to visit.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <h2>🎯 Mission</h2>
          <p>To make Indian tourism information simple, structured and easy to explore.</p>
        </div>

        <div className="about-card">
          <h2>🧭 What We Provide</h2>
          <p>State details, famous places, local food, culture, images and travel insights.</p>
        </div>

        <div className="about-card">
          <h2>🌍 Useful For</h2>
          <p>Travelers, students, researchers and anyone who wants to discover India.</p>
        </div>
      </section>
    </div>
  );
}

export default About;