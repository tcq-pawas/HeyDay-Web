import { FaQuoteLeft } from "react-icons/fa";
import { GiLotus } from "react-icons/gi";

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
    <section className="relative bg-gradient-to-r from-[#071b35] to-[#0b2446] py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 relative">

          {quotes.map((item, index) => (
            <div
              key={index}
              className={`relative ${
                index !== quotes.length - 1
                  ? "md:border-r border-white/20"
                  : ""
              } md:pr-8`}
            >
              <div className="flex items-start gap-3">
                <FaQuoteLeft className="text-[#f8b400] text-medium mt-1 flex-shrink-0" />

                <div>
                  <p className="text-white text-medium leading-relaxed text-center">
                    {item.text}
                  </p>

                  <p className="mt-4 text-[#f8b400] font-semibold text-center">
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