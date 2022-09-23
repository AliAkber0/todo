import React from "react";

import "../../Styles/navbar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const navigateTo = (pathname) => {
    console.log(pathname);
    navigate(pathname);
  };

  return (
    <div className="navbar">
      <Link
        className={`navbar-link ${path === "/" && "active"}`}
        to="/"
        // onClick={() => navigateTo("/")}
      >
        Add User
      </Link>
      <Link
        className={`navbar-link ${path === "/show-user" && "active"}`}
        to="/show-user"
        // onClick={() => navigateTo("/show-user")}
      >
        Show User
      </Link>
      <Link
        className={`navbar-link ${path === "/edit-user" && "active"}`}
        to="/edit-user"
        // onClick={() => navigateTo("/edit-user")}
      >
        Edit User
      </Link>
      <Link
        className={`navbar-link ${path === "/delete-user" && "active"}`}
        to="/delete-user"
        //onClick={() => navigateTo("/delete-user")}
      >
        Delete User
      </Link>
    </div>
  );
};

export default NavBar;
