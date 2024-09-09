import React from "react";
import Image from "next/image";
import DoctorDetails from "@/components/DoctorDetails";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import FixedBookButton from "@/components/FixedBookButton";

export default function page() {
  return (
    <div className="bg-slate-50 dark:bg-slate-800 py-8 min-h-screen">
      <div className="bg-white dark:bg-slate-950 shadow-md max-w-4xl border border-gray-400 dark:border-slate-600 mx-auto rounded-md">
        <div className="py-8 px-6">
          <div className="flex items-center justify-between">
            <div className="">
              <div className="flex flex-col">
                <h2 className="uppercase font-bold text-2xl tracking-widest">
                  Dr Samir SANSNOM
                </h2>
                <p className="text-gray-500 text-xs uppercase">
                  Médecin de famille
                </p>
              </div>
              <div className="py-3">
                <p>Consultation au cabinet</p>
                <p>250, Abrajes Abdelmoume, Bd Abdelmoumen</p>
              </div>
            </div>
            <Image
              src="/doc-profile.jpeg"
              alt="Docteur"
              width={243}
              height={207}
              className="w-36 h-38 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="">
          <DoctorDetails />
        </div>
      </div>
      <FixedBookButton />
    </div>
  );
}
