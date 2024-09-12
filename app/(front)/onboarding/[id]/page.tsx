import React from "react";
import OnboardingSteps from "@/components/onboarding/OnboardingSteps";

export default function page({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="bg-teal-700 dark:bg-slate-800">
      <div className="max-w-5xl mx-auto py-8 min-h-screen">
        <OnboardingSteps id={id} />
      </div>
    </div>
  );
}
