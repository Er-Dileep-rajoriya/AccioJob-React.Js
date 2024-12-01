import { Outlet } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <>
      <div className="header">
        <h3>Header</h3>
        <ul>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
