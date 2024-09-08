import Footer from "@/components/frontend/Footer";
import MegaMenu from "@/components/frontend/MegaMenu";
import SiteHeader from "@/components/site-header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="">
        <SiteHeader />
      </div>
      {children}
      <Footer />
    </>
  );
}
