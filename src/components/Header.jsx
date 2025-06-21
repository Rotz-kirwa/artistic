import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            BEN-ARTS
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;