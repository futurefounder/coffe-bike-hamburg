export default function Navigation() {
  return (
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <header className="ml-2 mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
        {/* <!-- logo - start --> */}
        <a
          href="/"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-sm"
          aria-label="logo"
        >
          <svg
            width="95"
            height="94"
            viewBox="0 0 95 94"
            className="h-auto w-6 text-coffeeAccent"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
          </svg>
          Coffee Bike Hamburg
        </a>
        {/* <!-- logo - end --> */}

        {/* <!-- nav - start --> */}
        <nav className="hidden gap-12 lg:flex">
          <a href="#" className="text-lg font-semibold text-indigo-500">
            Home
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Events
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Über uns
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Gallery
          </a>
        </nav>
        {/* <!-- nav - end --> */}

        {/* <!-- buttons - start --> */}
        <a
          href="#"
          className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
        >
          Jetzt Anfragen
        </a>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          Menu
        </button>
        {/* <!-- buttons - end --> */}
      </header>
    </div>
  );
}
