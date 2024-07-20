import { Tabs } from "flowbite-react";
import { Activity, Microscope, Stethoscope, Syringe } from "lucide-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import ServiceList from "./services/ServiceList";
import LinkCards from "./doctors/LinkCards";

export default function TabbedItems() {
  const services = [
    {
      title: "Télésanté",
      image: "/doctor.jpg",
      slug: "telesante",
    },
    {
      title: "Video-préscription",
      image: "/doctor.jpg",
      slug: "video-prescription",
    },
    {
      title: "Consultation",
      image: "/doctor.jpg",
      slug: "consultation",
    },
    {
      title: "Santé mentale",
      image: "/doctor.jpg",
      slug: "sante-mentale",
    },
    {
      title: "Consultation en urgence",
      image: "/doctor.jpg",
      slug: "consultation-en-urgence",
    },
    {
      title: "Soins urgents",
      image: "/doctor.jpg",
      slug: "soins-urgents",
    },
  ];

  const tabs = [
    {
      title: "Services populaires",
      icon: Stethoscope,
      component: <ServiceList data={services} />,
      content: [],
    },
    {
      title: "Généralistes",
      icon: Microscope,
      component: <LinkCards className="bg-yellow-400" />,
      content: [],
    },
    {
      title: "Spécialistes",
      icon: Activity,
      component: <LinkCards className="bg-blue-400" />,
      content: [],
    },
    {
      title: "Symptômes",
      icon: Syringe,
      component: <LinkCards className="bg-green-400" />,
      content: [],
    },
  ];

  return (
    <Tabs aria-label="Tabs with underline" variant="underline">
      {tabs.map((tab, i) => {
        return (
          <Tabs.Item key={i} active title={tab.title} icon={tab.icon}>
            {tab.component}
          </Tabs.Item>
        );
      })}
    </Tabs>
  );
}
