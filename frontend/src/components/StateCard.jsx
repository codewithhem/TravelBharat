import { Link } from "react-router-dom";

function StateCard({ state }) {
  return (
    <div className="state-card">
      {state.image ? (
        <img src={state.image} alt={state.name} className="state-image" />
      ) : (
        <div className="image-placeholder">
          {state.name}
        </div>
      )}

      <h2>{state.name}</h2>
      <p>{state.category}</p>
      

      <Link to={`/state/${state._id}`}>
        <button>Explore</button>
      </Link>
    </div>
  );
}

export default StateCard;