const Search = ({ search, handleSearchChange }) => {
  return (
    <div className="search">
      <h1>😎 EmojiSearch 😎</h1>
      <input
        type="text"
        placeholder="What emoji are you looking for ?"
        name="search"
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
