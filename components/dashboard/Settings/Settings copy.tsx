import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import GeneralSettings from "./GeneralSettings";

export const description =
  "A settings page. The settings page has a sidebar navigation and a main content area. The main content area has a form to update the store name and a form to update the plugins directory. The sidebar navigation has links to general, security, integrations, support, organizations, and advanced settings.";

export default function Settings() {
  const tabs = [
    {
      label: "Général",
      value: "general",
      component: <GeneralSettings />,
    },
    {
      label: "Sécurité",
      value: "security",
      component: <></>,
    },

    {
      label: "Intégrations",
      value: "integrations",
      component: <></>,
    },
    {
      label: "Support",
      value: "support",
      component: <></>,
    },
    {
      label: "Organisations",
      value: "organizations",
      component: <></>,
    },
    {
      label: "Avancées",
      value: "advanced",
      component: <></>,
    },
  ];
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 py-6">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Réglages</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <div className="">
          <Tabs defaultValue="general">
            <TabsList>
              {tabs.map((tab) => {
                return (
                  <TabsTrigger key={tab.value} value={tab.value}>
                    {tab.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {tabs.map((tab) => {
              return (
                <TabsContent
                  key={tab.value}
                  className="w-full"
                  value={tab.value}
                >
                  {tab.component}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </main>
  );
}
