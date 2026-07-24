import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      console.log(data);

      if (data.success) {
        alert("Login Successful");
         navigate("/homepage");
        // Next step: Navigate to Home Page
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="border p-10 w-[400px] bg-gray-200 rounded-lg shadow-lg">
        <h1 className="text-4xl text-center font-bold">Login Page</h1>

        <div className="flex flex-col gap-5 mt-10">
          <input
            className="border p-2 rounded"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="border p-2 rounded"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;