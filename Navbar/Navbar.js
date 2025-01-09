import { Component } from "react";
import "./NavbarStyle.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Penang</h1>
        <ul className="nav-menu">
          <li>
            <Link>
              <i></i>Home
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
