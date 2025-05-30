import React from "react";
import { Link } from "react-router-dom";

const exercises = [
  { name: "bicep_curl", label: "Bicep Curl", image: "../images/bicep.jpg" },
  { name: "pushup", label: "Push Ups", image: "../images/pushups.jpg" },
  {
    name: "wall_pushup",
    label: "Wall Push Ups",
    image: "/images/wallpushups.jpg",
  },
  {
    name: "jumping_jacks",
    label: "Jumping Jacks",
    image: "/images/jumpingjacks.jpg",
  },
  { name: "high_knee", label: "High Knee", image: "/images/highknees.jpg" },
  { name: "lunges", label: "Lunges", image: "/images/lunge.png" },
];

const ExerciseDashboard = () => {
  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {exercises.map((ex) => (
          <Link to={`/pose-detect/${ex.name}`} key={ex.name}>
            <div className="cursor-pointer border rounded-xl shadow hover:shadow-xl transition p-4 flex flex-col items-center space-y-4 bg-white">
              <img
                src={ex.image}
                alt={ex.label}
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
              />
              <h2 className="text-lg sm:text-xl font-semibold text-center">
                {ex.label}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExerciseDashboard;
