import team1 from "../../assets/Rahul Chaudhary.jpg";
import team2 from "../../assets/Sahil Varma.jpg";
import team3 from "../../assets/Rohit Pandey.jpg";


const OurTeamSection = () => {
  const teamMembers = [
    {
      image: team1,
      name: "Rahul Chaudhary",
      role: "Property Consultant",
    },
    {
      image: team2,
      name: "Sahil Varma",
      role: "Real Estate Advisor",
    },
    {
      image: team3,
      name: "Rohit Pandey",
      role: "Luxury Property Expert",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      
      {/* Heading */}
      <div className="text-center mb-12">

        <h1 className="text-3xl md:text-3xl font-bold text-[#315d2f] mt-3">
          Meet Our Professional Team
        </h1>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Our experienced real estate professionals are here to guide you every step of the way.
        </p>

        <div className="w-20 h-1 bg-[#d9a021] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-50 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-[#032349]">
                {member.name}
              </h2>

              <p className="text-gray-500 mt-1 text-sm">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default OurTeamSection;