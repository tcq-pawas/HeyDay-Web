import houseImage from "../assets/images/family.jpg";

const ContactBanner = () => {
  return (
    <div className="max-w-7xl mx-auto mt-24 mb-24">
      <div
        className="relative rounded-[25px] overflow-hidden h-[320px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${houseImage})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/95 via-blue-500/80 to-transparent"></div>

        <div className="relative z-10 h-full flex items-center justify-between px-16">
          <div className="text-white max-w-[500px]">
            <h1 className="text-[24px] leading-[50px] font-medium">
              Discover homes that match your lifestyle
              <br />
              Connect with our experts for a free consultation today.
            </h1>
          </div>

          <button className="bg-orange-500 text-white text-[16px] font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300">
            SCHEDULE YOUR PERSONAL TOUR →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;