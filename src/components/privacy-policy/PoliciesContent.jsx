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
  FaQuestionCircle,
  FaReceipt,
  FaShieldAlt,
  FaUndoAlt,
  FaUserShield,
} from "react-icons/fa";
import bg3 from "../../assets/backgrounds/bg3.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const documentImage =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85";
const paymentImage =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85";
const refundImage =
  "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=900&q=85";
import legalImage from "../../assets/images/privacy1.png";
import ctaImage from "../../assets/images/privacy2.png";

const policySections = [
  {
    id: "booking",
    icon: FaClipboardCheck,
    title: "Booking Policy",
    label: "Process",
    description:
      "Our streamlined booking process ensures secure plot allocation with proper documentation and legal verification for agricultural land, residential plots, and farm properties.",
    image: documentImage,
    imageAlt: "Signed property agreement documents on a desk",
    points: [
      {
        icon: FaCheckCircle,
        title: "Plot Selection",
        text: "Choose your preferred plot from our verified agricultural and residential land inventory with clear demarcation.",
      },
      {
        icon: FaUserShield,
        title: "KYC Verification",
        text: "Complete identity verification and document submission for secure and compliant property transactions.",
      },
      {
        icon: FaFileContract,
        title: "Booking Agreement",
        text: "Execute a legally binding booking agreement with clearly defined terms, payment schedule, and possession timeline.",
      },
      {
        icon: FaReceipt,
        title: "Payment Acknowledgment",
        text: "Receive official receipts for all payments with transaction details and plot allocation confirmation.",
      },
      {
        icon: FaHandshake,
        title: "Site Handover",
        text: "Formal site handover with boundary marking, possession certificate, and documentation completion.",
      },
    ],
    notesTitle: "Key Requirements",
    notes: [
      "Valid government-issued ID proof is mandatory for all bookings.",
      "Pan card required for transactions above specified limits.",
      "Booking amount confirms plot reservation subject to availability.",
    ],
  },
  {
    id: "payment",
    icon: FaMoneyCheckAlt,
    title: "Payment Policy",
    label: "Methods",
    description:
      "Multiple secure payment options with flexible installment plans for agricultural land, residential plots, and investment properties.",
    image: paymentImage,
    imageAlt: "Premium payment and finance documents",
    points: [
      {
        icon: FaCalendarAlt,
        title: "Installment Schedule",
        text: "Structured payment plans aligned with project milestones and development progress.",
      },
      {
        icon: FaMoneyCheckAlt,
        title: "Payment Methods",
        text: "Accept UPI, NEFT, RTGS, IMPS, bank transfer, demand draft, and cheque payments.",
      },
      {
  icon: FaReceipt,
  title: "Invoice Generation",
  text: "Digital invoices and transaction details are provided for every approved payment made towards the property.",
},
      {
        icon: FaClock,
        title: "Due Date Management",
        text: "Payment reminders sent before due dates; late payment charges apply as per agreement.",
      },
      {
        icon: FaShieldAlt,
        title: "Secure Transactions",
        text: "All payments processed through verified banking channels with proper audit trails.",
      },
    ],
    notesTitle: "Payment Guidelines",
    notes: [
      "All payments must be made to HeyDay Realty official accounts only.",
      "Payment confirmation requires bank clearance for cheques and drafts.",
      "Outstanding dues may affect possession and documentation.",
    ],
  },
  {
    id: "cancellation",
    icon: FaCalendarAlt,
    title: "Cancellation Policy",
    label: "Guidelines",
    description:
      "Our cancellation policy provides clear guidelines for plot booking cancellations with transparent processing and defined refund procedures.",
    image: legalImage,
    imageAlt: "Legal documents and pen on a professional desk",
    points: [
      {
        icon: FaCalendarAlt,
        title: "Cancellation Request",
        text: "Submit written cancellation requests with booking reference and reason for cancellation.",
      },
      {
        icon: FaUndoAlt,
        title: "Processing Fee",
        text: "Administrative processing fee applies as per booking agreement terms and conditions.",
      },
      {
        icon: FaFileContract,
        title: "Document Return",
        text: "Original booking agreement and allotment letter must be surrendered for cancellation processing.",
      },
      {
        icon: FaBalanceScale,
        title: "Eligibility Review",
        text: "Each request is reviewed based on payment status, project stage, and agreement terms.",
      },
      {
        icon: FaQuestionCircle,
        title: "Refund Calculation",
        text: "Refund amount calculated after deducting applicable charges per signed agreement.",
      },
    ],
    notesTitle: "Important Information",
    notes: [
      "Cancellation requests must be submitted in writing.",
      "Processing time depends on payment verification and documentation.",
      "Post-allotment cancellations may have different terms.",
    ],
  },
];

const compactPolicies = [
  {
    icon: FaGavel,
    title: "Legal Policy",
    points: ["Comprehensive land title verification", "Government approval compliance", "Ownership documentation review"],
  },
  {
    icon: FaLock,
    title: "Privacy Policy",
    points: ["Secure customer data handling", "Consent-based information collection", "Compliance with data protection laws"],
  },
  {
    icon: FaFileContract,
    title: "Disclaimer",
    points: ["Property images are representative", "Pricing subject to change", "Availability requires confirmation"],
  },
  {
    icon: FaPhoneAlt,
    title: "Customer Support",
    points: ["Dedicated sales assistance", "Documentation support team", "Site visit coordination"],
  },
];

const privacyItems = [
  "We collect personal information through inquiry forms, site visit requests, and booking applications for property consultation services.",
  "Contact details including name, phone number, email, and address are used to communicate about property availability and site visits.",
  "Financial information collected for booking verification and payment processing is encrypted and stored securely.",
  "We use cookies and analytics tools to improve website performance and understand user behavior for better service delivery.",
  "Customer data is retained only as necessary for business operations, legal compliance, and transaction records.",
  "Users may request access, correction, or deletion of their personal data by contacting our support team.",
  "We do not sell or rent personal information to third parties for marketing purposes without explicit consent.",
];

const disclaimerItems = [
  "All property images, site photographs, and project renderings displayed on this website are for illustrative purposes only.",
  "Plot prices, availability, and specifications are subject to change without prior notice until formal booking confirmation.",
  "Property dimensions, boundaries, and amenities mentioned are approximate and subject to final survey and development plans.",
  "HeyDay Realty is not responsible for delays or changes due to government regulations, environmental factors, or force majeure events.",
  "Website content does not constitute legal advice; customers should consult legal professionals for property-related decisions.",
];

const supportItems = [
  { icon: FaPhoneAlt, label: "Phone", value: "+91 9161554321" },
  { icon: FaEnvelope, label: "Email", value: "theheydayrealty@gmail.com" },
  { icon: FaMapMarkerAlt, label: "Office", value: "Sports College, Gorakhnath Rd, Gorakhpur" },
  { icon: FaClock, label: "Working Hours", value: "Mon-Sat: 9:30 AM - 7:00 PM" },
];

const terms = [
  "All plot bookings are governed by the terms specified in the booking agreement executed between HeyDay Realty and the customer.",
  "Customers are responsible for providing accurate information and valid documents for property registration and transfer processes.",
  "HeyDay Realty reserves the right to modify project specifications, pricing, and payment schedules as per regulatory requirements.",
  "Timely payment of installments is mandatory; default may result in interest charges, allotment cancellation, or legal action.",
  "Property possession is handed over only after full payment completion and documentation formalities as per agreement.",
  "Disputes arising from bookings are subject to the jurisdiction of courts in Gorakhpur, Uttar Pradesh.",
  "Force majeure events including natural disasters, government actions, or unforeseen circumstances may delay project timelines.",
];

export default function PoliciesContent() {

  return (
    <div 
      id="policies" 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg3})`,
      }}
    >
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
            <FaShieldAlt className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-[#D18A1D]" />
            <p className="text-[11px] font-bold uppercase tracking-normal text-[#6DAA2C]">Transparent Policies</p>
            <span className="h-px w-16 bg-[#D18A1D]" />
          </div>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-normal text-[#0F2747]">
            Trusted Land Investment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[12px] font-medium leading-6 text-[#5C6472]">
            We believe transparency builds lasting relationships. Every policy below is designed to protect your investment in agricultural land, residential plots, and farm properties while ensuring smooth transactions.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:px-8">
        {policySections.map((section, index) => {
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
          className="grid gap-5 lg:grid-cols-4 sm:grid-cols-2"
        >
          {compactPolicies.map((policy) => {
            const PolicyIcon = policy.icon;

            return (
              <div
                key={policy.title}
                className="rounded-3xl border border-[#E7E3D8] bg-white p-6 shadow-[0_28px_60px_-30px_rgba(15,39,71,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#6DAA2C]/40 hover:shadow-[0_18px_38px_-16px_rgba(109,170,44,0.45)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#6DAA2C]/10 text-[#6DAA2C]">
                  <PolicyIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[15px] font-extrabold leading-6 text-[#171B20]">{policy.title}</h3>
                <ul className="mt-4 grid gap-3">
                  {policy.points.map((point) => (
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

      <section id="privacy-policy" className="bg-[#F5F4EE] py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8 sm:grid-cols-1">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="rounded-3xl border border-[#E7E3D8] bg-white p-6 shadow-[0_28px_60px_-30px_rgba(15,39,71,0.35)]"
          >
            <h2 className="text-2xl font-extrabold leading-tight text-[#0F2747]">Privacy Policy</h2>
            <ul className="mt-6 grid gap-4">
              {privacyItems.map((item) => (
                <li key={item} className="flex gap-3 text-[12px] font-medium leading-6 text-[#5C6472]">
                  <FaLock className="mt-1 h-4 w-4 shrink-0 text-[#6DAA2C]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
            className="rounded-3xl border border-[#E7E3D8] bg-white p-6 shadow-[0_28px_60px_-30px_rgba(15,39,71,0.35)]"
          >
            <h2 className="text-2xl font-extrabold leading-tight text-[#0F2747]">Disclaimer</h2>
            <ul className="mt-6 grid gap-4">
              {disclaimerItems.map((item) => (
                <li key={item} className="flex gap-3 text-[12px] font-medium leading-6 text-[#5C6472]">
                  <FaFileContract className="mt-1 h-4 w-4 shrink-0 text-[#6DAA2C]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="rounded-3xl border border-[#E7E3D8] bg-white p-6 shadow-[0_28px_60px_-30px_rgba(15,39,71,0.35)]"
          >
            <h2 className="text-2xl font-extrabold leading-tight text-[#0F2747]">Customer Support</h2>
            <div className="mt-6 grid gap-3">
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
        </div>
      </section>

      <section id="terms-conditions" className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid overflow-hidden rounded-3xl border border-[#E7E3D8] bg-white shadow-[0_28px_60px_-30px_rgba(15,39,71,0.35)] lg:grid-cols-[0.78fr_1.22fr] sm:grid-cols-1"
        >
          <div className="relative min-h-72 overflow-hidden">
            <img
              src={legalImage}
              alt="Legal and agreement papers for terms and conditions"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0F2747]/45" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-normal text-[#0F2747]">
                <FaBalanceScale className="h-4 w-4 text-[#6DAA2C]" aria-hidden="true" />
                Terms & Conditions
              </span>
            </div>
          </div>

          <div className="p-7">
            <h2 className="text-2xl font-extrabold leading-tight text-[#0F2747]">Agreement-Led Clarity</h2>
            <p className="mt-4 text-[12px] font-medium leading-6 text-[#5C6472]">
              Formal agreements define rights, responsibilities, payment commitments, and
              jurisdiction so every transaction is handled with precision.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {terms.map((term) => (
                <li key={term} className="flex gap-3 text-[12px] font-medium leading-6 text-[#5C6472]">
                  <FaCheckCircle className="mt-1 h-4 w-4 shrink-0 text-[#6DAA2C]" aria-hidden="true" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-[#0F2747] p-7 text-white shadow-[0_28px_60px_-30px_rgba(15,39,71,0.35)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(109,170,44,0.28),transparent_40%,rgba(209,138,29,0.18))]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-[#6DAA2C]">
                <FaShieldAlt className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-normal text-[#6DAA2C]">Important Notes</p>
                <h2 className="mt-2 text-2xl font-extrabold leading-tight">Policy reminders before you proceed</h2>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
              {[
                "Verify all property documents before making any payment decisions.",
                "Ensure payment receipts are obtained for every transaction made.",
                "Contact support immediately for any discrepancies in documentation.",
                "Review booking agreement terms carefully before signing.",
              ].map((note) => (
                <div key={note} className="flex gap-3 rounded-2xl border border-white/12 bg-white/8 p-3">
                  <FaCheckCircle className="mt-1 h-4 w-4 shrink-0 text-[#6DAA2C]" aria-hidden="true" />
                  <p className="text-[12px] font-medium leading-5 text-white/80">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid overflow-hidden rounded-3xl border border-[#E7E3D8] bg-white shadow-[0_28px_60px_-30px_rgba(15,39,71,0.35)] lg:grid-cols-[1fr_0.9fr] sm:grid-cols-1"
        >
          <div className="p-7">
            <p className="text-[11px] font-bold uppercase tracking-normal text-[#6DAA2C]">Need Assistance?</p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#0F2747]">Our policy team is here to help.</h2>
            <p className="mt-4 max-w-xl text-[12px] font-medium leading-6 text-[#5C6472]">
              Reach out to our support team for guidance on plot bookings, payment schedules, documentation requirements, site visits, or any policy-related questions.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                { icon: FaShieldAlt, title: "Verified Properties", text: "All plots undergo thorough land verification." },
                { icon: FaHandshake, title: "Clear Documentation", text: "Transparent paperwork for every transaction." },
                { icon: FaUserShield, title: "Customer Priority", text: "Dedicated support throughout your journey." },
              ].map((item) => {
                const ItemIcon = item.icon;

                return (
                  <div key={item.title} className="rounded-2xl bg-[#F5F4EE] p-4">
                    <ItemIcon className="h-5 w-5 text-[#6DAA2C]" aria-hidden="true" />
                    <h3 className="mt-3 text-[15px] font-bold leading-6 text-[#171B20]">{item.title}</h3>
                    <p className="mt-1 text-[12px] font-medium leading-5 text-[#5C6472]">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative min-h-72">
            <img
              src={ctaImage}
              alt="Modern luxury house surrounded by greenery"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent lg:from-transparent" />
          </div>
        </motion.div>
      </section>


    </div>
  );
}
