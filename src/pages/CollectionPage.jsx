import { Link } from "react-router-dom";
import { useCountry } from "../context/CountryContext";

export default function CollectionPage() {
  const { saved } = useCountry(); // hämtar sparade länder från Context

  return (
    <main>
      <h1>Saved Countries</h1>

      {/* Om inga sparade länder */}
      {saved.length === 0 && <p>No saved countries yet.</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px,1fr))",
          gap: 12,
        }}
      >
        {saved.map((c) => (
          <Link
            key={c.name}
            to={`/countries/${encodeURIComponent(c.name)}`}
            style={{
              border: "1px solid #eee",
              padding: 8,
              borderRadius: 8,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {c.flagPng && (
              <img
                src={c.flagPng}
                alt={c.name}
                style={{
                  width: "100%",
                  height: 80,
                  objectFit: "cover",
                  borderRadius: 6,
                }}
              />
            )}
            <div style={{ marginTop: 8, fontWeight: 600 }}>{c.name}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
