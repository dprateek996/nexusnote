"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

// ===================================
// CONTEXT & PROVIDER
// ===================================

interface SidebarContextValue {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

interface SidebarProviderProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function SidebarProvider({
  children,
  defaultOpen = true,
  open: openProp,
  onOpenChange,
}: SidebarProviderProps) {
  const [_open, _setOpen] = React.useState(defaultOpen);
  const [openMobile, setOpenMobile] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const newValue = typeof value === "function" ? value(open) : value;
      if (onOpenChange) {
        onOpenChange(newValue);
      } else {
        _setOpen(newValue);
      }
    },
    [onOpenChange, open]
  );

  const toggleSidebar = React.useCallback(() => {
    if (isMobile) {
      setOpenMobile((prev) => !prev);
    } else {
      setOpen((prev) => !prev);
    }
  }, [isMobile, setOpen]);

  // Detect mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const state = open ? "expanded" : "collapsed";

  return (
    <SidebarContext.Provider
      value={{
        state,
        open,
        setOpen,
        openMobile,
        setOpenMobile,
        isMobile,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

// ===================================
// SIDEBAR MAIN COMPONENT
// ===================================

interface SidebarProps extends React.ComponentProps<"aside"> {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}

export function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "icon",
  className,
  children,
  ...props
}: SidebarProps) {
  const { isMobile, openMobile } = useSidebar();

  if (isMobile) {
    return <SidebarMobile side={side}>{children}</SidebarMobile>;
  }

  return (
    <SidebarDesktop
      side={side}
      variant={variant}
      collapsible={collapsible}
      className={className}
      {...props}
    >
      {children}
    </SidebarDesktop>
  );
}

// ===================================
// DESKTOP SIDEBAR
// ===================================

function SidebarDesktop({
  side,
  variant,
  collapsible,
  className,
  children,
}: SidebarProps) {
  const { open } = useSidebar();

  return (
    <motion.aside
      data-side={side}
      data-variant={variant}
      data-collapsible={collapsible}
      data-state={open ? "expanded" : "collapsed"}
      className={cn(
        "group/sidebar relative flex h-screen flex-col border-r border-slate-100 bg-white",
        "transition-all duration-300 ease-in-out",
        className
      )}
      animate={{
        width: collapsible === "icon" && !open ? "4rem" : "16rem",
      }}
    >
      {children}
    </motion.aside>
  );
}

// ===================================
// MOBILE SIDEBAR
// ===================================

function SidebarMobile({
  side,
  children,
}: {
  side?: "left" | "right";
  children: React.ReactNode;
}) {
  const { openMobile, setOpenMobile } = useSidebar();

  return (
    <>
      <AnimatePresence>
        {openMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenMobile(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />
            {/* Sidebar */}
            <motion.aside
              initial={{ x: side === "left" ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: side === "left" ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={cn(
                "fixed top-0 z-50 h-screen w-64 border-r border-slate-100 bg-white shadow-lg",
                side === "left" ? "left-0" : "right-0"
              )}
            >
              {children}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ===================================
// SIDEBAR STRUCTURE COMPONENTS
// ===================================

export function SidebarHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-2 p-4 border-b border-slate-100", className)}
      {...props}
    />
  );
}

export function SidebarContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-1 flex-col gap-2 overflow-y-auto p-4", className)}
      {...props}
    />
  );
}

export function SidebarFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-2 p-4 border-t border-slate-100", className)}
      {...props}
    />
  );
}

export function SidebarGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-1", className)} {...props} />;
}

export function SidebarGroupLabel({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { open, isMobile } = useSidebar();
  const shouldShow = open || isMobile;

  return (
    <motion.div
      animate={{
        opacity: shouldShow ? 1 : 0,
        height: shouldShow ? "auto" : 0,
      }}
      className={cn(
        "px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500",
        "overflow-hidden",
        className
      )}
      {...props}
    />
  );
}

export function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<"hr">) {
  return (
    <hr
      className={cn("my-2 border-slate-100", className)}
      {...props}
    />
  );
}

// ===================================
// SIDEBAR MENU COMPONENTS
// ===================================

export function SidebarMenu({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul className={cn("flex flex-col gap-1", className)} {...props} />
  );
}

export function SidebarMenuItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return <li className={cn("list-none", className)} {...props} />;
}

interface SidebarMenuButtonProps extends React.ComponentProps<typeof Link> {
  isActive?: boolean;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
}

export function SidebarMenuButton({
  isActive,
  icon,
  badge,
  className,
  children,
  href,
  ...props
}: SidebarMenuButtonProps) {
  const { open, isMobile } = useSidebar();
  const shouldShowLabel = open || isMobile;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5",
        "text-sm font-medium text-slate-700 font-mono",
        "transition-all duration-200",
        "hover:bg-[#A3684D]/5 hover:text-[#A3684D]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3684D] focus-visible:ring-offset-2",
        isActive &&
        "bg-[#A3684D]/10 text-[#A3684D] shadow-sm",
        className
      )}
      style={{ textTransform: 'lowercase' }}
      {...props}
    >
      {icon && (
        <span className="flex-shrink-0 text-current">{icon}</span>
      )}
      <motion.span
        animate={{
          opacity: shouldShowLabel ? 1 : 0,
          width: shouldShowLabel ? "auto" : 0,
        }}
        className="flex-1 truncate overflow-hidden whitespace-nowrap"
      >
        {children}
      </motion.span>
      {badge && shouldShowLabel && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {badge}
        </motion.span>
      )}
    </Link>
  );
}

export function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex h-5 min-w-5 items-center justify-center rounded-full",
        "bg-rose-500 px-1.5 text-xs font-semibold text-white",
        className
      )}
      {...props}
    />
  );
}

// ===================================
// SIDEBAR TRIGGER
// ===================================

export function SidebarTrigger({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { toggleSidebar, isMobile, openMobile, open } = useSidebar();

  return (
    <button
      type="button"
      onClick={toggleSidebar}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg",
        "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
        "transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2",
        className
      )}
      aria-label="Toggle sidebar"
      {...props}
    >
      {isMobile && openMobile ? (
        <IconX className="h-5 w-5" />
      ) : (
        <IconMenu2 className="h-5 w-5" />
      )}
    </button>
  );
}

// ===================================
// SIDEBAR INSET (for main content)
// ===================================

export function SidebarInset({
  className,
  ...props
}: React.ComponentProps<"main">) {
  return (
    <main
      className={cn("flex flex-1 flex-col overflow-hidden", className)}
      {...props}
    />
  );
}