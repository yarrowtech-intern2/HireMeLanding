import React, { useState } from "react";

const HireMeHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    message: "",
  });

  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const onlyDigits = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, mobile: onlyDigits });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const isFormValid =
    formData.name.trim() &&
    /^\d{10}$/.test(formData.mobile) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.company.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!isFormValid) {
      showToast("error", "Please fill all required fields correctly.");
      return;
    }

    try {
      setLoading(true);

      const url = import.meta.env.VITE_SCRIPT_URL;
      if (!url) throw new Error("VITE_SCRIPT_URL missing");

      // CORS safe submission
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
      const data = JSON.parse(text);

      if (!data.ok) throw new Error("Submission failed");

      showToast(
        "success",
        "Thank you! Our team will contact you as soon as possible."
      );

      setFormData({
        name: "",
        mobile: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (err) {
      showToast("error", err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-[#0f1c4d] to-[#0b1437] px-6 py-20">

      {/* Toast */}
      <div className="fixed bottom-5 right-5 z-[9999]">
        {toast && (
          <div className={`px-4 py-3 rounded-xl shadow-lg text-sm ${
            toast.type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
          }`}>
            {toast.msg}
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            ● Workforce Management Platform
          </div>

          <h1 className="text-[48px] font-extrabold text-white leading-tight max-w-xl">
            Enterprise HR operations,{" "}
            <span className="text-sky-200 italic">unified</span> and secure.
          </h1>

          <p className="mt-6 text-white/70 max-w-lg">
            Partner onboarding, subscription control, HR operations, employee
            records, and analytics — built for reliability, compliance, and enterprise scale.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 max-w-lg">
            {[
              "Partner verification & approvals",
              "Subscription access management",
              "HR dashboard & employee tracking",
              "Analytics & workforce reporting",
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/80 text-sm">
                ◈ {item}
              </div>
            ))}
          </div>

          <div className="mt-12 flex gap-10 text-white">
            <div>
              <div className="text-2xl font-bold">6+</div>
              <div className="text-xs text-white/50 tracking-widest">MODULES</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-xs text-white/50 tracking-widest">SUPPORT</div>
            </div>
            <div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-xs text-white/50 tracking-widest">SECURE</div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            ● Contact
          </div>

          <h2 className="text-2xl font-bold text-white">Contact us</h2>
          <p className="text-white/60 text-sm mt-2 mb-6">
            Our team will respond within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Full Name" required name="name" value={formData.name} onChange={handleChange} />
              <Input label="Mobile No" required name="mobile" value={formData.mobile} onChange={handleChange} />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Email Address" required name="email" value={formData.email} onChange={handleChange} />
              <Input label="Company Name" required name="company" value={formData.company} onChange={handleChange} />
            </div>

            <div>
              <label className="text-xs text-white/60 uppercase tracking-wider">
                Description
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your requirements (optional)..."
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-2xl font-semibold text-[#0b1437] bg-gradient-to-r from-sky-200 to-sky-400 hover:opacity-90 transition"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

const Input = ({ label, required = false, ...props }) => (
  <div>
    <label className="text-xs text-white/60 uppercase tracking-wider">
      {label}
      {required && <span className="text-red-400 ml-1">*</span>}
    </label>

    <input
      {...props}
      required={required}
      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none"
    />
  </div>
);

export default HireMeHero;