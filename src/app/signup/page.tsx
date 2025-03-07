"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for App Router
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
        setLoading(true);
        await axios.post("/api/users/signup", user)

    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            toast.error(error.message);
            console.log("Signup failed", error.message);
        } else {
            toast.error("An unexpected error occurred");
            console.log("Signup failed", error);
        }
        router.push("/login");

    }finally  {
        setLoading(false); 
    }

  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
        setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center h-screen py-2">
      <h1 className="text-center text-gray-700 text-2xl mb-4">{loading ? "Processing" : "Signup"}</h1>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={user.username}
        onChange={handleChange}
        className="border p-2 rounded w-80 mb-2"
      />
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
        onClick={onSignup}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 focus:outline-none focus:border-gray-600 "
      >
        {buttonDisabled ? "No Signup " : "Signup"}
      </button>
      <Link href="/login"> Visit login page </Link>
    </div>
  );
}
