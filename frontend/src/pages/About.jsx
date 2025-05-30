import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <h1 className="text-5xl font-extrabold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          FitTrack is a comprehensive solution that integrates exercise
          correction to ensure proper form, rehabilitation monitoring for injury
          recovery, a schedule tracker, calories burned calculations, and
          personalized diet recommendations based on individual health goals and
          activity levels.
        </p>
      </div>

      {/* Key Features Section */}
      <div className="mt-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Exercise Correction */}
          <div className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="text-indigo-600 text-4xl mb-4">
              <i className="fas fa-dumbbell"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Exercise Correction
            </h3>
            <p className="mt-2 text-gray-600">
              Real-time feedback ensures proper form, minimizing injury risk
              during workouts.
            </p>
          </div>

          {/* Rehabilitation Monitoring */}
          <div className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="text-indigo-600 text-4xl mb-4">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Rehabilitation Monitoring
            </h3>
            <p className="mt-2 text-gray-600">
              Tracks progress for individuals recovering from physical injuries,
              optimizing their recovery journey.
            </p>
          </div>

          {/* Schedule & Calorie Tracking */}
          <div className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="text-indigo-600 text-4xl mb-4">
              <i className="fas fa-calendar-check"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Schedule & Calorie Tracking
            </h3>
            <p className="mt-2 text-gray-600">
              Integrated calendar system monitors exercise durations and
              calculates calories burned efficiently.
            </p>
          </div>

          {/* Diet Recommendations */}
          <div className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="text-indigo-600 text-4xl mb-4">
              <i className="fas fa-utensils"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Diet Recommendations
            </h3>
            <p className="mt-2 text-gray-600">
              Personalized meal suggestions based on user's weight and activity
              level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
