import HeroSection from "@/components/HomeComponents/HeroSection";
import Services from "@/components/HomeComponents/Services";

import TopSell from "@/components/HomeComponents/TopSell";
import VideoSection from "@/components/HomeComponents/VideoSection";

export default function Home() {
  return (
      <main>
        <HeroSection />
        <TopSell />
        <Services />
        <VideoSection />
      </main>
  );
}
