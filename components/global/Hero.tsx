"use client";
import React from "react";
import { motion } from "framer-motion";
import { TwitterBorder } from "@/components/global/twitterLink";
import AnimatedLogoCloud from "@/components/global/ImageSliders";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";
import ShineBorder from "@/components/magicui/shine-border";

const slap = {
  initial: {
    opacity: 0,
    scale: 1.1,
  },
  whileInView: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
  viewport: { once: true },
};

function Hero() {
  return (
    <>
      <section className="flex relative flex-col gap-5 justify-center items-center mt-24 max-w-xl md:mt-32 md:max-w-2xl lg:max-w-3xl">
        {/* <TwitterBorder /> */}
        <motion.h1
          {...{
            ...slap,
            transition: { ...slap.transition, delay: 0.2 },
          }}
          className="text-center mx-auto bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] bg-clip-text text-4xl tracking-tighter sm:text-5xl text-transparent md:text-6xl lg:text-7xl"
        >
          <span className="text-black dark:text-white">
            Unlock the Power of{" "}
          </span>
          <span className="text-transparent bg-clip-text bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            Automation
          </span>{" "}
          <span className="text-black dark:text-white">with </span>
          <span className="relative inline-block text-black dark:text-white">
            Brainwave.ai
            <span
              className="absolute left-0 bottom-[-8px] w-full bg-purple-600"
              style={{
                height: "5px",
                borderRadius: "50%",
                transform: "scaleY(0)",
                transformOrigin: "bottom",
              }}
            />
          </span>
        </motion.h1>

        <motion.p
          {...{
            ...slap,
            transition: { ...slap.transition, delay: 0.3 },
          }}
          className="text-lg text-center text-soft-foreground-text"
        >
          Brainwave AI streamlines your workflows by automating tasks, routines,
          and processes, saving you time and effort. It efficiently manages your
          day-to-day operations, allowing you to focus on what matters most
          without getting bogged down by repetitive tasks.
        </motion.p>

        <Link href="/signin">
          <ShimmerButton className="shadow-2xl   ">
            <span className="flex whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              It&apos;s free. Sign up now
              <div className="flex overflow-hidden relative justify-center items-center ml-1 w-5 h-5">
                <ArrowUpRight className="absolute transition-all duration-500 group-hover:translate-x-4 group-hover:-translate-y-5" />
                <ArrowUpRight className="absolute transition-all duration-500 -translate-x-4 -translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </span>
          </ShimmerButton>
        </Link>
      </section>

      {/* <AnimatedLogoCloud /> */}

      <div className="relative hidden sm:block">
        <ShineBorder
          className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl mt-6"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <motion.img
            {...{
              ...slap,
              transition: { ...slap.transition, delay: 0.35 },
            }}
            src="temp-banner.png"
            alt="Landing page background"
            width={1512}
            height={1405}
            draggable="false"
            className="z-40 hidden sm:block h-full max-w-[70vw] mx-auto md:w-full select-none p-3 !rounded-2xl"
            style={{
              borderRadius: "20px",
            }}
          />
        </ShineBorder>
        <div
          className="absolute -z-10 left-0 top-[10%] h-32 w-[90%] overflow-x-hidden bg-[rgb(54,157,253)] bg-opacity-100 blur-[337.4px]"
          style={{ transform: "rotate(-30deg)" }}
        />
      </div>
    </>
  );
}

export default Hero;
