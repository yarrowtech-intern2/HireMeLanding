import React, { useEffect, useRef, useState } from "react";

const Footer = () => {
  const HEADER_HEIGHT = 96;
  const [mapLoaded, setMapLoaded] = useState(false);
  const canvasRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    window.scrollTo({
      top: section.offsetTop - HEADER_HEIGHT,
      behavior: "smooth",
    });
  };

  const officeAddress =
    "3A, Bertram St, Esplanade, Dharmatala, Taltala, Kolkata, West Bengal 700087";
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    officeAddress
  )}`;
  const googleEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    officeAddress
  )}&output=embed`;

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148,163,255,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <footer className="relative overflow-hidden bg-[#080c14] text-slate-400">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-60 pointer-events-none"
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-20 left-[20%] h-[300px] w-[500px] rounded-full bg-indigo-500/10 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-0 right-[10%] h-[200px] w-[300px] rounded-full bg-violet-500/10 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-[1260px] px-6 pt-16 lg:px-10 lg:pt-20">
        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">
          {/* Brand */}
          <div>
            <h2 className="text-sky text-3xl font-semibold tracking-tight">
              Hire Me
            </h2>
            <p className="mt-2 text-[11px] font-semibold tracking-[3px] text-indigo-400 uppercase">
              Enterprise HR Platform
            </p>

            <p className="mt-5 max-w-[320px] text-sm leading-7 text-slate-500">
              Partner onboarding, subscription control, HR operations, employee
              records, and analytics — built for reliability, compliance, and
              enterprise scale.
            </p>

            <div className="mt-6 h-[2px] w-8 rounded bg-gradient-to-r from-indigo-500 to-transparent" />
          </div>

          {/* Navigation */}
          <div>
            <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[2.5px] text-indigo-400">
              Navigation
              <span className="h-[1px] flex-1 bg-indigo-500/20" />
            </div>

            <ul className="space-y-1">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="group flex w-full items-center gap-3 py-2 text-left text-[14.5px] text-slate-500 transition hover:text-slate-200"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-md border border-indigo-500/15 bg-indigo-500/10 text-indigo-400 transition group-hover:border-indigo-400/50 group-hover:bg-indigo-500/20 group-hover:text-indigo-200">
                      ›
                    </span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[2.5px] text-indigo-400">
              Contact
              <span className="h-[1px] flex-1 bg-indigo-500/20" />
            </div>

            {/* Email */}
            <div className="mb-5 flex gap-4">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 text-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent" />
                <span className="relative">✉</span>
              </div>

              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[1.2px] text-slate-600">
                  Email
                </div>
                <a
                  href="mailto:contact@hireme.com"
                  className="text-[13.5px] leading-6 text-slate-500 transition hover:text-indigo-300"
                >
                  contact@hireme.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-5 flex gap-4">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 text-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent" />
                <span className="relative">📞</span>
              </div>

              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[1.2px] text-slate-600">
                  Phone
                </div>
                <a
                  href="tel:+919830590929"
                  className="text-[13.5px] leading-6 text-slate-500 transition hover:text-indigo-300"
                >
                  +91 98305 90929
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="mb-5 flex gap-4">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 text-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent" />
                <span className="relative">📍</span>
              </div>

              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[1.2px] text-slate-600">
                  Location
                </div>
                <a
                  href={mapSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13.5px] leading-6 text-slate-500 transition hover:text-indigo-300"
                >
                  3A, Bertram St, Esplanade,
                  <br />
                  Kolkata – 700087
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[2.5px] text-indigo-400">
              Find Us
              <span className="h-[1px] flex-1 bg-indigo-500/20" />
            </div>

            <div className="overflow-hidden rounded-2xl border border-indigo-500/20 bg-[#0d1117] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="relative">
                <iframe
                  title="Office Location"
                  className={`block h-[240px] w-full border-0 transition ${
                    mapLoaded
                      ? "opacity-100"
                      : "opacity-60 grayscale contrast-125"
                  }`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={googleEmbedUrl}
                  onLoad={() => setMapLoaded(true)}
                />
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#080c14]/70 to-transparent" />
              </div>

              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 border-t border-indigo-500/15 bg-indigo-500/10 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.8px] text-indigo-300 transition hover:bg-indigo-500/20 hover:text-indigo-100"
              >
                Open in Google Maps
                <span className="text-sm transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 px-0 py-6 text-center sm:text-left">
          {/* Uncomment if needed */}
          {/* <p className="text-[12.5px] text-slate-600">
            © {new Date().getFullYear()} <span className="text-slate-500">Hire Me.</span> All rights reserved.
          </p>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
