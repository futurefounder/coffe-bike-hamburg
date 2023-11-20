"use client";

import Navigation from "./Navigation";

export default function Hero() {
  return (
    <>
      <header className="relative mb-12 overflow-hidden h-screen ">
        {/* Navigation Component */}
        <Navigation />
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none "
        >
          <source
            src="/video/coffee-bike-hamburg-bg-video.mp4"
            type="video/mp4"
          />{" "}
          Your browser does not support the video tag.
        </video>
        <section className="flex flex-col items-center"></section>{" "}
        <div className="absolute bottom-72 left-0 right-0 flex flex-col justify-center items-center pb-4">
          <p className="text-slate-100 mb-12 tracking-wide font-base md:text-base uppercase text-center">
            Kaffee Bike Hamburg
          </p>
          <p className="text-white font-sans mb-10 tracking-wide font-extrabold md:text-4xl text-center">
            Ihr mobiler Kaffee-Partner <br /> in Hamburg
          </p>
          <a
            href="#"
            style={{ boxShadow: "0 0 10px #fff" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 30px #fff")
            } // Bigger glow on hover
            onMouseOut={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 10px #fff")
            } // Original size on mouse out
            className="mt-4 rounded bg-coffeeAccent px-8 py-3 text-center text-sm font-semibold text-white outline-none border-white border-2 shadow-lg transition duration-100 hover:bg-coffeeAccentDark hover:text-white focus-visible:ring active:text-black md:text-2xl"
          >
            Jetzt Anfragen
          </a>
        </div>
      </header>
    </>
  );
}
