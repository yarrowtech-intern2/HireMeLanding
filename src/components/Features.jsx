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
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
    
    AOS.refresh();
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
      <style>{`
        /* Enhanced card animations */
        .feature-card {
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          perspective: 1200px;
          transform-style: preserve-3d;
        }

        .feature-card:hover {
          transform: translateY(-12px) translateZ(20px) scale(1.02);
          box-shadow: 0 40px 80px rgba(99, 102, 241, 0.35);
          border-color: rgba(99, 102, 241, 0.5);
          background: rgba(255, 255, 255, 0.08);
        }

        /* Glow border effect */
        .feature-card::before {
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

        .feature-card:hover::before {
          opacity: 1;
          animation: borderGlow 2s ease-in-out infinite;
        }

        @keyframes borderGlow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        /* Icon animations */
        .feature-icon {
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: center;
        }

        .feature-card:hover .feature-icon {
          transform: translateY(-8px) scale(1.25) rotate(10deg);
          background: rgba(99, 102, 241, 0.25) !important;
          border-color: rgba(99, 102, 241, 0.6) !important;
          box-shadow: 0 0 40px rgba(99, 102, 241, 0.4), inset 0 0 20px rgba(99, 102, 241, 0.2);
        }

        /* Ripple effect */
        .feature-card::after {
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

        .feature-card:hover::after {
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
        .feature-title {
          transition: all 0.4s ease;
        }

        .feature-card:hover .feature-title {
          color: #93c5fd;
          letter-spacing: 0.5px;
          text-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
        }

        .feature-desc {
          transition: all 0.4s ease;
        }

        .feature-card:hover .feature-desc {
          color: rgba(255, 255, 255, 0.85);
        }

        /* Bottom line animation */
        .feature-line {
          transition: all 0.5s ease;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
        }

        .feature-card:hover .feature-line {
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

        /* Staggered animation delays */
        .feature-card[data-aos-delay="0"] {
          animation-delay: 0s;
        }
        .feature-card[data-aos-delay="80"] {
          animation-delay: 0.08s;
        }
        .feature-card[data-aos-delay="160"] {
          animation-delay: 0.16s;
        }
        .feature-card[data-aos-delay="240"] {
          animation-delay: 0.24s;
        }
        .feature-card[data-aos-delay="320"] {
          animation-delay: 0.32s;
        }
        .feature-card[data-aos-delay="400"] {
          animation-delay: 0.40s;
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

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div data-aos="fade-up" data-aos-duration="800" className="max-w-3xl mx-auto text-center">
          <div 
            className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/85 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full backdrop-blur"
            data-aos="zoom-in"
            data-aos-duration="600"
          >
            <span className="w-[6px] h-[6px] rounded-full bg-sky-300 animate-pulse" />
            Our Features
          </div>

          <h2 
            className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-white"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Features designed for
            <span className="text-sky-200 italic"> workforce excellence</span>
          </h2>

          <p 
            className="mt-4 text-white/65 text-sm sm:text-base leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
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
            
            // Rotate animation types
            const animationTypes = ["card-flip-in", "card-slide-up", "card-zoom-bounce"];
            const aoAnimation = animationTypes[index % animationTypes.length];
            
            return (
              <div
                key={index}
                data-aos={aoAnimation}
                data-aos-duration="700"
                data-aos-delay={index * 100}
                data-aos-offset="50"
                className="
                  feature-card
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
                    feature-icon
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

                <h3 className="feature-title text-white font-bold text-lg leading-snug">
                  {item.title}
                </h3>

                <p className="feature-desc mt-3 text-white/65 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom subtle line */}
                <div className="feature-line mt-6 h-[1px] w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;