import { useEffect, useRef, useState } from "react";
import { Target, Eye } from "lucide-react";

export function MissionVision() {
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
    <section
      ref={ref}
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="py-24 relative overflow-hidden"
      id="mission"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a]" />
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#f97316] text-sm font-semibold tracking-widest uppercase mb-3">
            Our Purpose
          </span>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700 }}
          >
            Mission & <span className="text-[#f97316]">Vision</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div
            className={`group relative transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "0s" }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563eb]/20 rounded-full blur-3xl" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <Target size={28} className="text-white" />
              </div>
              <h3 className="text-white mb-4" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                Our Mission
              </h3>
              <p className="text-white/70" style={{ lineHeight: 1.8 }}>
                To awaken humanity and create a world where{" "}
                <span className="text-[#f97316] font-semibold">compassion, equality, and sustainability</span>{" "}
                are not just values, but a way of life.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563eb] to-transparent rounded-full" />
            </div>
          </div>

          {/* Vision */}
          <div
            className={`group relative transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f97316]/20 rounded-full blur-3xl" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                <Eye size={28} className="text-white" />
              </div>
              <h3 className="text-white mb-4" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                Our Vision
              </h3>
              <p className="text-white/70" style={{ lineHeight: 1.8 }}>
                A future where every child receives{" "}
                <span className="text-[#f97316] font-semibold">quality education</span>, every woman is empowered,
                every life is respected, and our planet is protected for generations to come.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#f97316] to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
