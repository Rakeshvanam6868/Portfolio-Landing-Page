import React from 'react';

const Button = ({ title, width, height, top, left, padding, gap, borderRadius, border, opacity, background, borderColor,textColor,textSize,weight }) => {
  const buttonStyles = {
    width: width,
    height: height,
    top: top,
    left: left,
    padding: padding,
    gap: gap,
    borderRadius: borderRadius,
    border: border,
    opacity: opacity,
    backgroundColor: background,
    borderColor: borderColor,
    color:textColor,
    fontWeight:weight,
    fontSize:textSize,
  };

  return (
    <div
      style={buttonStyles}
      className="absolute text-center  text-[21px] cursor-pointer"
    >
      {title}
    </div>
  );
};

export default Button;
