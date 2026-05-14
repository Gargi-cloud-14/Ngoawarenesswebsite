import { useEffect, useRef, useState } from "react";
import { Heart, BookOpen, Leaf, Shield, Utensils } from "lucide-react";

const causes = [
  { icon: BookOpen, label: "Education" },
  { icon: Utensils, label: "Nutrition" },
  { icon: Shield, label: "Healthcare" },
  { icon: Leaf, label: "Environment" },
];

export function Donation() {
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
    <section id="donate" ref={ref} style={{ fontFamily: "'Poppins', sans-serif" }} className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-800 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            style={{ transitionDuration: "0.8s" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1617878227827-8360231f7f03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Donation - changing lives"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563eb]/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#f97316] rounded-2xl shadow-xl p-5 text-white">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-xs mt-1 text-orange-100">Transparent</div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-800 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            style={{ transitionDuration: "0.8s", transitionDelay: "0.2s" }}
          >
            <span className="inline-block text-[#f97316] text-sm font-semibold tracking-widest uppercase mb-3">
              Make a Difference
            </span>
            <h2
              className="text-[#0f172a] mb-6"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.2 }}
            >
              Your Support Can <span className="text-[#2563eb]">Change Lives</span>
            </h2>
            <p className="text-gray-500 mb-8" style={{ lineHeight: 1.8 }}>
              Your contribution helps provide education, nutrition, healthcare, environmental protection, and{" "}
              <span className="font-semibold text-[#0f172a]">hope to communities across India</span>.
            </p>

            {/* Causes */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {causes.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-[#2563eb]/10 flex items-center justify-center">
                    <Icon size={18} className="text-[#2563eb]" />
                  </div>
                  <span className="text-sm font-semibold text-[#0f172a]">{label}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white rounded-full hover:shadow-2xl hover:shadow-orange-400/40 hover:-translate-y-1 transition-all duration-300"
              style={{ fontSize: "1.1rem", fontWeight: 700 }}
            >
              <Heart size={22} className="fill-white" />
              Donate Now
            </a>
            <p className="text-gray-400 text-xs mt-4">
              * Donations are tax deductible under 80G. All funds used transparently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
