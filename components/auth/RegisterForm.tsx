"use client";

import { type RegisterInputProps } from "@/types/types";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  async function onSubmit(data: RegisterInputProps) {
    console.log(data);
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Créer votre compte
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <TextInput
            label="Prénom"
            register={register}
            name="firstName"
            errors={errors}
          />

          <TextInput
            label="Nom"
            register={register}
            name="lastName"
            errors={errors}
          />

          <TextInput
            label="Email"
            register={register}
            name="email"
            type="email"
            errors={errors}
          />

          <TextInput
            label="Téléphone"
            register={register}
            name="phone"
            type="tel"
            errors={errors}
          />

          <TextInput
            label="Mot de passe"
            register={register}
            name="password"
            type="password"
            errors={errors}
          />

          {/* <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mot de passe
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input
                {...register("password", { required: true })}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors["password"] && (
                <span className="text-red-600 text-sm">
                  Mot de passe est obligatoire
                </span>
              )}
            </div>
          </div> */}

          <div>
            <SubmitButton
              title="Créer votre compte"
              isLoading={isLoading}
              loadingTitle="Création en cours..."
            />
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Vous avez déjà un compte?{" "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Connectez vous
          </Link>
        </p>
      </div>
    </div>
  );
}
