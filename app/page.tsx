import Image from "next/image";
import { FloatingNavDemo } from "@/components/global/floatingbar";
import { FeaturesSectionDemo } from "@/components/global/about";
import {GridBackgroundDemo} from "@/components/global/backgroundgrid";

export default function Home() {
  return (
    <div className="h-screen">
      <FloatingNavDemo />
      <div className="h-64 h-[40rem]">
        <GridBackgroundDemo />
      </div>
    </div>
  );
}
