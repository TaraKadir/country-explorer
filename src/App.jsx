import { NavLink, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage.jsx";
import CountriesPage from "./pages/CountriesPage.jsx";
import CountryDetailPage from "./pages/CountryDetailPage.jsx";
import CollectionPage from "./pages/CollectionPage.jsx";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <NavLink className="navlink" to="/" end>
          Start
        </NavLink>
        <NavLink className="navlink" to="/countries">
          Countries
        </NavLink>
        <NavLink className="navlink" to="/collection">
          Collection
        </NavLink>
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
