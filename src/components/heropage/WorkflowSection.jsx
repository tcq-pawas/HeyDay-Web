import React from "react";

import bgImage from "../../assets/images/home/herobg.png";
import gallery1 from "../../assets/images/home/short1-image.png";
import gallery2 from "../../assets/images/home/short2-image.png";
import gallery3 from "../../assets/images/home/short3-image.png";
import gallery4 from "../../assets/images/home/short4-image.png";
import gallery5 from "../../assets/images/home/short5-image.png";
import gallery6 from "../../assets/images/home/roshanbagh.png";

const WorkflowSection = () => {
  const gallery = [
    {
      image: gallery1,
      title: "Premium Township",
      desc: "Well-planned residential plots",
    },
    {
      image: gallery4,
      title: "Green Environment",
      desc: "Peaceful & pollution-free living",
    },
    {
      image: gallery3,
      title: "Wide Internal Roads",
      desc: "Easy connectivity across the township",
    },
    {
      image: gallery2,
      title: "Modern Infrastructure",
      desc: "Developed with future-ready amenities",
    },
    {
      image: gallery5,
      title: "Prime Location",
      desc: "Excellent investment opportunity",
    },
    {
      image: gallery6,
      title: "Verified Documentation",
      desc: "100% legally secure property",
    },
  ];

  return (
    <section className="bg-white">

      {/* Why Heyday Realty */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center max-w-3xl mx-auto">

          <div className="flex items-center justify-center gap-4 mb-6">

            <div className="h-[2px] w-16 bg-[#d8c28a]" />

            <h2 className="text-xl  font-bold text-[#08213f]">
              WHY{" "}
              <span className="text-[#7aac3b]">
                HEYDAY REALTY
              </span>
            </h2>

            <div className="h-[2px] w-16 bg-[#d8c28a]" />

          </div>

          <p className="text-gray-600 text-[12px] leading-7">
            We combine trusted legal expertise, premium locations, transparent
            documentation, and customer-first service to make your land
            investment secure, rewarding, and completely stress-free.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-12">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white font-semibold text-xs leading-tight">
                  {item.title}
                </h3>

                <p className="text-white/80 text-[9px] mt-1 leading-4">
                  {item.desc}
                </p>
              </div>
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

        <div className="relative max-w-7xl mx-auto px-6 py-12">

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center">

            <div className="col-span-2 md:col-span-1">

              <h2 className="text-xl font-bold text-white leading-tight text-center md:text-left">
                LAND ISN'T JUST
                <br />
                PROPERTY.
                <br />
                IT'S A{" "}
                <span className="text-[#e66a10]">
                  LEGACY.
                </span>
              </h2>

              <p className="text-gray-300 text-[12px] leading-6 mt-5 text-center md:text-left">
                Invest today in a future built on trust, growth, and lasting
                value for generations to come.
              </p>

            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#e66a10]">
                15%
              </h3>
              <p className="text-white mt-3 leading-6 text-[12px]">
                Average Annual
                <br />
                Appreciation
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#e66a10]">
                500+
              </h3>
              <p className="text-white mt-3 leading-6 text-[12px]">
                Acres Sold
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#e66a10]">
                1000+
              </h3>
              <p className="text-white mt-3 leading-6 text-[12px]">
                Satisfied
                <br />
                Buyers
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#e66a10]">
                100%
              </h3>
              <p className="text-white mt-3 leading-6 text-[12px]">
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
