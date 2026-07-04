import React from "react";

import bgImage from "../../assets/images/home/herobg.png";
import gallery1 from "../../assets/images/home/short1-image.png";
import gallery2 from "../../assets/images/home/short2-image.png";
import gallery3 from "../../assets/images/home/short3-image.png";
import gallery4 from "../../assets/images/home/short4-image.png";
import gallery5 from "../../assets/images/home/short5-image.png";
import gallery6 from "../../assets/images/home/roshanbagh.png";

const WorkflowSection = () => {
  const steps = [
    {
      no: "01",
      title: "Verified Documentation",
      desc: "Choose your preferred land that fits your needs.",
    },
    {
      no: "02",
      title: "Site Visit",
      desc: "Visit the site and verify location & surroundings.",
    },
    {
      no: "03",
      title: "Legal Verification",
      desc: "Our experts verify all documents and titles.",
    },
    {
      no: "04",
      title: "Documentation",
      desc: "Preparation and review of required documents.",
    },
    {
      no: "05",
      title: "NRI Support",
      desc: "Dedicated assistance for NRI investors.",
    },
    {
      no: "06",
      title: "Registry & Ownership",
      desc: "Smooth registration and ownership transfer.",
    },
  ];

  const gallery = [
    gallery1,
    gallery4,
    gallery3,
    gallery2,
    gallery5,
    gallery6,
  ];

  return (
    <section className="bg-white">

      {/* Timeline Section */}
      <div className="bg-[#041b35] py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <h2 className="text-2xl md:text-3xl font-bold text-white">
              FROM SITE VISIT{" "}
              <span className="text-[#e66a10]">
                TO REGISTRATION
              </span>
            </h2>

            <p className="text-gray-300 mt-4 text-sm md:text-base leading-7">
              Experience a transparent and hassle-free land buying journey.
              From selecting the right property to legal verification and
              registration, every step is guided by our experienced team to
              ensure complete peace of mind.
            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-14">

            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center relative group"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-white text-[#f4a300] font-bold flex items-center justify-center shadow-lg transition duration-300 group-hover:scale-110">
                  {step.no}
                </div>

                <h3 className="text-white text-[15px] font-semibold mt-5 min-h-[48px] flex items-center justify-center">
                  {step.title}
                </h3>

                <p className="text-gray-300 text-sm mt-3 leading-6">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Why Heyday Realty */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center max-w-3xl mx-auto">

          <div className="flex items-center justify-center gap-4 mb-6">

            <div className="h-[2px] w-16 bg-[#d8c28a]" />

            <h2 className="text-2xl md:text-3xl font-bold text-[#08213f]">
              WHY{" "}
              <span className="text-[#7aac3b]">
                HEYDAY REALTY
              </span>
            </h2>

            <div className="h-[2px] w-16 bg-[#d8c28a]" />

          </div>

          <p className="text-gray-600 text-sm md:text-base leading-7">
            We combine trusted legal expertise, premium locations, transparent
            documentation, and customer-first service to make your land
            investment secure, rewarding, and completely stress-free.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-12">

          {gallery.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img}
                alt=""
                className="w-full h-32 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>

      {/* Stats Banner */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-[#041b35]/75" />

        <div className="relative max-w-7xl mx-auto px-6 py-16">

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center">

            <div className="col-span-2 md:col-span-1">

              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight text-center md:text-left">
                LAND ISN'T JUST
                <br />
                PROPERTY.
                <br />
                IT'S A{" "}
                <span className="text-[#e66a10]">
                  LEGACY.
                </span>
              </h2>

              <p className="text-gray-300 text-sm leading-6 mt-5 text-center md:text-left">
                Invest today in a future built on trust, growth, and lasting
                value for generations to come.
              </p>

            </div>

            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[#e66a10]">
                15%
              </h3>
              <p className="text-white mt-3 leading-6">
                Average Annual
                <br />
                Appreciation
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[#e66a10]">
                500+
              </h3>
              <p className="text-white mt-3 leading-6">
                Acres Sold
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[#e66a10]">
                1000+
              </h3>
              <p className="text-white mt-3 leading-6">
                Satisfied
                <br />
                Buyers
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[#e66a10]">
                100%
              </h3>
              <p className="text-white mt-3 leading-6">
                Verified
                <br />
                Documentation
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WorkflowSection;