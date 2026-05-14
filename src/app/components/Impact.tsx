import { useEffect, useRef, useState } from "react";

const primaryStat = {
  value: 50000,
  suffix: "+",
  label: "Lives Touched",
  description: "Across India — from villages to cities",
  icon: "❤️",
  color: "#f97316",
  light: "#fff7ed",
};

const stats = [
  {
    value: 30000,
    suffix: "+",
    label: "Youth Empowered",
    sublabel: "Through Vikas & skill programs",
    icon: "🚀",
    color: "#2563eb",
    light: "#eff6ff",
  },
  {
    value: 900,
    suffix: "+",
    label: "Women Empowered",
    sublabel: "Via Udaan initiative",
    icon: "💪",
    color: "#9333ea",
    light: "#faf5ff",
  },
  {
    value: 20000,
    suffix: "+",
    label: "Saplings Planted",
    sublabel: "Greening our nation",
    icon: "🌱",
    color: "#16a34a",
    light: "#f0fdf4",
  },
  {
    value: 50,
    suffix: "+",
    label: "Animals Fed Daily",
    sublabel: "Jeev – compassion for all",
    icon: "🐾",
    color: "#d97706",
    light: "#fffbeb",
  },
  {
    value: 200,
    suffix: "+",
    label: "Active Volunteers",
    sublabel: "Growing every month",
    icon: "🤝",
    color: "#0891b2",
    light: "#ecfeff",
  },
  {
    value: 28,
    suffix: "",
    label: "States Reached",
    sublabel: "A nationwide movement",
    icon: "🗺️",
    color: "#dc2626",
    light: "#fef2f2",
  },
];

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(value);
    };
    requestAnimationFrame(animate);
  }, [active, value]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export function Impact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={ref}
      style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#fefaf5" }}
      className="py-24 relative overflow-hidden"
    >
      {/* Warm decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f97316, transparent 70%)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563eb, transparent 70%)", transform: "translate(-30%, 30%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5"
            style={{ color: "#f97316", background: "#fff7ed", border: "1px solid #fed7aa" }}
          >
            Our Impact
          </span>
          <h2
            className="text-[#1a1a2e] mb-4"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 800, lineHeight: 1.15 }}
          >
            Real Change.{" "}
            <span style={{ color: "#f97316" }}>Visible Impact.</span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{ color: "#6b7280", fontSize: "1.0625rem", lineHeight: 1.75 }}
          >
            Numbers that represent real lives, real stories, and a real difference — across communities throughout India.
          </p>
        </div>

        {/* Hero stat — 50,000+ Lives */}
        <div
          className={`mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <div
            className="relative rounded-3xl overflow-hidden p-8 sm:p-10 flex flex-col sm:flex-row items-center sm:items-stretch gap-8"
            style={{
              background: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fed7aa40 100%)",
              border: "1.5px solid #fed7aa",
              boxShadow: "0 8px 40px rgba(249,115,22,0.12)",
            }}
          >
            {/* Left: big number */}
            <div className="flex flex-col items-center sm:items-start justify-center sm:border-r sm:border-orange-200 sm:pr-10 sm:mr-2">
              <div className="text-5xl mb-3">❤️</div>
              <div
                className="leading-none mb-2"
                style={{ fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 900, color: "#f97316" }}
              >
                <Counter value={50000} suffix="+" active={visible} />
              </div>
              <div style={{ fontSize: "1.375rem", fontWeight: 700, color: "#1a1a2e" }}>Lives Touched</div>
              <div style={{ color: "#9a3412", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                Across India — from villages to cities
              </div>
            </div>

            {/* Right: flavor text + bar */}
            <div className="flex-1 flex flex-col justify-center">
              <p
                className="mb-5"
                style={{ color: "#7c2d12", fontSize: "1rem", lineHeight: 1.8 }}
              >
                From feeding stray animals to planting saplings, empowering women, and educating children — every number here
                represents a <strong>real human story</strong> of hope and transformation.
              </p>
              {/* Progress bar */}
              <div>
                <div className="flex justify-between mb-2">
                  <span style={{ color: "#9a3412", fontSize: "0.8125rem", fontWeight: 600 }}>
                    Journey so far
                  </span>
                  <span style={{ color: "#f97316", fontSize: "0.8125rem", fontWeight: 700 }}>
                    Growing every day
                  </span>
                </div>
                <div className="rounded-full overflow-hidden" style={{ height: "8px", background: "#fed7aa" }}>
                  <div
                    className="h-full rounded-full transition-all duration-1500"
                    style={{
                      width: visible ? "78%" : "0%",
                      background: "linear-gradient(90deg, #f97316, #ea580c)",
                      transitionDuration: "1.5s",
                      transitionDelay: "0.4s",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div
              className="absolute top-4 right-4 text-6xl opacity-10 select-none pointer-events-none"
              style={{ filter: "blur(1px)" }}
            >
              ❤️
            </div>
          </div>
        </div>

        {/* 6-stat grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl cursor-default ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${0.2 + i * 0.08}s`,
                background: "#ffffff",
                border: `1.5px solid ${stat.light}`,
                boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-6 right-6 h-0.5 rounded-b-full transition-all duration-300 group-hover:left-0 group-hover:right-0"
                style={{ background: stat.color }}
              />

              <div className="flex items-start gap-3 mb-3">
                {/* Icon bubble */}
                <div
                  className="flex items-center justify-center rounded-xl text-xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    width: "44px",
                    height: "44px",
                    background: stat.light,
                  }}
                >
                  {stat.icon}
                </div>
              </div>

              {/* Number */}
              <div
                className="leading-none mb-1"
                style={{ fontSize: "clamp(1.625rem, 3.5vw, 2.25rem)", fontWeight: 800, color: stat.color }}
              >
                <Counter value={stat.value} suffix={stat.suffix} active={visible} />
              </div>

              {/* Label */}
              <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: "0.9375rem", marginBottom: "0.25rem" }}>
                {stat.label}
              </div>

              {/* Sublabel */}
              <div style={{ color: "#9ca3af", fontSize: "0.75rem", lineHeight: 1.5 }}>
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div
          className={`text-center mt-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "0.8s" }}
        >
          <div
            className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl"
            style={{ background: "#fff7ed", border: "1px solid #fed7aa" }}
          >
            <span style={{ fontSize: "1.25rem" }}>🇮🇳</span>
            <p style={{ color: "#c2410c", fontWeight: 600, fontSize: "0.9375rem" }}>
              A movement of compassion — uniting minds for change across{" "}
              <span style={{ color: "#f97316" }}>28 states</span> of India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
