import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "How do companies register on Hire Me?",
    answer:
      "Companies can sign up via the registration page and submit a partner request. After approval by an administrator, they gain access to manage subscriptions and employees.",
  },
  {
    question: "What roles are supported on the platform?",
    answer:
      "The platform supports multiple roles including Company users, HR personnel, Administrators, and Guest users.",
  },
  {
    question: "Can HR personnel manage employee salaries?",
    answer:
      "Yes, HR users can manage payrolls, track salary payments, and update employee records securely.",
  },
  {
    question: "Is the platform secure for sensitive data?",
    answer:
      "Yes. We follow industry-standard security practices to protect company and employee data.",
  },
  {
    question: "Can guests access the dashboard?",
    answer:
      "Guests can only view informational pages such as About, Services, and FAQ.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="scroll-mt-28 relative overflow-hidden bg-gradient-to-b from-[#0f1c4d] to-[#0b1437] py-20 sm:py-24 px-4 sm:px-6"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="w-[700px] sm:w-[900px] h-[360px] bg-indigo-500/20 blur-[140px] rounded-full" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]
      [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),
      linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)]
      [background-size:60px_60px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full backdrop-blur">
            <span className="w-[6px] h-[6px] rounded-full bg-sky-300 animate-pulse" />
            FAQ
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-white">
            Frequently Asked
            <span className="text-sky-200 italic"> Questions</span>
          </h2>

          <p className="mt-4 text-white/65 text-sm sm:text-base">
            Quick answers to common questions about onboarding, roles,
            security, and platform access.
          </p>

        </div>

        {/* FAQ */}
        <div className="mt-14 sm:mt-16 max-w-4xl mx-auto space-y-4">

          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 text-left p-6"
                >
                  <h3 className="text-white font-bold text-sm sm:text-base leading-snug">
                    {item.question}
                  </h3>

                  <span
                    className={`w-10 h-10 flex items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-6">
                    <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                      {item.answer}
                    </p>

                    <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
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

export default FAQ;