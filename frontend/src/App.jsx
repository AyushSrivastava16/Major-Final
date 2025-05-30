import { useState, useEffect, useContext } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import { LoginContext } from "./context/LoginContextProvider";
// import ExerciseAnalyzer from "./components/ExerciseAnalyzer";
import ExerciseDashboard from "./pages/ExerciseDashboard";
import ExerciseAnalyzer from "./components/ExerciseAnalyzer";
import ContactUs from "./pages/ContactUs";
import Prvcy from "./pages/Prvcy";
import FeaturesPage from "./pages/FeaturesPage";
import DietPlanGenerator from "./pages/DietPlanGenerator";
// import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual login state logic
  const navigate = useNavigate();

  // Effect to check login status based on localStorage
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, []);
  const { isLoggedIn } = useContext(LoginContext);
  // PrivateRoute component
  const PrivateRoute = ({ element }) => {
    if (!isLoggedIn) {
      // If not logged in, redirect to the login page
      return <Navigate to="/login" />;
    }
    // If logged in, render the passed element (target component)
    return element;
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy" element={<Prvcy />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route
          path="/diet-plan"
          element={<PrivateRoute element={<DietPlanGenerator />} />}
        />
        {/* Protected Route for PoseDetect */}
        <Route
          path="/pose-detect"
          // element={<PrivateRoute element={<ExerciseAnalyzer />} />}
          element={<PrivateRoute element={<ExerciseDashboard />} />}
        />
        <Route
          path="/pose-detect/:exercise"
          element={<PrivateRoute element={<ExerciseAnalyzer />} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
