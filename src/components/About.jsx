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
      {/* Glow background (Same as Services) */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="w-[700px] sm:w-[900px] h-[360px] bg-indigo-500/20 blur-[140px] rounded-full" />
      </div>

      {/* Grid Pattern (Same as Services) */}
      <div
        className="
          absolute inset-0 pointer-events-none opacity-[0.08]
          [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      <div className="relative max-w-6xl mx-auto space-y-16 sm:space-y-20">
        {/* ================= MISSION ================= */}
        <div>
          {/* Header */}
          <div data-aos="fade-up" className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/85 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full backdrop-blur">
              <span className="w-[6px] h-[6px] rounded-full bg-sky-300 animate-pulse" />
              Our Mission
            </div>

            <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-white">
              Building the future of
              <span className="text-sky-200 italic"> workforce operations</span>
            </h2>

            <p className="mt-4 text-white/65 text-sm sm:text-base leading-relaxed">
              We help organizations modernize HR operations through secure,
              scalable, and user-friendly workforce management tools.
            </p>
          </div>

          {/* Cards */}
          <div
            className="
              mt-14 sm:mt-16
              grid grid-cols-1 sm:grid-cols-2
              gap-6
            "
          >
            {missionItems.map((item, index) => {
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

        {/* ================= VISION ================= */}
        <div>
          {/* Header */}
          <div data-aos="fade-up" className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/85 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full backdrop-blur">
              <span className="w-[6px] h-[6px] rounded-full bg-sky-300 animate-pulse" />
              Our Vision
            </div>

            <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-white">
              A smarter, secure and
              <span className="text-sky-200 italic"> scalable HR ecosystem</span>
            </h2>

            <p className="mt-4 text-white/65 text-sm sm:text-base leading-relaxed">
              We envision a workforce ecosystem where HR becomes effortless,
              transparent, and data-driven — empowering organizations to grow.
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
            {visionItems.map((item, index) => {
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
      </div>
    </section>
  );
};

export default About;
