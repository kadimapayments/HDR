import { HeroSection } from "@/components/home/HeroSection";
import { ManufacturerStrip } from "@/components/home/ManufacturerStrip";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { FeaturedSystems } from "@/components/home/FeaturedSystems";
import { ShowroomPreview } from "@/components/home/ShowroomPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ResourcesPreview } from "@/components/home/ResourcesPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ManufacturerStrip />
      <WhoWeServe />
      <FeaturedSystems />
      <ShowroomPreview />
      <FeaturedProjects />
      <ResourcesPreview />
      <FinalCTA />
    </>
  );
}
