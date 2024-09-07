import NavBar from "@/components/Dashboard/NavBar";
import Sidebar from "@/components/Dashboard/Sidebar";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <NavBar />
        <div className="flex min-h-screen w-full flex-col">{children}</div>
      </div>
    </div>
  );
}
