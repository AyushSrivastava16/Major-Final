import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContextProvider";

const DietPlanGenerator = () => {
  const { isLoggedIn } = useContext(LoginContext);
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    targetWeight: "",
    age: "",
    dietType: "Muscle Gain",
    preference: "Veg",
    allergies: "",
    region: "Indian",
  });

  const [dietPlan, setDietPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setDietPlan(null);

    const { dietType, preference, allergies } = formData;

    // Map dietType to calories
    const calorieGoals = {
      "Muscle Gain": 3000,
      "Weight Loss": 1800,
      "Weight Gain": 2500,
    };

    const dietMap = {
      Veg: "vegetarian",
      "Non-Veg": "", // default is omnivore
    };

    const calories = calorieGoals[dietType] || 2000;
    const diet = dietMap[preference] || "";

    try {
      const res = await fetch(
        `https://api.spoonacular.com/mealplanner/generate?timeFrame=day&targetCalories=${calories}&diet=${diet}&exclude=${allergies}&apiKey=8a3b33de90cd4b71adffc52f02c94864`
      );

      if (!res.ok) throw new Error("Failed to fetch meal plan");

      const data = await res.json();
      setDietPlan(data.meals);
    } catch (err) {
      console.error(err);
      setError("Failed to generate diet plan.");
    }

    setLoading(false);
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="px-4 py-10 max-w-3xl mx-auto">
      <div className="bg-white shadow-xl rounded-3xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Generate Your Diet Plan
        </h1>

        {/* Input Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {["weight", "height", "targetWeight", "age"].map((field) => (
            <input
              key={field}
              type="number"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`${
                field.charAt(0).toUpperCase() + field.slice(1)
              } (kg/cm)`}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        {/* Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <select
            name="dietType"
            value={formData.dietType}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {["Muscle Gain", "Weight Loss", "Weight Gain"].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <select
            name="preference"
            value={formData.preference}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {["Veg", "Non-Veg"].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Other Inputs */}
        {["allergies", "region"].map((field) => (
          <input
            key={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={`Enter ${
              field.charAt(0).toUpperCase() + field.slice(1)
            }`}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg w-full transition duration-200"
        >
          {loading ? "Generating..." : "Generate Diet Plan"}
        </button>

        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
      </div>

      {/* Diet Plan Output */}
      {dietPlan && (
        <div className="bg-white shadow-lg rounded-3xl p-6 mt-10">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
            Your Diet Plan
          </h2>
          {dietPlan.map((meal) => (
            <div
              key={meal.id}
              className="bg-gray-50 rounded-lg p-4 mb-4 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {meal.title}
              </h3>
              <p className="text-gray-700">
                Ready in {meal.readyInMinutes} mins
              </p>
              <a
                href={meal.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Recipe
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DietPlanGenerator;
