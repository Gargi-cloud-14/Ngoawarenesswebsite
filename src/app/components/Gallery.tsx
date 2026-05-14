import { useEffect, useRef, useState } from "react";
import { ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "/assets/gallery/gallery1.png",
    alt: "Children community",
  },
  {
    src: "/assets/gallery/gallery2.png",
    alt: "Education initiative",
  },
  {
    src: "/assets/gallery/gallery3.png",
    alt: "Women empowerment",
  },
  {
    src: "/assets/gallery/gallery4.png",
    alt: "Food distribution",
  },
  {
    src: "/assets/gallery/gallery5.png",
    alt: "Tree plantation",
  },
  {
    src: "/assets/gallery/gallery6.png",
    alt: "Animal Welfare",
  },
  {
    src: "/assets/gallery/gallery7.png",
    alt: "Smiling Face of People",
  },
  {
    src: "/assets/gallery/gallery8.png",
    alt: "Volunteer work",
  },
];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={ref} style={{ fontFamily: "'Poppins', sans-serif" }} className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#f97316] text-sm font-semibold tracking-widest uppercase mb-3">
            Gallery
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700 }}
          >
            Moments of <span className="text-[#f97316]">Impact</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            A glimpse into the lives we touch and the communities we serve every day.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${
                visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: `${i * 0.07}s`,
                aspectRatio: i === 0 || i === 5 ? "1/1.3" : "1/1",
              }}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
