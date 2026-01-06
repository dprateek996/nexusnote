"use client";

import React from "react";
import {
  Sidebar as SidebarComponent,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  IconLayoutDashboard,
  IconNote,
  IconChartPie,
  IconUserBolt,
  IconSettings,
  IconSparkles,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();
  const { open, isMobile } = useSidebar();

  const mainNavigation = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <IconLayoutDashboard className="h-5 w-5" />,
    },
    {
      label: "All Notes",
      href: "/notes",
      icon: <IconNote className="h-5 w-5" />,
    },
    {
      label: "Expenses",
      href: "/expenses",
      icon: <IconChartPie className="h-5 w-5" />,
    },
  ];

  const secondaryNavigation = [
    {
      label: "Profile",
      href: "/profile",
      icon: <IconUserBolt className="h-5 w-5" />,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <IconSettings className="h-5 w-5" />,
    },
  ];

  return (
    <SidebarComponent collapsible="icon">
      <SidebarHeader>
        <Logo />
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarMenu>
            {mainNavigation.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  href={item.href}
                  icon={item.icon}
                  isActive={pathname === item.href}
                >
                  {item.label}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Secondary Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarMenu>
            {secondaryNavigation.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  href={item.href}
                  icon={item.icon}
                  isActive={pathname === item.href}
                >
                  {item.label}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <UserProfile />
      </SidebarFooter>
    </SidebarComponent>
  );
}

function Logo() {
  const { open, isMobile } = useSidebar();
  const shouldShowText = open || isMobile;

  return (
    <Link
      href="/dashboard"
      className="flex items-center gap-3 py-1 group"
    >
      <div className="relative flex-shrink-0">
        <div
          className="bg-gradient-to-br from-rose-500 to-rose-600 shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:shadow-rose-200"
          style={{
            height: "2rem",
            width: "2rem",
            borderRadius: "0.5rem 0.125rem 0.5rem 0.125rem",
          }}
        />
        <IconSparkles className="absolute inset-0 m-auto h-4 w-4 text-white" />
      </div>
      <motion.span
        animate={{
          opacity: shouldShowText ? 1 : 0,
          width: shouldShowText ? "auto" : 0,
        }}
        className="overflow-hidden whitespace-nowrap text-lg font-semibold text-slate-900"
      >
        NexusNote
      </motion.span>
    </Link>
  );
}

function UserProfile() {
  const { open, isMobile } = useSidebar();
  const shouldShowDetails = open || isMobile;

  return (
    <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50 transition-colors">
      <div
        className="flex-shrink-0 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 border-2 border-white shadow-sm"
        style={{ height: "2rem", width: "2rem" }}
      />
      <motion.div
        animate={{
          opacity: shouldShowDetails ? 1 : 0,
          width: shouldShowDetails ? "auto" : 0,
        }}
        className="flex-1 overflow-hidden"
      >
        <div className="text-sm font-medium text-slate-900 truncate">
          Prateek Dwivedi
        </div>
        <div className="text-xs text-slate-500 truncate">
          prateek@nexusnote.com
        </div>
      </motion.div>
    </div>
  );
}

export default AppSidebar;