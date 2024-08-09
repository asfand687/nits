import Image from "next/image";
import Navbar from "./(components)/Navbar";
import Header from "./(components)/Header";
import Features from "./(components)/Features";
import Services from "./(components)/Services";

export default function Home() {
  return (
    <main className="text-[#0f2137]">
      <Header/>
      <Features/>
      <Services/>
    </main>
  );
}
