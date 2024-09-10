import Footer from "@/components/frontend/Footer";
import { getServerSession, Session } from "next-auth";
import SiteHeader from "@/components/site-header";
import React from "react";
import { authOptions } from "@/lib/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="">
        <SiteHeader session={session} />
      </div>
      {children}
      <Footer />
    </>
  );
}
