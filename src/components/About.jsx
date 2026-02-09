import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Lightbulb,
  Users,
  ShieldCheck,
  BarChart3,
  LayoutDashboard,
  Layers,
  Eye,
  RefreshCcw,
  CreditCard,
} from "lucide-react";

/* ================= DATA ================= */

const missionItems = [
  {
    title: "Innovation-First Approach",
    desc: "Cutting-edge technology solutions built for scale, reliability, and performance.",
    icon: Lightbulb,
  },
  {
    title: "Human-Centered Design",
    desc: "Thoughtfully designed workflows aligned with real-world operational needs.",
    icon: Users,
  },
  {
    title: "Enterprise Security",
    desc: "Bank-grade data protection with strict access control and compliance.",
    icon: ShieldCheck,
  },
  {
    title: "Data-Driven Insights",
    desc: "Actionable analytics that support confident, informed decision-making.",
    icon: BarChart3,
  },
];

const visionItems = [
  {
    title: "Centralized Workforce Management",
    desc: "A single intuitive dashboard to oversee the entire workforce in real time.",
    icon: LayoutDashboard,
  },
  {
    title: "Scalable HR Infrastructure",
    desc: "Modular systems that grow with organizations from startup to enterprise.",
    icon: Layers,
  },
  {
    title: "Transparent Operations",
    desc: "Clear visibility into HR processes for both administrators and employees.",
    icon: Eye,
  },
  {
    title: "Employment Continuity",
    desc: "Tools that support stable and long-term workforce relationships.",
    icon: RefreshCcw,
  },
  {
    title: "Digital Transformation",
    desc: "Modern digital workflows replacing outdated manual processes.",
    icon: BarChart3,
  },
  {
    title: "Subscription Flexibility",
    desc: "Transparent pricing models with no hidden costs.",
    icon: CreditCard,
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section
      id="about"
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

      <div className="relative max-w-6xl mx-auto space-y-16 sm:space-y-24">

        {/* ================= MISSION ================= */}
        <div
          data-aos="fade-up"
          className="
            bg-white/95 rounded-3xl
            p-6 sm:p-10 lg:p-14
            shadow-xl
          "
        >
          <h2 className="
            text-3xl sm:text-4xl
            font-extrabold text-center
            bg-gradient-to-r from-[#2563eb] to-[#1e40af]
            bg-clip-text text-transparent
          ">
            Our Mission
          </h2>

          <div className="
            mt-12 sm:mt-14
            grid grid-cols-1 md:grid-cols-2
            gap-6 sm:gap-8
          ">
            {missionItems.map((item, index) => {
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

        {/* ================= VISION ================= */}
        <div
          data-aos="fade-up"
          className="
            bg-white/95 rounded-3xl
            p-6 sm:p-10 lg:p-14
            shadow-xl
          "
        >
          <h2 className="text-3xl sm:text-4xl
            font-extrabold text-center
            bg-gradient-to-r from-[#2563eb] to-[#1e40af]
            bg-clip-text text-transparent">
            Our Vision
          </h2>


          <div className="
            mt-12 sm:mt-14
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-6 sm:gap-8
          ">
            {visionItems.map((item, index) => {
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
                      <h3 className="text-indigo-700 font-semibold text-base sm:text-lg">
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

export default About;
