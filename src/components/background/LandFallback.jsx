import { memo } from "react";

/** Soft CSS/SVG atmosphere when WebGL is unavailable or motion is reduced. */
function LandFallback({ reducedMotion = false }) {
  return (
    <div className="land-atmosphere__fallback land-fallback" aria-hidden="true">
      <div className="land-fallback__glow land-fallback__glow--a" />
      <div className="land-fallback__glow land-fallback__glow--b" />
      <div className="land-fallback__glow land-fallback__glow--c" />
      <div className="land-fallback__glow land-fallback__glow--d" />

      <svg
        className="land-fallback__waves"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="land-fallback__wave land-fallback__wave--1"
          d="M-40 620 C 180 540, 360 700, 560 620 S 920 500, 1120 610 S 1380 720, 1520 640 L 1520 920 L -40 920 Z"
          fill="rgba(12, 36, 24, 0.4)"
        />
        <path
          className="land-fallback__wave land-fallback__wave--2"
          d="M-40 680 C 220 600, 420 760, 640 680 S 980 560, 1180 670 S 1400 760, 1520 700 L 1520 920 L -40 920 Z"
          fill="rgba(47, 61, 28, 0.32)"
        />
        <path
          className="land-fallback__wave land-fallback__wave--3"
          d="M-40 740 C 200 690, 400 800, 620 740 S 960 650, 1160 750 S 1380 820, 1520 760 L 1520 920 L -40 920 Z"
          fill="rgba(138, 115, 80, 0.2)"
        />
        {!reducedMotion && (
          <>
            <ellipse
              className="land-fallback__wave land-fallback__wave--1"
              cx="280"
              cy="220"
              rx="160"
              ry="90"
              fill="rgba(61, 107, 40, 0.18)"
            />
            <ellipse
              className="land-fallback__wave land-fallback__wave--2"
              cx="1080"
              cy="280"
              rx="190"
              ry="110"
              fill="rgba(143, 116, 56, 0.14)"
            />
            <ellipse
              className="land-fallback__wave land-fallback__wave--3"
              cx="720"
              cy="160"
              rx="120"
              ry="70"
              fill="rgba(13, 18, 24, 0.22)"
            />
          </>
        )}
      </svg>

      <span className="land-fallback__fog" />
      <span className="land-fallback__fog" />
      <span className="land-fallback__fog" />
      <span className="land-fallback__fog" />
      <span className="land-fallback__fog" />
      <span className="land-fallback__fog" />
      <span className="land-fallback__fog" />
      <span className="land-fallback__fog" />
    </div>
  );
}

export default memo(LandFallback);
