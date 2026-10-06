import { useState, useEffect, useRef } from "react";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";
import bg4 from "../../assets/backgrounds/bg4.png";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Ramesh Singh",
      role: "Owner",
      comment:
        "Very transparent and professional team. The land I purchased has excellent appreciation potential.",
    },
    {
      name: "Ankit Verma",
      role: "Owner",
      comment:
        "As an NRI, I needed a reliable partner. HeyDay Realty made the entire process smooth and trustworthy.",
    },
    {
      name: "Vivek Yadav",
      role: "Owner",
      comment:
        "Best agricultural plot buying experience. Clear documentation and peaceful location.",
    },
    {
      name: "Priya Sharma",
      role: "Owner",
      comment:
        "Very supportive team. Everything from site visit to registration was handled professionally.",
    },
    {
      name: "Amit Mishra",
      role: "Owner",
      comment:
        "Excellent location options and transparent dealing. Highly recommended.",
    },
  ];

  const [dragDistance, setDragDistance] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const [cardStep, setCardStep] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1100) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate card step dynamically
  useEffect(() => {
    const updateCardStep = () => {
      if (trackRef.current) {
        const cards = trackRef.current.querySelectorAll('[data-card="true"]');
        if (cards.length >= 2) {
          const firstRect = cards[0].getBoundingClientRect();
          const secondRect = cards[1].getBoundingClientRect();
          setCardStep(secondRect.left - firstRect.left);
        }
      }
    };

    updateCardStep();
    window.addEventListener("resize", updateCardStep);
    return () => window.removeEventListener("resize", updateCardStep);
  }, [visibleCards]);

  // Create infinite loop by cloning testimonials
  const extendedTestimonials = [
    ...testimonials.slice(-visibleCards),
    ...testimonials,
    ...testimonials.slice(0, visibleCards),
  ];

  const totalSlides = testimonials.length;

  // Pointer event handlers
  const handlePointerDown = (e) => {
    setIsDragging(true);
    setDragDistance(0);
    setIsTransitioning(false);
    carouselRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    setDragDistance((prev) => prev + e.movementX);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    setIsTransitioning(true);
    carouselRef.current?.releasePointerCapture(e.pointerId);

    const threshold = cardStep * 0.2;

    if (dragDistance < -threshold) {
      // Dragged left - go to next
      setCurrentIndex((prev) => {
        const newIndex = prev + 1;
        if (newIndex >= totalSlides + visibleCards) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(visibleCards);
          }, 500);
          return newIndex;
        }
        return newIndex;
      });
    } else if (dragDistance > threshold) {
      // Dragged right - go to previous
      setCurrentIndex((prev) => {
        const newIndex = prev - 1;
        if (newIndex < visibleCards - 1) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(totalSlides + visibleCards - 1);
          }, 500);
          return newIndex;
        }
        return newIndex;
      });
    }

    // Always reset drag distance after release to snap to exact position
    setDragDistance(0);
  };

  const handlePointerCancel = (e) => {
    setIsDragging(false);
    setIsTransitioning(true);
    carouselRef.current?.releasePointerCapture(e.pointerId);
    setDragDistance(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => {
          const newIndex = prev - 1;
          if (newIndex < visibleCards - 1) {
            setTimeout(() => {
              setIsTransitioning(false);
              setCurrentIndex(totalSlides + visibleCards - 1);
            }, 500);
            return newIndex;
          }
          return newIndex;
        });
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => {
          const newIndex = prev + 1;
          if (newIndex >= totalSlides + visibleCards) {
            setTimeout(() => {
              setIsTransitioning(false);
              setCurrentIndex(visibleCards);
            }, 500);
            return newIndex;
          }
          return newIndex;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalSlides, visibleCards]);

  return (
    <section 
      className="bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: `url(${bg4})`,
      }}
    >
      <div className="wide-container px-4 sm:px-6 lg:px-8 2xl:px-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-xl  font-bold text-[#08213f]">
            WHAT OUR{" "}
            <span className="text-[#7aac3b]">INVESTORS SAY</span>
          </h2>
        </div>

        <div className="relative">
          {/* Carousel Viewport */}
          <div
            ref={carouselRef}
            className="w-full max-w-none min-[700px]:max-w-[664px] min-[1100px]:max-w-[1008px] 2xl:max-w-[1204px] mx-auto overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
          >
            {/* Carousel Track */}
            <div
              ref={trackRef}
              className="flex gap-6 2xl:gap-8"
              style={{
                transform: `translate3d(${-(currentIndex * cardStep) + dragDistance}px, 0, 0)`,
                transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none',
              }}
            >
              {extendedTestimonials.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex-shrink-0 w-full min-[700px]:w-[320px] 2xl:w-[380px]"
                  data-card="true"
                >
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-5 2xl:p-6">
                    <FaQuoteLeft className="text-[#f4a300] text-[9px] mb-2" />

                    <p className="text-gray-800 text-[13px] leading-7 min-h-[80px] text-center">
                      {item.comment}
                    </p>

                    <div className="flex items-center justify-center gap-3 mt-5">
                      <FaUserCircle
                        className="w-11 h-11 text-[#7aac3b]"
                        aria-label={`${item.name} - HeyDay Realty Client Testimonial`}
                      />

                      <div>
                        <h4 className="font-bold text-[#08213f] text-sm">
                          {item.name}
                        </h4>

                        <p className="text-gray-500 text-xs">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
