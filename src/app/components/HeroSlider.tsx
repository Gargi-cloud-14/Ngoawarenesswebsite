import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/assets/hero/slide2.png",
    title: "Shaping Young Minds, Preserving Culture",
    subtitle: "BachpanSala – Where education meets tradition and dreams take flight.",
  },
  {
    image: "/assets/hero/slide4.png",
    title: "One Hand Can Feed Hope",
    subtitle: "Compassion in action. Every meal, every smile, every life matters.",
  },
  {
    image: "/assets/hero/slide3.png",
    title: "Caring for the Future Generation",
    subtitle: "Healthy children and empowered mothers – building a stronger tomorrow.",
  },
  {
    image: "/assets/hero/slide1.png",
    title: "Together, We Create Lasting Change",
    subtitle: "United by compassion, driven by purpose, changing lives every day.",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
      ))}

      {/* Content */}
      <div
        style={{ fontFamily: "'Poppins', sans-serif" }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-8"
      >
        <div
          key={current}
          className="animate-fade-in-up max-w-4xl"
          style={{ animation: "fadeInUp 0.8s ease forwards" }}
        >
          <p className="text-[#f97316] text-sm sm:text-base font-semibold tracking-widest uppercase mb-4">
            InAmigos Foundation
          </p>
          <h1
            className="text-white mb-6 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.15 }}
          >
            {slides[current].title}
          </h1>
          <p
            className="text-white/80 mb-10 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.7 }}
          >
            {slides[current].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNavClick("#volunteer")}
              className="px-8 py-4 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30"
              style={{ fontSize: "1rem" }}
            >
              Become a Volunteer
            </button>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleNavClick("#donate"); }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/50 hover:bg-white hover:text-[#0f172a] text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ fontSize: "1rem" }}
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 h-3 bg-[#f97316]"
                : "w-3 h-3 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
