import React from "react";

export const SummaryInfo = ({ name, value, style, textStyle, valueStyle }) => {
  return (
    <div className={`w-full flex justify-between items-center ${style}`}>
      <p className={`${textStyle ? textStyle : "text-sm opacity-70"}`}>
        {name}
      </p>
      <p
        className={`${
          valueStyle
            ? valueStyle
            : "text-end text-sm font-semibold text-wrap h-auto"
        } `}
      >
        {value}
      </p>
    </div>
  );
};
