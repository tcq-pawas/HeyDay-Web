import React from "react";

import bgImage from "../assets/images/home/herobg.png";
import gallery1 from "../assets/images/home/short1-image.png";
import gallery2 from "../assets/images/home/short2-image.png";
import gallery3 from "../assets/images/home/short3-image.png";
import gallery4 from "../assets/images/home/short4-image.png";
import gallery5 from "../assets/images/home/short5-image.png";
import gallery6 from "../assets/images/home/roshanbagh.png";

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
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  return (
    <section className="bg-white">

      {/* Timeline Section */}
      <div className="bg-[#041b35] py-12">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-2xl md:text-2xl font-bold text-white mb-12">
            FROM SITE VISIT{" "}
            <span className="text-[#e66a10]">
              TO REGISTRATION
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center relative"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-white text-[#f4a300] font-bold flex items-center justify-center shadow-md">
                  {step.no}
                </div>

                <h3 className="text-white text-sm font-semibold mt-4">
                  {step.title}
                </h3>

                <p className="text-gray-300 text-xs mt-2 leading-5">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Why Heyday Realty */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center justify-center gap-4 mb-10">

          <div className="h-[2px] w-16 bg-[#d8c28a]" />

          <h2 className="text-2xl font-bold text-[#08213f]">
            WHY{" "}
            <span className="text-[#7aac3b]">
              HEYDAY REALTY
            </span>
          </h2>

          <div className="h-[2px] w-16 bg-[#d8c28a]" />

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

          {gallery.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={img}
                alt=""
                className="w-full h-28 object-cover hover:scale-105 transition duration-300"
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
        <div className="absolute inset-0 bg-[#041b35]/70" />

        <div className="relative max-w-7xl mx-auto px-6 py-14">

          <div className="grid md:grid-cols-5 gap-8 items-center">

            <div>
              <h2 className="text-2xl font-bold text-white leading-tight">
                LAND ISN'T JUST
                <br />
                PROPERTY.
                <br />
                IT'S A{" "}
                <span className="text-[#e66a10]">
                  LEGACY.
                </span>
              </h2>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#e66a10]">
                15%
              </h3>
              <p className="text-white mt-2">
                Average Annual
                <br />
                Appreciation
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#e66a10]">
                500+
              </h3>
              <p className="text-white mt-2">
                Acres Sold
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#e66a10]">
                1000+
              </h3>
              <p className="text-white mt-2">
                Satisfied
                <br />
                Buyers
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#e66a10]">
                100%
              </h3>
              <p className="text-white mt-2">
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