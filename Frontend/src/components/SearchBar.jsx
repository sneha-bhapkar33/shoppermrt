export default function SearchBar({ searchText, onSearchChange }) {
  return (
    <label className="search-bar">
      <span>Search products</span>
      <input
        type="search"
        placeholder="Try mascara, laptop, or beauty…"
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </label>
  );
}
