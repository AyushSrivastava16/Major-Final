import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { useParams } from "react-router-dom";

const videoConstraints = {
  width: 640,
  height: 400,
  facingMode: "user",
};

const ExerciseAnalyzer = () => {
  const { exercise } = useParams(); // e.g., "bicep_curl", "squat", etc.
  const webcamRef = useRef(null);
  const [response, setResponse] = useState(null);
  const [running, setRunning] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let interval;

    if (running) {
      if (!exercise) {
        setError("No exercise type provided in URL.");
        return;
      }

      interval = setInterval(async () => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (!imageSrc) return;

        try {
          const res = await axios.post(
            `https://live-series-fc-beginners.trycloudflare.com/analyze/${exercise}`,
            {
              image: imageSrc,
            }
          );
          setResponse(res.data);
          setError("");
        } catch (err) {
          console.error("Error:", err);
          setError("Something went wrong. Please check your backend.");
        }
      }, 1000); // Capture frame every second
    }

    return () => clearInterval(interval);
  }, [running, exercise]);

  // Check if exercise is available, if not, display a fallback
  const exerciseName = exercise
    ? exercise.replace("_", " ")
    : "Exercise not specified";

  return (
    <div className="flex flex-col items-center space-y-4 p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl font-bold capitalize text-blue-700 text-center sm:text-3xl md:text-4xl">
        {exerciseName} Analyzer
      </h2>

      <div className="w-full max-w-[640px] sm:max-w-[720px] md:max-w-[800px]">
        <Webcam
          audio={false}
          height={480}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width="100%"
          videoConstraints={videoConstraints}
          className="rounded-xl shadow-lg w-full"
        />
      </div>

      <button
        onClick={() => setRunning((prev) => !prev)}
        className={`px-6 py-2 rounded-xl shadow text-white transition ${
          running
            ? "bg-red-600 hover:bg-red-700"
            : "bg-green-600 hover:bg-green-700"
        } sm:px-8 sm:py-3 md:px-10 md:py-4`}
      >
        {running ? "Stop Analysis" : "Start Live Analysis"}
      </button>

      {error && (
        <div className="text-red-600 font-medium bg-red-100 p-2 rounded mt-4 w-full max-w-md mx-auto">
          {error}
        </div>
      )}

      {response && (
        <div className="mt-4 bg-gray-100 p-4 rounded-xl shadow-md text-center w-full max-w-md mx-auto">
          <p className="text-lg font-semibold text-blue-900 sm:text-xl md:text-2xl">
            Live Results:
          </p>
          <p>Form: {response.form}</p>
          <p>Angle: {response.angle?.toFixed(2)}°</p>
          <p>Reps: {response.reps}</p>
        </div>
      )}
    </div>
  );
};

export default ExerciseAnalyzer;
