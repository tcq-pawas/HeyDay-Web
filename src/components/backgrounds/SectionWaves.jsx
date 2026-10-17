import React from "react";

/*
  Seamless section backgrounds.
  Ek hi lambi continuous drawing hai (Featured -> Why -> Investors -> FAQ).
  Har section us drawing ki ek slice dikhata hai, isliye section ke joints par waves exactly match karti hain.

  Use: section ke andar sabse pehle <SectionWaves index={n} />
    0 = Featured Projects, 1 = Why HeyDay Realty, 2 = Investors Say, 3 = FAQ
  Section par class "sec-bg" zaroori hai (src/assets/backgrounds/section-bg.css).
  Section ki height badle to H me us index ki value update karein.
*/

const W = 1600;
const H = [1260, 760, 520, 760];
const TAU = Math.PI * 2;

const RIBBONS = [
  { base: 620, drift: 700, amp: 110, f: 1.2, p1: 0.4, w0: 70, g: 1.0, p2: 0.8 },
  { base: 1120, drift: -60, amp: 80, f: 1.6, p1: 2.0, w0: 55, g: 1.3, p2: 0.2 },
  { base: 1520, drift: 80, amp: 70, f: 1.1, p1: 1.0, w0: 50, g: 0.8, p2: 1.5 },
  { base: 2130, drift: 520, amp: 70, f: 1.0, p1: 3.0, w0: 55, g: 1.1, p2: 0.3 },
  { base: 2420, drift: -40, amp: 40, f: 1.5, p1: 1.0, w0: 30, g: 1.4, p2: 0.5 },
  { base: 3000, drift: -220, amp: 120, f: 1.3, p1: 0.5, w0: 65, g: 0.9, p2: 2.2 },
];

const points = (r, t) => {
  const a = [];
  for (let i = 0; i <= 48; i++) {
    const u = i / 48;
    a.push([
      u * W,
      r.base +
        r.drift * u +
        r.amp * Math.sin(TAU * r.f * u + r.p1) +
        t * r.w0 * Math.sin(TAU * r.g * u + r.p2),
    ]);
  }
  return a;
};

const toPath = (a) =>
  a.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(0)} ${p[1].toFixed(1)}`).join("");

const buildRibbon = (r) => {
  const lines = [];
  for (let k = 0; k <= 28; k++) lines.push(toPath(points(r, -1 + k / 14)));
  const back = points(r, 1)
    .reverse()
    .map((p) => `L${p[0].toFixed(0)} ${p[1].toFixed(1)}`)
    .join("");
  return { lines, fill: `${toPath(points(r, -1))}${back}Z` };
};

const range = (r) => {
  let lo = Infinity;
  let hi = -Infinity;
  [-1, 1].forEach((t) =>
    points(r, t).forEach((p) => {
      lo = Math.min(lo, p[1]);
      hi = Math.max(hi, p[1]);
    })
  );
  return [lo, hi];
};

// Ek baar compute hota hai (module load par), render me dobara nahi.
const SLICES = (() => {
  let off = 0;
  return H.map((h) => {
    const start = off;
    off += h;
    const ribbons = RIBBONS.filter((r) => {
      const [lo, hi] = range(r);
      return hi > start && lo < start + h;
    }).map(buildRibbon);
    return { start, h, ribbons };
  });
})();

const SectionWaves = ({ index = 0 }) => {
  const s = SLICES[index];
  if (!s) return null;

  return (
    <div className="sec-waves" aria-hidden="true">
      <svg viewBox={`0 ${s.start} ${W} ${s.h}`} preserveAspectRatio="none">
        {s.ribbons.map((r, i) => (
          <g key={i}>
            <path className="sec-waves__fill" d={r.fill} />
            {r.lines.map((d, k) => (
              <path key={k} className="sec-waves__line" d={d} />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
};

export default SectionWaves;
