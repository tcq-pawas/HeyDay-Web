import heroImage from "../../assets/images/projectbg.png";

const AboutHero = () => {
  return (
    <section
      className="relative pt-36 pb-24 bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12">

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#f47c20]/20 text-[#f47c20] text-xs font-semibold uppercase tracking-[3px] border border-[#f47c20]/30">
            About Us
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-3xl md:text-5xl font-bold text-white leading-tight">
            Building Trust Through
            <span className="block text-[#f47c20] mt-1">
              Premium Land Opportunities
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto mt-5 text-gray-200 text-base md:text-lg leading-8">
            We help families, investors, and businesses discover premium
            residential and commercial plots in Gorakhpur's fastest-growing
            locations, delivering transparency, trust, and long-term value.
          </p>

          {/* Divider */}
          <div className="w-20 h-1 bg-[#f47c20] mx-auto mt-8 rounded-full"></div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;