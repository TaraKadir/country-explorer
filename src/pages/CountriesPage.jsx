import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchByRegion } from "../api";

const REGIONS = ["Europe", "Asia", "Oceania", "Americas", "Africa"];

export default function CountriesPage() {
  const [region, setRegion] = useState("Europe");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchByRegion(region);
      data.sort((a, b) => a.name.common.localeCompare(b.name.common));
      setCountries(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    load();
  }, [region]);

  return (
    <main>
      <h1>Countries — {region}</h1>

      <div className="controls">
        <select
          className="select"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          {REGIONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <button className="btn" onClick={load}>
          Select
        </button>
      </div>

      {loading && <p>Loading…</p>}
      {error && <p style={{ color: "crimson" }}>Error: {error}</p>}

      <div className="grid">
        {countries.map((c) => (
          <Link
            key={c.name.common}
            to={`/countries/${encodeURIComponent(c.name.common)}`}
            className="card"
          >
            <img src={c.flags.png} alt={c.name.common} className="flag" />
            <div className="card-title">{c.name.common}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
