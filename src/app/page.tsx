import Hero from "@/components/sections/Hero";
import TheArc from "@/components/sections/TheArc";
import ProblemSolver from "@/components/sections/ProblemSolver";
import Products from "@/components/sections/Products";
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
      <Products />
      <Contact />
    </main>
  );
}
