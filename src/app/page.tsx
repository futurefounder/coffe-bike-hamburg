import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LogoCloud from "./components/LogoCloud";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
import Form from "./components/Form";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Hero />
          <LogoCloud />
          <Intro />
          <Benefits />
          <CTA />
          <Form />
          <Gallery />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}
