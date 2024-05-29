import React, { useState } from "react";

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
             
             //

             
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
