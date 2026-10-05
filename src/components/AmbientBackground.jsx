import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const orbVariants = {
  float: {
    y: [0, -15, 0],
    x: [0, 10, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 18,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
  floatReverse: {
    y: [0, 15, 0],
    x: [0, -10, 0],
    scale: [1, 0.9, 1],
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
  floatSlow: {
    y: [0, -10, 0],
    x: [0, 8, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 15,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const colors = [
  "bg-[#6DAA2C]", // Green
  "bg-[#D18A1D]", // Saffron
  "bg-[#0F2747]", // Navy
  "bg-[#FFFFFF]", // White
];

const getOrbCount = () => {
  if (typeof window === "undefined") return 6;
  const width = window.innerWidth;
  if (width >= 1024) return 12; // Desktop
  if (width >= 768) return 8; // Tablet
  return 6; // Mobile
};

const generateOrbs = (count) => {
  const orbs = [];
  for (let i = 0; i < count; i++) {
    const color = colors[i % colors.length];
    const size = Math.floor(Math.random() * 300) + 200; // 200-500px
    const top = Math.floor(Math.random() * 100);
    const left = Math.floor(Math.random() * 100);
    const opacity = (Math.random() * 0.04 + 0.02).toFixed(3); // 2-6%
    const blur = Math.floor(Math.random() * 60) + 40; // 40-100px blur
    const variant = i % 3 === 0 ? "float" : i % 3 === 1 ? "floatReverse" : "floatSlow";
    const delay = i * 0.5;

    orbs.push({
      id: i,
      color,
      size,
      top,
      left,
      opacity,
      blur,
      variant,
      delay,
    });
  }
  return orbs;
};

export default function AmbientBackground() {
  const [orbs, setOrbs] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const count = getOrbCount();
    setOrbs(generateOrbs(count));

    const handleResize = () => {
      const newCount = getOrbCount();
      setOrbs(generateOrbs(newCount));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #6DAA2C 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Curved Decorative Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,300 Q400,100 800,300 T1600,300"
          stroke="#6DAA2C"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M0,500 Q500,700 1000,500 T2000,500"
          stroke="#D18A1D"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M0,700 Q600,400 1200,700 T2400,700"
          stroke="#0F2747"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Blurred Orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full ${orb.color}`}
          style={{
            width: orb.size,
            height: orb.size,
            top: `${orb.top}%`,
            left: `${orb.left}%`,
            opacity: orb.opacity,
            filter: `blur(${orb.blur}px)`,
          }}
          variants={orbVariants}
          animate={orb.variant}
          initial={{ opacity: 0 }}
          transition={{ delay: orb.delay, duration: 1 }}
        />
      ))}

      {/* Gradient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6DAA2C] rounded-full opacity-[0.02] blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D18A1D] rounded-full opacity-[0.02] blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#0F2747] rounded-full opacity-[0.02] blur-[90px]" />
    </div>
  );
}
