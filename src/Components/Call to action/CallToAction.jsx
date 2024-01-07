import {
  PlusIcon,
  HandRaisedIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

export default function CallToAction() {
  return (
    <div className="relative top-[-7rem] isolate overflow-hidden bg-blue-800 py-16 sm:py-24 lg:py-10 w-[75%] m-auto z-50 rounded-xl">
      <div className="max-w-fit px-6 lg:px-8">
        <div className="mx-auto grid max-w-fit grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
              Ditch the queue!
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Your spot in the future of healthcare? Secure it now. Join the
              waitlist.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              >
                Get Started
              </button>
            </div>
          </div>

          <dl className="sm:grid-cols-2 lg:pt-2">
            <div>
              <dd className="text-gray-200">
                Join our 100+ pals on our waitlist!
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
