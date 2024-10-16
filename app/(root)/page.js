import Hero from "@/components/root/Hero";
import ProgressTracker from "@/components/root/ProgressTracker";
import ScreenShot from "@/components/root/ScreenShot"
import FeatureList from "@/components/root/FeatureList";
import Image from "next/image";
import Cta from "@/components/root/Cta";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-10 px-10">
      <Hero />
      <ScreenShot />
      <ProgressTracker />
      <FeatureList />
      <Cta />
    </div>
  );
}
