import React from "react";

export const NavBar = ({totalCounters}: any) => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand"  >
          Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
        </a>
      </nav>
    </>
  );
};

