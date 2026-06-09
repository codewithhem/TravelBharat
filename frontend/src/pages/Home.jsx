import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styless/Home.css";

function Home() {
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetch("https://travelbharat-backend-k7q7.onrender.com/api/states")
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch((err) => console.log(err));
  }, []);

  const featuredStates = states.slice(0, 4);

  const totalPlaces = states.reduce(
    (total, state) => total + (state.places?.length || 0),
    0
  );

  const totalFoods = states.reduce(
    (total, state) => total + (state.food?.length || 0),
    0
  );

  return (
    <>
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Discover Incredible India</h1>
          <p>
            Explore heritage, beaches, mountains, culture and hidden gems
            across India.
          </p>

          <Link to="/states">
            <button>Explore States</button>
          </Link>
        </div>
      </div>

      <section className="popular-section">
        <h2>Popular Destinations</h2>
        <p>Explore some of the most loved places across India.</p>

        <div className="popular-grid">
          {featuredStates.slice(0, 3).map((state) => (
            <div className="popular-card" key={state._id}>
              <img src={state.image} alt={state.name} />
              <h3>{state.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2>Why Choose TravelBharat?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>🏛 Heritage</h3>
            <p>Discover India's rich historical monuments and culture.</p>
          </div>

          <div className="feature-card">
            <h3>🏖 Beaches</h3>
            <p>Explore beautiful beaches from Goa to Andaman.</p>
          </div>

          <div className="feature-card">
            <h3>🏔 Adventure</h3>
            <p>Trek mountains, enjoy snow and thrilling adventures.</p>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured States</h2>
        <p>Start exploring India with these popular states.</p>

        <div className="featured-grid">
          {featuredStates.map((state) => (
            <div className="featured-card" key={state._id}>
              <img src={state.image} alt={state.name} />
              <h3>{state.name}</h3>

              <Link to={`/states/${state._id}`}>
                <button>Explore</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="home-stats">
        <div>
          <h2>{states.length}+</h2>
          <p>Indian States</p>
        </div>

        <div>
          <h2>{totalPlaces}+</h2>
          <p>Tourist Places</p>
        </div>

        <div>
          <h2>{totalFoods}+</h2>
          <p>Local Foods</p>
        </div>
      </section>
    </>
  );
}

export default Home;