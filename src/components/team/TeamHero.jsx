import {
  FaUsers,
  FaAward,
  FaHandshake,
} from "react-icons/fa";

import heroBg from "../../assets/images/team/image.png";

const TeamHero = () => {
  return (
    <section
      className="relative min-h-[60vh] md:h-[80vh] flex items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      {/* Decorative Blur */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#315d2f]/30 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-white">
          <span className="uppercase tracking-[4px] sm:tracking-[6px] text-[#F4B53F] text-[10px] font-semibold">
            Meet Our Experts
          </span>

          <h1 className="mt-8 text-3xl  font-bold leading-tight">
            The People
            <br />
            Behind
            <span className="text-lime-400"> HeyDay Realty</span>
          </h1>

          <p className="mt-8 text-[12px] text-gray-200 leading-8 max-w-xl">
            Our experienced professionals are committed to helping every family and investor make confident property decisions through transparency, trust, and personalized guidance. We carefully understand your needs.
          </p>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex justify-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 w-full max-w-md">
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#315d2f] flex items-center justify-center text-white">
                  <FaUsers size={25} />
                </div>

                <div>
                  <h3 className="text-white text-sm font-semibold">
                    Expert Team
                  </h3>

                  <p className="text-gray-300 text-[12px]">
                    Skilled professionals dedicated to your success.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#315d2f] flex items-center justify-center text-white">
                  <FaHandshake size={25} />
                </div>

                <div>
                  <h3 className="text-white text-sm font-semibold">
                    Trusted Guidance
                  </h3>

                  <p className="text-gray-300 text-[12px]">
                    Honest advice and transparent property solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#315d2f] flex items-center justify-center text-white">
                  <FaAward size={25} />
                </div>

                <div>
                  <h3 className="text-white text-sm font-semibold">
                    Quality Commitment
                  </h3>

                  <p className="text-gray-300 text-[12px]">
                    Delivering excellence in every project we undertake.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamHero;