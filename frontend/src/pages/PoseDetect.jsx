import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import { LoginContext } from "../context/LoginContextProvider";

const PostureDetect = () => {
  const { isLoggedIn } = useContext(LoginContext);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [feedback, setFeedback] = useState("");
  const [stream, setStream] = useState(null); // To track the video stream

  const startVideo = async () => {
    try {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = videoStream;
      setStream(videoStream); // Save the stream for stopping later
      videoRef.current.play();
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const stopVideo = () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop()); // Stop all tracks
      videoRef.current.srcObject = null; // Clear the video element source
      setStream(null); // Clear the stream
    }
  };

  const sendFrameToBackend = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    // Draw current video frame onto the canvas
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas to image data
    canvas.toBlob(async (blob) => {
      const formData = new FormData();
      formData.append("frame", blob, "frame.jpg");

      try {
        const response = await axios.post(
          "https://major-final-tf45.onrender.com/process-frame",
          formData
        );
        setFeedback(response.data.feedback); // Receive feedback from backend
      } catch (error) {
        console.error("Error sending frame to backend:", error);
      }
    }, "image/jpeg");
  };

  if (isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-100 to-white text-center p-5">
        <h1 className="mb-5 text-2xl font-bold text-gray-800">
          Exercise Posture Detection
        </h1>
        <video
          ref={videoRef}
          className="w-[640px] h-[360px] border-2 border-green-500 rounded-lg shadow-md transform scale-x-[-1]"
        ></video>
        <canvas
          ref={canvasRef}
          className="hidden"
          width="640"
          height="360"
        ></canvas>
        <div className="mt-5 space-x-4">
          <button
            onClick={startVideo}
            className="px-5 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
          >
            Start Video
          </button>
          <button
            onClick={stopVideo}
            className="px-5 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
          >
            Stop Capturing
          </button>
          <button
            onClick={sendFrameToBackend}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          >
            Check Posture
          </button>
        </div>
        <h2 className="mt-5 text-lg text-gray-600">{feedback}</h2>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default PostureDetect;
