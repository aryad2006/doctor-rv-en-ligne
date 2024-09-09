"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function FixedBookButton() {
  return (
    <>
      <div className="fixed bottom-0 bg-white dark:bg-slate-700 zoom-out-50 w-full shadow-2xl py-8 px-6">
        <div className="max-w-4xl mx-auto gap-4 items-center flex justify-between">
          {" "}
          <div className="w-full">
            {" "}
            <p className="text-xl font-bold">200 dh</p>
            <p className="font-semibold text-sm">Mercredi 12 Mars - 08:00</p>
          </div>
          <Button variant="outline" className="px-6 py-4">
            <Plus className="w-5 h-5 mr-1" />
            Réserver
          </Button>
        </div>
      </div>
    </>
  );
}
