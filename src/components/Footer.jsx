import React from "react";

const Footer = () => {
  const HEADER_HEIGHT = 96;

  /* ---------- Scroll ---------- */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    window.scrollTo({
      top: section.offsetTop - HEADER_HEIGHT,
      behavior: "smooth",
    });
  };

  // ✅ Exact Location
  const officeAddress =
    "3A, Bertram St, Esplanade, Dharmatala, Taltala, Kolkata, West Bengal 700087";

  // ✅ Google Maps open link
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    officeAddress
  )}`;

  // ✅ Safe Embed URL (Best)
  const embedMapUrl = `https://www.google.com/maps/embed?output=embed&q=${encodeURIComponent(
    officeAddress
  )}`;

  return (
    <footer className="bg-black text-gray-400 px-4 sm:px-6 py-12">
      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-1 md:grid-cols-4
          gap-10
          text-center md:text-left
        "
      >
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Electronic Educare
          </h3>
          <p className="text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            Electronic Educare helps students learn smarter with modern,
            structured education support and guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { name: "Home", id: "home" },
              { name: "Services", id: "services" },
              { name: "About", id: "about" },
              { name: "FAQ", id: "faq" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-white hover:underline transition"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>

          {/* Email */}
          <a
            href="mailto:electroniceducaresales@yarrowtech.co.in"
            className="block hover:text-white transition"
          >
            Email:{" "}
            <span className="text-gray-300">
              electronticeducaresales@yarrowtech.co.in
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+919830590929"
            className="block mt-2 hover:text-white transition"
          >
            Phone: <span className="text-gray-300">+91 9830590929</span>
          </a>

          {/* Location */}
          <a
            href={mapSearchUrl}
            target="_blank"
            rel="noreferrer"
            className="block mt-2 hover:text-white transition"
          >
            Location:{" "}
            <span className="text-gray-300">
              3A, Bertram St, Esplanade, Dharmatala, Taltala, Kolkata - 700087
            </span>
          </a>
        </div>

        {/* MAP */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Find Us</h4>

          {/* ✅ FIXED MAP */}
          <div className="w-full h-44 rounded-xl overflow-hidden border border-gray-800 shadow-md">
            <iframe
              title="Google Map - Electronic Educare Location"
              src={embedMapUrl}
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Electronic Educare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
