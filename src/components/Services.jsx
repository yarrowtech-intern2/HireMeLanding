import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Handshake,
  CreditCard,
  LayoutDashboard,
  ShieldCheck,
  FolderOpen,
  BarChart3,
} from "lucide-react";

const services = [
  {
    title: "Partnership Management",
    desc:
      "Companies can apply and get verified as official HireME partners through our rigorous approval process, ensuring system integrity and quality standards.",
    icon: Handshake,
  },
  {
    title: "Subscription Access",
    desc:
      "Flexible subscription plans with transparent pricing to unlock full platform functionality based on your organization’s needs.",
    icon: CreditCard,
  },
  {
    title: "HR Dashboard",
    desc:
      "Comprehensive employee management with real-time tracking, advanced search, document uploads, and status monitoring.",
    icon: LayoutDashboard,
  },
  {
    title: "Admin Control Panel",
    desc:
      "Centralized oversight for reviewing applications, monitoring platform usage, and tracking key workforce metrics.",
    icon: ShieldCheck,
  },
  {
    title: "Employment Records",
    desc:
      "Secure, centralized storage for all employee data including work history, performance metrics, and company associations.",
    icon: FolderOpen,
  },
  {
    title: "Analytics & Reporting",
    desc:
      "Powerful insights into workforce trends, productivity metrics, and HR operational efficiency.",
    icon: BarChart3,
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section
      id="services"
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
            Our Services
          </h2>

          {/* Service Cards */}
          <div
            className="
              mt-12 sm:mt-14
              grid grid-cols-1 md:grid-cols-2
              gap-6 sm:gap-8
            "
          >
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="
                    bg-white rounded-2xl p-5 sm:p-6
                    shadow-md
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-xl
                  "
                >
                  <div className="flex gap-4 items-start">
                    <div className="bg-indigo-50 p-3 rounded-xl shrink-0">
                      <Icon className="text-indigo-600" size={22} />
                    </div>
                    <div>
                      <h3 className="text-blue-800 font-semibold text-base sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
