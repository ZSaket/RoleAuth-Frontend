import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/axiosConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      const { data } = await API.post("/auth/login", { email, password });

      localStorage.setItem("token", data.token);


      if (data.role === "Admin") {
        navigate("/admin");
      } else if (data.role === "Moderator") {
        navigate("/moderator");
      } else if (data.role === "User") {
        navigate("/user");
      }
    } catch (err) {

      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center rounded-lg justify-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-cyan-500">Login</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}


        <div className="flex items-center justify-center gap-2 border rounded-xl p-3 bg-gray-700 shadow-inner">
          <svg
            className="w-5 h-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
          </svg>
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-none outline-none text-white w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>


        <div className="flex items-center justify-center gap-2 border rounded-xl p-3 bg-gray-700 shadow-inner">
          <svg
            className="w-5 h-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
          </svg>
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent border-none outline-none text-white w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>


        <button
          type="submit"
          className="w-full py-3 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
        >
          Login
        </button>
        <div className="text-center mt-4">
          
          <p className="mt-2 text-gray-500">
            Don't have an account?{" "}
            <button
              className="text-cyan-500 hover:underline"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
