export default function CallToAction() {
  return (
    <div className="relative top-[-3rem] isolate overflow-hidden bg-blue-800 py-16 sm:py-24 lg:py-10 md:w-[75%] w-[80%] m-auto z-50 rounded-xl">
      <div className="max-w-fit px-6 lg:px-8">
        <div className="mx-auto flex flex-col md:flex-row max-w-fit gap-x-20 gap-y-5 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-lg font-bold tracking-tighter text-white md:text-4xl">
              Ditch the queue!
            </h2>
            <p className="md:mt-4 mt-2 text-sm md:text-lg leading-5 md:leading-8 text-gray-300">
              Your spot in the future of healthcare? Secure it now. Join the
              waitlist.
            </p>
            <div className="mt-3 md:mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"
                placeholder="Enter your email"
              />
              <button
                onclick="alert('bgbgbbgbb')"
                type="submit"
                className="flex-none h-auto rounded-md bg-blue-500 px-3.5 py-2.5 md:text-sm text-[0.8rem] font-semibold text-white hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              >
                Get Started
              </button>
              <input type="button" id="button" value="Send" onclick="sayThanks()"></input>
            </div>
          </div>

          <dl>
            <div>
              <dd className="text-gray-200 md:text-sm text-[0.7rem]">
                Join our 100+ pals on our waitlist!
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}


