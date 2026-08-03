import { useState, useEffect, useCallback } from "react";
import { FaImages, FaVideo, FaTimes, FaChevronLeft, FaChevronRight, FaCity, FaHome, FaTree } from "react-icons/fa";

import agricultureLand from "../../assets/images/media/agriculture-land.png";
import agricultureLand2 from "../../assets/images/media/agriculture-land2.png";
import agricultureLand3 from "../../assets/images/media/agriculture-land3.png";
import primiumland from "../../assets/images/media/internalroad.png";
import primiumland2 from "../../assets/images/media/residency1.png";
import primiumland3 from "../../assets/images/media/residency2.png";
import primiumland4 from "../../assets/images/media/residency3.png";
import primiumland5 from "../../assets/images/media/residency4.png";
import gated from "../../assets/images/media/gated-land.png";
import farm from "../../assets/images/media/farmland.png";
import farm2 from "../../assets/images/media/farmhouse2.png";
import farm3 from "../../assets/images/media/farmhouse3.png";
import roadland from "../../assets/images/media/roadside.png";
import roadland2 from "../../assets/images/media/roadside2.png";
import roadland3 from "../../assets/images/media/roadside3.png";
import bhathat1 from "../../assets/images/media/bhathat/1.jpeg";
import bhathat2 from "../../assets/images/media/bhathat/2.jpeg";
import bhathat3 from "../../assets/images/media/bhathat/3.jpeg";
import bhathat4 from "../../assets/images/media/bhathat/4.jpeg";
import bhathat5 from "../../assets/images/media/bhathat/5.jpeg";
import bhathat6 from "../../assets/images/media/bhathat/6.jpeg";
import bhathat7 from "../../assets/images/media/bhathat/7.jpeg";
import bhathat8 from "../../assets/images/media/bhathat/8.jpeg";
import bhathat9 from "../../assets/images/media/bhathat/9.jpeg";
import bhathat10 from "../../assets/images/media/bhathat/10.jpeg";
import roushanVideo1 from "../../assets/images/media/bhathat/video1.mp4";

// ----------------------------------------------------
// Top-level categories (same button styling as before)
// ----------------------------------------------------
const categories = [
  { name: "Image", icon: <FaImages /> },
  { name: "Video", icon: <FaVideo /> },
];

// ----------------------------------------------------
// Gold project icons shown on each premium card, keyed by
// project id so both the Image and Video tabs share them.
// ----------------------------------------------------
const projectIcons = {
  bhathat: FaCity,
  swastik: FaHome,
  roushan: FaTree,
};

// Multi-line title breaks for the large centered heading.
const projectTitleLines = {
  bhathat: ["Bhathat", "Greencity"],
  swastik: ["Swastik", "Puram"],
  roushan: ["Roushan Baag", "Residency"],
};

// ----------------------------------------------------
// Image project data
// Using existing image assets as placeholders for now —
// swap `cover` / `images` with real per-project assets later.
// ----------------------------------------------------
const imageProjects = [
  {
    id: "bhathat",
    title: "Bhathat Greencity",
    cover: bhathat10,
    images: [bhathat1, bhathat2, bhathat3, bhathat4, bhathat5, bhathat6, bhathat7, bhathat8, bhathat9, bhathat10],
  },
  {
    id: "swastik",
    title: "Swastik Puram",
    cover: primiumland3,
    images: [primiumland3, primiumland4, primiumland5],
  },
  {
    id: "roushan",
    title: "Roushan Baag Residency",
    cover: roadland3,
    images: [roadland3, gated, farm, primiumland2],
  },
];

// ----------------------------------------------------
// Video project data
// NOTE: only Bhathat has a real video file for now — the
// other two still reuse existing images as posters. Replace
// `videos[].url` with real video paths when available.
// ----------------------------------------------------
const videoProjects = [
  {
    id: "bhathat",
    title: "Bhathat Greencity",
    cover: bhathat10,
    videos: [{ url: "", poster: roadland2 }],
  },
  {
    id: "swastik",
    title: "Swastik Puram",
    cover: primiumland3,
    videos: [
      { url: "", poster: primiumland3 },
      { url: "", poster: primiumland4 },
    ],
  },
  {
    id: "roushan",
    title: "Roushan Baag Residency",
    cover: roadland3,
    videos: [
      { url: roushanVideo1, poster: farm3 },
    ],
  },
];

// ----------------------------------------------------
// Lightbox — fullscreen modal viewer for images & videos
// ----------------------------------------------------
const Lightbox = ({ mediaType, items, currentIndex, title, onClose, onNext, onPrev }) => {
  // Keyboard support: ESC to close, arrows to navigate
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // lock background scroll while lightbox is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [handleKeyDown]);

  if (!items || items.length === 0) return null;

  const total = items.length;
  const current = items[currentIndex];
  const src = mediaType === "video" ? current.url : current;
  const poster = mediaType === "video" ? current.poster : undefined;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      style={{ animation: "mediaLightboxFadeIn 0.25s ease-out" }}
    >
      <style>{`
        @keyframes mediaLightboxFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes mediaLightboxZoomIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        className="absolute top-5 right-5 sm:top-8 sm:right-8 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-xl transition-colors z-10"
      >
        <FaTimes />
      </button>

      {/* Previous arrow */}
      {total > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl transition-colors z-10"
        >
          <FaChevronLeft />
        </button>
      )}

      {/* Next arrow */}
      {total > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl transition-colors z-10"
        >
          <FaChevronRight />
        </button>
      )}

      {/* Media (click does not close) */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col items-center justify-center max-w-[90vw] max-h-[90vh]"
        style={{ animation: "mediaLightboxZoomIn 0.3s ease-out" }}
      >
        {mediaType === "video" ? (
          <video
            key={src}
            src={src || undefined}
            poster={poster}
            controls
            autoPlay
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        ) : (
          <img
            key={src}
            src={src}
            alt={`${title} ${currentIndex + 1}`}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        )}

        {/* Counter */}
        {total > 1 && (
          <div className="mt-4 bg-white/10 text-white text-sm px-4 py-1.5 rounded-full">
            {currentIndex + 1} / {total}
          </div>
        )}
      </div>
    </div>
  );
};

// ----------------------------------------------------
// ProjectCard — premium luxury real-estate style card.
// Same card size / grid / radius / click behavior as
// before; only the visual content layout is new:
// gold icon -> multi-line title -> gold divider -> pill CTA.
// Opens the Lightbox directly, no intermediate gallery page.
// ----------------------------------------------------
const ProjectCard = ({ project, onOpen, ctaLabel }) => {
  const Icon = projectIcons[project.id] || FaCity;
  const titleLines = projectTitleLines[project.id] || [project.title];

  return (
    <div
      onClick={onOpen}
      className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-500"
    >
      <img
        src={project.cover}
        alt={project.title}
        className="w-full h-[250px] object-cover blur-[1.5px] group-hover:blur-[0.5px] transition-all duration-500 group-hover:scale-110"
      />

      {/* Dark overlay + soft vignette for a luxury, readable backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/65 to-black/80 group-hover:from-black/45 group-hover:via-black/72 group-hover:to-black/85 transition-colors duration-500"></div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.55)" }}
      ></div>

      {/* Centered content: icon -> title -> divider -> CTA */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center gap-2">
        <Icon
          className="text-[#D4AF37] text-2xl mb-1 transition-transform duration-500 group-hover:-translate-y-1"
          aria-hidden="true"
        />

        <h3
          className="font-bold text-white text-lg sm:text-xl md:text-2xl leading-[1.1]"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
        >
          {titleLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h3>

        {/* Decorative gold divider */}
        <div className="flex items-center gap-2 my-1">
          <span className="w-6 h-px bg-[#D4AF37]"></span>
          <span className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></span>
          <span className="w-6 h-px bg-[#D4AF37]"></span>
        </div>

        <button
          onClick={onOpen}
          className="flex items-center justify-center gap-2 px-5 py-1.5 rounded-full text-white text-xs sm:text-sm font-semibold bg-black/25 border border-[#D4AF37] backdrop-blur-[6px] transition-all duration-300 group-hover:-translate-y-1 hover:bg-[#b66a1d] hover:border-[#b66a1d] hover:scale-105"
          style={{ transitionProperty: "background-color, border-color, transform, box-shadow" }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 12px 30px rgba(182,106,29,.35)")}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
        >
          {ctaLabel}
          <span className="text-[#D4AF37] group-hover:text-white transition-colors">→</span>
        </button>
      </div>
    </div>
  );
};

const MediaHero = () => {
  const [activeTab, setActiveTab] = useState("Image");

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [lightboxType, setLightboxType] = useState("image"); // "image" | "video"
  const [lightboxTitle, setLightboxTitle] = useState("");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const openLightbox = (mediaType, items, index, title) => {
    setLightboxType(mediaType);
    setSelectedMedia(items);
    setSelectedIndex(index);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % selectedMedia.length);
  }, [selectedMedia.length]);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + selectedMedia.length) % selectedMedia.length);
  }, [selectedMedia.length]);

  return (
    <section className="bg-[#faf8f5] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-xl font-bold text-[#1d1d1d] mt-3">
            Explore
            <span className="text-[#7aac3b] pl-1 pr-1">Our</span>
            Collection
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-[12px]">
            Browse our premium collection of agricultural lands,
            residential plots, gated communities, farmhouse plots,
            and investment opportunities.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-14">
          <div className="flex gap-4 overflow-x-auto md:flex-wrap md:justify-center md:overflow-visible pb-2 scrollbar-hide">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(item.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeTab === item.name
                    ? "bg-[#b66a1d] text-white border-[#b66a1d]"
                    : "bg-white text-gray-700 border-gray-200 hover:border-[#b66a1d] hover:text-[#b66a1d]"
                  }`}
              >
                <span className="text-sm">{item.icon}</span>
                <span className="font-medium text-[15px]">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ---------------- IMAGE TAB ---------------- */}
        {activeTab === "Image" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                ctaLabel="View Images"
                onOpen={() => openLightbox("image", project.images, 0, project.title)}
              />
            ))}
          </div>
        )}

        {/* ---------------- VIDEO TAB ---------------- */}
        {activeTab === "Video" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                ctaLabel="Watch Videos"
                onOpen={() => openLightbox("video", project.videos, 0, project.title)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox */}
      {lightboxOpen && (
        <Lightbox
          mediaType={lightboxType}
          items={selectedMedia}
          currentIndex={selectedIndex}
          title={lightboxTitle}
          onClose={closeLightbox}
          onNext={showNext}
          onPrev={showPrev}
        />
      )}
    </section>
  );
};

export default MediaHero;
