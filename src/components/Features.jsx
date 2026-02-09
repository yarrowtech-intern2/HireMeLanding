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
    desc:
      "Manage employees, roles, attendance, and records from a single unified platform with real-time visibility.",
    icon: LayoutDashboard,
  },
  {
    title: "Role-Based Access Control",
    desc:
      "Granular permissions ensure admins, HR teams, and staff access only authorized information.",
    icon: ShieldCheck,
  },
  {
    title: "Subscription-Based Access",
    desc:
      "Flexible subscription plans allow organizations to unlock features based on business needs.",
    icon: Layers,
  },
  {
    title: "Advanced Analytics & Insights",
    desc:
      "Visual dashboards and reports provide actionable insights into workforce performance.",
    icon: BarChart3,
  },
  {
    title: "Secure Data Storage",
    desc:
      "Enterprise-grade security safeguards employee and organizational data.",
    icon: Lock,
  },
  {
    title: "Scalable Architecture",
    desc:
      "Built to grow with your organization, from startups to large enterprises.",
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
            Platform Features
          </h2>

          {/* Feature Cards */}
          <div
            className="
              mt-12 sm:mt-14
              grid grid-cols-1 md:grid-cols-2
              gap-6 sm:gap-8
            "
          >
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="
                    bg-white rounded-2xl
                    p-5 sm:p-6
                    shadow-md
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-xl
                  "
                >
                  <div className="flex items-start gap-4">
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

export default Features;
