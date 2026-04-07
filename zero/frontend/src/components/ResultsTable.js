function ResultsTable({ results }) {
  if (results.length === 0) {
    return (
      <p style={{ textAlign: "center", padding: "20px" }}>
        No results found 😕
      </p>
    );
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: "0 10px"
      }}>
        <thead>
          <tr style={{
            textAlign: "left",
            color: "#6b7280",
            fontSize: "14px"
          }}>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Price</th>
          </tr>
        </thead>

        <tbody>
          {results.map((item) => (
            <tr
              key={item.id}
              style={{
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                borderRadius: "10px",
                transition: "0.2s"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.01)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <td style={tdStyle}>{item.name}</td>
              <td style={tdStyle}>{item.category}</td>
              <td style={{ ...tdStyle, fontWeight: "600", color: "#4f46e5" }}>
                ₹{item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: "10px 15px"
};

const tdStyle = {
  padding: "15px"
};

export default ResultsTable;