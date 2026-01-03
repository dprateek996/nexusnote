"use client";
import React, { useState } from "react";
import { Sidebar as AceternitySidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconSettings,
  IconUserBolt,
  IconNote,
  IconLayoutDashboard,
  IconChartPie,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Sidebar() {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconLayoutDashboard className="text-slate-500 group-hover/sidebar:text-rose-500 flex-shrink-0" style={{ height: 'var(--size-sm)', width: 'var(--size-sm)' }} />
      ),
    },
    {
      label: "All Notes",
      href: "/notes",
      icon: (
        <IconNote className="text-slate-500 group-hover/sidebar:text-rose-500 flex-shrink-0" style={{ height: 'var(--size-sm)', width: 'var(--size-sm)' }} />
      ),
    },
    {
      label: "Expenses",
      href: "/expenses",
      icon: (
        <IconChartPie className="text-slate-500 group-hover/sidebar:text-rose-500 flex-shrink-0" style={{ height: 'var(--size-sm)', width: 'var(--size-sm)' }} />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUserBolt className="text-slate-500 group-hover/sidebar:text-rose-500 flex-shrink-0" style={{ height: 'var(--size-sm)', width: 'var(--size-sm)' }} />
      ),
    },
    {
      label: "Settings",
      href: "/settings",
      icon: (
        <IconSettings className="text-slate-500 group-hover/sidebar:text-rose-500 flex-shrink-0" style={{ height: 'var(--size-sm)', width: 'var(--size-sm)' }} />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <AceternitySidebar open={open} setOpen={setOpen} animate={true}>
      <SidebarBody className="justify-between bg-white border-r border-slate-100" style={{ gap: 'var(--spacing-xl)', boxShadow: 'var(--shadow-sm)' }}>
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="flex flex-col" style={{ marginTop: 'var(--spacing-xl)', gap: 'var(--spacing-sm)' }}>
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} className="hover:bg-rose-50/50 transition-colors" style={{ borderRadius: 'var(--radius-lg)' }} />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Prateek Dwivedi",
              href: "#",
              icon: (
                <div className="flex-shrink-0 rounded-full bg-rose-500 overflow-hidden border-2 border-white" style={{ height: 'var(--size-sm)', width: 'var(--size-sm)', boxShadow: 'var(--shadow-sm)' }} />
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
      className="font-normal flex items-center text-sm text-black py-1 relative"
      style={{ gap: 'var(--spacing-sm)', zIndex: 'var(--z-sticky)' }}
    >
      <div className="bg-rose-500 flex-shrink-0" style={{ height: 'var(--size-sm)', width: 'var(--size-sm)', borderRadius: 'var(--radius-md) var(--radius-xs) var(--radius-md) var(--radius-xs)' }} />
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
      className="font-normal flex items-center text-sm text-black py-1 relative"
      style={{ gap: 'var(--spacing-sm)', zIndex: 'var(--z-sticky)' }}
    >
      <div className="bg-rose-500 flex-shrink-0" style={{ height: 'var(--size-sm)', width: 'var(--size-sm)', borderRadius: 'var(--radius-md) var(--radius-xs) var(--radius-md) var(--radius-xs)' }} />
    </Link>
  );
};
export default Sidebar;