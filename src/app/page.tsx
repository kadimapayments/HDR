import { HeroSection } from "@/components/home/HeroSection";
import { ManufacturerStrip } from "@/components/home/ManufacturerStrip";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { FeaturedSystems } from "@/components/home/FeaturedSystems";
import { ShowroomPreview } from "@/components/home/ShowroomPreview";
import { FireRebuildCard } from "@/components/home/FireRebuildCard";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ManufacturerStrip />
      <WhoWeServe />
      <FeaturedSystems />
      <ShowroomPreview />
      <FireRebuildCard />
      <FinalCTA />
    </>
  );
}
