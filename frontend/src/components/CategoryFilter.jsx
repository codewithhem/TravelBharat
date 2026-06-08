import "../styless/CategoryFilter.css";

function CategoryFilter({ setCategory }) {
  return (
    <div className="filter-buttons">
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Heritage")}>Heritage</button>
      <button onClick={() => setCategory("Beach")}>Beach</button>
      <button onClick={() => setCategory("Nature")}>Nature</button>
      <button onClick={() => setCategory("Adventure")}>Adventure</button>
    </div>
  );
}

export default CategoryFilter;