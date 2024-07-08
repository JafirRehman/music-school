"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-10" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl w-[90%] mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 ">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Guitar</HoveredLink>
            <HoveredLink href="/courses">Violin</HoveredLink>
            <HoveredLink href="/courses">Flute</HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="/contactus">Contact Us</HoveredLink>
      </Menu>
    </div>
  );
}
