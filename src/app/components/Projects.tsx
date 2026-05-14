import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    image: "/assets/projects/bachpansala.png",
    title: "BachpanSala",
    tagline: "Nurturing Young Minds, Building Bright Futures",
    description: "Quality education, digital literacy, and cultural awareness for underprivileged children.",
    color: "#2563eb",
  },
  {
    image:"/assets/projects/Udaan.png",
    title: "Udaan",
    tagline: "Soaring Towards Independence",
    description: "Women empowerment through skill development, financial literacy, and self-help groups.",
    color: "#f97316",
  },
  {
    image: "/assets/projects/Jeev.png",
    title: "Jeev",
    tagline: "Compassion for All Beings",
    description: "Daily feeding and care for stray animals with a dedicated volunteer network.",
    color: "#16a34a",
  },
  {
    image: "/assets/projects/Seva.png",
    title: "Seva",
    tagline: "Serving with Love",
    description: "Distribution of meals, clothes, and essential aid to the needy and vulnerable.",
    color: "#dc2626",
  },
  {
    image: "/assets/projects/prakriti.png",
    title: "Prakriti",
    tagline: "Planting Hope for Tomorrow",
    description: "Massive tree plantation drives and environmental awareness programs.",
    color: "#059669",
  },
  {
    image: "/assets/projects/vikas.png",
    title: "Vikas",
    tagline: "Unlocking Potential",
    description: "Skill development and internship programs empowering 30,000+ youth.",
    color: "#7c3aed",
  },
];

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} style={{ fontFamily: "'Poppins', sans-serif" }} className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#f97316] text-sm font-semibold tracking-widest uppercase mb-3">
            Our Work
          </span>
          <h2
            className="text-[#0f172a] mb-4"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700 }}
          >
            Our <span className="text-[#2563eb]">Projects</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
            Six powerful initiatives, one shared mission — creating lasting change across communities in India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 0.1}s`, transitionDuration: "0.6s" }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold"
                  style={{ backgroundColor: project.color }}
                >
                  {project.title}
                </div>
              </div>
              <div className="p-6">
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: project.color }}
                >
                  {project.tagline}
                </p>
                <h3 className="text-[#0f172a] mb-3" style={{ fontSize: "1.125rem", fontWeight: 700 }}>
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4" style={{ lineHeight: 1.7 }}>
                  {project.description}
                </p>
                <button
                  className="flex items-center gap-2 text-sm font-semibold group/btn"
                  style={{ color: project.color }}
                >
                  Learn More
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
