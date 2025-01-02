import React from "react";

const Navbar = ({ theme, changeTheme }) => {
  return (
    <nav className="navbar bg-success">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-light">Khatabook</span>
        <button
          onClick={changeTheme}
          className={
            theme ? "btn btn-sm btn-light me-4" : "btn btn-sm btn-dark me-4"
          }
        >
          {theme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
