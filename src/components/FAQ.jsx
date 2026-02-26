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
        {/* Glow background */}
        <div className="absolute inset-0 pointer-events-none flex justify-center">
          <div className="w-[700px] sm:w-[900px] h-[360px] bg-indigo-500/20 blur-[140px] rounded-full" />
        </div>

        {/* Grid Pattern */}
        <div
          className="
            absolute inset-0 pointer-events-none opacity-[0.08]
            [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div data-aos="fade-up" className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/85 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full backdrop-blur">
              <span className="w-[6px] h-[6px] rounded-full bg-sky-300 animate-pulse" />
              FAQ
            </div>

            <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-white">
              Frequently Asked
              <span className="text-sky-200 italic"> Questions</span>
            </h2>

            <p className="mt-4 text-white/65 text-sm sm:text-base leading-relaxed">
              Quick answers to common questions about onboarding, roles,
              security, and platform access.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="mt-14 sm:mt-16 max-w-4xl mx-auto space-y-5">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="
                    group
                    rounded-3xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-6
                    shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    transition-all duration-300
                    hover:-translate-y-1 hover:bg-white/10
                    hover:border-sky-400/30
                    hover:shadow-[0_16px_45px_rgba(0,0,0,0.35)]
                  "
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="
                      w-full flex items-start justify-between gap-5
                      text-left
                      focus:outline-none
                    "
                  >
                    <h3 className="text-white font-bold text-sm sm:text-base leading-snug pr-2">
                      {item.question}
                    </h3>

                    {/* Plus / Minus */}
                    <span
                      className={`
                        w-11 h-11 shrink-0
                        rounded-2xl
                        flex items-center justify-center
                        border border-white/15
                        bg-white/10
                        text-white
                        text-xl font-bold
                        transition-all duration-300
                        ${
                          isOpen
                            ? "border-sky-400/30 text-sky-200 bg-white/15"
                            : ""
                        }
                      `}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="mt-4">
                      <p className="text-white/65 text-sm sm:text-base leading-relaxed">
                        {item.answer}
                      </p>

                      {/* Bottom subtle line */}
                      <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
