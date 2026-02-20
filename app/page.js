import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";
import Image from "next/image";
import ProjectShowcase from "./components/ProjectShowcase";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import LensSection from "./components/LensSection";
import ReadyToStart from "./components/ReadyToStart";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Navbar />
      </div>
      
      {/* Main Content with padding for fixed navbar */}
      <div className="flex-1 pt-20">
        <div className="max-w-6xl mx-auto">
          <Hero />
        </div>
        
        {/* <Banner /> */}
      
      <div className="flex justify-between items-center gap-32 overflow-hidden  py-16">

        {/* LEFT STACK */}
        <div className="relative w-full h-full">
          {/* Card 1 */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 rotate-4 z-20">
            <div className="relative w-[280px] h-[320px] rounded-xl ">
              <Image
                src="/assets/img/banner-one.png"
                alt="Dummy UI"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="absolute left-24 top-1/2 -translate-y-1/2 rotate-6 z-10">
            <div className="relative w-[460px] h-[320px] rounded-xl">
              <Image
                src="/assets/img/banner-two.png"
                alt="Dummy UI"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* RIGHT STACK */}
        <div className="relative w-[420px] h-[380px]">
          {/* Card 1 */}
          <div className="absolute right-20 top-1/2 -translate-y-1/2 -rotate-1 z-10">
            <div className="relative w-[440px] h-[320px] rounded-xl">
              <Image
                src="/assets/img/banner-three.png"
                alt="Dummy UI"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="absolute right-0 top-[72px] -translate-y-1/2 -rotate-4 z-20">
            <div className="relative w-[180px] h-[320px] rounded-xl">
              <Image
                src="/assets/img/banner-four.png"
                alt="Dummy UI"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

      </div>
      
        <AboutSection />
        <ProjectShowcase />
        <LensSection />
        {/* <ReadyToStart /> */}
      </div>
      
      {/* Bottom Fixed Navbar */}
    </div>
  );
}
