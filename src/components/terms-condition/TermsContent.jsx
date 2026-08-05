import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBalanceScale,
  FaCalendarAlt,
  FaCheckCircle,
  FaClipboardCheck,
  FaClock,
  FaEnvelope,
  FaFileContract,
  FaGavel,
  FaHandshake,
  FaLock,
  FaMapMarkerAlt,
  FaMoneyCheckAlt,
  FaPhoneAlt,
  FaReceipt,
  FaShieldAlt,
  FaUndoAlt,
  FaUserShield,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const legalImage =
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=85";

const termsSections = [
  {
    id: "booking-terms",
    icon: FaClipboardCheck,
    title: "Booking Terms",
    label: "Agreement",
    description:
      "All plot bookings are governed by a formal agreement that outlines the rights and responsibilities of both parties.",
    points: [
      {
        icon: FaCheckCircle,
        title: "Reservation Confirmation",
        text: "Booking amount confirms plot reservation subject to availability and verification.",
      },
      {
        icon: FaFileContract,
        title: "Agreement Execution",
        text: "A legally binding agreement must be signed within the specified timeline after booking.",
      },
      {
        icon: FaUserShield,
        title: "Customer Verification",
        text: "Customers must provide valid KYC documents for identity verification and compliance.",
      },
      {
        icon: FaReceipt,
        title: "Payment Acknowledgment",
        text: "Official receipts issued for all payments with transaction details and plot reference.",
      },
      {
        icon: FaHandshake,
        title: "Allotment Process",
        text: "Plot allotment confirmed after documentation completion and payment verification.",
      },
    ],
    notesTitle: "Key Requirements",
    notes: [
      "Valid government ID is mandatory for all bookings.",
      "Pan card required for transactions above specified limits.",
      "Booking amount is part of the total property consideration.",
    ],
  },
  {
    id: "payment-terms",
    icon: FaMoneyCheckAlt,
    title: "Payment Terms",
    label: "Schedule",
    description:
      "Payment schedules are structured to align with project milestones and ensure timely project completion.",
    points: [
      {
        icon: FaCalendarAlt,
        title: "Installment Plan",
        text: "Payments must follow the schedule specified in the booking agreement.",
      },
      {
        icon: FaMoneyCheckAlt,
        title: "Payment Methods",
        text: "Accept UPI, NEFT, RTGS, IMPS, bank transfer, demand draft, and cheque payments.",
      },
      {
        icon: FaClock,
        title: "Due Date Compliance",
        text: "Timely payment is mandatory; late payment charges apply as per agreement terms.",
      },
      {
        icon: FaReceipt,
        title: "Payment Confirmation",
        text: "Payment confirmation requires bank clearance for cheques and demand drafts.",
      },
      {
        icon: FaShieldAlt,
        title: "Secure Processing",
        text: "All payments processed through verified banking channels with proper documentation.",
      },
    ],
    notesTitle: "Payment Guidelines",
    notes: [
      "All payments must be made to HeyDay Realty official accounts only.",
      "Outstanding dues may affect possession and documentation.",
      "Payment receipts must be preserved for future reference.",
    ],
  },
  {
    id: "cancellation-terms",
    icon: FaCalendarAlt,
    title: "Cancellation Terms",
    label: "Policy",
    description:
      "Cancellation terms are clearly defined to ensure fair treatment for both customers and the company.",
    points: [
      {
        icon: FaCalendarAlt,
        title: "Cancellation Request",
        text: "Written cancellation requests must be submitted with booking reference and reason.",
      },
      {
        icon: FaUndoAlt,
        title: "Processing Fee",
        text: "Administrative processing fee applies as per the booking agreement terms.",
      },
      {
        icon: FaFileContract,
        title: "Document Surrender",
        text: "Original booking agreement and allotment letter must be returned for processing.",
      },
      {
        icon: FaBalanceScale,
        title: "Refund Calculation",
        text: "Refund amount calculated after deducting applicable charges per signed agreement.",
      },
      {
        icon: FaClock,
        title: "Processing Timeline",
        text: "Refund processing time depends on payment verification and documentation completion.",
      },
    ],
    notesTitle: "Important Information",
    notes: [
      "Cancellation requests must be submitted in writing.",
      "Post-allotment cancellations may have different terms.",
      "Refund eligibility subject to agreement terms and conditions.",
    ],
  },
];

const customerObligations = [
  {
    icon: FaUserShield,
    title: "Documentation",
    points: [
      "Provide accurate and complete information for all documentation.",
      "Submit valid government ID proof and KYC documents as required.",
      "Ensure all documents are authentic and up-to-date.",
    ],
  },
  {
    icon: FaMoneyCheckAlt,
    title: "Payment Compliance",
    points: [
      "Adhere to the payment schedule specified in the agreement.",
      "Make payments only to official HeyDay Realty accounts.",
      "Preserve all payment receipts for record-keeping.",
    ],
  },
  {
    icon: FaGavel,
    title: "Legal Compliance",
    points: [
      "Comply with all applicable laws and regulations.",
      "Cooperate with property registration and transfer processes.",
      "Respond promptly to any documentation or verification requests.",
    ],
  },
];

const companyObligations = [
  {
    icon: FaShieldAlt,
    title: "Property Delivery",
    points: [
      "Deliver the property as per the agreed specifications and timeline.",
      "Provide clear and marketable title for the property.",
      "Ensure all necessary approvals and permissions are in place.",
    ],
  },
  {
    icon: FaFileContract,
    title: "Documentation Support",
    points: [
      "Assist with property registration and transfer documentation.",
      "Provide all necessary documents for property registration.",
      "Maintain proper records of all transactions and agreements.",
    ],
  },
  {
    icon: FaHandshake,
    title: "Customer Support",
    points: [
      "Provide timely updates on project progress and milestones.",
      "Address customer queries and concerns promptly.",
      "Maintain transparency in all communications and transactions.",
    ],
  },
];

const disputeResolution = [
  "Any disputes arising from bookings shall be resolved through mutual discussion.",
  "If mutual resolution is not possible, disputes may be referred to arbitration.",
  "Arbitration proceedings shall be conducted in Gorakhpur, Uttar Pradesh.",
  "The decision of the arbitrator shall be final and binding on both parties.",
  "Courts in Gorakhpur, Uttar Pradesh shall have exclusive jurisdiction.",
];

const forceMajeure = [
  "HeyDay Realty shall not be liable for delays due to force majeure events.",
  "Force majeure includes natural disasters, government actions, and unforeseen circumstances.",
  "Project timelines may be extended reasonably in case of force majeure events.",
  "Customers shall be informed promptly of any force majeure-related delays.",
  "Neither party shall be liable for failure to perform due to force majeure.",
];

const supportItems = [
  { icon: FaPhoneAlt, label: "Phone", value: "+91 9161554321" },
  { icon: FaEnvelope, label: "Email", value: "theheydayrealty@gmail.com" },
  { icon: FaMapMarkerAlt, label: "Office", value: "Sports College, Gorakhnath Rd, Gorakhpur" },
  { icon: FaClock, label: "Working Hours", value: "Mon-Sat: 9:30 AM - 7:00 PM" },
];

export default function TermsContent() {
  return (
    <div id="terms" className="relative bg-white">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mx-auto grid h-11 w-11 place-items-center rounded-2xl border border-[#6DAA2C]/20 bg-[#6DAA2C]/10 text-[#6DAA2C] shadow-[0_18px_38px_-16px_rgba(109,170,44,0.45)]">
            <FaBalanceScale className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-[#D18A1D]" />
            <p className="text-[11px] font-bold uppercase tracking-normal text-[#6DAA2C]">Terms & Conditions</p>
            <span className="h-px w-16 bg-[#D18A1D]" />
          </div>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-normal text-[#0F2747]">
            Clear Agreement Terms
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[12px] font-medium leading-6 text-[#5C6472]">
            Our terms and conditions are designed to protect both parties and ensure transparent, fair, and legally compliant property transactions for agricultural land, residential plots, and farm properties.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:px-8">
        {termsSections.map((section, index) => {
          const SectionIcon = section.icon;

          return (
            <motion.article
              key={section.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55, delay: index * 0.04, ease: "easeOut" }}
              className="group rounded-3xl bg-gradient-to-br from-[#6DAA2C]/35 via-[#E7E3D8] to-[#D18A1D]/25 p-px shadow-[0_28px_60px_-30px_rgba(15,39,71,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_-16px_rgba(109,170,44,0.45)]"
            >
              <div className="grid gap-0 overflow-hidden rounded-3xl bg-white lg:grid-cols-[260px_minmax(0,1fr)_260px] sm:grid-cols-1">
                <div className="border-b border-[#E7E3D8] bg-gradient-to-br from-white to-[#F5F4EE] p-6 lg:border-b-0 lg:border-r">
                  <motion.span
                    whileHover={{ rotate: 8, scale: 1.05 }}
                    className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0F2747] text-[#6DAA2C] shadow-[0_18px_38px_-16px_rgba(109,170,44,0.45)]"
                  >
                    <SectionIcon className="h-6 w-6" aria-hidden="true" />
                  </motion.span>
                  <h3 className="mt-6 text-[15px] font-extrabold leading-6 text-[#171B20]">{section.title}</h3>
                  <p className="mt-4 text-[12px] font-medium leading-6 text-[#5C6472]">{section.description}</p>
                </div>

                <div className="p-6 lg:p-7">
                  <p className="text-[11px] font-extrabold uppercase tracking-normal text-[#6DAA2C]">
                    {section.label}
                  </p>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    {section.points.map((point) => {
                      const PointIcon = point.icon;

                      return (
                        <div key={point.title} className="flex gap-4">
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-[#6DAA2C]/10 text-[#6DAA2C]">
                            <PointIcon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <div>
                            <h4 className="text-[15px] font-bold leading-6 text-[#171B20]">{point.title}</h4>
                            <p className="mt-1 text-[12px] font-medium leading-5 text-[#5C6472]">{point.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid gap-5 lg:grid-cols-3"
        >
          {customerObligations.map((obligation) => {
            const ObligationIcon = obligation.icon;

            return (
              <div
                key={obligation.title}
                className="rounded-3xl border border-[#E7E3D8] bg-white p-6 shadow-[0_28px_60px_-30px_rgba(15,39,71,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#6DAA2C]/40 hover:shadow-[0_18px_38px_-16px_rgba(109,170,44,0.45)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#6DAA2C]/10 text-[#6DAA2C]">
                  <ObligationIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[15px] font-extrabold leading-6 text-[#171B20]">{obligation.title}</h3>
                <ul className="mt-4 grid gap-3">
                  {obligation.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[12px] font-medium leading-5 text-[#5C6472]">
                      <FaCheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6DAA2C]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid gap-5 lg:grid-cols-3"
        >
          {companyObligations.map((obligation) => {
            const ObligationIcon = obligation.icon;

            return (
              <div
                key={obligation.title}
                className="rounded-3xl border border-[#E7E3D8] bg-white p-6 shadow-[0_28px_60px_-30px_rgba(15,39,71,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#6DAA2C]/40 hover:shadow-[0_18px_38px_-16px_rgba(109,170,44,0.45)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#6DAA2C]/10 text-[#6DAA2C]">
                  <ObligationIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[15px] font-extrabold leading-6 text-[#171B20]">{obligation.title}</h3>
                <ul className="mt-4 grid gap-3">
                  {obligation.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[12px] font-medium leading-5 text-[#5C6472]">
                      <FaCheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6DAA2C]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-3xl border border-[#E7E3D8] bg-[#F5F4EE] p-7 shadow-[0_28px_60px_-30px_rgba(15,39,71,0.35)]"
        >
          <h2 className="text-2xl font-extrabold leading-tight text-[#0F2747]">Force Majeure</h2>
          <p className="mt-4 text-[12px] font-medium leading-6 text-[#5C6472]">
            Neither party shall be liable for failure to perform obligations due to circumstances beyond reasonable control, including natural disasters, government actions, and other unforeseen events.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {forceMajeure.map((term) => (
              <li key={term} className="flex gap-3 text-[12px] font-medium leading-6 text-[#5C6472]">
                <FaCheckCircle className="mt-1 h-4 w-4 shrink-0 text-[#6DAA2C]" aria-hidden="true" />
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-3xl border border-[#E7E3D8] bg-white p-6 shadow-[0_28px_60px_-30px_rgba(15,39,71,0.35)]"
        >
          <h2 className="text-2xl font-extrabold leading-tight text-[#0F2747]">Contact Support</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {supportItems.map((item) => {
              const SupportIcon = item.icon;

              return (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl bg-[#F5F4EE] p-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-[#6DAA2C]">
                    <SupportIcon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-normal text-[#5C6472]">{item.label}</p>
                    <p className="text-[12px] font-bold leading-5 text-[#171B20]">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
