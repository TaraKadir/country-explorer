import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchByName } from "../api";
import { useCountry } from "../context/CountryContext.jsx";

export default function CountryDetailPage() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const { saveCountry } = useCountry();

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

  if (error) return <p style={{ color: "crimson" }}>Error: {error}</p>;
  if (!country) return <p>Loading…</p>;

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

      {flag && <img src={flag} alt={name} className="detail-flag" />}

      <ul className="meta">
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

      <button
        className="btn btn-accent"
        onClick={() => saveCountry({ name, flagPng: flag })}
      >
        Save
      </button>
    </main>
  );
}
