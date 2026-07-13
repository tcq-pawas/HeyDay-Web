import team1 from "../assets/images/villa2.jpg";
import team2 from "../assets/images/land.jpg";
import team3 from "../assets/images/villa.jpg";

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
    <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-28 mb-28">
      <div className="text-center mb-16">
        <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
          Our Experts
        </p>

        <h1 className="text-5xl font-bold text-[#032349] mt-4">
          Meet Our Professional Team
        </h1>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-7">
          Our experienced real estate professionals are here to guide you in
          finding the perfect property for your lifestyle and future.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl duration-500 hover:-translate-y-3"
          >
            <div className="overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[420px] object-cover group-hover:scale-110 duration-700"
              />
            </div>

            <div className="p-7 text-center">
              <h1 className="text-2xl font-bold text-[#032349]">
                {member.name}
              </h1>

              <p className="text-orange-500 mt-2 font-medium">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeamSection;
