import LoginForm from "@/components/auth/LoginForm";
import RegisterWithBg from "@/components/auth/Register";
import RegisterForm from "@/components/auth/RegisterForm";
import Image from "next/image";
import React from "react";

export default function page({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { role, plan } = searchParams;
  console.log(role, plan);

  return (
    <div className="">
      <RegisterWithBg role={role as string} plan={plan as string} />
    </div>
  );
}
