import Features from "@/components/Features";
import Gifts from "@/components/Gifts";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Timeline from "@/components/Timeline";


export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Timeline />
      <Guide />
      <Features />
      <Gifts />
    </>
  );
}
