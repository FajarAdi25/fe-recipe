import { useEffect, useState } from "react";
import "../../../styles/navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FloatingLogo from "../FloatingLogo";
import { PersonCircle } from "react-bootstrap-icons";

const NavbarLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [transparent, setTransparent] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLogin(true);
    }
  }, []);
 

  const changeNavBg = () => {
    const navbarTogglerStatus = document
      .querySelector(".navbar-toggler")
      .classList.contains("collapsed");

    if (navbarTogglerStatus) {
      if (document.documentElement.scrollTop > 100) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    }
  };

  const changeNavBgClick = () => {
    const navbarTogglerStatus = document
      .querySelector(".navbar-toggler")
      .classList.contains("collapsed");

    if (navbarTogglerStatus) {
      if (document.documentElement.scrollTop > 100) {
        console.log("");
      } else {
        setTransparent(true);
      }
    } else {
      setTransparent(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);

    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  const submitLogout = () => {
    localStorage.clear();
    return navigate("/login");
  };
  return (
    <nav
      className={`navbar fixed-top navbar-expand-md navbar-light py-2 py-md-4 ff-airbnb ${
        transparent ? "bg-transparent" : "bg-white nav-shadow"
      }`}
      id="navbar"
    >
      <div className="container mt-1">
        <Link to="/" className="navbar-brand d-md-none">
          <FloatingLogo />
        </Link>
        <button
          className="navbar-toggler collapsed bg-light"
          type="button"
          onClick={changeNavBgClick}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item me-5">
              <Link to="/home" className="nav-link">
                <span
                  className={`${location.pathname === "/home" && "active"}`}
                >
                  Home
                </span>
              </Link>
            </li>
            {isLogin && (
              <>
                <li className="nav-item me-5">
                  <Link to="/add" className="nav-link">
                    <span
                      className={`${location.pathname === "/add" && "active"}`}
                    >
                      Add Recipe
                    </span>
                  </Link>
                </li>
                <li className="nav-item me-5">
                  <Link to="/profile" className="nav-link">
                    <span
                      className={`${
                        location.pathname === "/profile" && "active"
                      } && "active"}`}
                    >
                      Profile
                    </span>
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="right-menu d-flex align-items-center">
            <div className="icon bg-light p-2 rounded-circle border">
              <PersonCircle />
            </div>
            {isLogin ? (
              <button
                onClick={submitLogout}
                type="button"
                className="btn nav-login color-blue btn-none"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth"
                className={`nav-login ms-2 ${
                  transparent ? "text-white" : "color-blue"
                }`}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLogin;
