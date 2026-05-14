import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

const certifications = ["80G Certified", "12A Certified", "CSR-1 Registered", "NITI Aayog Listed", "IAF ISO 9001:2015"];

export function About() {
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
    <section id="about" ref={ref} style={{ fontFamily: "'Poppins', sans-serif" }} className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-800 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            style={{ transitionDuration: "0.8s" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/assets/about/main.png"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]">
              <div className="text-3xl font-bold text-[#2563eb]">50,000+</div>
              <div className="text-sm text-gray-500 mt-1">Lives Transformed</div>
              <div className="w-8 h-1 bg-[#f97316] rounded-full mt-2" />
            </div>
            <div className="absolute -top-6 -left-6 bg-[#2563eb] rounded-2xl shadow-xl p-5">
              <div className="text-2xl font-bold text-white">Est. 2020</div>
              <div className="text-xs text-blue-200 mt-1">Since September 23rd</div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-800 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            style={{ transitionDuration: "0.8s", transitionDelay: "0.2s" }}
          >
            <span className="inline-block text-[#f97316] text-sm font-semibold tracking-widest uppercase mb-3">
              Who We Are
            </span>
            <h2
              className="text-[#0f172a] mb-6"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.2 }}
            >
              About <span className="text-[#2563eb]">InAmigos</span> Foundation
            </h2>

            <p className="text-gray-500 mb-4" style={{ lineHeight: 1.8 }}>
              <span className="font-semibold text-[#0f172a]">InAmigos Foundation – Uniting Minds For Change.</span>
            </p>
            <p className="text-gray-500 mb-4" style={{ lineHeight: 1.8 }}>
              Founded on <span className="font-semibold text-[#2563eb]">23rd September 2020</span> by{" "}
              <span className="font-semibold text-[#0f172a]">Mr. Govind Shukla</span>, InAmigos Foundation is a Section 8 registered
              non-profit organization dedicated to creating meaningful impact across India.
            </p>
            <p className="text-gray-500 mb-4" style={{ lineHeight: 1.8 }}>
              We believe that real change begins with compassion. From educating children and empowering women to feeding the
              hungry, protecting animals, and healing the environment — we transform kindness into concrete action.
            </p>
            <p className="text-gray-500 mb-8" style={{ lineHeight: 1.8 }}>
              From a small initiative to touching over <span className="font-semibold text-[#f97316]">50,000 lives</span>, we
              continue to grow as a movement of passionate volunteers and conscious citizens working towards a more equitable
              and compassionate India.
            </p>

            {/* Certifications */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 shadow-sm border border-gray-100">
                  <CheckCircle size={16} className="text-[#2563eb] shrink-0" />
                  <span className="text-xs font-medium text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
