import "./App.css";
import Search from "./components/Search";
import { useState } from "react";
import data from "./assets/data.json";
import Line from "./components/Line";

function App() {
  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  const regex = new RegExp(search, "i");
  console.log(regex);
  const results = [];
  data.map((elem) => {
    if (!search) return null;
    const addInTab = regex.test(elem.keywords);
    if (addInTab) {
      results.push([elem.symbol, elem.title]);
    }
    return results;
  });
  console.log(results);
  return (
    <div className="container">
      <Search search={search} handleSearchChange={handleSearchChange} />
      <Line results={results} />
    </div>
  );
}

export default App;
