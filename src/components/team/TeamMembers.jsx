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
    green: "bg-[#eef7eb] text-[#315d2f]",
    gold: "bg-[#fff4df] text-[#c58a2d]",
  };

  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <div
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${colors[color]}`}
      >
        <Icon className="text-base" />
      </div>

      <div className="min-w-0">
        <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
          {label}
        </p>
        <h4 className="mt-0.5 break-words text-[13px] font-bold text-[#244b31]">
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
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-xl font-bold uppercase">
            Meet <span className="text-[#7aac3b]">Our</span> Professionals
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[12px] text-gray-600">
            Our experienced team is committed to helping you make confident real
            estate decisions with trust, transparency, and personalized support.
          </p>
        </div>

        <div className="space-y-8">
          {members.map((member, index) => {
            const RoleIcon = member.roleIcon;
            const reverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`relative mx-auto flex w-full max-w-[950px] flex-col overflow-hidden rounded-xl bg-white shadow-[0_8px_28px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(16,24,40,0.12)] md:flex-row ${
                  reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="relative flex w-full justify-center bg-[#f5f9f6] p-4 sm:p-5 md:w-[34%] md:items-center">
                  <div
                    className={`absolute top-0 h-20 w-24 bg-[#17472b] ${
                      reverse
                        ? "right-0 rounded-bl-3xl"
                        : "left-0 rounded-br-3xl"
                    }`}
                  />

                  <div
                    className={`absolute bottom-7 hidden h-16 w-16 bg-[radial-gradient(#d5ded7_1px,transparent_1px)] [background-size:7px_7px] sm:block ${
                      reverse ? "right-3" : "left-3"
                    }`}
                  />

                  <div className="relative z-10 w-full max-w-[260px] sm:max-w-[300px] md:max-w-[235px]">
                    <div className="aspect-[4/5] overflow-hidden rounded-xl border-[3px] border-white shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>

                    <div
                      className={`absolute bottom-2 z-20 max-w-[calc(100%-1rem)] rounded-lg bg-[#17472b] px-3 py-2.5 text-white shadow-lg left-1/2 -translate-x-1/2 ${
                        reverse
                          ? "md:left-auto md:right-3 md:translate-x-0"
                          : "md:left-3 md:translate-x-0"
                      }`}
                    >
                      <p className="text-[9px] font-bold leading-none">
                        {member.role}
                      </p>
                      <p className="mt-1 text-[8px] text-white/80">
                        HeyDay Realty
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex min-w-0 flex-1 flex-col justify-center px-5 py-6 md:px-7">
                  <div className="relative z-10">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#edf7e9] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#315d2f]">
                      <FaLeaf className="text-[#7aac3b]" />
                      HeyDay Realty Team
                    </span>

                    <h3 className="mt-3 font-serif text-xl font-bold text-[#244b31]">
                      {member.name}
                    </h3>

                    <p className="mt-1 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#b98230]">
                      <RoleIcon className="text-xs" />
                      {member.role}
                    </p>

                    <div className="mt-2 h-[2px] w-10 bg-[#d49a42]" />

                    <p className="mt-4 max-w-2xl text-[12px] leading-6 text-gray-600">
                      {member.description}
                    </p>

                    <div className="mt-5 grid gap-4 border-t border-gray-200 pt-4 sm:grid-cols-2 xl:grid-cols-3">
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