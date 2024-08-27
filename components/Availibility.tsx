"use client";

import React from "react";

import { Calendar } from "@/components/ui/calendar";

export default function Availibility() {
  const [bookDate, setBookDate] = React.useState<Date | undefined>(new Date());
  const GMT = bookDate?.toString().split("GMT")[1].split(" ")[0];
  const formattedDate = `${bookDate
    ?.toString()
    .split(" ")
    .slice(0, 3)
    .join(" ")} - GMT${GMT} `;

  const timeStamps = [
    {
      time: "08:30",
    },
    {
      time: "09:00",
    },
    {
      time: "09:30",
    },
    {
      time: "10:00",
    },
    {
      time: "10:30",
    },
    {
      time: "11:00",
    },
    {
      time: "11:30",
    },
    {
      time: "12:00",
    },
    {
      time: "12:30",
    },
    {
      time: "13:00",
    },
    {
      time: "13:30",
    },
    {
      time: "14:00",
    },
    {
      time: "14:30",
    },
    {
      time: "15:00",
    },
    {
      time: "15:30",
    },
    {
      time: "16:0",
    },
    {
      time: "16:3",
    },
    {
      time: "17:0",
    },
    {
      time: "17:3",
    },
    {
      time: "18:0",
    },
    {
      time: "18:3",
    },
  ];
  console.log(formattedDate);

  return (
    <>
      <div className="mb-[200px]">
        <h2 className="font-bold py-4 text-xl text-slate-500 uppercase tracking-widest">
          Choisir une date et un horaire
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:gap-0">
          <div className="sm:col-span-1 col-span-full">
            <Calendar
              mode="single"
              selected={bookDate}
              onSelect={setBookDate}
              className="rounded-md border"
            />
          </div>
          <div className="sm:col-span-1 col-span-full">
            <div className="px-4">
              <h2 className="pb-4 text-blue-700 text-center py-3 px-4 border border-blue-500">
                {formattedDate}
              </h2>
              <div className="py-3 grid grid-cols-3 gap-2">
                {timeStamps.slice(0, 5).map((item, i) => {
                  return (
                    <button
                      className="bg-blue-600 text-[0.7rem] text-white py-2 px-3 rounded-md text-center"
                      key={i}
                    >
                      {item.time}
                    </button>
                  );
                })}
                <button className="bg-blue-900 text-white py-2 px-3 rounded-sm text-center">
                  Plus
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Calendar */}
        {/* Available time */}
      </div>
    </>
  );
}
