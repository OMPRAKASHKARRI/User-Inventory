const inventory = require("../data");

const searchItems = (req, res) => {
  let { q, category, minPrice, maxPrice } = req.query;

  let results = inventory;
  if (q) {
    results = results.filter(item =>
      item.name.toLowerCase().includes(q.toLowerCase())
    );
  }
  if (category) {
    results = results.filter(item =>
      item.category.toLowerCase() === category.toLowerCase()
    );
  }
  if (minPrice) {
    results = results.filter(item => item.price >= Number(minPrice));
  }

  if (maxPrice) {
    results = results.filter(item => item.price <= Number(maxPrice));
  }
  if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
    return res.status(400).json({ message: "Invalid price range" });
  }

  res.json(results);
};

module.exports = { searchItems };