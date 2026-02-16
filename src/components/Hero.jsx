import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HireMeHero = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ show success message (no alert)
    setSubmitted(true);

    // ✅ clear form
    setFormData({
      name: "",
      mobile: "",
      email: "",
      company: "",
      message: "",
    });

    // ✅ auto hide message
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        bg-gradient-to-b from-[#0f1c4d] to-[#0b1437]
        text-white
        pt-24 pb-20
        sm:pt-28
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="w-[700px] sm:w-[900px] h-[360px] bg-indigo-500/20 blur-[140px] rounded-full" />
      </div>

      <div
        className="
          relative max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-16
          grid grid-cols-1 md:grid-cols-2
          gap-12 items-start
          pt-12 sm:pt-16 md:pt-20
        "
      >
        {/* LEFT CONTENT */}
        <div data-aos="fade-right" className="text-center md:text-left">
          <p className="text-indigo-300 font-semibold uppercase tracking-wider mb-3 text-sm sm:text-base">
            Smart Hiring Platform
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Hire Smarter.
            <br />
            <span className="text-indigo-300">Manage Effortlessly.</span>
          </h1>

          <p className="text-indigo-100 text-base sm:text-lg max-w-xl mx-auto md:mx-0 mb-8">
            Manage your team with confidence using <strong>Hire Me</strong> — an
            all-in-one platform for subscriptions, HR management, and data-driven
            insights.
          </p>

          <ul className="space-y-3 text-indigo-100 text-sm sm:text-base max-w-md mx-auto md:mx-0">
            <li>✔ Centralized workforce management</li>
            <li>✔ Secure employee records</li>
            <li>✔ Real-time analytics & reporting</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div
          data-aos="fade-left"
          className="
            bg-white text-gray-900
            rounded-2xl shadow-2xl
            p-6 sm:p-8 lg:p-10
            w-full max-w-lg mx-auto
          "
        >
          {/* ✅ SUCCESS MESSAGE */}
          {submitted && (
            <div className="mb-5 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-center">
              <p className="font-bold text-indigo-900">
                Message Sent Successfully ✅
              </p>
              <p className="text-sm text-indigo-700 mt-1">
                Our team will contact you shortly.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              autoComplete="name"
            />

            <Input
              label="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              inputMode="numeric"
              autoComplete="tel"
            />

            <Input
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              autoComplete="email"
            />

            <Input
              label="Company Name"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company (optional)"
              required={false}
            />

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Description
              </label>
              <p className="text-xs text-gray-500 mb-1">
                Briefly describe your requirement.
              </p>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Example: HR system for a team of 50 employees"
                className="
                  w-full rounded-lg border border-gray-300 px-4 py-3
                  focus:ring-2 focus:ring-indigo-500 outline-none
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full bg-indigo-600 text-white py-3 rounded-lg
                font-semibold
                hover:bg-indigo-700 hover:shadow-lg
                transition
              "
            >
              {submitted ? "Sent ✅" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Input = ({ label, required = true, ...props }) => (
  <div>
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      {...props}
      required={required}
      className="
        mt-1 w-full rounded-lg border border-gray-300 px-4 py-3
        focus:ring-2 focus:ring-indigo-500 outline-none
      "
    />
  </div>
);

export default HireMeHero;
