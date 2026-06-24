const filters = [
  "All Properties",
  "Residential",
  "Commercial",
  "Farm Land",
  "Premium",
  "Investment",
];

const PropertyFilters = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              className="px-6 py-3 rounded-full border border-[#c89b63]
              text-[#c89b63] hover:bg-[#c89b63]
              hover:text-white transition-all duration-300"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyFilters;