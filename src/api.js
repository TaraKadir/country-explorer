const BASE = "https://restcountries.com/v3.1";

export async function fetchByRegion(region) {
  const url = `${BASE}/region/${encodeURIComponent(
    region
  )}?fields=name,flags,currencies,population,maps`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }
  return res.json();
}

export async function fetchByName(name) {
  const url = `${BASE}/name/${encodeURIComponent(
    name
  )}?fullText=true&fields=name,flags,currencies,population,maps`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch country");
  }
  const data = await res.json();
  return data[0];
}
