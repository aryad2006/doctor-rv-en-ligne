"use client";

import Link from "next/link";
import TextInput from "../FormInputs/TextInput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { LoginInputProps } from "@/types/types";
import SubmitButton from "../FormInputs/SubmitButton";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputProps>();
  async function onSubmit(data: LoginInputProps) {
    try {
      setIsLoading(true);
      console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        setIsLoading(false);
        toast.error("Erreur de connexion : vérifiez vos identifiants");
        setShowNotification(true);
      } else {
        // Sign-in was successful
        setShowNotification(false);
        reset();
        setIsLoading(false);
        toast.success("Connexion réussie");
        router.push("/dashboard");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Erreur réseau:", error);
      toast.error("Il semble que quelque chose ne va pas avec votre réseau");
    }
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            connectez vous à votre compte
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {showNotification && (
              <Alert color="failure" icon={HiInformationCircle}>
                <span className="font-medium">Erreur de connexion !</span>{" "}
                Veuillez vérifier vos identifiants
              </Alert>
            )}
            <TextInput
              label="Email"
              register={register}
              name="email"
              type="email"
              errors={errors}
              placeholder="Entrer votre adresse email"
            />

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mot de passe
                </label>
                <div className="text-sm">
                  <Link
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Mot de passe oublié?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <SubmitButton
                title="Se connecter"
                isLoading={isLoading}
                loadingTitle="Connection en cours..."
              />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Vous n'avez pas de compte?{" "}
            <Link
              href="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Inscrivez vous
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
