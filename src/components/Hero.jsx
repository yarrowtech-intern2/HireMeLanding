import React, { useState, useEffect, useRef } from "react";

const HireMeHero = () => {
  const canvasRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    message: "",
  });

  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  // 3D Background Setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    let animationId;

    // Particle system
    const particles = [];
    const particleCount = 150;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 2000;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 1;
        this.vz = Math.random() * 1 + 0.5;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = Math.random() > 0.5 ? "rgb(99, 102, 241)" : "rgb(168, 85, 247)";
      }

      update() {
        this.z -= this.vz;
        this.x += this.vx;
        this.y += this.vy;

        if (this.z <= 0) {
          this.z = 2000;
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        }

        if (this.x < 0 || this.x > width) {
          this.vx *= -1;
        }
        if (this.y < 0 || this.y > height) {
          this.vy *= -1;
        }
      }

      draw(ctx) {
        const scale = 500 / (500 + this.z);
        const x = (this.x - width / 2) * scale + width / 2;
        const y = (this.y - height / 2) * scale + height / 2;
        const size = this.size * scale;
        const opacity = this.opacity * (1 - this.z / 2000);

        ctx.fillStyle = this.color.replace(")", `, ${opacity})`).replace("rgb", "rgba");
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.strokeStyle = this.color.replace(")", `, ${opacity * 0.5})`).replace("rgb", "rgba");
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Mouse interaction
    let mouseX = width / 2;
    let mouseY = height / 2;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Floating shapes
    const shapes = [];
    class FloatingShape {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 100 + 50;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.floatSpeed = Math.random() * 0.5 + 0.3;
        this.floatRange = Math.random() * 100 + 50;
        this.startY = this.y;
        this.opacity = Math.random() * 0.1 + 0.05;
        this.shapeType = Math.floor(Math.random() * 3);
      }

      update(time) {
        this.y = this.startY + Math.sin(time * this.floatSpeed) * this.floatRange;
        this.rotation += this.rotationSpeed;
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
        ctx.strokeStyle = `rgba(168, 85, 247, ${this.opacity * 1.5})`;
        ctx.lineWidth = 2;

        if (this.shapeType === 0) {
          // Square
          ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
          ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else if (this.shapeType === 1) {
          // Circle
          ctx.beginPath();
          ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        } else {
          // Triangle
          ctx.beginPath();
          ctx.moveTo(0, -this.size / 2);
          ctx.lineTo(this.size / 2, this.size / 2);
          ctx.lineTo(-this.size / 2, this.size / 2);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    for (let i = 0; i < 5; i++) {
      shapes.push(new FloatingShape());
    }

    // Gradient lines connecting particles
    const connectionDistance = 200;

    const animate = (time) => {
      // Clear with gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#0f1c4d");
      gradient.addColorStop(0.5, "#0b1437");
      gradient.addColorStop(1, "#0f1c4d");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.15;
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw floating shapes
      shapes.forEach((shape) => {
        shape.update(time * 0.001);
        shape.draw(ctx);
      });

      // Draw radial light effect around mouse
      const mouseGradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 300);
      mouseGradient.addColorStop(0, "rgba(99, 102, 241, 0.1)");
      mouseGradient.addColorStop(1, "rgba(99, 102, 241, 0)");
      ctx.fillStyle = mouseGradient;
      ctx.fillRect(mouseX - 300, mouseY - 300, 600, 600);

      // Glow spots
      ctx.fillStyle = "rgba(168, 85, 247, 0.15)";
      ctx.beginPath();
      ctx.arc(width * 0.2, height * 0.2, 250, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(59, 130, 246, 0.1)";
      ctx.beginPath();
      ctx.arc(width * 0.85, height * 0.7, 300, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(animate);
    };

    animate(0);

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const onlyDigits = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, mobile: onlyDigits });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const isFormValid =
    formData.name.trim() &&
    /^\d{10}$/.test(formData.mobile) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.company.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!isFormValid) {
      showToast("error", "Please fill all required fields correctly.");
      return;
    }

    try {
      setLoading(true);

      const url = import.meta.env.VITE_SCRIPT_URL;
      if (!url) throw new Error("VITE_SCRIPT_URL missing");

      // CORS safe submission
      const formBody = new URLSearchParams();
      Object.keys(formData).forEach((key) => {
        formBody.append(key, formData[key]);
      });
      formBody.append("project", "HIREME");

      const res = await fetch(url, {
        method: "POST",
        body: formBody,
      });

      const text = await res.text();
      const data = JSON.parse(text);

      if (!data.ok) throw new Error("Submission failed");

      showToast(
        "success",
        "Thank you! Our team will contact you as soon as possible."
      );

      setFormData({
        name: "",
        mobile: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (err) {
      showToast("error", err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 py-20">
      <style>{`
        canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

        .content-wrapper {
          animation: slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
        }

        .form-wrapper {
          animation: slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;
        }

        .feature-item {
          animation: fadeInUp 0.6s ease-out;
          transition: all 0.4s ease;
        }

        .feature-item:nth-child(1) { animation-delay: 0.5s; }
        .feature-item:nth-child(2) { animation-delay: 0.6s; }
        .feature-item:nth-child(3) { animation-delay: 0.7s; }
        .feature-item:nth-child(4) { animation-delay: 0.8s; }

        .feature-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
        }

        .stat-item {
          animation: fadeInUp 0.6s ease-out;
        }

        .stat-item:nth-child(1) { animation-delay: 0.9s; }
        .stat-item:nth-child(2) { animation-delay: 1s; }
        .stat-item:nth-child(3) { animation-delay: 1.1s; }

        .form-card {
          transition: all 0.6s ease;
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        .form-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 25px 50px rgba(99, 102, 241, 0.2);
        }

        .form-input input:focus,
        .form-input textarea:focus {
          border-color: rgba(100, 200, 255, 0.5);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        .success-toast {
          animation: fadeInUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

      {/* 3D BACKGROUND CANVAS */}
      <canvas ref={canvasRef} />

      {/* Toast */}
      <div className="fixed bottom-5 right-5 z-[9999]">
        {toast && (
          <div className={`success-toast px-4 py-3 rounded-xl shadow-lg text-sm backdrop-blur-md ${
            toast.type === "success" ? "bg-emerald-500/90 text-white" : "bg-red-500/90 text-white"
          }`}>
            {toast.msg}
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="content-wrapper">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            ● Workforce Management Platform
          </div>

          <h1 className="text-[48px] font-extrabold text-white leading-tight max-w-xl">
            Enterprise HR operations,{" "}
            <span className="text-sky-200 italic">unified</span> and secure.
          </h1>

          <p className="mt-6 text-white/70 max-w-lg">
            Partner onboarding, subscription control, HR operations, employee
            records, and analytics — built for reliability, compliance, and enterprise scale.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 max-w-lg">
            {[
              "Partner verification & approvals",
              "Subscription access management",
              "HR dashboard & employee tracking",
              "Analytics & workforce reporting",
            ].map((item, i) => (
              <div key={i} className="feature-item bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/80 text-sm hover:bg-white/8 hover:border-white/20">
                ◈ {item}
              </div>
            ))}
          </div>

          <div className="mt-12 flex gap-10 text-white">
            <div className="stat-item">
              <div className="text-2xl font-bold">6+</div>
              <div className="text-xs text-white/50 tracking-widest">MODULES</div>
            </div>
            <div className="stat-item">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-xs text-white/50 tracking-widest">SUPPORT</div>
            </div>
            <div className="stat-item">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-xs text-white/50 tracking-widest">SECURE</div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="form-wrapper rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            ● Contact
          </div>

          <h2 className="text-2xl font-bold text-white">Contact us</h2>
          <p className="text-white/60 text-sm mt-2 mb-6">
            Our team will respond within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Full Name" required name="name" value={formData.name} onChange={handleChange} />
              <Input label="Mobile No" required name="mobile" value={formData.mobile} onChange={handleChange} />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Email Address" required name="email" value={formData.email} onChange={handleChange} />
              <Input label="Company Name" required name="company" value={formData.company} onChange={handleChange} />
            </div>

            <div className="form-input">
              <label className="text-xs text-white/60 uppercase tracking-wider">
                Description
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your requirements (optional)..."
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-2xl font-semibold text-[#0b1437] bg-gradient-to-r from-sky-200 to-sky-400 hover:opacity-90 transition"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

const Input = ({ label, required = false, ...props }) => (
  <div className="form-input">
    <label className="text-xs text-white/60 uppercase tracking-wider">
      {label}
      {required && <span className="text-red-400 ml-1">*</span>}
    </label>

    <input
      {...props}
      required={required}
      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none transition-all"
    />
  </div>
);

export default HireMeHero;