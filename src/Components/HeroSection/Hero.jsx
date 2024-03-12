const links = [
  { name: "Book Appointment", href: "#" },
  { name: "Testimonies", href: "#testimonies" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#OurLearders" },
];
const stats = [
  { name: "Coming soon", value: "2024" },
  { name: "Our Promise to you", value: "This is " },
  { name: "On standby", value: "24/7" },
  { name: "Payment system", value: "Unlimited" },
];

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-[75vh]">
      <img
        src="https://media.istockphoto.com/id/1162117373/photo/sending-some-updated-notes-to-the-doctor.webp?b=1&s=170667a&w=0&k=20&c=02H6Wgnw206uUsqvfpR-ld_z_S2SUNu764CvpovYU48="
        alt=""
        className="absolute inset-0 -z-10 h-fit w-fit sm:h-full sm:w-full object-cover object-right sm:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-20 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[black] to-[black] opacity-30"
          style={{
            clipPath: "circle(50%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-20em] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[black] to-[black] opacity-10"
          style={{
            clipPath: "circle(50%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-blue-100 sm:text-6xl">
            Step into a realm of convenience, expertise, and personalized care
          </h2>

          <p className="mt-6 text-sm sm:text-lg leading-8 text-white">
           We understand the importance of your time and well-being. 
          With SwiftDoc, quality healthcare is at your fingertips giving you the 
          freedom to prioritize your health without compromising your schedule.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-6 text-xs sm:text-base font-semibold leading-7 text-white sm:grid-cols-2 sm:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-blue-400">
                {link.name} <span aria-hidden="true"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
