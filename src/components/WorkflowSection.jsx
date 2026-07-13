const WorkflowSection = () => {
  const steps = [
    {
      emoji: "🏡",
      title: "Choose Property",
      desc: "Browse premium homes and find the perfect property for your lifestyle.",
    },
    {
      emoji: "📅",
      title: "Book A Visit",
      desc: "Schedule a personal property visit at your preferred time and date.",
    },
    {
      emoji: "🤝",
      title: "Meet Our Experts",
      desc: "Get trusted advice from our professional real estate consultants.",
    },
    {
      emoji: "🔑",
      title: "Get Your Dream Home",
      desc: "Complete the process and unlock the door to your dream home.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-blue-50 via-sky-100 to-blue-200">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <p className="text-orange-500 font-semibold uppercase tracking-[4px]">
            Simple Process
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-[#032349] mt-4 leading-tight">
            Your Dream Home Journey ✨
          </h1>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-8 text-lg">
            Buying your dream home has never been easier. Follow these simple
            steps and move into your perfect property stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-md rounded-[32px] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-4 duration-500 border border-white/50 text-center"
            >
              <div className="text-6xl mb-5 transition-transform duration-500 group-hover:scale-110">
                {step.emoji}
              </div>

              <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mx-auto mb-5 text-xl shadow-md">
                {index + 1}
              </div>

              <h1 className="text-2xl font-bold text-[#032349] leading-snug">
                {step.title}
              </h1>

              <p className="text-gray-500 mt-4 leading-7 text-[15px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
