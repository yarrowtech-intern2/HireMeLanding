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
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Anchor */}
      <div id="faq" className="scroll-mt-28" />

      <section
        className="
          relative overflow-hidden
          bg-gradient-to-b from-[#0f1c4d] to-[#0b1437]
          py-20 sm:py-24
          px-4 sm:px-6
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none flex justify-center">
          <div className="w-[700px] sm:w-[900px] h-[360px] bg-indigo-500/20 blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div
            data-aos="fade-up"
            className="
              bg-white/95 rounded-3xl
              p-6 sm:p-10 lg:p-14
              shadow-xl
            "
          >
            {/* Title */}
            <h2
              className="
                text-3xl sm:text-4xl
                font-extrabold text-center
                bg-gradient-to-r from-[#2563eb] to-[#1e40af]
                bg-clip-text text-transparent
              "
            >
              Frequently Asked Questions
            </h2>
            {/* FAQ Items */}
            <div className="mt-10 sm:mt-14 space-y-4 sm:space-y-6">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="
                    bg-white rounded-2xl
                    p-5 sm:p-6
                    shadow-md
                    transition-all duration-300
                    hover:shadow-xl
                  "
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="
                      w-full flex justify-between items-center
                      text-left
                      focus:outline-none
                    "
                  >
                    <h3 className="text-blue-800 font-semibold text-sm sm:text-base">
                      {item.question}
                    </h3>

                    <span className="text-2xl font-bold text-indigo-600 ml-4">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {openIndex === index && (
                    <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
