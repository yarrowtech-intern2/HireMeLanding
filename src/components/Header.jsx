import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth Scroll
  const handleNavClick = (id) => {
    setMenuOpen(false);
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      const HEADER_OFFSET = 80;
      const y =
        element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Auto active section on scroll
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
            H
          </div>
          <span className="text-xl font-bold text-blue-700">HireMe</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`cursor-pointer text-sm font-semibold transition relative group ${
                activeSection === link.id
                  ? "text-blue-700"
                  : "text-gray-700 hover:text-blue-700"
              }`}
            >
              {link.label}

              {/* Underline Animation */}
              <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300
                ${
                  activeSection === link.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-blue-700 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4 bg-white border-t">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`cursor-pointer text-left text-base font-semibold transition ${
                activeSection === link.id
                  ? "text-blue-700"
                  : "text-gray-700 hover:text-blue-700"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
