import { useEffect, useRef, useState } from "react";
import { BookOpen, Users, PawPrint, HandHeart, Leaf, Share2 } from "lucide-react";

const areas = [
  { icon: BookOpen, label: "Education & Child Mentorship", color: "#2563eb", bg: "#eff6ff" },
  { icon: Users, label: "Women Empowerment", color: "#f97316", bg: "#fff7ed" },
  { icon: PawPrint, label: "Animal Welfare", color: "#16a34a", bg: "#f0fdf4" },
  { icon: HandHeart, label: "Community Service", color: "#dc2626", bg: "#fef2f2" },
  { icon: Leaf, label: "Environmental Campaigns", color: "#059669", bg: "#ecfdf5" },
  { icon: Share2, label: "Digital Content & Social Media", color: "#7c3aed", bg: "#faf5ff" },
];

export function Volunteer() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="volunteer" ref={ref} style={{ fontFamily: "'Poppins', sans-serif" }} className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#f97316] text-sm font-semibold tracking-widest uppercase mb-3">
            Join Us
          </span>
          <h2
            className="text-[#0f172a] mb-3"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700 }}
          >
            Become a <span className="text-[#2563eb]">Volunteer</span>
          </h2>
          <p className="text-[#f97316] mb-4" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
            Be the Change.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto" style={{ lineHeight: 1.8 }}>
            Your time and skills can create miracles. Join our growing family of passionate volunteers and make a real difference.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <div
                key={area.label}
                className={`group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 cursor-pointer ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 0.1}s`, transitionDuration: "0.5s" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: area.bg }}
                >
                  <Icon size={26} style={{ color: area.color }} />
                </div>
                <h3
                  className="text-[#0f172a]"
                  style={{ fontSize: "0.9375rem", fontWeight: 700, lineHeight: 1.4 }}
                >
                  {area.label}
                </h3>
                <div
                  className="w-8 h-0.5 rounded-full mt-3 group-hover:w-16 transition-all duration-300"
                  style={{ backgroundColor: area.color }}
                />
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
            style={{ fontSize: "1.1rem", fontWeight: 700 }}
          >
            Join Our Community
          </a>
          <p className="text-gray-400 text-sm mt-4">No experience required. Just your willingness to help.</p>
        </div>
      </div>
    </section>
  );
}
