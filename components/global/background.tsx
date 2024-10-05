"use client";
import React from "react";
import { useEffect, useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="relative z-10 text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold shadow-lg">
          BRAIN-WAVE AI
        </h1>
        <h4 className="relative z-10 text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-600 text-center font-sans font-bold mt-4">
          Unlock the Power of Your Knowledge and Automate Your Life
        </h4>
        <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm text-center relative z-10">
          Brainwave AI is your digital second brain—a powerful tool that captures everything from ideas and bookmarks to tweets and web snippets, organizing them into a supermemory. But it doesn’t stop there. With built-in workflow automation, Brainwave AI helps you manage not only your knowledge but also your tasks, processes, and routines.
        </p>
        {/* <button className="relative z-10 mt-6 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-400 transition duration-300">
          Get Started
        </button> */}
      </div>
      <BackgroundBeams />
    </div>
  );
}
