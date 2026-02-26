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
    desc: "Companies can apply and get verified as official HireME partners through our rigorous approval process, ensuring system integrity and quality standards.",
    icon: Handshake,
  },
  {
    title: "Subscription Access",
    desc: "Flexible subscription plans with transparent pricing to unlock full platform functionality based on your organization's needs.",
    icon: CreditCard,
  },
  {
    title: "HR Dashboard",
    desc: "Comprehensive employee management with real-time tracking, advanced search, document uploads, and status monitoring.",
    icon: LayoutDashboard,
  },
  {
    title: "Admin Control Panel",
    desc: "Centralized oversight for reviewing applications, monitoring platform usage, and tracking key workforce metrics.",
    icon: ShieldCheck,
  },
  {
    title: "Employment Records",
    desc: "Secure, centralized storage for all employee data including work history, performance metrics, and company associations.",
    icon: FolderOpen,
  },
  {
    title: "Analytics & Reporting",
    desc: "Powerful insights into workforce trends, productivity metrics, and HR operational efficiency.",
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
            Our Services
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-white">
            Services built for modern
            <span className="text-sky-200 italic"> workforce teams</span>
          </h2>

          <p className="mt-4 text-white/65 text-sm sm:text-base leading-relaxed">
            HireME gives companies, partners, admins, and HR teams the tools they
            need to manage subscriptions, employees, compliance, and analytics
            in one secure system.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-14 sm:mt-16
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-6
          "
        >
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                data-aos="zoom-in"
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
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-12 h-12
                    rounded-2xl
                    bg-white/10
                    border border-white/15
                    flex items-center justify-center
                    text-sky-200
                    mb-5
                    transition
                    group-hover:bg-white/15
                  "
                >
                  <Icon size={22} />
                </div>

                <h3 className="text-white font-bold text-lg leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-white/65 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        </div>
    </section>
  );
};

export default Services;
