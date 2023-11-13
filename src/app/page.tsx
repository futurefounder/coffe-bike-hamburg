import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {/* <Navigation /> */}
          <Hero />
          <Benefits />
          <Gallery />
          <FAQ />{" "}
        </main>
        <Footer />
      </div>
    </>
  );
}
