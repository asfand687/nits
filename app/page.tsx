import Image from "next/image";
import Navbar from "./(components)/Navbar";
import Header from "./(components)/Header";
import Features from "./(components)/Features";
import Services from "./(components)/Services";
import MoreFeatures from "./(components)/MoreFeatures";
import HowItWorks from "./(components)/HowItWorks";
import Pricing from "./(components)/Pricing";

export default function Home() {
  return (
    <main className="text-[#0f2137] overflow-x-hidden">
      <Header/>
      <Features/>
      <Services/>
      <MoreFeatures/>
      <HowItWorks/>
      <Pricing/>
    </main>
  );
}
