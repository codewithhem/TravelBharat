import { useState, useEffect } from "react";
import StateCard from "../components/StateCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import "../styless/States.css";

function States() {
  const [statesData, setStatesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  
  useEffect(() => {
  fetch("http://localhost:5000/api/states")
    .then((res) => res.json())
    .then((data) => {
      setStatesData(data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
}, []);

  const filteredStates = statesData.filter((state) => {
    const matchSearch = state.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || state.category === category;

    return matchSearch && matchCategory;
  });

  const totalPlaces = statesData.reduce(
    (total, state) => total + (state.places?.length || 0),
    0
  );

  const totalFoods = statesData.reduce(
    (total, state) => total + (state.food?.length || 0),
    0
  );
    if (loading) {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <h2>Loading TravelBharat...</h2>
    </div>
  );
}

  return (
    <div className="states-page">
      <h1 className="states-title">Explore Indian States</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      <div className="states-grid">
        {filteredStates.length > 0 ? (
          filteredStates.map((state) => (
            <StateCard key={state._id} state={state} />
          ))
        ) : (
          <h2 className="no-result">No States Found</h2>
        )}
      </div>

      <div className="stats">
        <div className="stat-box">
          <h2>{statesData.length}+</h2>
          <p>States</p>
        </div>

        <div className="stat-box">
          <h2>{totalPlaces}+</h2>
          <p>Tourist Places</p>
        </div>

        <div className="stat-box">
          <h2>{totalFoods}+</h2>
          <p>Popular Foods</p>
        </div>
      </div>
    </div>
  );
}

export default States;