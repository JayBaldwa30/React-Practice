// Navigation.js
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <h2>Navigation</h2>
      <button>
        <Link to="/header">Go to Header</Link>
      </button>
      <button>
        <Link to="/footer">Go to Footer</Link>
      </button>
    </div>
  );
}

export default Navigation;
