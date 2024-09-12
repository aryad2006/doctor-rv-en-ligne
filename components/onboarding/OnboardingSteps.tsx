"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import BiographyForm from "@/components/onboarding/BiographyForm";
import ContactInfo from "@/components/onboarding/ContactInfo";
import ProfessionInfo from "@/components/onboarding/ProfessionInfo";
import React from "react";

export default function OnboardingSteps({ id }: { id: string }) {
  const params = useSearchParams();
  const page = params.get("page") || 1;
  console.log(page);
  const steps = [
    {
      title: "Biographie",
      page: "biography",
      component: <BiographyForm />,
    },
    {
      title: "Informations Contact",
      page: "contact",
      component: <ContactInfo />,
    },
    {
      title: "Informations professionnelles",
      page: "profession",
      component: <ProfessionInfo />,
    },
    {
      title: "Etudes et diplômes",
      page: "educcation",
      component: <BiographyForm />,
    },
    {
      title: "Expériences professionnelles",
      page: "ProfessionInfo",
      component: <BiographyForm />,
    },
    {
      title: "Informations additionnelles",
      page: "additional",
      component: <BiographyForm />,
    },
    {
      title: "Disponibilités",
      page: "availability",
      component: <BiographyForm />,
    },
  ];

  return (
    <div className="grid grid-cols-12 mx-auto rounded-lg shadow-inner  overflow-hidden border border-slate-200 min-h-screen bg-slate-100 ">
      <div className="col-span-full sm:col-span-3 divide-y-2 divide-gray-200">
        {steps.map((step, i) => {
          return (
            <Link
              key={i}
              href={`/onboarding/${id}?page=${step.page}`}
              className={cn(
                "block py-3 px-4 bg-slate-300 text-slate-800 shadow-inner uppercase text-sm",
                step.page === page ? "bg-teal-800 text-slate-100" : ""
              )}
            >
              {step.title}
            </Link>
          );
        })}
      </div>
      <div className="col-span-full sm:col-span-9 p-4">
        <h2 className="">Formulaire 1</h2>
        <h2 className="">Formulaire 1</h2>
        <h2 className="">Formulaire 1</h2>
        <h2 className="">Formulaire 1</h2>
        <h2 className="">Formulaire 1</h2>
        <h2 className="">Formulaire 1</h2>
        <h2 className="">Formulaire 1</h2>
      </div>
    </div>
  );
}
