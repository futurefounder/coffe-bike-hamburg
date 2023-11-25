export default function Anfragen() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Jetzt Anfragen
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Kontaktieren Sie uns unverbindlich, und wir beraten Sie gerne zu
            allen Details und Möglichkeiten, um Ihr Ereignis zu einem besonderen
            Erlebnis zu machen!
          </p>
        </div>

        <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
          <div>
            <label
              for="first-name"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Vorname*
            </label>
            <input
              name="first-name"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div>
            <label
              for="last-name"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Nachname*
            </label>
            <input
              name="last-name"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              for="company"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Firma (optional)
            </label>
            <input
              name="company"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              for="email"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Email*
            </label>
            <input
              name="email"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              for="subject"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Betreff*
            </label>
            <input
              name="subject"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              for="message"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Nachricht*
            </label>
            <textarea
              name="message"
              className="h-24 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            ></textarea>
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <a
              href="#_"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-coffeeAccent transition duration-300 ease-out border-2 border-coffeeAccent shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-coffeeAccent group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-coffeeAccent    transition-all duration-300 transform group-hover:translate-x-full ease">
                Kostenlos Anfragen
              </span>
              <span className="relative invisible">Kostenlos Anfragen</span>
            </a>

            <span className="text-sm text-gray-500">*Erforderlich</span>
          </div>

          {/* <p className="text-xs text-gray-400">
            By signing up to our newsletter you agree to our{" "}
            <a
              href="#"
              className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Privacy Policy
            </a>
            .
          </p> */}
        </form>
      </div>
    </div>
  );
}
