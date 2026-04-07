// In-memory storage
let inventory = [];

const { suppliers } = require("./supplierController");

const addInventory = (req, res) => {
  const { supplier_id, product_name, quantity, price } = req.body;

  // validation
  if (quantity < 0 || price <= 0) {
    return res.status(400).json({ message: "Invalid data" });
  }

  // check supplier exists
  const supplierExists = suppliers.find(
    (s) => s.id === Number(supplier_id)
  );

  if (!supplierExists) {
    return res.status(400).json({ message: "Supplier not found" });
  }

  const newItem = {
    id: inventory.length + 1,
    supplier_id: Number(supplier_id),
    product_name,
    quantity,
    price
  };

  inventory.push(newItem);

  res.json(newItem);
};

const getInventorySummary = (req, res) => {
  const result = {};

  inventory.forEach((item) => {
    if (!result[item.supplier_id]) {
      result[item.supplier_id] = 0;
    }

    result[item.supplier_id] += item.quantity * item.price;
  });

  // convert to array with supplier name
  const response = Object.keys(result).map((id) => {
    const supplier = suppliers.find((s) => s.id === Number(id));

    return {
      supplier_name: supplier ? supplier.name : "Unknown",
      total_value: result[id]
    };
  });

  // sort descending
  response.sort((a, b) => b.total_value - a.total_value);

  res.json(response);
};

module.exports = { addInventory, getInventorySummary };