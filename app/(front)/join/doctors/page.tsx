import CustomButton from "@/components/CustomButton";
import CustomAccordeon, {
  FAQItem,
} from "@/components/frontend/CustomAccordeon";
import Pricing from "@/components/frontend/Pricing";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const features = [
    "Doc4now vous oriente les patients",
    "Expérience de prescription fluide en ligne",
    " Créer des services compétitifs",
  ];
  const steps = [
    "Lister vos services",
    "L’adhésion est gratuite, sans frais d’adhésion ni engagement de temps.",
    "commencer à voir des patients",
  ];

  const cards = [
    {
      title: "Nouveau parcours",
      description:
        "Démarrez une nouvelle souscription pour rejoindre notre réseau de prestataires de soins de santé.",
      link: "/",
      linkTitle: "Commencer une souscription",
    },
    {
      title: "Résumé de la souscription",
      description:
        "Reprenez là où vous vous êtes arrêté et terminez votre processus de souscription. Planifier l'approbation effective de votre adhésion: ",
      link: "/",
      linkTitle: "Continuer votre souscription",
    },
    {
      title: "Planifier un appel",
      description:
        "Planifier un rendez vous pour l’approbation effective pour finaliser votre demande. Vérifier l'état : ",
      link: "/",
      linkTitle: "Planifier un appel",
    },
    {
      title: "Suivez vos approbations",
      description:
        "Suivre le statut de votre souscription et de vos approbations en temps réel.",
      link: "/",
      linkTitle: "Vérifier votre statut",
    },
  ];

  const faqs: FAQItem[] = [
    {
      qn: "Comment m'inscrire à Doc4now?",
      ans: (
        <div>
          <div className="">
            Vous pouvez vous inscrire en visitant notre site Web et en cliquant{" "}
            <CustomButton
              title="S'inscrire"
              href="/register?role='DOCTOR'"
              className="bg-blue-600 hover:bg-blue-800"
            />{" "}
            Suivez les instructions pour créer votre compte.
          </div>
        </div>
      ),
    },
    {
      qn: "Puis-je utiliser l'application doc4now sur plusieurs appareils?",
      ans: "Oui, vous pouvez accéder à notre application depuis n'importe quel appareil doté d'une connexion Internet. Connectez-vous simplement en utilisant vos identifiants.",
    },
    {
      qn: "Mes données sont-elles sécurisées sur l'application médicale doc4now?",
      ans: "Absolument. Nous accordons la priorité à la sécurité et à la confidentialité de vos données. Notre plateforme utilise des protocoles de cryptage et de sécurité conformes aux normes de l'industrie pour protéger vos informations.",
    },
    {
      qn: "Comment puis-je réinitialiser mon mot de passe?",
      ans: "Pour réinitialiser votre mot de passe, rendez-vous sur la page de connexion et cliquez sur le lien « Mot de passe oublié ». Suivez les invites pour réinitialiser votre mot de passe.",
    },
    {
      qn: "Offrez-vous un support client?",
      ans: "Oui, nous disposons d'une équipe de support client dédiée, disponible pour vous aider pour toute question ou problème que vous pourriez rencontrer. Vous pouvez nous contacter par e-mail ou via notre portail d'assistance.",
    },
    {
      qn: "Puis-je surclasser ou déclasser mon forfait?",
      ans: "Certainement. Vous pouvez mettre à niveau ou rétrograder votre forfait à tout moment. Connectez-vous simplement à votre compte et accédez aux paramètres d'abonnement pour apporter des modifications.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto gap-4 grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <h2 className="sm:text-[3rem] text-[1.5rem] leading-[3.5rem]">
              Créez une pratique florissante de
              <br />
              <span className="text-blue-500 font-semibold">
                paiement direct
              </span>
              <br />
              avec Doc4now.
            </h2>
            <p className="py-4">
              Bienvenue dans Doc4now, où la connexion avec les patients est plus
              facile que jamais. Notre plateforme rationalise le processus de
              gestion des rendez-vous, de prestation de soins à distance et de
              suivi des dossiers des patients.
            </p>
            <CustomButton
              title="Lister vos services"
              href="#"
              className="bg-blue-600 hover:bg-blue-800"
            />

            <div className="py-6">
              {features.map((feature, i) => {
                return (
                  <p className="flex items-center gap-2" key={i}>
                    <Check className="w-4 h-4 mr-2 flex-shrink-0 text-blue-500" />
                    {feature}
                  </p>
                );
              })}
            </div>
          </div>
          <Image
            src="/doctor.jpg"
            alt=""
            width={1170}
            height={848}
            className="w-full"
          />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto gap-8 grid grid-cols-1 md:grid-cols-2">
          <Image
            src="/doctor.jpg"
            alt=""
            width={1170}
            height={848}
            className="w-full hidden md:block mr-4"
          />
          <div className="">
            <h2 className="sm:text-3xl text-2xl">
              Rejoindre doc4now pour augmenter vos
              <span className="text-blue-600 font-semibold mx-2">revenus</span>
              dès aujourd'hui.
            </h2>

            {/* <div className="py-6">
              {steps.map((steps, i) => {
                return (
                  <p className="flex items-center gap-2" key={i}>
                    <Check className="w-4 h-4 mr-2 flex-shrink-0 text-blue-500" />
                    {steps}
                  </p>
                );
              })}
            </div> */}
            <div className="grid grid-cols-2 gap-4 py-6">
              {cards.map((card, i) => {
                return (
                  <div
                    key={i}
                    className="bg-blue-900 p-4 rounded-lg shadow-2xl text-center"
                  >
                    <h3 className="text-2xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="text-gray-200 text-xs py-3">
                      {card.description}
                    </p>
                    <CustomButton
                      title={card.linkTitle}
                      href={card.link}
                      className="bg-blue-600 hover:bg-blue-800"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl gap-4 mx-auto">
          <Pricing />
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-2xl gap-4 mx-auto">
          <CustomAccordeon FAQS={faqs} />
        </div>
      </section>
    </div>
  );
}
