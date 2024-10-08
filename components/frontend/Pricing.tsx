import { Check, HelpCircle } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "plan gratuit",
      desc: "Idéal pour les praticiens individuels débutants.",
      price: 0,
      fee: 10,
      isMostPop: false,
      features: [
        "Gérez jusqu'à 50 rendez-vous par mois",
        "Gestion de base du dossier patient",
        "Notifications par e-mail pour les rendez-vous",
      ],
      getStarted: "/register?role=DOCTOR&plan=free",
    },
    {
      name: "Professionnel",
      desc: "Parfait pour les cliniques de petite et moyenne taille.",
      price: 399,
      fee: 0,
      isMostPop: true,
      features: [
        "Rendez-vous illimités",
        "Gestion avancée des dossiers patients",
        "Rappels SMS pour rendez-vous",
        "Profil de clinique personnalisable",
      ],
      getStarted: "/register?role=DOCTOR&plan=professional",
    },
    {
      name: "Premium",
      desc: "Adapté aux grands établissements de santé et aux hôpitaux.",
      price: 599,
      isMostPop: false,
      features: [
        "Toutes les fonctionnalités du forfait Professionnel",
        "Prise en charge multi-fournisseurs",
        "Support client prioritaire",
        "Intégration avec les systèmes de dossiers de santé électroniques",
      ],
      getStarted: "/register?role=DOCTOR&plan=premium",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl dark:text-slate-300 text-gray-800 sm:text-4xl">
            Pricing for all sizes
          </h3>
          <div className="mt-3 max-w-xl">
            <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur consequat nunc.
            </p>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, i) => (
            <div
              key={i}
              className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${
                item.isMostPop ? "mt-10" : ""
              }`}
            >
              {item.isMostPop ? (
                <span className="w-32 absolute -top-7 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">
                  Le plus populaire
                </span>
              ) : (
                ""
              )}
              <div className="p-8 space-y-4 border-b">
                <span className="text-indigo-600 font-bold uppercase tracking-widest">
                  {item.name}
                </span>
                <div className="text-gray-800 text-3xl dark:text-gray-300 font-semibold">
                  {item.price} dh <span className="text-xs">par praticien</span>
                  <span className="text-xl text-gray-600 font-normal">/mo</span>
                </div>
                <p className="text-xs">{item.desc}</p>
                <div className="flex">
                  <p className="">+2% des honoraires</p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button>
                          <HelpCircle className="w-4 h-4 ms-2" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-slate-900 text-white text-xs">
                        <p>
                          Paypal/Stripe facturera ses frais de transaction
                          habituels
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Link
                  href={item.getStarted}
                  className="px-3 py-3 block text-center rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700"
                >
                  S'abonner
                </Link>
              </div>
              <ul className="p-8 space-y-3">
                <li className="pb-2 text-gray-800 dark:text-gray-500 font-medium">
                  <p>Features</p>
                </li>
                {item.features.map((featureItem, i) => (
                  <li key={i} className="flex items-center gap-5">
                    <Check className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
