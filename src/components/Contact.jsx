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

      if (!url) {
        throw new Error("VITE_SCRIPT_URL is missing in .env");
      }

      // ✅ CORS SAFE
      const formBody = new URLSearchParams();
      Object.keys(formData).forEach((key) => {
        formBody.append(key, formData[key]);
      });
      formBody.append("project", "HIREME");

      const res = await fetch(url, {
        method: "POST",
        body: formBody,
      });

      const text = await res.text();

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        console.error("Raw response:", text);
        throw new Error("Invalid JSON response from server");
      }

      if (!data.ok) {
        throw new Error(data.error || "Sheet insert failed");
      }

      // ✅ Updated Success Message
      showToast(
        "success",
        "Thank you! Our team will contact you as soon as possible. ✅"
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
      console.error(err);
      showToast("error", err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  const openEmail = () =>
    (window.location.href =
      "mailto:electronticeducaresales@yarrowtech.co.in");

  const callPhone = () =>
    (window.location.href = "tel:+919830590929");

  const openAddress = () =>
    window.open(
      "https://www.google.com/maps/search/?api=1&query=3A,Bertram St,Esplanade,Dharmatala,Taltala,Kolkata,West Bengal 700087",
      "_blank"
    );

  return (
    <>
      {/* Toast Notification */}
      <div className="fixed bottom-5 right-5 z-[9999]">
        {toast && (
          <div className="relative overflow-hidden bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-black/5 flex items-center gap-3 min-w-[300px] max-w-[400px]">
            <div
              className={`absolute left-0 top-0 h-full w-1.5 ${
                toast.type === "success" ? "bg-emerald-500" : "bg-red-500"
              }`}
            />
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 ${
                toast.type === "success"
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-red-50 text-red-600"
              }`}
            >
              {toast.type === "success" ? "✓" : "!"}
            </div>
            <p className="text-[13px] font-medium text-slate-700 leading-snug">
              {toast.msg}
            </p>
          </div>
        )}
      </div>

      <section
        id="contact"
        className="relative bg-gradient-to-b from-[#0f1c4d] to-[#0b1437] py-20 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTACT INFO */}
          <div className="space-y-6" data-aos="fade-right">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Get in Touch
              </h3>
              <p className="text-white/60 text-base">
                Have questions? We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4 pt-8">
              <ContactCard
                icon={Mail}
                title="Email"
                value="electronticeducaresales@yarrowtech.co.in"
                onClick={openEmail}
              />
              <ContactCard
                icon={Phone}
                title="Phone"
                value="+91 98305 90929"
                onClick={callPhone}
              />
              <ContactCard
                icon={MapPin}
                title="Office"
                value="3A, Bertram St, Esplanade, Dharmatala, Kolkata"
                onClick={openAddress}
              />
            </div>
          </div>

          {/* FORM CARD */}
          <div data-aos="fade-left">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-2xl p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/85 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  Contact
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Contact us
                </h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  Our team will respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Full Name" name="name" type="text"
                    value={formData.name} onChange={handleChange}
                    error={errors.name} required />
                  <FormField label="Mobile No" name="mobile" type="tel"
                    value={formData.mobile} onChange={handleChange}
                    error={errors.mobile} required inputMode="numeric" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Email Address" name="email" type="email"
                    value={formData.email} onChange={handleChange}
                    error={errors.email} required />
                  <FormField label="Company Name" name="company" type="text"
                    value={formData.company} onChange={handleChange}
                    error={errors.company} required />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-white/70 tracking-wide uppercase">
                    Description
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your requirements (optional)..."
                    className="w-full min-h-[100px] rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-sky-400/50 focus:bg-white/10 focus:ring-2 focus:ring-sky-400/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || loading}
                  className={`w-full rounded-2xl py-3.5 text-base font-semibold transition-all duration-300 ${
                    isFormValid
                      ? "bg-gradient-to-r from-sky-300 to-sky-500 text-slate-900 shadow-[0_8px_25px_rgba(56,189,248,0.3)] hover:shadow-[0_12px_35px_rgba(56,189,248,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                      : "bg-gray-600/50 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>

                {!isFormValid && Object.values(errors).some(e => e) && (
                  <p className="text-xs text-red-400 text-center">
                    Please fill in all required fields correctly
                  </p>
                )}
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
    className="w-full text-left bg-white/8 border border-white/12 rounded-2xl p-5 hover:bg-white/12 hover:border-white/20 transition-all duration-300 group"
  >
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-sky-500/20 text-sky-300 group-hover:bg-sky-500/30 transition-all duration-300 shrink-0">
        <Icon size={20} />
      </div>
      <div className="flex-1">
        <div className="text-xs font-semibold text-white/60 tracking-wide uppercase mb-1">
          {title}
        </div>
        <div className="text-sm text-white font-medium">{value}</div>
      </div>
    </div>
  </button>
);

const FormField = ({ label, error, required = false, type = "text", ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-semibold text-white/70 tracking-wide uppercase">
      {label}
      {required && <span className="text-red-400 ml-1">*</span>}
    </label>
    <input
      type={type}
      required={required}
      className={`w-full rounded-2xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-300 ${
        error
          ? "border-red-500/50 bg-red-500/5 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
          : "border-white/15 focus:border-sky-400/50 focus:bg-white/10 focus:ring-2 focus:ring-sky-400/30"
      }`}
      {...props}
    />
    {error && (
      <span className="text-xs text-red-400 font-medium flex items-center gap-1">
        ⚠ {error}
      </span>
    )}
  </div>
);

export default Contact;