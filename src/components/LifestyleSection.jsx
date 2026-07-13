import villa from "../assets/images/villa2.jpg";
import city from "../assets/images/city.jpg";

import { FaHome, FaBuilding } from "react-icons/fa";

const LifestyleSection = () => {
  return (
    <div className="max-w-7xl mx-auto mt-24">

      <div>
        <h1 className="text-[44px] font-bold text-[#102a56] uppercase text-center">
          Lifestyle & Neighborhoods
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-10">

        <div
          className="relative h-[350px] w-[630px] rounded-3xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${city})`
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-8 left-8 z-10 flex items-end gap-6">

            <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center shadow-xl flex-shrink-0">
              <FaHome className="text-[#183153] text-3xl" />
            </div>

            <div className="text-white">
              <h1 className="text-3xl font-bold">
                Suburban Living
              </h1>

              <p className="text-xl mt-2 leading-relaxed max-w-sm">
                Peaceful communities with top-rated schools.
              </p>
            </div>

          </div>
        </div>

        <div
          className="relative h-[350px] w-[630px] rounded-3xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${villa})`
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-8 left-8 z-10 flex items-end gap-6">

            <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center shadow-xl flex-shrink-0">
              <FaBuilding className="text-[#183153] text-3xl" />
            </div>

            <div className="text-white">
              <h1 className="text-3xl font-bold">
                City Pulse
              </h1>

              <p className="text-xl mt-2 leading-relaxed max-w-sm">
                Vibrant downtown apartments close to the action.
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default LifestyleSection;