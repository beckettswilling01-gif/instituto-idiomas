import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import CredibilityStrip from "@/components/sections/CredibilityStrip";
import ProblemSolution from "@/components/sections/ProblemSolution";
import ExamsGrid from "@/components/sections/ExamsGrid";
import LanguagesGrid from "@/components/sections/LanguagesGrid";
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
        <CredibilityStrip />
        <ProblemSolution />
        <ExamsGrid />
        <LanguagesGrid />
        <Methodology />
        <Differentiation />
        <Programs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
