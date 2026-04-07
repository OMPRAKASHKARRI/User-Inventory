const db = require("../db");

const addInventory = (req, res) => {
  const { supplier_id, product_name, quantity, price } = req.body;

  if (quantity < 0 || price <= 0) {
    return res.status(400).json({ message: "Invalid data" });
  }

  db.get(
    "SELECT * FROM suppliers WHERE id = ?",
    [supplier_id],
    (err, supplier) => {
      if (!supplier) {
        return res.status(400).json({ message: "Supplier not found" });
      }

      db.run(
        `INSERT INTO inventory (supplier_id, product_name, quantity, price)
         VALUES (?, ?, ?, ?)`,
        [supplier_id, product_name, quantity, price],
        function (err) {
          if (err) return res.status(500).json(err);
          res.json({ id: this.lastID });
        }
      );
    }
  );
};

const getInventorySummary = (req, res) => {
  const query = `
    SELECT s.name, SUM(i.quantity * i.price) as total_value
    FROM suppliers s
    JOIN inventory i ON s.id = i.supplier_id
    GROUP BY s.id
    ORDER BY total_value DESC
  `;

  db.all(query, [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

module.exports = { addInventory, getInventorySummary };