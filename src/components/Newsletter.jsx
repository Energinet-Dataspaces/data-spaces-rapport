export function Newsletter() {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-8xl py-12 px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl" id="newsletter-headline">
            Følg med i udviklingen
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            En lille arbejdsgruppe i Energinet følger udviklingen af data spaces tæt. Vi sender hver måned en oversigt over interessante artikler og konferencer på området.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex" data-netlify="true">
            <label htmlFor="email-address" className="sr-only">
              Email adresse
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
              placeholder="Email adresse"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Tilmeld!
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-gray-300">
            Vi passer godt på dine data og deler ikke din email med tredjeparter.
          </p>
        </div>
      </div>
    </div>
  )
}