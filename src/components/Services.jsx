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
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
      delay: 0,
    });
    
    // Refresh AOS on mount
    AOS.refresh();
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
      <style>{`
        /* Custom AOS animations */
        .aos-animate {
          opacity: 1;
        }

        /* Card hover animations */
        .service-card {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          perspective: 1000px;
        }

        .service-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 40px 80px rgba(99, 102, 241, 0.35);
        }

        /* Icon animations */
        .service-icon {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: inline-flex;
        }

        .service-card:hover .service-icon {
          transform: translateY(-6px) scale(1.15) rotate(5deg);
          background: rgba(99, 102, 241, 0.25) !important;
          border-color: rgba(99, 102, 241, 0.6) !important;
          box-shadow: 0 0 40px rgba(99, 102, 241, 0.4);
        }

        /* Text animations */
        .service-title {
          transition: all 0.4s ease;
        }

        .service-card:hover .service-title {
          color: #93c5fd;
          letter-spacing: 0.5px;
        }

        .service-desc {
          transition: all 0.4s ease;
        }

        .service-card:hover .service-desc {
          color: rgba(255, 255, 255, 0.85);
        }

        /* Glow effect on hover */
        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.5), rgba(168, 85, 247, 0.3));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .service-card:hover::before {
          opacity: 1;
        }

        /* Ripple effect */
        .service-card::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
          opacity: 0;
        }

        .service-card:hover::after {
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

        /* Custom AOS animations */
        [data-aos="card-zoom-in"] {
          opacity: 0;
          transform: scale(0.8) translateY(30px);
        }

        [data-aos="card-zoom-in"].aos-animate {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        [data-aos="card-flip"] {
          opacity: 0;
          transform: rotateY(90deg) rotateX(30deg);
        }

        [data-aos="card-flip"].aos-animate {
          opacity: 1;
          transform: rotateY(0) rotateX(0);
        }

        [data-aos="card-bounce"] {
          opacity: 0;
          transform: translateY(50px);
        }

        [data-aos="card-bounce"].aos-animate {
          opacity: 1;
          transform: translateY(0);
          animation: bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-10px); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-5px); }
        }
      `}</style>

      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div 
          className="w-[700px] sm:w-[900px] h-[360px] bg-indigo-500/20 blur-[140px] rounded-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
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
        <div 
          data-aos="fade-up" 
          data-aos-duration="800"
          className="max-w-3xl mx-auto text-center"
        >
          <div 
            className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/85 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full backdrop-blur"
            data-aos="zoom-in"
            data-aos-duration="600"
          >
            <span className="w-[6px] h-[6px] rounded-full bg-sky-300 animate-pulse" />
            Our Services
          </div>

          <h2 
            className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-white"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Services built for modern
            <span className="text-sky-200 italic"> workforce teams</span>
          </h2>

          <p 
            className="mt-4 text-white/65 text-sm sm:text-base leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
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
            
            // Rotate animation types for variety
            const animationTypes = ["card-zoom-in", "card-flip", "card-bounce"];
            const aoAnimation = animationTypes[index % animationTypes.length];
            
            return (
              <div
                key={index}
                data-aos={aoAnimation}
                data-aos-duration="700"
                data-aos-delay={index * 100}
                data-aos-offset="50"
                className="
                  service-card
                  group
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
                    service-icon
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

                <h3 className="service-title text-white font-bold text-lg leading-snug">
                  {item.title}
                </h3>

                <p className="service-desc mt-3 text-white/65 text-sm leading-relaxed">
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