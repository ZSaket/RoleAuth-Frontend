import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/axiosConfig";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/register", { username, email, password, role });
      localStorage.setItem("token", data.token);

      if (data.role === "Admin") {
        navigate("/admin");
      } else if (data.role === "Moderator") {
        navigate("/moderator");
      } else if (data.role === "User") {
        navigate("/user");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form
        className="flex flex-col gap-4 p-6 max-w-md w-full bg-gray-800 rounded-3xl border border-gray-700"
        onSubmit={handleRegister}
      >
        <p className="text-3xl font-semibold text-cyan-400 pl-8">Register</p>
        <p className="text-sm text-gray-400">Signup now and get full access to our app.</p>

        <label className="flex flex-col w-full relative">
          <input
            className="bg-gray-700 text-white p-4 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <span className="absolute left-2 top-0 text-gray-500 text-sm transition-all duration-300 transform scale-100 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:text-cyan-400 peer-focus:text-sm">
            Username
          </span>
        </label>

        <label className="flex flex-col w-full relative">
          <input
            className="bg-gray-700 text-white p-4 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className="absolute left-2 top-0 text-gray-500 text-sm transition-all duration-300 transform scale-100 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:text-cyan-400 peer-focus:text-sm">
            Email
          </span>
        </label>

        <label className="flex flex-col w-full relative">
          <input
            className="bg-gray-700 text-white p-4 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="absolute left-2 top-0 text-gray-500 text-sm transition-all duration-300 transform scale-100 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:text-cyan-400 peer-focus:text-sm">
            Password
          </span>
        </label>

        <label className="flex flex-col w-full relative">
          <select
            className="bg-gray-700 text-white p-4 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Moderator">Moderator</option>
            <option value="User">User</option>
          </select>
          <span className="absolute left-2 top-0 text-gray-500 text-sm transition-all duration-300 transform scale-100 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:text-cyan-400 peer-focus:text-sm">
            Role
          </span>
        </label>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          className="bg-cyan-500 text-white py-3 rounded-xl mt-4 hover:bg-cyan-400 transition-all duration-200"
        >
          Register
        </button>

        <p className="text-center text-gray-400 text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-cyan-400 hover:underline">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
