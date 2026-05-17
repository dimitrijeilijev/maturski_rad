"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoutButton({onClick }) {
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
    className="
      flex items-center gap-2
      bg-yellow-500
      text-black
      hover:bg-yellow-600
      hover:text-white
      px-4 py-2 rounded
      transition
    "
    
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