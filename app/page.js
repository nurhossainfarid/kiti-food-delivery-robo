import HeroSection from "@/components/HomeComponents/HeroSection";
import Services from "@/components/HomeComponents/Services";

import VideoSection from "@/components/HomeComponents/VideoSection";
import HomeFoodItems from "@/components/HomeComponents/HomeFoodItems";
import TopSell from "@/components/HomeComponents/TopSell";

export default function Home() {
  return (
      <main className="bg-gradient-to-tl from-indigo-50 to-blue-200  " >
        <HeroSection />
        <HomeFoodItems />
        <Services />
        <TopSell />
        <VideoSection />
      </main>
  );
}
