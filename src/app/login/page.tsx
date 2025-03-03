"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const OnLogin = async () => {
    // Signup logic here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen py-2">
      <h1 className="text-center text-gray-700 text-2xl mb-4">Login</h1>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        className="border p-2 rounded w-80 mb-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
        className="border p-2 rounded w-80 mb-4"
      />
      <button
        onClick={ OnLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Login here
      </button>
      <Link href="/login"> Visit login page </Link>
    </div>
  );
}
