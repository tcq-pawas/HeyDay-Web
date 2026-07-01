import member1 from "../../assets/images/team/rahul.png";
import member2 from "../../assets/images/team/amit.png";
import member3 from "../../assets/images/team/priya.png";
import member4 from "../../assets/images/team/rohit.png";

const members = [
  {
    image: member1,
    name: "Mr. Rahul Sharma",
    role: "Founder & Managing Director",
    experience: "10+ Years",
    specialization: "Real Estate Strategy",
    projects: "15+ Projects",
    description:
      "Leading HeyDay Realty with a vision of creating trusted plotted developments and providing secure investment opportunities across Gorakhpur.",
  },
  {
    image: member2,
    name: "Mr. Amit Singh",
    role: "Sales & Marketing Head",
    experience: "8+ Years",
    specialization: "Property Consulting",
    projects: "500+ Clients",
    description:
      "Helping customers choose the right investment with transparent guidance, market expertise, and customer-first service.",
  },
  {
    image: member3,
    name: "Ms. Priya Verma",
    role: "Customer Relationship Manager",
    experience: "6+ Years",
    specialization: "Customer Support",
    projects: "1000+ Queries",
    description:
      "Ensures every customer enjoys a seamless buying journey with complete documentation support and timely communication.",
  },
  {
    image: member4,
    name: "Mr. Rohit Mishra",
    role: "Project Consultant",
    experience: "7+ Years",
    specialization: "Investment Planning",
    projects: "12+ Developments",
    description:
      "Provides expert guidance on land selection, legal verification, and long-term investment opportunities for every client.",
  },
];

const TeamMembers = () => {
  return (
    <section className="bg-slate-50 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-2xl font-bold uppercase ">
            Meet <span className="text-[#7aac3b]">Our</span> Professionals
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our experienced team is committed to helping you make confident real
            estate decisions with trust, transparency, and personalized support.
          </p>
        </div>

        <div className="space-y-10">
          {members.map((member, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`max-w-5xl mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col lg:flex-row ${
                  reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full lg:w-[30%]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[320px] sm:h-[380px] lg:h-full object-cover object-top"
                  />
                </div>

                {/* Content */}
                <div className="lg:w-[70%] p-6 md:p-8 flex flex-col justify-center">
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-green-100 text-[#315d2f] text-xs font-semibold uppercase tracking-wider">
                    HeyDay Realty Team
                  </span>

                  <h3 className="text-2xl font-bold text-[#315d2f] mt-4">
                    {member.name}
                  </h3>

                  <p className="text-[#c89b63] font-semibold mt-1">
                    {member.role}
                  </p>

                  <p className="text-gray-600 leading-7 mt-4">
                    {member.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 border-t pt-5">
                    <div>
                      <p className="text-xs uppercase text-gray-500">
                        Experience
                      </p>
                      <h4 className="font-semibold text-[#315d2f]">
                        {member.experience}
                      </h4>
                    </div>

                    <div>
                      <p className="text-xs uppercase text-gray-500">
                        Expertise
                      </p>
                      <h4 className="font-semibold text-[#315d2f]">
                        {member.specialization}
                      </h4>
                    </div>

                    <div>
                      <p className="text-xs uppercase text-gray-500">
                        Achievements
                      </p>
                      <h4 className="font-semibold text-[#315d2f]">
                        {member.projects}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;