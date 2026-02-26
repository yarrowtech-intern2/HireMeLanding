import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3500);
  };

  const validateField = (name, value) => {
    let error = "";

    if (name === "name" && !value.trim())
      error = "Full Name is required.";

    if (name === "mobile") {
      if (!value.trim()) error = "Mobile number is required.";
      else if (!/^\d{10}$/.test(value))
        error = "Mobile must be exactly 10 digits.";
    }

    if (name === "email") {
      if (!value.trim()) error = "Email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        error = "Invalid email format.";
    }

    if (name === "company" && !value.trim())
      error = "Company Name is required.";

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;
    if (name === "mobile")
      newValue = value.replace(/\D/g, "").slice(0, 10);

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    const error = validateField(name, newValue);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isFormValid =
    formData.name &&
    formData.mobile &&
    formData.email &&
    formData.company &&
    Object.values(errors).every((e) => !e);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!isFormValid) {
      showToast("error", "Please correct the highlighted fields.");
      return;
    }

    try {
      setLoading(true);

      const url = import.meta.env.VITE_SCRIPT_URL;
      if (!url) throw new Error("VITE_SCRIPT_URL missing");

      const formBody = new URLSearchParams();
      Object.keys(formData).forEach((key) =>
        formBody.append(key, formData[key])
      );
      formBody.append("project", "HIREME");

      const res = await fetch(url, {
        method: "POST",
        body: formBody,
      });

      const text = await res.text();
      const data = JSON.parse(text);

      if (!data.ok) throw new Error("Sheet insert failed");

      showToast(
        "success",
        "Thank you! Our team will contact you shortly. ✅"
      );

      setFormData({
        name: "",
        mobile: "",
        email: "",
        company: "",
        message: "",
      });

      setErrors({});
    } catch (err) {
      showToast("error", err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  const openEmail = () =>
    (window.location.href =
      "contact@hireme.com");

  const callPhone = () =>
    (window.location.href = "tel:+919830590929");

  const openAddress = () =>
    window.open(
      "https://www.google.com/maps/search/?api=1&query=3A,Bertram St,Esplanade,Dharmatala,Taltala,Kolkata,West Bengal 700087",
      "_blank"
    );

  return (
    <>
      {/* Toast */}
      <div className="fixed bottom-4 right-4 z-[9999] px-4 sm:px-0 w-full sm:w-auto flex justify-end">
        {toast && (
          <div className="relative overflow-hidden bg-white rounded-2xl px-5 py-4 shadow-xl border flex items-center gap-3 w-full sm:min-w-[320px] max-w-[95vw]">
            <div
              className={`absolute left-0 top-0 h-full w-1.5 ${
                toast.type === "success"
                  ? "bg-emerald-500"
                  : "bg-red-500"
              }`}
            />
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm ${
                toast.type === "success"
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-red-50 text-red-600"
              }`}
            >
              {toast.type === "success" ? "✓" : "!"}
            </div>
            <p className="text-[13px] font-medium text-slate-700">
              {toast.msg}
            </p>
          </div>
        )}
      </div>

      <section
        id="contact"
        className="bg-gradient-to-b from-[#0f1c4d] to-[#0b1437] py-20 px-4 sm:px-6 overflow-x-hidden"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT */}
          <div className="space-y-6" data-aos="fade-right">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              Get in Touch
            </h3>
            <p className="text-white/60">
              Have questions? We'd love to hear from you.
            </p>

            <div className="space-y-4 pt-6">
              <ContactCard icon={Mail} title="Email"
                value="contact@hireme.com"
                onClick={openEmail} />
              <ContactCard icon={Phone} title="Phone"
                value="+91 98305 90929"
                onClick={callPhone} />
              <ContactCard icon={MapPin} title="Office"
                value="3A, Bertram St, Esplanade, Dharmatala, Kolkata"
                onClick={openAddress} />
            </div>
          </div>

          {/* FORM */}
          <div data-aos="fade-left">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl">
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Contact Us
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Full Name" name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name} required />
                  <FormField label="Mobile No" name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    error={errors.mobile} required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Email Address" name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email} required />
                  <FormField label="Company Name" name="company"
                    value={formData.company}
                    onChange={handleChange}
                    error={errors.company} required />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your requirements (optional)..."
                  className="w-full min-h-[100px] rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/30 resize-none"
                />

                <button
                  type="submit"
                  disabled={!isFormValid || loading}
                  className={`w-full rounded-2xl py-3.5 text-base font-semibold transition-all duration-300 cursor-pointer ${
                    isFormValid
                      ? "bg-gradient-to-r from-sky-300 to-sky-500 text-slate-900 hover:-translate-y-0.5"
                      : "bg-gray-600/50 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ContactCard = ({ icon: Icon, title, value, onClick }) => (
  <button
    onClick={onClick}
    className="w-full text-left bg-white/8 border border-white/12 rounded-2xl p-5 hover:bg-white/12 transition-all duration-300 group cursor-pointer"
  >
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-sky-500/20 text-sky-300">
        <Icon size={20} />
      </div>
      <div className="flex-1 break-words">
        <div className="text-xs font-semibold text-white/60 uppercase mb-1">
          {title}
        </div>
        <div className="text-sm text-white font-medium break-all">
          {value}
        </div>
      </div>
    </div>
  </button>
);

const FormField = ({ label, error, required, type = "text", ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-semibold text-white/70 uppercase">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    <input
      type={type}
      required={required}
      className={`w-full rounded-2xl border bg-white/5 px-4 py-3 text-sm text-white outline-none ${
        error
          ? "border-red-500 focus:ring-red-400"
          : "border-white/15 focus:border-sky-400 focus:ring-sky-400"
      }`}
      {...props}
    />
    {error && <span className="text-xs text-red-400">⚠ {error}</span>}
  </div>
);

export default Contact;