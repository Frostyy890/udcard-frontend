import Navbar from "@/components/navbar/navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="w-full h-full mt-16 bg-gray-200 text-gray-900">
        {children}
      </div>
    </>
  );
}
