import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Stethoscope, Video } from "lucide-react";

export default function DoctorCard({
  isInPerson = false,
}: {
  isInPerson?: boolean;
}) {
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
  return (
    <>
      <div className="border border-gray-200 dark:border-gray-600 dark:bg-slate-800 bg-slate-50 inline-flex flex-col py-8 px-6 rounded-md hover:border-gray-400 duration-300 transition-all">
        <Link href="/doctors/slug">
          <h2 className="uppercase font-bold text-2xl tracking-widest">
            Dr Yassmine ABOUCHAMMALA
          </h2>
          <p className="py-3">187, Bd Abdelmoumen, Casablanca</p>
          <div className="flex items-center gap-4 py-4">
            <div className="relative">
              <Image
                src="/doc-profile.jpeg"
                alt="Docteur"
                width={243}
                height={207}
                className="w-24 h-24 rounded-full object-cover"
              />
              {!isInPerson && (
                <p className="absolute bottom-0 right-1 bg-blue-200 text-blue-700 w-10 h-10 flex items-center justify-center rounded-full">
                  <Video className="w-6 h-6" />
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center">
                <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>Généraliste</span>
              </p>
              <p className="bg-green-200 dark:text-slate-900 py-3 px-6 uppercase">
                Disponible aujourd'hui
              </p>
            </div>
          </div>
        </Link>
        <div className="pt-6 border-t border-gray-400 dark:border-gray-600">
          <h3 className="flex gap-4 justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">
              Mercredi 12 Mars
            </span>{" "}
            <span className="font-bold">300 dh</span>
          </h3>
          <div className="py-3 grid grid-cols-3 gap-2">
            {timeStamps.slice(0, 5).map((item, i) => {
              return (
                <Link
                  className="bg-blue-600 text-[0.7rem] text-white py-2 px-3 rounded-md text-center"
                  key={i}
                  href="#"
                >
                  {item.time}
                </Link>
              );
            })}
            <Link
              className="bg-blue-900 text-white py-2 px-3 rounded-sm text-center"
              href="/doctors/slug"
            >
              Plus
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
