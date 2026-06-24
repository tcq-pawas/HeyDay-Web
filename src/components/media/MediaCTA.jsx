const MediaCTA = () => {
  return (
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Find Your Perfect Plot Today
        </h2>

        <p className="mt-6 text-gray-300">
          Discover verified residential and commercial plots in
          Gorakhpur's fastest-growing locations.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <button className="bg-[#c89b63] text-white px-8 py-4 rounded-full font-semibold">
            Schedule Site Visit
          </button>

          <button className="border border-white text-white px-8 py-4 rounded-full font-semibold">
            Contact Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default MediaCTA;