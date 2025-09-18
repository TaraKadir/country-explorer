import { Link } from "react-router-dom";
export default function StartPage() {
  const btn = {
    display: "block",
    margin: "12px 0",
    padding: "10px 14px",
    border: "1px solid #ccc",
    borderRadius: 8,
    width: 220,
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <main>
      <h1>Country Explorer</h1>
      <Link style={btn} to="/countries">
        Study countries
      </Link>
      <Link style={btn} to="/collection">
        Collection
      </Link>
      <Link style={btn} to="/quiz">
        Quiz (VG)
      </Link>
      <Link style={btn} to="/leaderboard">
        Leaderboard (VG)
      </Link>
    </main>
  );
}
