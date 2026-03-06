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
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
    
    AOS.refresh();
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
      <style>{`
        /* Enhanced card animations */
        .about-card {
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          perspective: 1200px;
          transform-style: preserve-3d;
        }

        .about-card:hover {
          transform: translateY(-12px) translateZ(20px) scale(1.02);
          box-shadow: 0 40px 80px rgba(99, 102, 241, 0.35);
          border-color: rgba(99, 102, 241, 0.5);
          background: rgba(255, 255, 255, 0.08);
        }

        /* Glow border effect */
        .about-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.6), rgba(168, 85, 247, 0.3));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .about-card:hover::before {
          opacity: 1;
          animation: borderGlow 2s ease-in-out infinite;
        }

        @keyframes borderGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* Icon animations */
        .about-icon {
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: center;
        }

        .about-card:hover .about-icon {
          transform: translateY(-8px) scale(1.25) rotate(10deg);
          background: rgba(99, 102, 241, 0.25) !important;
          border-color: rgba(99, 102, 241, 0.6) !important;
          box-shadow: 0 0 40px rgba(99, 102, 241, 0.4), inset 0 0 20px rgba(99, 102, 241, 0.2);
        }

        /* Ripple effect */
        .about-card::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
          opacity: 0;
        }

        .about-card:hover::after {
          animation: rippleEffect 0.8s ease-out;
        }

        @keyframes rippleEffect {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            width: 400px;
            height: 400px;
            opacity: 0;
          }
        }

        /* Text animations */
        .about-title {
          transition: all 0.4s ease;
        }

        .about-card:hover .about-title {
          color: #93c5fd;
          letter-spacing: 0.5px;
          text-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
        }

        .about-desc {
          transition: all 0.4s ease;
        }

        .about-card:hover .about-desc {
          color: rgba(255, 255, 255, 0.85);
        }

        /* Bottom line animation */
        .about-line {
          transition: all 0.5s ease;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
        }

        .about-card:hover .about-line {
          background: linear-gradient(to right, transparent, rgba(99, 102, 241, 0.5), transparent);
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
        }

        /* Custom AOS animations */
        [data-aos="card-flip-in"] {
          opacity: 0;
          transform: rotateY(90deg) rotateX(30deg);
        }

        [data-aos="card-flip-in"].aos-animate {
          opacity: 1;
          transform: rotateY(0) rotateX(0);
        }

        [data-aos="card-slide-up"] {
          opacity: 0;
          transform: translateY(50px);
        }

        [data-aos="card-slide-up"].aos-animate {
          opacity: 1;
          transform: translateY(0);
        }

        [data-aos="card-zoom-bounce"] {
          opacity: 0;
          transform: scale(0.7) translateY(40px);
        }

        [data-aos="card-zoom-bounce"].aos-animate {
          opacity: 1;
          transform: scale(1) translateY(0);
          animation: bouncePop 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes bouncePop {
          0%, 100% { transform: scale(1) translateY(0); }
          25% { transform: scale(1.05) translateY(-8px); }
          50% { transform: scale(0.95) translateY(0); }
          75% { transform: scale(1.02) translateY(-4px); }
        }

        /* Section entrance */
        [data-aos="section-fade-up"] {
          opacity: 0;
          transform: translateY(40px);
        }

        [data-aos="section-fade-up"].aos-animate {
          opacity: 1;
          transform: translateY(0);
        }

        /* Header animations */
        .section-header {
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        [data-aos="header-slide-in"] {
          opacity: 0;
          transform: translateY(30px);
        }

        [data-aos="header-slide-in"].aos-animate {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Glow background */}
      <div 
        className="absolute inset-0 pointer-events-none flex justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
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

      <div className="relative max-w-6xl mx-auto space-y-16 sm:space-y-20">
        {/* ================= MISSION ================= */}
        <div data-aos="section-fade-up" data-aos-duration="800">
          {/* Header */}
          <div 
            data-aos="header-slide-in" 
            data-aos-duration="800"
            className="max-w-3xl mx-auto text-center section-header"
          >
            <div 
              className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/85 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full backdrop-blur"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <span className="w-[6px] h-[6px] rounded-full bg-sky-300 animate-pulse" />
              Our Mission
            </div>

            <h2 
              className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-white"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              Building the future of
              <span className="text-sky-200 italic"> workforce operations</span>
            </h2>

            <p 
              className="mt-4 text-white/65 text-sm sm:text-base leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
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
              const animationTypes = ["card-flip-in", "card-slide-up", "card-zoom-bounce"];
              const aoAnimation = animationTypes[index % animationTypes.length];
              
              return (
                <div
                  key={index}
                  data-aos={aoAnimation}
                  data-aos-duration="700"
                  data-aos-delay={250 + index * 100}
                  data-aos-offset="50"
                  className="
                    about-card
                    group h-full flex flex-col
                    rounded-3xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-6
                    shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    relative
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      about-icon
                      w-12 h-12
                      rounded-2xl
                      bg-white/10
                      border border-white/15
                      flex items-center justify-center
                      text-sky-200
                      mb-5
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="about-title text-white font-bold text-lg leading-snug">
                    {item.title}
                  </h3>

                  <p className="about-desc mt-3 text-white/65 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bottom subtle line */}
                  <div className="about-line mt-6 h-[1px] w-full" />
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= VISION ================= */}
        <div data-aos="section-fade-up" data-aos-duration="800" data-aos-delay="300">
          {/* Header */}
          <div 
            data-aos="header-slide-in" 
            data-aos-duration="800"
            data-aos-delay="350"
            className="max-w-3xl mx-auto text-center section-header"
          >
            <div 
              className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/85 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full backdrop-blur"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <span className="w-[6px] h-[6px] rounded-full bg-sky-300 animate-pulse" />
              Our Vision
            </div>

            <h2 
              className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-white"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="450"
            >
              A smarter, secure and
              <span className="text-sky-200 italic"> scalable HR ecosystem</span>
            </h2>

            <p 
              className="mt-4 text-white/65 text-sm sm:text-base leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
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
              const animationTypes = ["card-flip-in", "card-slide-up", "card-zoom-bounce"];
              const aoAnimation = animationTypes[index % animationTypes.length];
              
              return (
                <div
                  key={index}
                  data-aos={aoAnimation}
                  data-aos-duration="700"
                  data-aos-delay={550 + index * 100}
                  data-aos-offset="50"
                  className="
                    about-card
                    group h-full flex flex-col
                    rounded-3xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-6
                    shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    relative
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      about-icon
                      w-12 h-12
                      rounded-2xl
                      bg-white/10
                      border border-white/15
                      flex items-center justify-center
                      text-sky-200
                      mb-5
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="about-title text-white font-bold text-lg leading-snug">
                    {item.title}
                  </h3>

                  <p className="about-desc mt-3 text-white/65 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bottom subtle line */}
                  <div className="about-line mt-6 h-[1px] w-full" />
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