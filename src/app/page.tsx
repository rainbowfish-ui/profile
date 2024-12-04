import Hero from "@/components/home/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center flex-col">
      <Navbar />
      <Hero />
    </div>
  );
}
