import React from "react";
import blueprint from "../assets/backgrounds/blueprint.svg";
import contour from "../assets/backgrounds/contour.svg";
import landscape from "../assets/backgrounds/landscape.svg";
import city from "../assets/backgrounds/city.svg";
import masterplan from "../assets/backgrounds/masterplan.svg";
import grid from "../assets/backgrounds/grid.svg";

const BackgroundPattern = ({ variants = [] }) => {
  const variantMap = {
    blueprint: blueprint,
    contour: contour,
    landscape: landscape,
    city: city,
    masterplan: masterplan,
    grid: grid,
  };

  return (
    <div className="fixed inset-0 pointer-events-none user-select-none -z-10" aria-hidden="true">
      {variants.map((variant, index) => {
        const svgSrc = variantMap[variant];
        if (!svgSrc) return null;

        return (
          <div
            key={variant}
            className="absolute inset-0 opacity-[0.04]"
            style={{ zIndex: index }}
          >
            <img
              src={svgSrc}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
};

export default BackgroundPattern;
