import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  LayoutDashboard,
  ShieldCheck,
  Users,
  BarChart3,
  Lock,
  Layers,
} from "lucide-react";

const features = [
  {
    title: "Centralized Workforce Management",
    desc: "Manage employees, roles, attendance, and records from a single unified platform with real-time visibility.",
    icon: LayoutDashboard,
  },
  {
    title: "Role-Based Access Control",
    desc: "Granular permissions ensure admins, HR teams, and staff access only authorized information.",
    icon: ShieldCheck,
  },
  {
    title: "Subscription-Based Access",
    desc: "Flexible subscription plans allow organizations to unlock features based on business needs.",
    icon: Layers,
  },
  {
    title: "Advanced Analytics & Insights",
    desc: "Visual dashboards and reports provide actionable insights into workforce performance.",
    icon: BarChart3,
  },
  {
    title: "Secure Data Storage",
    desc: "Enterprise-grade security safeguards employee and organizational data.",
    icon: Lock,
  },
  {
    title: "Scalable Architecture",
    desc: "Built to grow with your organization, from startups to large enterprises.",
    icon: Users,
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section
      id="features"
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
            Our Features
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-white">
            Features designed for
            <span className="text-sky-200 italic"> workforce excellence</span>
          </h2>

          <p className="mt-4 text-white/65 text-sm sm:text-base leading-relaxed">
            HireME provides powerful tools for workforce management, access
            control, subscriptions, security, and performance insights — all in
            one unified system.
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
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="
                  group h-full flex flex-col
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
                    transition-all duration-300
                    group-hover:bg-white/15
                    group-hover:scale-110
                    group-hover:text-sky-100
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

                {/* Bottom subtle line */}
                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
