import { CheckCircleIcon, ClockIcon, UserGroupIcon} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Convenience and Accessibility',
    description:
      'Experience healthcare on your terms. Connect with our expert medical professionals from the comfort of your home or office, making quality healthcare just a click away',
    icon: CheckCircleIcon,
  },
  {
    name: 'Time Efficiency',
    description: 'Say goodbye to long wait times. Our platform is designed for efficiency, allowing you to schedule and attend appointments without the hassle, providing swift and seamless medical care.',
    icon: ClockIcon,
  },
  {
    name: 'Broad Access to Specialists',
    description: 'Access a world of expertise. Connect with a diverse range of healthcare specialists without geographical constraints. Our platform brings top-notch medical professionals to you, wherever you are.',
    icon: UserGroupIcon,
  },
]

export default function OurPromise() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our promise to you;</p>
              
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
