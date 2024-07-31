import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../../assets/css/layout/Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/ForkLogo.png";
import { FaHome } from "react-icons/fa";
import { LuVegan } from "react-icons/lu";
import { FaListUl } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { BiSolidLogIn } from "react-icons/bi";
import { BiSolidLogOut } from "react-icons/bi";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    setTimeout(() => {
      toast.success("Logged Out");
    }, 500);
    navigate("/home");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md bg-body-info fixed-top mb-4">
        <div className="container-fluid">
          <a className="navbar-brand p-1" href="/">
            <img src={logo} className="mx-3" alt="" height={35} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {!isLoggedIn && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link">
                    <FaHome /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    <BiSolidLogIn className="mb-1" />
                    Get Started
                  </Link>
                </li>
              </ul>
            )}
            {isLoggedIn && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link">
                    <FaHome className="mb-1" /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/products"} className="nav-link">
                    <LuVegan className="mb-1" /> Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/orders"} className="nav-link">
                    <FaListUl className="mb-1" /> Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/cart"} className="nav-link">
                    <IoIosCart className="mb-1" /> Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/login"}
                    className="nav-link"
                    onClick={() => handleLogout()}
                  >
                    <BiSolidLogOut className="mb-1" /> Logout
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
