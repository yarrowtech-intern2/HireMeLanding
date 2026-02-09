import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our team will contact you shortly.");
    setFormData({
      name: "",
      mobile: "",
      email: "",
      company: "",
      message: "",
    });
  };

  /* -------- Click Actions -------- */
  const openEmail = () => {
    window.location.href = "mailto:support@hireme.com";
  };

  const callPhone = () => {
    window.location.href = "tel:+919830590929";
  };

  const openAddress = () => {
    window.open(
      "https://www.google.com/maps/search/3A,+Bertram+St,+Esplanade,+Dharmatala,+Taltala,+Kolkata,+West+Bengal+700087",
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        bg-gradient-to-b from-[#0f1c4d] to-[#0b1437]
        py-20 sm:py-28
        px-4 sm:px-6
      "
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Contact <span className="text-indigo-400">HireME</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            We’re here to help you with subscriptions, workforce management, and
            technical support. Reach out anytime.
          </p>
        </div>

        {/* Content */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-2
            gap-12 lg:gap-16
            items-start
          "
        >
          {/* Left Info */}
          <div data-aos="fade-right">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
              Let’s connect
            </h3>

            <p className="text-slate-300 leading-relaxed mb-10 text-sm sm:text-base">
              Whether you’re looking for a workforce management solution,
              subscription details, or technical support, our team is ready to
              assist you.
            </p>

            <div className="space-y-5 text-slate-300 text-sm sm:text-base">
              <div
                onClick={openEmail}
                className="
                  flex items-start gap-3 cursor-pointer
                  hover:text-white transition
                "
              >
                <span className="mt-1 text-indigo-400">
                  <FaEnvelope />
                </span>
                <p>
                  <strong>Email:</strong> support@hireme.com
                </p>
              </div>

              <div
                onClick={callPhone}
                className="
                  flex items-start gap-3 cursor-pointer
                  hover:text-white transition
                "
              >
                <span className="mt-1 text-indigo-400">
                  <FaPhoneAlt />
                </span>
                <p>
                  <strong>Phone:</strong> +91 9830590929
                </p>
              </div>

              <div
                onClick={openAddress}
                className="
                  flex items-start gap-3 cursor-pointer
                  hover:text-white transition
                "
              >
                <span className="mt-1 text-indigo-400">
                  <FaMapMarkerAlt />
                </span>
                <p>
                  <strong>Address:</strong> 3A, Bertram St, Esplanade,
                  Dharmatala, Taltala, Kolkata, West Bengal 700087
                </p>
              </div>
            </div>

          </div>

          {/* Right Form */}
          <div
            data-aos="fade-left"
            className="
              bg-white rounded-2xl
              p-6 sm:p-8 lg:p-10
              shadow-xl
              w-full max-w-lg mx-auto
            "
          >
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
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
              />

              <Input
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                type="email"
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

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Description
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your requirement..."
                  className="
                    mt-1 w-full rounded-lg border border-slate-300
                    px-4 py-3
                    focus:ring-2 focus:ring-indigo-500
                    outline-none
                    resize-none
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
                Submit
              </button>

              <p className="text-xs text-slate-500 text-center pt-2">
                By submitting, you agree to be contacted by our team.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Input = ({ label, required = true, ...props }) => (
  <div>
    <label className="text-sm font-medium text-slate-700">{label}</label>
    <input
      {...props}
      required={required}
      className="
        mt-1 w-full rounded-lg border border-slate-300
        px-4 py-3
        focus:ring-2 focus:ring-indigo-500
        outline-none
      "
    />
  </div>
);

export default Contact;
