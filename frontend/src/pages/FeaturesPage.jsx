import React from "react";
import { FaCamera, FaChartLine, FaUserCheck, FaDumbbell } from "react-icons/fa";

const features = [
  {
    icon: <FaCamera size={40} className="text-blue-600" />,
    title: "Real-Time Posture Detection",
    description:
      "Instantly analyze your body posture through your webcam with high accuracy and smooth feedback.",
  },
  {
    icon: <FaChartLine size={40} className="text-green-600" />,
    title: "Progress Tracking",
    description:
      "Track your posture improvement and workout consistency over time with intuitive charts and insights.",
  },
  {
    icon: <FaUserCheck size={40} className="text-purple-600" />,
    title: "Personalized Feedback",
    description:
      "Receive tailored advice based on your form and movements to ensure you're exercising correctly.",
  },
  {
    icon: <FaDumbbell size={40} className="text-pink-600" />,
    title: "Exercise-Specific Analysis",
    description:
      "Focus on popular exercises like pushups and bicep curls, with detailed form evaluations for each.",
  },
];

const FeaturesPage = () => {
  return (
    <div className="px-4 sm:px-10 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Why Choose FitTrack?</h1>
        <p className="text-gray-600 text-lg">
          FitTrack helps you perfect your posture, prevent injury, and track
          your fitness journey — all with just your camera.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition duration-300 flex items-start space-x-6"
          >
            <div className="flex-shrink-0">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
