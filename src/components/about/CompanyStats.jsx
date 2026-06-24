const CompanyStats = () => {
  return (
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-5xl font-bold text-[#c89b63]">
              500+
            </h2>
            <p className="text-white mt-3">Plots Sold</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#c89b63]">
              20+
            </h2>
            <p className="text-white mt-3">Prime Locations</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#c89b63]">
              10+
            </h2>
            <p className="text-white mt-3">Years Experience</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#c89b63]">
              100%
            </h2>
            <p className="text-white mt-3">Verified Properties</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyStats;