import React from "react";

import heroBg from "../../assets/images/project/kushmi.png";

const ContactHero = () => {
  return (
    <section className="relative h-[50vh] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-[#071421]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071421]/90 via-[#071421]/60 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center ">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-12">
          <div className="max-w-3xl text-center sm:text-left">
            {/* Heading */}
            {/* Heading */}
            <div className="mb-5">
              <div className="mb-3 h-1 w-20 rounded-full bg-gradient-to-r from-[#F4B53F] via-[#FFD978] to-transparent" />

              <h1 className="text-3xl font-bold leading-[1.15] text-white">
                <span className="block">Contact</span>

                <span className="mt-1 block">
                  <span className="bg-gradient-to-r from-[#9BEA00] to-[#7AAC3B] bg-clip-text text-transparent">
                    HeyDay
                  </span>{" "}
                  Realty
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-[12px] leading-7 text-white/85 sm:mx-0 mx-auto">
              Have questions about our properties or investment opportunities?
              Reach out to our expert team for personalized guidance, site
              visits, and professional real estate consultation in Gorakhpur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;