import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Name: ${form.name}
Phone: ${form.phone}
Location: ${form.location}

I am interested in buying a plot.
`;

    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <div className="bg-white shadow-2xl rounded-3xl p-10">

          <h2 className="text-4xl font-bold text-center mb-8">
            Enquire Now
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full border rounded-xl px-5 py-4"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full border rounded-xl px-5 py-4"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Preferred Location"
              className="w-full border rounded-xl px-5 py-4"
              onChange={(e) =>
                setForm({ ...form, location: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600"
            >
              Contact On WhatsApp
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;