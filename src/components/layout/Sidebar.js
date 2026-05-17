"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ mobile = false, onNavigate }) {
  const pathname = usePathname();

  const linkClass = (path) =>
    `block px-3 py-2 rounded-lg transition-colors ${
      pathname === path
        ? "bg-indigo-100 text-indigo-600 font-semibold"
        : "hover:bg-indigo-100"
    }`;

  return (
    <aside
      className={
        mobile
          ? "w-64 bg-white h-full p-6"
          : "w-64 bg-white border-r p-6 hidden md:block"
      }
    >
      <h2 className="text-xl font-bold mb-8">ToDo App</h2>

      <nav className="space-y-2">
        <Link
          href="/dashboard"
          onClick={onNavigate}
          className={linkClass("/dashboard")}
        >
          Današnje Aktivnosti
        </Link>

        <Link
          href="/todos"
          onClick={onNavigate}
          className={linkClass("/todos")}
        >
          Zadaci
        </Link>
      </nav>
    </aside>
  );
}