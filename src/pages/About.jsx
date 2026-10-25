import PageHeader from "@/components/site/PageHeader";
import TeamStory from "@/components/about/TeamStory";
import PhilosophyBand from "@/components/about/PhilosophyBand";
import GearGrid from "@/components/about/GearGrid";
import BehindTheScenes from "@/components/about/BehindTheScenes";
import ClosingCta from "@/components/home/ClosingCta";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="The Studio"
        title="The Artists Behind the Lens"
        subtitle="Two founders, one small team, and a decade spent learning how to disappear into a wedding — so the day itself stays exactly as it happened."
      />
      <TeamStory />
      <PhilosophyBand />
      <GearGrid />
      <BehindTheScenes />
      <ClosingCta />
    </>
  );
}