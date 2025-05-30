import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import { LoginContext } from "../context/LoginContextProvider";
const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    handleSuccess("User logged out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setLoggedInUser(user);
  }, [isLoggedIn, handleLogout, setLoggedInUser]);

  return (
    <div className="bg-gradient-to-r from-indigo-100 to-white pt-1 border-b-2 border-blue-200  shadow-inner">
      <div className="m-4 flex justify-between items-center">
        <div className="text-lg font-bold tracking-wider font-">FitTrack</div>
        <div className="navbar flex list-none gap-8 items-center font-semibold text-lg">
          <li className="relative transition-all duration-300 delay-100 hover:text-blue-800 py-2 px-4 rounded-md font-medium cursor-pointer">
            <NavLink
              to="/"
              className="block relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-800 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </NavLink>
          </li>

          <li className="relative transition-all duration-300 delay-100 hover:text-blue-800 py-2 px-4 rounded-md font-medium cursor-pointer">
            <NavLink
              to="/pose-detect"
              className="block relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-800 after:transition-all after:duration-300 hover:after:w-full"
            >
              Pose Detect
            </NavLink>
          </li>
          <li className="relative transition-all duration-300 delay-100 hover:text-blue-800 py-2 px-4 rounded-md font-medium cursor-pointer">
            <NavLink
              to="/diet-plan"
              className="block relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-800 after:transition-all after:duration-300 hover:after:w-full"
            >
              Diet Plan
            </NavLink>
          </li>
          <li className="relative transition-all duration-300 delay-100 hover:text-blue-800 py-2 px-4 rounded-md font-medium cursor-pointer">
            <NavLink
              to="/aboutus"
              className="block relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-800 after:transition-all after:duration-300 hover:after:w-full"
            >
              About Us
            </NavLink>
          </li>
          <li className="relative transition-all duration-300 delay-100 hover:text-blue-800 py-2 px-4 rounded-md font-medium cursor-pointer">
            <NavLink
              to="/contact"
              className="block relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-800 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact Us
            </NavLink>
          </li>
        </div>
        <div className="navbar-end flex items-center space-x-4 ml-4">
          {!isLoggedIn ? (
            <NavLink
              to="/login"
              className="btn bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200 ease-in-out"
            >
              Log In
            </NavLink>
          ) : (
            <button
              onClick={handleLogout}
              className="btn bg-red-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200 ease-in-out"
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
