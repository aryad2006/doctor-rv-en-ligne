import Footer from "@/components/frontend/Footer";
import MegaMenu from "@/components/frontend/MegaMenu";
import Navbar from "@/components/frontend/Navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-[#fde047]">
        <Navbar />
        <div className="max-w-5xl mx-auto py-6">
          <MegaMenu />
        </div>
      </div>
      <div className="mt-[30px]">{children}</div>
      <Footer />
    </>
  );
}
