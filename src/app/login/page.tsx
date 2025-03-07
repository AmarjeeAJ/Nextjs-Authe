"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Correct import for App Router
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setButtonDisabled(!(user.email.length > 0 && user.password.length > 0));
  }, [user]);

  const OnLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed ", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen py-2">
      <h1 className="text-center text-gray-700 text-2xl mb-4">
        {loading ? "Processing" : "Login here"}
      </h1>

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
        onClick={OnLogin}
        disabled={buttonDisabled}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Login here
      </button>
      <Link href="/login"> Visit login page </Link>
    </div>
  );
}
