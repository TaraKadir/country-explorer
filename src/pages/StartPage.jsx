import { Link } from "react-router-dom";

export default function StartPage() {
  return (
    <main className="stack">
      <h1>Country Explorer</h1>
      <div className="actions">
        <Link className="btn btn-primary" to="/countries">
          Study countries
        </Link>
        <Link className="btn btn-primary" to="/collection">
          Collection
        </Link>
        <Link className="btn btn-muted" to="/quiz">
          Quiz (VG)
        </Link>
        <Link className="btn btn-muted" to="/leaderboard">
          Leaderboard (VG)
        </Link>
      </div>
    </main>
  );
}
