import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import LanguagesGrid from "@/components/sections/LanguagesGrid";
import ExamsCarousel from "@/components/sections/ExamsCarousel";
import Methodology from "@/components/sections/Methodology";
import Differentiation from "@/components/sections/Differentiation";
import Programs from "@/components/sections/Programs";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <LanguagesGrid />
        <ExamsCarousel />
        <Methodology />
        <Differentiation />
        <Programs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
