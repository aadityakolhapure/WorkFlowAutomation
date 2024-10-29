import Image from "next/image";
import { FloatingNavDemo } from "@/components/global/floatingbar";
// import { FeaturesSectionDemo } from "@/components/global/about";
import {GridBackgroundDemo} from "@/components/global/backgroundgrid";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Hero from '@/components/global/Hero';
import {FeaturesSectionDemo} from "@/components/global/features"
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="h-screen">
      <FloatingNavDemo />
      {/* <div className="h-64 h-[40rem]">
        <GridBackgroundDemo />
      </div> */}
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

      <FeaturesSectionDemo />
    </div>
    
  );
}
