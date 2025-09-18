import { Link, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage.jsx";
import CountriesPage from "./pages/CountriesPage.jsx";
import CountryDetailPage from "./pages/CountryDetailPage.jsx";
import CollectionPage from "./pages/CollectionPage.jsx";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "system-ui",
        maxWidth: 900,
        margin: "0 auto",
        padding: 16,
      }}
    >
      <header style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        <Link to="/">Start</Link>
        <Link to="/countries">Countries</Link>
        <Link to="/collection">Collection</Link>
      </header>

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/countries/:countryName" element={<CountryDetailPage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </div>
  );
}
