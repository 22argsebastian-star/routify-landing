import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import WhatIsIncluded from "@/components/sections/WhatIsIncluded";
import Guarantee from "@/components/sections/Guarantee";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <WhatIsIncluded />
      <Pricing />
      <Guarantee />
      <FinalCTA />
    </main>
  );
}
