import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Ecosystem3D } from "@/components/sections/Ecosystem3D";
import { InvestorPartner } from "@/components/sections/InvestorPartner";
import { Heritage } from "@/components/sections/Heritage";
import { WhyUs } from "@/components/sections/WhyUs";
import { Trading } from "@/components/sections/Trading";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Header />
      <Hero />
      <About />
      {/* Mobile: show 2D bento. Desktop: show 3D orbital */}
      <div className="block md:hidden">
        <Ecosystem />
      </div>
      <Ecosystem3D />
      <InvestorPartner />
      <Heritage />
      <WhyUs />
      <Trading />
      <Contact />
      <Footer />
    </main>
  );
}

