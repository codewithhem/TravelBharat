import "../styless/SearchBar.css";

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search states..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-box"
    />
  );
}

export default SearchBar;