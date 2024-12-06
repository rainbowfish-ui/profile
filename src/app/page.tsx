import Hero from "@/components/home/hero";
import Showcase from "@/components/home/showcase";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center flex-col bg-[#FAFAFA]">
      <Navbar />
      <Hero />
      <Showcase />
    </div>
  );
}
