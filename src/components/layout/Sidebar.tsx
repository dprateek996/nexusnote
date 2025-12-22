"use client";
import React, { useState } from "react";
import { Sidebar as AceternitySidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconNote,
  IconLayoutDashboard,
  IconChartPie,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconLayoutDashboard className="text-slate-500 h-5 w-5 flex-shrink-0 group-hover/sidebar:text-rose-500" />
      ),
    },
    {
      label: "All Notes",
      href: "/notes",
      icon: (
        <IconNote className="text-slate-500 h-5 w-5 flex-shrink-0 group-hover/sidebar:text-rose-500" />
      ),
    },
    {
      label: "Expenses",
      href: "/expenses",
      icon: (
        <IconChartPie className="text-slate-500 h-5 w-5 flex-shrink-0 group-hover/sidebar:text-rose-500" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUserBolt className="text-slate-500 h-5 w-5 flex-shrink-0 group-hover/sidebar:text-rose-500" />
      ),
    },
    {
      label: "Settings",
      href: "/settings",
      icon: (
        <IconSettings className="text-slate-500 h-5 w-5 flex-shrink-0 group-hover/sidebar:text-rose-500" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <AceternitySidebar open={open} setOpen={setOpen} animate={true}>
      <SidebarBody className="justify-between gap-10 bg-white border-r border-slate-100 shadow-sm">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} className="hover:bg-rose-50/50 rounded-xl transition-colors" />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Prateek Dwivedi",
              href: "#",
              icon: (
                <div className="h-7 w-7 flex-shrink-0 rounded-full bg-rose-500 overflow-hidden border-2 border-white shadow-sm" />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </AceternitySidebar>
  );
}

export const Logo = () => {
  return (
    <Link
      href="/dashboard"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-6 w-6 bg-rose-500 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black text-lg whitespace-pre"
      >
        NexusNote
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="/dashboard"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-6 w-6 bg-rose-500 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
export default Sidebar;