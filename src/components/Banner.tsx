
import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-12">

        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-tight text-slate-900">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex gap-3">
            <button className="rounded-md bg-orange-500 px-4 py-2 text-xs font-medium text-white hover:bg-orange-600">
              Explore Technologies
            </button>

            <button className="rounded-md border border-gray-200 px-5 py-2 text-xs text-gray-600 hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <img
            src={bannerImage}
            />
        </div>

      </div>
    </div>
  );
};

export default Banner;