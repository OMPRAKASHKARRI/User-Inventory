function SearchBar({ q, setQ, onSearch }) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <input
  type="text"
  placeholder="Search product..."
  value={q}
  onChange={(e) => setQ(e.target.value)}
  style={{
    flex: 1,
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    outline: "none",
    background: "#ffffff",   // 🔥 important
    color: "#111827"         // 🔥 text color (dark)
  }}
/>

      <button
        onClick={onSearch}
        style={{
          padding: "12px 20px",
          background: "#4f46e5",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "500"
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;