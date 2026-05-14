import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Impact", href: "#impact" },
  { label: "Donate", href: "#donate" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0f172a]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick("#home")}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563eb] to-[#f97316] flex items-center justify-center shadow-lg">
              <Heart size={20} className="text-white fill-white" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-base">InAmigos</div>
              <div className="text-[#f97316] font-semibold text-xs tracking-wide">Foundation</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f97316] group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
            <a
              href="#"
              className="px-5 py-2.5 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Visit Official Website
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-[#0f172a]/97 backdrop-blur-md`}
      >
        <div className="px-6 py-4 space-y-3 border-t border-white/10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left text-white/80 hover:text-white py-2.5 text-sm font-medium border-b border-white/5 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="#"
            className="block w-full text-center px-5 py-3 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm font-semibold rounded-full mt-4"
          >
            Visit Official Website
          </a>
        </div>
      </div>
    </nav>
  );
}
