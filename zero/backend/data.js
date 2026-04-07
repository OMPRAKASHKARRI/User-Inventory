const categories = ["Electronics", "Furniture", "Fashion"];

const inventory = [];

for (let i = 1; i <= 100; i++) {
  const category = categories[i % 3];

  inventory.push({
    id: i,
    name: `${category} Item ${i}`,
    category,
    price: Math.floor(Math.random() * 50000) + 500
  });
}

module.exports = inventory;