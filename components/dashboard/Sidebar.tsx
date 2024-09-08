"use client";

import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const sideBarLinks = [
    {
      name: "Tableau de bord",
      path: "/dashboard",
      icon: Home,
    },

    {
      name: "Produits",
      path: "/dashboard/products",
      icon: Package,
    },
    {
      name: "Ordres",
      path: "/dashboard/orders",
      icon: ShoppingCart,
      badgeCount: 6,
    },
    {
      name: "Clients",
      path: "/das",
      icon: Users,
    },
    {
      name: "Analyses",
      path: "/dashboard/analytics",
      icon: LineChart,
    },
    {
      name: "Réglages",
      path: "/dashboard/settings",
      icon: Settings,
    },
  ];
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {sideBarLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  key={i}
                  href={item.path}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    pathname === item.path ? " bg-muted text-primary  " : ""
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                  {item.badgeCount && (
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      {item.badgeCount}
                    </Badge>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Passer à Pro</CardTitle>
              <CardDescription>
                Débloquez toutes les fonctionnalités et obtenez un accès
                illimité à notre support.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Mettre à jour
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
