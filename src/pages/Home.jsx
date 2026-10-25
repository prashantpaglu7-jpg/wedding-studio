import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import FilmFeature from "@/components/home/FilmFeature";
import Expertise from "@/components/home/Expertise";
import ClientLove from "@/components/home/ClientLove";
import ClosingCta from "@/components/home/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FilmFeature />
      <Expertise />
      <ClientLove />
      <ClosingCta />
    </>
  );
}