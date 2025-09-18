// Enkel API-hjälp för restcountries
const BASE = "https://restcountries.com/v3.1";

// Hämtar alla länder i en region
export async function fetchByRegion(region) {
  const url = `${BASE}/region/${encodeURIComponent(
    region
  )}?fields=name,flags,currencies,population,maps`;
  const res = await fetch(url);
  if (!res.ok) {
    // Feltext på engelska → visas i UI
    throw new Error("Failed to fetch countries");
  }
  return res.json();
}

// Hämtar ett enskilt land via namn (fullText)
export async function fetchByName(name) {
  const url = `${BASE}/name/${encodeURIComponent(
    name
  )}?fullText=true&fields=name,flags,currencies,population,maps`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch country");
  }
  const data = await res.json();
  return data[0]; // första träffen räcker här
}
