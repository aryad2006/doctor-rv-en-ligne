"use client";

import React, { useState } from "react";
import Availibility from "./Availibility";

export default function DoctorDetails() {
  const [isActive, setIsActive] = useState("Disponibilité");
  return (
    <div className="">
      <div className="flex items-center justify-between uppercase tracking-widest">
        <button
          onClick={() => setIsActive("Services")}
          className={
            isActive === "Services"
              ? "py-4 px-8 w-full bg-blue-600 text-white uppercase tracking-widest"
              : "py-4 px-8 bg-slate-100 w-full text-slate-800 border border-gray-200 uppercase tracking-widest"
          }
        >
          Services
        </button>
        <button
          onClick={() => setIsActive("Disponibilité")}
          className={
            isActive === "Disponibilité"
              ? "py-4 px-8 w-full bg-blue-600 text-white uppercase tracking-widest"
              : "py-4 px-8 bg-slate-100 w-full text-slate-800 border border-gray-200 uppercase tracking-widest"
          }
        >
          Disponibilité
        </button>
      </div>
      <div className="py-8 px-6 flex">
        {isActive === "Disponibilité" ? (
          <div>
            <Availibility />
          </div>
        ) : (
          <div>Services disponibles</div>
        )}
      </div>
    </div>
  );
}
