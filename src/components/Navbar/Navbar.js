import { Link } from "react-router-dom";
import './Navbar.css';
function NavBar() {
  return (
    <>
      <nav>
        <h1>Travel Destination</h1>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default NavBar;
