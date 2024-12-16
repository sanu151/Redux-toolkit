import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" className="logo-img">
        <img
          src="/Logo.jpeg"
          alt="LOGO"
          style={{ width: "30px", height: "auto" }}
        />
        <span className="site-title">Written World</span>
      </NavLink>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/showbooks" className="nav-link">
        Show books
      </NavLink>
      <NavLink to="/addbook" className="nav-link">
        Add new book
      </NavLink>
    </nav>
  );
};

export default NavBar;
