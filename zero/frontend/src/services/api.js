const BASE_URL = "https://user-inventory.onrender.com";

export const searchItems = async (params) => {
  const query = new URLSearchParams(params).toString();

  const res = await fetch(`${BASE_URL}/search?${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};