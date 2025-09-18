import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchByRegion } from "../api";

// Lista med regioner som användaren kan välja
const REGIONS = ["Europe", "Asia", "Oceania", "Americas", "Africa"];

export default function CountriesPage() {
  // state för region, laddning, fel och länder
  const [region, setRegion] = useState("Europe");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  // funktion för att hämta länder från API
  async function load() {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchByRegion(region);
      // sortera alfabetiskt på namn
      data.sort((a, b) => a.name.common.localeCompare(b.name.common));
      setCountries(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  // körs varje gång region ändras
  useEffect(() => {
    load();
  }, [region]);

  return (
    <main>
      <h1>Countries — {region}</h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          {REGIONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <button onClick={load}>Select</button>
      </div>

      {loading && <p>Loading…</p>}
      {error && <p style={{ color: "crimson" }}>Error: {error}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px,1fr))",
          gap: 12,
        }}
      >
        {countries.map((c) => (
          <Link
            key={c.name.common}
            to={`/countries/${encodeURIComponent(c.name.common)}`}
            style={{
              border: "1px solid #eee",
              padding: 8,
              borderRadius: 8,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img
              src={c.flags.png}
              alt={c.name.common}
              style={{
                width: "100%",
                height: 80,
                objectFit: "cover",
                borderRadius: 6,
              }}
            />
            <div style={{ marginTop: 8, fontWeight: 600 }}>{c.name.common}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
