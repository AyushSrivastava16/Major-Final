import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import { LoginContext } from "../context/LoginContextProvider";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    handleSuccess("User logged out");
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setLoggedInUser(user);
  }, [isLoggedIn]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/pose-detect" onClick={() => setIsMobileMenuOpen(false)}>Pose Detect</NavLink>
      </li>
      <li>
        <NavLink to="/diet-plan" onClick={() => setIsMobileMenuOpen(false)}>Diet Plan</NavLink>
      </li>
      <li>
        <NavLink to="/aboutus" onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-gradient-to-r from-indigo-100 to-white pt-1 border-b-2 border-blue-200 shadow-inner">
      <div className="m-4 flex justify-between items-center">
        <div className="text-lg font-bold tracking-wider">FitTrack</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center font-semibold text-lg">
          {navLinks}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Right End Buttons */}
        <div className="hidden md:flex items-center space-x-4 ml-4">
          {!isLoggedIn ? (
            <NavLink
              to="/login"
              className="bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              Log In
            </NavLink>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200"
            >
              Log Out
            </button>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4">
          <ul className="flex flex-col gap-4 text-lg font-medium">{navLinks}</ul>
          <div className="mt-4">
            {!isLoggedIn ? (
              <NavLink
                to="/login"
                className="block text-center bg-indigo-600 text-white font-medium py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
              >
                Log In
              </NavLink>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full bg-red-600 text-white font-medium py-2 rounded-lg hover:bg-red-700 transition duration-200"
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
