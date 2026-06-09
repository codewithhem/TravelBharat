import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styless/StateDetails.css";
import StateCard from "../components/StateCard";

function StateDetails() {
  const { id } = useParams();

  const [state, setState] = useState(null);
  const [relatedStates, setRelatedStates] = useState([]);

  useEffect(() => {
    fetch(`https://travelbharat-backend-k7q7.onrender.com/api/states/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setState(data);

        fetch("https://travelbharat-backend-k7q7.onrender.com/api/states")
          .then((res) => res.json())
          .then((allStates) => {
            const related = allStates
              .filter(
                (item) =>
                  item.category === data.category &&
                  item._id !== data._id
              )
              .slice(0, 3);

            setRelatedStates(related);
          });
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!state) {
    return <h1 className="not-found">Loading...</h1>;
  }

  return (
    <div className="state-details">
      <Link to="/states" className="back-btn">
        ← Back to States
      </Link>

      <div className="state-hero">
        {state.image ? (
          <img src={state.image} alt={state.name} className="details-image" />
        ) : (
          <div className="details-placeholder">{state.name}</div>
        )}

        <div className="state-hero-content">
          <h1>{state.name}</h1>
          <p>{state.description}</p>
        </div>
      </div>

      <div className="info-box">
        <div>
          <h3>Category</h3>
          <p>{state.category}</p>
        </div>

        <div>
          <h3>Best Time</h3>
          <p>{state.bestTime}</p>
        </div>
      </div>

      <section className="culture-section">
        <h2>Culture</h2>
        <p>{state.culture}</p>
      </section>

      <section className="food-section">
        <h2>Popular Food</h2>

        <div className="food-grid">
          {state.food?.map((food, index) => (
            <div className="food-card" key={index}>
              {food.image ? (
                <img src={food.image} alt={food.name} />
              ) : (
                <div className="food-placeholder">🍽</div>
              )}

              <div className="food-content">
                <h3>{food.name}</h3>
                <p>{food.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="places-section">
        <h2>Famous Places</h2>

        <div className="places-grid">
          {state.places?.map((place, index) => (
            <div className="place-card" key={index}>
              {place.image ? (
                <img src={place.image} alt={place.name} />
              ) : (
                <div className="place-placeholder">📍</div>
              )}

              <div className="place-content">
                <h3>{place.name}</h3>
                <p>{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="related-section">
        <h2>Related States</h2>

        <div className="states-grid">
          {relatedStates.map((item) => (
            <StateCard key={item._id} state={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default StateDetails;