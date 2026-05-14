import { useEffect, useRef, useState } from "react";
import { ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Children community",
  },
  {
    src: "https://images.unsplash.com/photo-1603185030522-05d4497bb180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Education initiative",
  },
  {
    src: "https://images.unsplash.com/photo-1616674202799-054e7c831378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Women empowerment",
  },
  {
    src: "https://images.unsplash.com/photo-1660015154403-0fd84e5d810d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Food distribution",
  },
  {
    src: "https://images.unsplash.com/photo-1708592956177-d29b4b4ce348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Tree plantation",
  },
  {
    src: "https://images.unsplash.com/photo-1692609659165-1ec4d8108c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Community children",
  },
  {
    src: "https://images.unsplash.com/photo-1654575689675-7e6020abf716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Animal welfare",
  },
  {
    src: "https://images.unsplash.com/photo-1596450514537-fae68a81346b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
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
