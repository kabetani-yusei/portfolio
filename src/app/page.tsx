import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Accounts } from "@/components/Accounts";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Experience } from "@/components/Experience";
import { Timeline } from "@/components/Timeline";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Accounts />
      <About />
      <Skills />
      <Achievements />
      <Experience />
      <Timeline />
      <Footer />
    </>
  );
}
