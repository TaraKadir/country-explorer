import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchByName } from "../api";

export default function CountryDetailPage() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  // laddar landet från API varje gång countryName ändras
  useEffect(() => {
    async function run() {
      try {
        setError(null);
        const data = await fetchByName(countryName);
        setCountry(data);
      } catch (e) {
        setError(e.message);
      }
    }
    run();
  }, [countryName]);

  // felhantering
  if (error) return <p style={{ color: "crimson" }}>Error: {error}</p>;
  if (!country) return <p>Loading…</p>;

  // plocka ut värden från API
  const name = country.name?.common ?? countryName;
  const flag = country.flags?.png;
  const currency = country.currencies
    ? Object.keys(country.currencies).join(", ")
    : "-";
  const population = country.population?.toLocaleString?.() ?? "-";
  const mapUrl = country.maps?.googleMaps;

  return (
    <main>
      <h1>{name}</h1>

      {flag && (
        <img
          src={flag}
          alt={name}
          style={{ width: 240, borderRadius: 8, marginBottom: 16 }}
        />
      )}

      <ul style={{ lineHeight: 1.8 }}>
        <li>
          <strong>Currency:</strong> {currency}
        </li>
        <li>
          <strong>Population:</strong> {population}
        </li>
        <li>
          <strong>Location:</strong>{" "}
          {mapUrl ? (
            <a href={mapUrl} target="_blank" rel="noreferrer">
              Google Maps
            </a>
          ) : (
            "-"
          )}
        </li>
      </ul>

      {/* Save-knapp – kommer implementeras senare */}
      <button
        disabled
        style={{ padding: "10px 16px", borderRadius: 8, opacity: 0.6 }}
      >
        Save (coming soon)
      </button>
    </main>
  );
}
