import { Heart, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Projects", href: "#projects" },
  { label: "Impact", href: "#impact" },
  { label: "Donate", href: "#donate" },
  { label: "Volunteer", href: "#volunteer" },
];

const projects = [
  "BachpanSala",
  "Udaan",
  "Jeev",
  "Seva",
  "Prakriti",
  "Vikas",
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" style={{ fontFamily: "'Poppins', sans-serif" }} className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563eb] to-[#f97316] flex items-center justify-center shadow-lg">
                <Heart size={18} className="text-white fill-white" />
              </div>
              <div>
                <div className="text-white font-bold">InAmigos</div>
                <div className="text-[#f97316] text-xs font-semibold">Foundation</div>
              </div>
            </div>
            <p className="text-white/50 text-sm mb-6" style={{ lineHeight: 1.8 }}>
              Uniting minds for change. Creating compassionate, equitable, and sustainable communities across India.
            </p>
            <div className="flex gap-3">
              {["IG", "LI", "FB", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#2563eb] text-white/60 hover:text-white text-xs font-bold flex items-center justify-center transition-all duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/50 hover:text-[#f97316] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#f97316] rounded-full transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Our Projects</h4>
            <ul className="space-y-3">
              {projects.map((p) => (
                <li key={p}>
                  <a href="#" className="text-white/50 hover:text-[#f97316] text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#f97316] rounded-full transition-all duration-300" />
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2563eb]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={15} className="text-[#2563eb]" />
                </div>
                <p className="text-white/50 text-sm" style={{ lineHeight: 1.7 }}>
                  Ward No. 5, Gram Post, Sipat Ujwal Nagar,<br />
                  Bilaspur, Chhattisgarh – 495555
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2563eb]/20 flex items-center justify-center shrink-0">
                  <Phone size={15} className="text-[#2563eb]" />
                </div>
                <a href="tel:+916267309902" className="text-white/50 hover:text-white text-sm transition-colors">
                  +91 626 730 9902
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2563eb]/20 flex items-center justify-center shrink-0">
                  <Mail size={15} className="text-[#2563eb]" />
                </div>
                <a
                  href="mailto:support@inamigosfoundation.org.in"
                  className="text-white/50 hover:text-white text-sm transition-colors break-all"
                >
                  support@inamigosfoundation.org.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} InAmigos Foundation. All rights reserved.
          </p>
          <p className="text-white/30 text-sm flex items-center gap-1.5">
            Made with <Heart size={13} className="text-[#f97316] fill-[#f97316]" /> for a compassionate India
          </p>
        </div>
      </div>
    </footer>
  );
}
