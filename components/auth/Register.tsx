"use client";

import { type RegisterInputProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { creerUser } from "@/actions/users";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function RegisterWithBg({ role = "USER" }: { role?: UserRole }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  const router = useRouter();
  async function onSubmit(data: RegisterInputProps) {
    // console.log(data);
    setIsLoading(true);

    data.role = role;
    try {
      const user = await creerUser(data);
      if (user && user.status === 200) {
        console.log("Utilisateur est créé avec_succès");
        reset();
        setIsLoading(false);
        toast.success("Utilisateur créé avec succès!");
        router.push(`/verify-account/${user.data?.id}`);
        console.log(user?.data);
      } else {
        console.log(user?.error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Inscription</h1>
            <p className="text-balance text-muted-foreground">
              Entrez vos informations pour créer un compte
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <TextInput
              label="Prénom"
              register={register}
              name="firstName"
              errors={errors}
              placeholder="Entrer votre prénom"
            />

            <TextInput
              label="Nom"
              register={register}
              name="lastName"
              errors={errors}
              placeholder="Entrer votre Nom"
            />

            <TextInput
              label="Adresse Email"
              register={register}
              name="email"
              type="email"
              errors={errors}
              placeholder="Entrer votre adresse email"
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
              placeholder="Entrer un mot de passe"
            />

            <SubmitButton
              title="S'inscrire"
              isLoading={isLoading}
              loadingTitle="Inscription en cours..."
            />
            <Button variant="outline" className="w-full">
              S'inscrire' avec Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            vous avez déjà un compte?{" "}
            <Link href="/login" className="underline">
              Connectez vous
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/doctor.jpg"
          alt="Image"
          width="1170"
          height="848"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
function createUser(data: RegisterInputProps) {
  throw new Error("Function not implemented.");
}
