import { useEffect } from "react";
import "../../../styles/navbar.css";

const NavbarLogin = () => {
  useEffect(() => {
    // Scroll Handler
    const scrollFunction = () => {
      const navbarToggler = document.querySelector(".navbar-toggler");
      const navbarTogglerStatus = navbarToggler.classList.contains("collapsed");

      if (navbarTogglerStatus) {
        if (document.documentElement.scrollTop > 100) {
          changeNavbarBg();
        } else {
          changeNavbarTransparent();
        }
      }
    };

    // Click Handler
    const handleNavbarToggle = () => {
      const navbarToggler = document.querySelector(".navbar-toggler");
      const navbarTogglerStatus = navbarToggler.classList.contains("collapsed");

      if (navbarTogglerStatus) {
        if (document.documentElement.scrollTop > 100) {
          // Handle the case when the button is clicked and scrollTop > 100
        } else {
          changeNavbarTransparent();
        }
      } else {
        changeNavbarBg();
      }
    };

    const changeNavbarBg = () => {
      document.getElementById("navbar").classList.remove("bg-transparent");
      document.getElementById("navbar").classList.add("bg-white");
      document.getElementById("navbar").classList.add("nav-shadow");
      document.querySelector(".nav-login").classList.add("color-blue");
    };

    const changeNavbarTransparent = () => {
      document.getElementById("navbar").classList.remove("bg-white");
      document.getElementById("navbar").classList.remove("nav-shadow");
      document.getElementById("navbar").classList.add("bg-transparent");
      document.querySelector(".nav-login").classList.remove("color-blue");
    };

    // Attach scroll event listener
    window.addEventListener("scroll", scrollFunction);

    // Attach click event listener for navbar-toggler
    const navbarToggler = document.querySelector(".navbar-toggler");
    navbarToggler.addEventListener("click", handleNavbarToggle);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", scrollFunction);
      navbarToggler.removeEventListener("click", handleNavbarToggle);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <nav
      className="navbar fixed-top navbar-expand-md navbar-light bg-transparent py-2 py-md-4 ff-airbnb"
      id="navbar"
    >
      <div className="container">
        <button
          className="navbar-toggler collapsed bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item me-5">
              <a className="nav-link" href="/index.html">
                <span className="active">Home</span>
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="/add.html">
                <span>Add Recipe</span>
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="/profile.html">
                <span>Profile</span>
              </a>
            </li>
          </ul>
          <div className="right-menu d-flex align-items-center">
            <div className="icon bg-light p-2 rounded-circle border">
              <i className="far fa-user"></i>
            </div>
            <a className="nav-login ms-2 text-white" href="/login.html">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLogin;
