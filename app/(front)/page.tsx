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
        className="bg-white py-8 lg:py-24"
        title="Consultation au cabinet"
        isInPerson={true}
      />
    </section>
  );
}
