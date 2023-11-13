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
          <div className="flex max-w-xl flex-col items-center pb-0 pt-8 text-center sm:pb-16 lg:pb-32 lg:pt-32">
            <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
              Very proud to introduce
            </p>

            <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
              Revolutionary way to build the web
            </h1>

            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 xl:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares characteristics of real text.
            </p>

            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Start now
              </a>

              <a
                href="#"
                className="inline-block rounded-lg border bg-white px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
              >
                Take tour
              </a>
            </div>
          </div>
          Your browser does not support the video tag.
        </video>
        <section className="flex flex-col items-center">
          {/* <!-- notice - start --> */}
          <div className="flex items-center gap-2 rounded border bg-gray-50 p-2 text-gray-500">
            <span className="mt-0.5 rounded-full bg-indigo-100 px-2 py-1 text-xs font-semibold leading-none text-indigo-800">
              New
            </span>

            <span className="text-sm">
              This is a section of some simple filler text.
            </span>

            <a
              href="#"
              className="text-sm font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
            >
              More
            </a>
          </div>
          {/* <!-- notice - end --> */}

          <div className="flex max-w-xl flex-col items-center pb-0 pt-8 text-center sm:pb-16 lg:pb-32 lg:pt-32">
            <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
              Very proud to introduce
            </p>

            <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
              Revolutionary way to build the web
            </h1>

            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 xl:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares characteristics of real text.
            </p>

            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Start now
              </a>

              <a
                href="#"
                className="inline-block rounded-lg border bg-white px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
              >
                Take tour
              </a>
            </div>
          </div>
        </section>{" "}
        <div className="absolute bottom-72 left-0 right-0 flex flex-col justify-center items-center pb-4">
          <p className="text-slate-100 mb-12 tracking-wide font-base md:text-base uppercase text-center">
            Coffee Bike Hamburg
          </p>
          <p className="text-white font-sans mb-10 tracking-wide font-extrabold md:text-4xl uppercase text-center">
            Kaffee-Genuss <br />
            mobil gemacht
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
