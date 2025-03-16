"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout"); // Corrected path with async/await
      toast.success("Logout Successful");
      router.push("/login");
    } catch (error: any) {
      console.error("Logout Error:", error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || "Logout failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen py-2">
      <h1 className="text-center text-gray-700 text-2xl mb-4">Profile</h1>
      <hr />
      <p>Profile Page</p>
      <hr />
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}


