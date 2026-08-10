import bg4 from "../../assets/backgrounds/bg4.png";

const timelineData = [
  {
    year: "2022",
    title: "HeyDay Realty Founded",
    description:
      "Started with a vision to provide transparent, affordable, and legally verified plotted developments in Gorakhpur.",
  },
  {
    year: "2023",
    title: "Project Expansion",
    description:
      "Successfully launched multiple residential plotting projects and earned the trust of hundreds of satisfied customers.",
  },
  {
    year: "2024",
    title: "Growing Customer Trust",
    description:
      "Expanded our presence with customer-focused services, secure documentation, and quality infrastructure development.",
  },
  {
    year: "2025",
    title: "Digital Transformation",
    description:
      "Strengthened our online presence with a modern website, digital marketing, and enhanced customer experience.",
  },
  {
    year: "2026",
    title: "Building the Future",
    description:
      "Continuing our mission to develop premium plotted communities while delivering trusted investment opportunities for every family.",
  },
];

const CompanyTimeline = () => {
  return (
    <section 
      className="bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: `url(${bg4})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-3xl font-bold uppercase ">
            Our <span className="text-[#7aac3b]">Journey</span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-[12px] leading-8">
            Since 2022, HeyDay Realty has been committed to providing trusted,
            transparent, and value-driven real estate solutions. Every milestone
            reflects our dedication to helping families and investors build a
            secure future.
          </p>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-100 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                  } flex-col`}
              >
                {/* Card */}
                <div className="w-full md:w-5/12 flex justify-center">
                  <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-7 border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7 text-[12px]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Circle */}
                <div className="relative z-10 my-6 md:my-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#082548] text-white font-bold shadow-xl border-4 border-white shrink-0">
                  {item.year}
                </div>

                {/* Empty Space */}
                <div className="hidden md:block md:w-4/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;