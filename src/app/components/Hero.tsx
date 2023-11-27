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
          <p className="text-white font-sans mb-16 tracking-wide font-extrabold md:text-4xl text-center">
            Ihr Kaffee-Catering im Nordern
          </p>{" "}
          <a
            href="#_"
            className="relative px-6 py-3 font-bold text-black group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-coffeeAccent group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-white group-hover:"></span>
            <span className="relative text-3xl text-white group-hover:text-black">
              Jetzt Anfragen
            </span>
          </a>
        </div>
      </header>
    </>
  );
}
