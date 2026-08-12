import { FaQuoteLeft } from "react-icons/fa";
import { GiLotus } from "react-icons/gi";
import bg5 from "../../assets/backgrounds/bg5.png";

const QuotesSection = () => {
  const quotes = [
    {
      text: "The best investment on earth is earth.",
      author: "Louis Glickman",
    },
    {
      text: "Land is the only thing in the world that amounts to something.",
      author: "Andrew Carnegie",
    },
    {
      text: "Buy land, they're not making it anymore.",
      author: "Mark Twain",
    },
  ];

  return (
    <section 
      className="bg-cover bg-center bg-no-repeat py-10 overflow-hidden"
      style={{
        backgroundImage: `url(${bg5})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 relative">

          {quotes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-3">
                <FaQuoteLeft className="text-[#f8b400] text-xs mt-1 flex-shrink-0" />

                <div>
                  <p className="text-[#08213f] text-[12px] leading-relaxed text-center">
                    {item.text}
                  </p>

                  <p className="mt-4 text-gray-600 font-semibold text-center text-sm">
                    – {item.author}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Decorative Icon */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
            <GiLotus className="text-white text-[130px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;