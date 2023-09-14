import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../assets/images/logo.png";
import Swal from "sweetalert2";
import useSelectItem from "../customHooks/useSelectItem";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const[seatData]=useSelectItem()
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState("light-theme");
  const navigate=useNavigate()
  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "You are Logged out.",
        });
        navigate('/')
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="m-auto">
      <nav className="navbar navbar-expand-lg fixed-top" id="navMenu">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <img
                src={logo}
                alt="logo image"
                className="img-fluid rounded-circle logoimg"
              />
              <p className="text-white mt-3 fw-bold fs-5">Music Pathshala</p>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <ul className="navbar-nav  mx-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link  text-white">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/instructors'} className="nav-link  text-white">Instructors</Link>
              </li>
              <li className="nav-item">
                <Link to={'/classes'} className="nav-link  text-white">Classes</Link>
              </li>
              <li className="nav-item">
                <h5 className="nav-link text-light">Selected Class + <span className="badge bg-secondary">{seatData?.length || 0}</span></h5>
              </li>
              <li className="nav-item">
                {user && (
                  <Link  to={'/dashboard/myclasses'} className="nav-link  text-white">Dashboard</Link>
                )}
              </li>
              {user ? (
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-ghost  text-white"
                  >
                    LogOut
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link className="nav-link  text-white" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <div className="d-flex justify-content-center align-items-center gap-4">
              {user && (
                <img
                  src={user?.photoURL}
                  alt="user profile pic"
                  className="img-fluid rounded-circle"
                  id="userPic"
                />
              )}
              <button
                className="btn nav-link bg-body-secondary p-2 theme-hover"
                onClick={toggleTheme}
              >
                Toggle Dark/Light
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
