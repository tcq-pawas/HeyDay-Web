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
      <div className="wide-container px-6 lg:px-8 2xl:px-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold uppercase ">
            Our <span className="text-[#7aac3b]">Journey</span>
          </h2>

          <p className="mt-5 text-gray-800 max-w-2xl mx-auto text-[13px] leading-8">
            Since 2022, HeyDay Realty has been committed to providing trusted,
            transparent, and value-driven real estate solutions. Every milestone
            reflects our dedication to helping families and investors build a
            secure future.
          </p>
        </div>

        {/* Timeline: width capped so cards stay close to the center line on big screens */}
        <div className="relative mx-auto max-w-5xl 2xl:max-w-6xl">
          {/* Center Line */}
          <div className="absolute bottom-8 left-1/2 top-8 hidden w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 md:block"></div>

          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 justify-items-center gap-4 md:grid-cols-[1fr_4rem_1fr] md:items-center md:justify-items-stretch md:gap-x-8 ${
                  index === 0 ? "" : "mt-9 md:-mt-4"
                }`}
              >
                {/* Timeline Circle */}
                <div className="relative z-10 order-first flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#082548] font-bold text-white shadow-xl md:order-none md:col-start-2 md:row-start-1">
                  {item.year}
                </div>

                {/* Card (sits right next to the line, left or right) */}
                <div
                  className={`relative w-full max-w-md 2xl:max-w-lg md:row-start-1 ${
                    isLeft
                      ? "md:col-start-1 md:justify-self-end"
                      : "md:col-start-3 md:justify-self-start"
                  }`}
                >
                  {/* Connector to the circle */}
                  <span
                    className={`absolute top-1/2 hidden h-0.5 w-8 bg-blue-200 md:block ${
                      isLeft ? "-right-8" : "-left-8"
                    }`}
                  ></span>

                  <div className="rounded-xl border border-t-[3px] border-gray-100 border-t-[#7aac3b] bg-white px-[30px] py-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl max-sm:px-5 max-sm:py-5">
                    <h3 className="mb-2.5 font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-[13px] leading-7 text-gray-800 2xl:text-sm 2xl:leading-8">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
