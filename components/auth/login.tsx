"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";

import TextInput from "../FormInputs/TextInput";
import { useForm } from "react-hook-form";

import { LoginInputProps } from "@/types/types";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

export default function LoginFormWithBg() {
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
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            {showNotification && (
              <Alert color="failure" icon={HiInformationCircle}>
                <span className="font-medium">Erreur de connexion !</span>{" "}
                Veuillez vérifier vos identifiants
              </Alert>
            )}

            <TextInput
              label="Adresse Email"
              register={register}
              name="email"
              type="email"
              errors={errors}
              placeholder="aryad@gmail.com"
            />

            <TextInput
              label="Mot de passe"
              register={register}
              name="password"
              type="password"
              page="login"
              errors={errors}
              placeholder="*******"
            />

            <SubmitButton
              title="Se connecter"
              isLoading={isLoading}
              loadingTitle="Connection en cours..."
            />
            <Button variant="outline" className="w-full">
              Se connecter avec Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            vous n'avez pas de compte?{" "}
            <Link href="/register" className="underline">
              Inscrivez vous
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
