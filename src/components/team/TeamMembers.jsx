import {
  FaLeaf,
  FaCity,
  FaUserTie,
  FaBullseye,
  FaTrophy,
  FaBullhorn,
  FaHeadset,
  FaMapMarkedAlt,
} from "react-icons/fa";

import member1 from "../../assets/images/team/rahul.png";
import member2 from "../../assets/images/team/amit.png";
import member3 from "../../assets/images/team/priya.png";
import member4 from "../../assets/images/team/rohit.png";
import bg2 from "../../assets/backgrounds/bg2.png";

const members = [
  {
    image: member1,
    name: "Mr. Rahul Sharma",
    role: "Founder & Managing Director",
    roleIcon: FaUserTie,
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
    roleIcon: FaBullhorn,
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
    roleIcon: FaHeadset,
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
    roleIcon: FaMapMarkedAlt,
    experience: "7+ Years",
    specialization: "Investment Planning",
    projects: "12+ Developments",
    description:
      "Provides expert guidance on land selection, legal verification, and long-term investment opportunities for every client.",
  },
];

const StatItem = ({ icon: Icon, label, value, color = "green" }) => {
  const colors = {
    green: "bg-[#eaf5e5] text-[#315d2f]",
    gold: "bg-[#fff1d6] text-[#c58a2d]",
  };

  return (
    <div className="flex min-w-0 items-center gap-3 rounded-xl border border-[#edf1ea] bg-[#f7faf6] px-3 py-2.5">
      <div
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-[10px] ${colors[color]}`}
      >
        <Icon className="text-base" />
      </div>

      <div className="min-w-0">
        <p className="text-[9px] font-semibold uppercase tracking-wider text-gray-500">
          {label}
        </p>
        <h4 className="mt-0.5 break-words text-[13.5px] font-bold text-[#244b31] 2xl:text-[15px]">
          {value}
        </h4>
      </div>
    </div>
  );
};

const TeamMembers = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat overflow-hidden py-14"
      style={{
        backgroundImage: `url(${bg2})`,
      }}
    >
      {/* Full container width (same as other sections) so it scales on laptop / large screens */}
      <div className="wide-container w-full px-4 sm:px-6 lg:px-8 2xl:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-xl font-bold uppercase">
            Meet <span className="text-[#7aac3b]">Our</span> Professionals
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[13px] text-gray-800">
            Our experienced team is committed to helping you make confident real
            estate decisions with trust, transparency, and personalized support.
          </p>
        </div>

        <div className="space-y-7 2xl:space-y-9">
          {members.map((member, index) => {
            const RoleIcon = member.roleIcon;
            const reverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`relative flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_28px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(16,24,40,0.13)] md:flex-row ${
                  reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Photo panel */}
                <div className="relative flex w-full justify-center bg-gradient-to-br from-[#f5f9f6] to-[#e6efe8] px-4 py-6 sm:px-5 md:w-[34%] md:items-center md:py-7 lg:w-[30%] 2xl:w-[28%]">
                  <div className="relative z-10 w-full max-w-[260px] sm:max-w-[290px] md:max-w-[250px] lg:max-w-[290px] 2xl:max-w-[340px]">
                    {/* Green corner accent: anchored to the photo itself so it stays aligned at every screen size */}
                    <div
                      className={`absolute -top-4 h-24 w-28 bg-[#17472b] 2xl:h-28 2xl:w-32 ${
                        reverse
                          ? "-right-4 rounded-tr-[28px]"
                          : "-left-4 rounded-tl-[28px]"
                      }`}
                    />

                    {/* Dotted pattern, also anchored to the photo */}
                    <div
                      className={`absolute -bottom-5 hidden h-16 w-16 bg-[radial-gradient(#b4c4b9_1.3px,transparent_1.3px)] [background-size:8px_8px] md:block ${
                        reverse ? "-right-5" : "-left-5"
                      }`}
                    />

                    <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-2xl border-4 border-white shadow-xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>

                    <div
                      className={`absolute bottom-3 z-20 max-w-[calc(100%-1.5rem)] rounded-[10px] bg-[#17472b] px-3 py-2 text-white shadow-lg left-1/2 -translate-x-1/2 ${
                        reverse
                          ? "md:left-auto md:right-3 md:translate-x-0"
                          : "md:left-3 md:translate-x-0"
                      }`}
                    >
                      <p className="text-[11px] font-bold leading-tight">
                        {member.role}
                      </p>
                      <p className="mt-0.5 text-[9.5px] text-white/80">
                        HeyDay Realty
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex min-w-0 flex-1 flex-col justify-center px-5 py-6 sm:px-[30px] sm:py-7 lg:px-11 lg:py-9 2xl:px-14 2xl:py-10">
                  <div className="relative z-10">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#edf7e9] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#315d2f]">
                      <FaLeaf className="text-[#7aac3b]" />
                      HeyDay Realty Team
                    </span>

                    <h3 className="mt-3 font-serif text-[22px] font-bold text-[#244b31] lg:text-[25px] 2xl:text-[30px]">
                      {member.name}
                    </h3>

                    <p className="mt-1 flex flex-wrap items-center gap-2 text-[12.5px] font-semibold text-[#b98230] 2xl:text-sm">
                      <RoleIcon className="text-xs" />
                      {member.role}
                    </p>

                    <div className="mb-3.5 mt-3 h-[3px] w-11 rounded-full bg-[#d49a42]" />

                    <p className="max-w-3xl text-[13px] leading-7 text-gray-800 lg:text-sm 2xl:text-[15px]">
                      {member.description}
                    </p>

                    <div className="mt-5 grid grid-cols-1 gap-3 border-t border-gray-200 pt-4 sm:grid-cols-2 lg:grid-cols-3">
                      <StatItem
                        icon={FaUserTie}
                        label="Experience"
                        value={member.experience}
                      />
                      <StatItem
                        icon={FaBullseye}
                        label="Expertise"
                        value={member.specialization}
                        color="gold"
                      />
                      <StatItem
                        icon={FaTrophy}
                        label="Achievements"
                        value={member.projects}
                      />
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