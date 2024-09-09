import DoctorsList from "@/components/DoctorsList";
import Brand from "@/components/frontend/Brand";
import Hero from "@/components/frontend/Hero";
import TabbedSection from "@/components/frontend/TabbedSection";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <Brand />
      <TabbedSection />
      <DoctorsList />
      <DoctorsList
        className="bg-blue-50 dark:bg-slate-900 py-8 lg:py-24"
        title="Consultation au cabinet"
        isInPerson={true}
      />
    </section>
  );
}
