import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const { signup } = useAuth();
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const ok = signup(name.trim(), email.trim(), password);
    if (ok) {
      setError("");
      nav("/");
    } else {
      setError("Email already exists");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto dark:bg-gray-900 dark:text-white min-h-screen flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={submit} className="space-y-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="w-full border px-3 py-2 rounded dark:bg-gray-800 dark:text-white dark:border-gray-600"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border px-3 py-2 rounded dark:bg-gray-800 dark:text-white dark:border-gray-600"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 rounded dark:bg-gray-800 dark:text-white dark:border-gray-600"
          required
        />
        {error && <div className="text-red-500">{error}</div>}
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
          Sign Up
        </button>
      </form>
      <p className="mt-3 text-sm dark:text-gray-300">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
