import { useState } from "react";
import { searchItems } from "../services/api";

import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ResultsTable from "../components/ResultsTable";
import Loader from "../components/Loader";

function SearchPage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await searchItems({
        q,
        category,
        minPrice,
        maxPrice,
      });

      setResults(data);
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      padding: "40px",
      fontFamily: "Inter, sans-serif",
      background: "#f5f7fb",
      minHeight: "100vh"
    }}>
      <h1 style={{ marginBottom: "20px" }}>
        Inventory Search 🔍
      </h1>

      {/* Search Card */}
      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        marginBottom: "20px"
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <SearchBar q={q} setQ={setQ} onSearch={handleSearch} />

          <Filters
            category={category}
            setCategory={setCategory}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />
        </div>
      </div>

      {/* Results Card */}
      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
      }}>
        {loading && <Loader />}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && <ResultsTable results={results} />}
      </div>
    </div>
  );
}

export default SearchPage;