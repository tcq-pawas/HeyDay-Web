import {
  FaUsers,
  FaAward,
  FaHandshake,
} from "react-icons/fa";

import heroBg from "../../assets/images/team/teambg.png";

const TeamHero = () => {
  return (
    <section
      className="relative min-h-[60vh] md:h-screen flex items-center overflow-hidden bg-cover bg-center"
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
          <span className="text-[#f2b321] uppercase tracking-[3px] font-semibold text-sm">
            Meet Our Experts
          </span>

          <h1 className="mt-8 text-3xl lg:text-5xl font-bold leading-tight">
            The People
            <br />
            Behind
            <span className="text-lime-400"> HeyDay Realty</span>
          </h1>

          <p className="mt-8 text-sm text-gray-200 leading-8 max-w-xl">
            Our experienced professionals are committed to helping every family
            and investor make confident property decisions through transparency,
            trust, and personalized guidance.
          </p>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex justify-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 w-full max-w-md">
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#315d2f] flex items-center justify-center text-white">
                  <FaUsers size={28} />
                </div>

                <div>
                  <h3 className="text-white text-medium font-semibold">
                    Expert Team
                  </h3>

                  <p className="text-gray-300 text-xs">
                    Skilled professionals dedicated to your success.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#315d2f] flex items-center justify-center text-white">
                  <FaHandshake size={28} />
                </div>

                <div>
                  <h3 className="text-white text-medium font-semibold">
                    Trusted Guidance
                  </h3>

                  <p className="text-gray-300 text-xs">
                    Honest advice and transparent property solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#315d2f] flex items-center justify-center text-white">
                  <FaAward size={28} />
                </div>

                <div>
                  <h3 className="text-white text-medium font-semibold">
                    Quality Commitment
                  </h3>

                  <p className="text-gray-300 text-xs">
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