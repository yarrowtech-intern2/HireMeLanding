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
      offset: 100,
    });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div id="faq" className="scroll-mt-28"></div>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#0f1c4d] to-[#0b1437] py-20 sm:py-24 px-4 sm:px-6">

        <style>{`
          /* Smooth animations */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              max-height: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              max-height: 500px;
              transform: translateY(0);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 1;
              max-height: 500px;
              transform: translateY(0);
            }
            to {
              opacity: 0;
              max-height: 0;
              transform: translateY(-10px);
            }
          }

          .faq-card {
            transition: all 0.4s ease;
          }

          .faq-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
          }

          .faq-card.open {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(99, 102, 241, 0.3);
          }

          .faq-toggle {
            transition: all 0.3s ease;
          }

          .faq-toggle.rotate {
            transform: rotate(180deg);
          }

          .faq-icon {
            transition: all 0.3s ease;
          }

          .faq-card:hover .faq-icon {
            background: rgba(99, 102, 241, 0.2);
            border-color: rgba(99, 102, 241, 0.5);
          }

          .faq-card.open .faq-icon {
            background: rgba(99, 102, 241, 0.15);
            border-color: rgba(99, 102, 241, 0.4);
            color: #7dd3fc;
          }

          .faq-question {
            transition: color 0.3s ease;
          }

          .faq-card:hover .faq-question {
            color: #93c5fd;
          }

          .faq-card.open .faq-question {
            color: #93c5fd;
          }

          .faq-answer-container {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease, opacity 0.4s ease;
            opacity: 0;
          }

          .faq-answer-container.open {
            max-height: 500px;
            opacity: 1;
          }

          .faq-answer-content {
            padding-top: 1rem;
          }

          .faq-line {
            transition: background 0.3s ease;
            background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
          }

          .faq-card:hover .faq-line {
            background: linear-gradient(to right, transparent, rgba(99, 102, 241, 0.3), transparent);
          }
        `}</style>

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

          {/* FAQ Items */}
          <div className="mt-14 sm:mt-16 max-w-4xl mx-auto space-y-4">

            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className={`
                    faq-card
                    group
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-6
                    shadow-lg
                    ${isOpen ? "open" : ""}
                  `}
                >

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start justify-between gap-4 text-left focus:outline-none"
                  >

                    <h3 className="faq-question text-white font-bold text-sm sm:text-base leading-snug flex-1 pr-2">
                      {item.question}
                    </h3>

                    <span
                      className={`
                        faq-toggle
                        w-10 h-10
                        shrink-0
                        rounded-xl
                        border border-white/15
                        bg-white/10
                        text-white
                        text-lg
                        font-bold
                        flex items-center justify-center
                        faq-icon
                        ${isOpen ? "rotate" : ""}
                      `}
                    >
                      +
                    </span>

                  </button>

                  <div
                    className={`faq-answer-container ${isOpen ? "open" : ""}`}
                  >
                    <div className="faq-answer-content">
                      <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                        {item.answer}
                      </p>

                      <div className="faq-line mt-4 h-[1px] w-full" />
                    </div>
                  </div>

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