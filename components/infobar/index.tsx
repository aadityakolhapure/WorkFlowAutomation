'use client';

import React, { useState, useEffect } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '../global/mode-toggle'
import { Book, Headphones, Search } from 'lucide-react'
import Templates from '../icons/cloud_download'
import { Input } from '@/components/ui/input'

type Props = {}

const InfoBar = (props: Props) => {
  const [tier, setTier] = useState<string>('Free'); // Initialize tier to a known value

  useEffect(() => {
    onGetPayment();
  }, []);

  const onGetPayment = async () => {
    // Implement the logic to fetch the payment details and update the tier
    const response = { tier: 'Pro', credits: 80 };
    setTier(response.tier);
    setCredits(response.credits);
  };

  const [credits, setCredits] = useState<number>(0);

  return (
    <div className="flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black ">
      <span className="flex items-center gap-2 font-bold">
        <p className="text-sm font-light text-gray-300">Credits</p>
        {tier === 'Unlimited' ? (
          <span>Unlimited</span>
        ) : (
          <span>
            {credits}/{tier === 'Free' ? '10' : tier === 'Pro' && '100'}
          </span>
        )}
      </span>
      <span className="flex items-center rounded-full bg-muted px-4">
        <Search />
        <Input
          placeholder="Quick Search"
          className="border-none bg-transparent"
        />
      </span>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Headphones />
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact Support</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Book />
          </TooltipTrigger>
          <TooltipContent>
            <p>Guide</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <UserButton />
    </div>
  );
};

export default InfoBar;