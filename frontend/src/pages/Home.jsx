import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual login state logic
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleGetStartedClick = () => {
    if (isLoggedIn) {
      navigate("/pose-detect");
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-100 to-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Track Your Fitness Progress with Ease
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
          Monitor your workouts, calories burned, and track your recovery all in
          one place.
        </p>
        <button
          onClick={handleGetStartedClick}
          className="border hover:border-indigo-700 mt-8 inline-block bg-indigo-700 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-indigo-800 transition duration-300"
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 text-center px-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          Features Designed for You
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-indigo-100 p-6 rounded-lg shadow-md text-indigo-600">
            <h3 className="text-xl font-semibold">
              Real-time Exercise Tracking
            </h3>
            <p className="mt-2 text-gray-600">
              Get real-time feedback on your workouts to ensure proper form and
              minimize injury risk.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-indigo-100 p-6 rounded-lg shadow-md text-indigo-600">
            <h3 className="text-xl font-semibold">Progress Monitoring</h3>
            <p className="mt-2 text-gray-600">
              Track your recovery and see your fitness progress over time with
              intuitive graphs and stats.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-indigo-100 p-6 rounded-lg shadow-md text-indigo-600">
            <h3 className="text-xl font-semibold">Personalized Diet Plans</h3>
            <p className="mt-2 text-gray-600">
              Receive custom meal recommendations based on your fitness goals
              and activity levels.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-600 py-16 text-center text-white">
        <h2 className="text-3xl font-semibold">
          Ready to Start Your Fitness Journey?
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Join thousands of users who are already improving their fitness with
          our platform. Sign up today!
        </p>
        <button
          onClick={handleGetStartedClick}
          className="mt-8 inline-block border hover:border-indigo-700 bg-indigo-700 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-indigo-800 transition duration-300"
        >
          Sign Up Now
        </button>
      </section>

      {/* Footer Section */}
    </div>
  );
};

export default Home;
