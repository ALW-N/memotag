"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

import logo from "@/assets/memotag-logo.svg";

import { ModeToggle } from "./mode-toggle";


export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#features",
    },
    {
      name: "About Us",
      link: "https://www.memotag.io/about",
    },
    {
      name: "Contact",
      link: "https://www.memotag.io/waitlist-form",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-5 left-0 w-full z-50 bg-white dark:bg-black">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <div className="relative">
              <ModeToggle />
            </div>

            
            <NavbarButton variant="primary" href="https://chat.whatsapp.com/FOreKmWYdll4XPQPCZNrWS">Book a call</NavbarButton>
            
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <img src={logo} alt="Logo" className="h-8 w-auto mx-auto" />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <ModeToggle />
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
