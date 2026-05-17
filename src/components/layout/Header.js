// components/layout/Header.js
"use client";


import LogoutButton from "./LogoutButton";

import MobileSidebar from "./MobileSidebar";

export default function Header({ user }) {
  // console.log(user);
  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <MobileSidebar />
        <p className="text-sm text-gray-800">Dobrodošao, {user.full_name}</p>
      </div>

      <LogoutButton className="font-medium" />
    </header>
  );
}