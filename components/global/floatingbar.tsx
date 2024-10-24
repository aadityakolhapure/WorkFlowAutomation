"use client";
import { cn } from "@/lib/utils"; // Ensure the correct path to your utility

import React from "react";
import { useEffect, useState } from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { BackgroundBeamsDemo } from "../global/background";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Hero from '@/components/global/Hero';
import Image from "next/image"; // Import next/image for the logo
import Logo from "@/public/logo.svg";

import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "",
      link: "/",
      icon: (
        <Image
          src={Logo}
          alt="Supermemory logo"
          className="bg-gray-500 rounded-full"
          width={30}
          height={30}
        />
      ),
    },
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}

const DummyContent = () => {
  return (
    // <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
    //   <BackgroundBeamsDemo />
    // </div>
    <div className="relative flex-col flex w-full items-center  justify-center overflow-hidden rounded-lg  bg-background md:p-20 p-6 ">
        <Hero />

        <AnimatedGridPattern
          numSquares={50}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={2}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] ",
            "inset-x-0 inset-y-[-50%] h-[400%] skew-y-12",
          )}
        />
      </div>

  );
};
