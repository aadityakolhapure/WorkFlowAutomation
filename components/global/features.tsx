'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';
import { AboutSectionDemo } from '@/components/global/about';
import DotPattern from "@/components/magicui/dot-pattern";
import { motion } from 'framer-motion';
import { IconBrandYoutubeFilled } from '@tabler/icons-react';
import Link from 'next/link';

export function FeaturesSectionDemo() {
  return (
    
    <div className="relative z-20 py-24 lg:py-40 max-w-7xl mx-auto">
      <DotPattern className=" opacity-40" />
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          <span className="text-transparent bg-clip-text bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            Brainwave.ai
          </span>
          <span className="text-black dark:text-neutral-300"> automates your life....</span>
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-8 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Brainwave.ai automates your life by capturing, organizing, and resurfacing everything you need to remember, from bookmarks to tweets, with powerful search, AI assistance, and seamless workflow automation.
        </p>
      </div>

      <div className="relative ">
        <AboutSectionDemo />
      </div>
    </div>
  );
}