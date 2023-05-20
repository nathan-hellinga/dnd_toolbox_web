import React from "react";

export default function ItemModParser({ mod, ...props }) {
  let specialStyle = { color: "var(--color-secondary-light)" };

  let modText = mod.split(/{([^}]+)}/);
  return (
    <li>
      {modText.map((text, index) => {
        return (
          <span
            key={"modInline" + props.index + index}
            style={index % 2 !== 0 ? specialStyle : undefined}
          >
            {text}
          </span>
        );
      })}
    </li>
  );
}
