import { Link } from "react-router-dom";
import { useCountry } from "../context/CountryContext";

export default function CollectionPage() {
  const { saved } = useCountry();

  return (
    <main>
      <h1>Saved Countries</h1>

      {saved.length === 0 && <p className="empty">No saved countries yet.</p>}

      <div className="grid">
        {saved.map((c) => (
          <Link
            key={c.name}
            to={`/countries/${encodeURIComponent(c.name)}`}
            className="card"
          >
            {c.flagPng && <img src={c.flagPng} alt={c.name} className="flag" />}
            <div className="card-title">{c.name}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
