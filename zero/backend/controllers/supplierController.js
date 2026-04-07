// In-memory storage
let suppliers = [];

const addSupplier = (req, res) => {
  const { name, city } = req.body;

  if (!name || !city) {
    return res.status(400).json({ message: "Name and city are required" });
  }

  const newSupplier = {
    id: suppliers.length + 1,
    name,
    city
  };

  suppliers.push(newSupplier);

  res.json(newSupplier);
};

module.exports = { addSupplier, suppliers };