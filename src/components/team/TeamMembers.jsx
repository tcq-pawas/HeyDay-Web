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
    <div className="flex items-center gap-2.5">
      <div
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${colors[color]}`}
      >
        <Icon className="text-base" />
      </div>

      <div>
        <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
          {label}
        </p>
        <h4 className="mt-0.5 text-[13px] font-bold text-[#244b31]">
          {value}
        </h4>
      </div>
    </div>
  );
};

const TeamMembers = () => {
  return (
    <section className="overflow-hidden bg-[#f6f8f7] py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold uppercase">
            Meet <span className="text-[#7aac3b]">Our</span> Professionals
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600">
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
                className={`relative mx-auto flex max-w-[950px] flex-col overflow-hidden rounded-xl bg-white shadow-[0_8px_28px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(16,24,40,0.12)] lg:flex-row ${
                  reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="relative w-full bg-[#f5f9f6] p-4 lg:w-[32%]">
                  <div className="absolute left-0 top-0 h-20 w-24 rounded-br-3xl bg-[#17472b]" />

                  <div className="absolute bottom-7 left-3 hidden h-16 w-16 bg-[radial-gradient(#d5ded7_1px,transparent_1px)] [background-size:7px_7px] sm:block" />

                  <div className="relative z-10 mx-auto h-[260px] max-w-[235px] overflow-hidden rounded-xl border-[3px] border-white shadow-lg sm:h-[300px] lg:h-[260px]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  <div className="absolute bottom-5 left-6 z-20 flex items-center gap-2.5 rounded-lg bg-[#17472b] px-3 py-2.5 text-white shadow-lg">
                    
                    <div>
                      <p className="text-[9px] font-bold leading-none">
                        {member.role}
                      </p>
                      <p className="mt-1 text-[8px] text-white/80">
                        HeyDay Realty
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col justify-center px-5 py-6 md:px-7">
                  <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-44 rounded-bl-[75px] bg-[#eff5f1] opacity-80 lg:block" />

                  <div className="pointer-events-none absolute right-8 top-14 hidden text-[88px] text-[#dce7df] opacity-50 lg:block">
                    <FaCity />
                  </div>

                  <div className="relative z-10">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#edf7e9] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#315d2f]">
                      <FaLeaf className="text-[#7aac3b]" />
                      HeyDay Realty Team
                    </span>

                    <h3 className="mt-3 font-serif text-2xl font-bold text-[#244b31]">
                      {member.name}
                    </h3>

                    <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#b98230]">
                      <RoleIcon className="text-xs" />
                      {member.role}
                    </p>

                    <div className="mt-2 h-[2px] w-10 bg-[#d49a42]" />

                    <p className="mt-4 max-w-2xl text-[13px] leading-6 text-gray-600">
                      {member.description}
                    </p>

                    <div className="mt-5 grid gap-4 border-t border-gray-200 pt-4 sm:grid-cols-3">
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