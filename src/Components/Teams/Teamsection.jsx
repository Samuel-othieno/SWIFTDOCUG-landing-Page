import { User1, User2 } from "./Profilles/UserCards";

export default function Example() {
  return (
    <div className="bg-violet-200 py-[2.5rem] sm:py-[2rem] w-[95%] m-auto rounded-xl">
      <div className="mx-auto flex-col max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our founders
          </h2>
          <p className="mt-2 text-[15px] leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients
          </p>
        </div>
        <ul className="flex-col gap-y-12 sm:grid-cols-2 sm:gap-y-16">
          <li className="m-[1rem]">
            <User2 />
          </li>
            <hr />
          <li className="m-[1rem]">
            <User1/>
          </li>
          <hr />
        </ul>
      </div>
    </div>
  );
}
