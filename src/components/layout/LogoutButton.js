"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoutButton({ className = "", onClick }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (!res.ok) {
        console.error("Greška pri odjavi.");
        return;
      }

      onClick?.();
      router.push("/login");
    } catch (err) {
      console.error("Greška pri odjavi:", err);
    } finally {
      setLoading(false);
      onClick?.();
    }
  };

  return (
    <button
    onClick={handleLogout}
    //className="
    //  flex items-center gap-2
    //  text-indigo-500
    //  px-2 py-2 rounded
    //  bg-white-100
    //  hover:text-blue-800
    //  hover:bg-indigo-100
     // hover:px-2 py-2 rounded
    //  transition-colors duration-200
      
    //"
    className="
      flex items-center gap-2
      bg-yellow-500
      text-black
      hover:bg-yellow-600
      hover:text-white
      px-4 py-2 rounded
      transition
"
    //druga varijanta
    
    disabled={loading}
  >
      {loading ? (
        <>
          <span className="w-4 h-4 border-2 border-blue-800 border-t-transparent rounded-full animate-spin" />
          <span>Odjava...</span>
        </>
      ) : (
        "Odjavi se"
      )}
    </button>
  );
}