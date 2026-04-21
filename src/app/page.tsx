import Hero from "@/components/sections/Hero";
import TheArc from "@/components/sections/TheArc";
import ProblemSolver from "@/components/sections/ProblemSolver";
import MyApproach from "@/components/sections/MyApproach";
import Products from "@/components/sections/Products";
import TechMarquee from "@/components/ui/TechMarquee";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <TheArc />
      <ProblemSolver />
      <Experience />
      <Skills />
      <MyApproach />
      <Products />
      <TechMarquee />
      <Contact />
    </main>
  );
}
