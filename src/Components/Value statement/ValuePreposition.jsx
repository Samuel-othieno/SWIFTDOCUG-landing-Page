import {
 CheckCircleIcon, ClockIcon, UserGroupIcon } from "@heroicons/react/24/outline";


const features = [
  {
    name: "Convenience and Accessibility",
    description:
      "Experience healthcare on your terms. Connect with our expert medical professionals from the comfort of your home or office, making quality healthcare just a click away",
    icon: CheckCircleIcon,
  },
  {
    name: "Time Efficiency",
    description:
      "Say goodbye to long wait times. Our platform is designed for efficiency, allowing you to schedule and attend appointments without the hassle, providing swift and seamless medical care.",
    icon: ClockIcon,
  
  {
    name: "Broad Access to Specialists",
    description:
      "Access a world of expertise. Connect with a diverse range of healthcare specialists without geographical constraints. Our platform brings top-notch medical professionals to you, wherever you are.",
    icon:  UserGroupIcon,
  },
];

export default function ValuePrep() {
  return (
    <div className="py-[0.5rem] sm:py-[1rem]">
      <div className="mx-auto max-w-fit px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-[0.1rem] text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our promise to you;
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-14 lg:max-w-4xl">
          <dl className="max-w-fit gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {/* {feature.description} */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
